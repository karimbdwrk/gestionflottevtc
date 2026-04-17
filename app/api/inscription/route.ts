import { NextRequest, NextResponse } from "next/server"
import { createClient } from "@supabase/supabase-js"

// Rate limiting en mémoire (reset au redémarrage du serveur)
// Pour la prod, utiliser Redis/Upstash si besoin de persistance cross-instance
const rateLimitMap = new Map<string, { count: number; resetAt: number }>()

const RATE_LIMIT_MAX = 3       // max 3 soumissions
const RATE_LIMIT_WINDOW = 60 * 60 * 1000 // par heure (en ms)
const MIN_FORM_TIME_MS = 3000  // min 3 secondes pour remplir le formulaire

function getClientIp(req: NextRequest): string {
  return (
    req.headers.get("x-forwarded-for")?.split(",")[0].trim() ??
    req.headers.get("x-real-ip") ??
    "unknown"
  )
}

function isRateLimited(key: string): boolean {
  const now = Date.now()
  const entry = rateLimitMap.get(key)

  if (!entry || now > entry.resetAt) {
    rateLimitMap.set(key, { count: 1, resetAt: now + RATE_LIMIT_WINDOW })
    return false
  }

  if (entry.count >= RATE_LIMIT_MAX) return true

  entry.count++
  return false
}

export async function POST(req: NextRequest) {
  let body: Record<string, unknown>
  try {
    body = await req.json()
  } catch {
    return NextResponse.json({ error: "Invalid JSON" }, { status: 400 })
  }

  // ── COUCHE 1 : Honeypot ────────────────────────────────────
  // Si le champ caché est rempli, c'est un bot → répondre 200 (ne pas alerter le bot)
  if (body._trap && String(body._trap).length > 0) {
    console.warn("[antispam] Honeypot déclenché")
    return NextResponse.json({ ok: true }) // faux succès
  }

  // ── COUCHE 2 : Time check ──────────────────────────────────
  const loadedAt = Number(body._loadedAt)
  if (!loadedAt || Date.now() - loadedAt < MIN_FORM_TIME_MS) {
    console.warn("[antispam] Soumission trop rapide")
    return NextResponse.json({ ok: true }) // faux succès
  }

  // ── COUCHE 3 : Rate limiting (IP + email) ─────────────────
  const ip = getClientIp(req)
  const email = typeof body.email === "string" ? body.email.toLowerCase().trim() : ""

  if (isRateLimited(`ip:${ip}`) || (email && isRateLimited(`email:${email}`))) {
    console.warn("[antispam] Rate limit atteint pour", ip, email)
    return NextResponse.json(
      { error: "Trop de soumissions. Réessayez dans une heure." },
      { status: 429 }
    )
  }

  // ── VALIDATION basique ────────────────────────────────────
  const { prenom, nom, telephone, experience, forfait, message, plateformes } = body

  if (
    typeof prenom !== "string" || prenom.trim().length < 2 ||
    typeof nom !== "string" || nom.trim().length < 2 ||
    typeof email !== "string" || !/^[a-zA-Z0-9._%+\-]+@[a-zA-Z0-9.\-]+\.[a-zA-Z]{2,}$/.test(email) ||
    typeof telephone !== "string" || telephone.replace(/[^\d]/g, "").length < 10 ||
    !Array.isArray(plateformes) || plateformes.length === 0
  ) {
    return NextResponse.json({ error: "Données invalides" }, { status: 422 })
  }

  // ── INSERT SUPABASE ───────────────────────────────────────
  const supabase = createClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.SUPABASE_SERVICE_ROLE_KEY!
  )

  const { data: demande, error: insertError } = await supabase
    .from("demandes_inscription")
    .insert({
      prenom: String(prenom).trim(),
      nom: String(nom).trim(),
      email,
      telephone: String(telephone).trim(),
      experience: typeof experience === "string" && experience ? experience : null,
      forfait: typeof forfait === "string" && forfait ? forfait : null,
      message: typeof message === "string" && message.trim() ? message.trim() : null,
      plateformes,
      statut: "en_attente",
    })
    .select("id")
    .single()

  if (insertError || !demande) {
    console.error("[inscription] Insert error:", insertError)
    return NextResponse.json(
      { error: "Une erreur est survenue. Veuillez réessayer." },
      { status: 500 }
    )
  }

  return NextResponse.json({ ok: true, id: demande.id })
}
