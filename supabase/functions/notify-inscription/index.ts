import { serve } from "https://deno.land/std@0.177.0/http/server.ts"

const RESEND_API_KEY = Deno.env.get("RESEND_API_KEY")!
const NOTIFY_EMAIL = Deno.env.get("NOTIFY_EMAIL") ?? "kbdrivepro75@gmail.com"

interface InscriptionPayload {
  record: {
    id: string
    prenom: string
    nom: string
    email: string
    telephone: string
    experience: string | null
    forfait: string | null
    message: string | null
    plateformes: string[]
    statut: string
    created_at: string
  }
}

serve(async (req) => {
  console.log("notify-inscription appelé:", req.method)

  if (req.method !== "POST") {
    return new Response("Method Not Allowed", { status: 405 })
  }

  let payload: InscriptionPayload
  try {
    payload = await req.json()
    console.log("Payload reçu:", JSON.stringify(payload))
  } catch (e) {
    console.error("Erreur parsing JSON:", e)
    return new Response("Invalid JSON", { status: 400 })
  }

  const { record } = payload
  if (!record?.email) {
    console.error("Champ record.email manquant")
    return new Response("Missing record", { status: 400 })
  }

  const experienceLabels: Record<string, string> = {
    debutant: "Débutant (moins de 6 mois)",
    "1an": "1 an",
    "2-3ans": "2 à 3 ans",
    plus3ans: "Plus de 3 ans",
  }

  const forfaitLabels: Record<string, string> = {
    essentiel: "Essentiel — 50 €/semaine",
    commission: "Commission — À partir de 70 €/semaine",
    mesure: "Sur mesure — Sur devis",
  }

  const plateformesLabel = record.plateformes?.length
    ? record.plateformes.map((p) => p.charAt(0).toUpperCase() + p.slice(1)).join(", ")
    : "—"

  const experienceLabel = record.experience
    ? (experienceLabels[record.experience] ?? record.experience)
    : "—"

  const forfaitLabel = record.forfait
    ? (forfaitLabels[record.forfait] ?? record.forfait)
    : "—"

  const date = new Date(record.created_at).toLocaleString("fr-FR", {
    day: "2-digit", month: "long", year: "numeric",
    hour: "2-digit", minute: "2-digit",
  })

  // ── EMAIL ADMIN ──────────────────────────────────────────────
  const adminHtml = `<!DOCTYPE html>
<html lang="fr">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Nouvelle inscription — DRIVE PRO</title>
</head>
<body style="margin:0;padding:0;background-color:#f4f4f5;font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif;">
  <table width="100%" cellpadding="0" cellspacing="0" style="background:#f4f4f5;padding:40px 16px;">
    <tr>
      <td align="center">
        <table width="600" cellpadding="0" cellspacing="0" style="max-width:600px;width:100%;">

          <tr>
            <td style="background:#111111;border-radius:12px 12px 0 0;padding:32px 40px;text-align:center;">
              <p style="margin:0;font-size:11px;font-weight:600;letter-spacing:3px;text-transform:uppercase;color:#a1a1aa;">Nouvelle demande</p>
              <h1 style="margin:8px 0 0;font-size:24px;font-weight:700;color:#ffffff;letter-spacing:-0.5px;">DRIVE PRO</h1>
            </td>
          </tr>

          <tr>
            <td style="background:#ffffff;padding:40px;">
              <h2 style="margin:0 0 6px;font-size:20px;font-weight:600;color:#111111;">Demande d'inscription chauffeur</h2>
              <p style="margin:0 0 32px;font-size:14px;color:#71717a;">Reçue le ${date}</p>

              <table width="100%" cellpadding="0" cellspacing="0" style="border:1px solid #e4e4e7;border-radius:10px;overflow:hidden;margin-bottom:28px;">
                <tr>
                  <td style="padding:14px 20px;border-bottom:1px solid #f4f4f5;width:130px;font-size:12px;font-weight:600;color:#71717a;text-transform:uppercase;letter-spacing:0.5px;vertical-align:top;">Nom</td>
                  <td style="padding:14px 20px;border-bottom:1px solid #f4f4f5;font-size:14px;color:#111111;font-weight:500;">${record.prenom} ${record.nom}</td>
                </tr>
                <tr style="background:#fafafa;">
                  <td style="padding:14px 20px;border-bottom:1px solid #f4f4f5;font-size:12px;font-weight:600;color:#71717a;text-transform:uppercase;letter-spacing:0.5px;vertical-align:top;">Email</td>
                  <td style="padding:14px 20px;border-bottom:1px solid #f4f4f5;font-size:14px;">
                    <a href="mailto:${record.email}" style="color:#111111;text-decoration:underline;font-weight:500;">${record.email}</a>
                  </td>
                </tr>
                <tr>
                  <td style="padding:14px 20px;border-bottom:1px solid #f4f4f5;font-size:12px;font-weight:600;color:#71717a;text-transform:uppercase;letter-spacing:0.5px;vertical-align:top;">Téléphone</td>
                  <td style="padding:14px 20px;border-bottom:1px solid #f4f4f5;font-size:14px;color:#111111;font-weight:500;">${record.telephone}</td>
                </tr>
                <tr style="background:#fafafa;">
                  <td style="padding:14px 20px;border-bottom:1px solid #f4f4f5;font-size:12px;font-weight:600;color:#71717a;text-transform:uppercase;letter-spacing:0.5px;vertical-align:top;">Plateformes</td>
                  <td style="padding:14px 20px;border-bottom:1px solid #f4f4f5;font-size:14px;color:#111111;font-weight:500;">${plateformesLabel}</td>
                </tr>
                <tr>
                  <td style="padding:14px 20px;border-bottom:1px solid #f4f4f5;font-size:12px;font-weight:600;color:#71717a;text-transform:uppercase;letter-spacing:0.5px;vertical-align:top;">Expérience</td>
                  <td style="padding:14px 20px;border-bottom:1px solid #f4f4f5;font-size:14px;color:#111111;font-weight:500;">${experienceLabel}</td>
                </tr>
                <tr style="background:#fafafa;">
                  <td style="padding:14px 20px;font-size:12px;font-weight:600;color:#71717a;text-transform:uppercase;letter-spacing:0.5px;vertical-align:top;">Forfait</td>
                  <td style="padding:14px 20px;font-size:14px;color:#111111;font-weight:500;">${forfaitLabel}</td>
                </tr>
              </table>

              ${record.message ? `
              <div style="margin-bottom:32px;">
                <p style="margin:0 0 10px;font-size:12px;font-weight:600;color:#71717a;text-transform:uppercase;letter-spacing:0.5px;">Message</p>
                <div style="background:#fafafa;border:1px solid #e4e4e7;border-radius:10px;padding:20px;font-size:14px;line-height:1.7;color:#3f3f46;white-space:pre-wrap;">${record.message}</div>
              </div>` : ""}

              <div style="background:#f4f4f5;border:1px solid #e4e4e7;border-radius:10px;padding:16px 20px;margin-bottom:28px;">
                <p style="margin:0;font-size:12px;color:#71717a;">Les documents sont disponibles dans Supabase Storage sous le chemin <strong style="color:#111111;font-family:monospace;">${record.id}/</strong></p>
              </div>

              <table width="100%" cellpadding="0" cellspacing="0">
                <tr>
                  <td align="center">
                    <a href="mailto:${record.email}?subject=Re: Votre demande d'inscription DRIVE PRO" style="display:inline-block;background:#111111;color:#ffffff;font-size:14px;font-weight:600;padding:12px 28px;border-radius:8px;text-decoration:none;letter-spacing:0.2px;">
                      Répondre à ${record.prenom}
                    </a>
                  </td>
                </tr>
              </table>
            </td>
          </tr>

          <tr>
            <td style="background:#f4f4f5;border-radius:0 0 12px 12px;padding:24px 40px;text-align:center;border-top:1px solid #e4e4e7;">
              <p style="margin:0;font-size:12px;color:#a1a1aa;">Cet email a été généré automatiquement par DRIVE PRO.</p>
            </td>
          </tr>

        </table>
      </td>
    </tr>
  </table>
</body>
</html>`

  // ── EMAIL CONFIRMATION CHAUFFEUR ─────────────────────────────
  const confirmHtml = `<!DOCTYPE html>
<html lang="fr">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Votre demande a bien été reçue — DRIVE PRO</title>
</head>
<body style="margin:0;padding:0;background-color:#f4f4f5;font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif;">
  <table width="100%" cellpadding="0" cellspacing="0" style="background:#f4f4f5;padding:40px 16px;">
    <tr>
      <td align="center">
        <table width="600" cellpadding="0" cellspacing="0" style="max-width:600px;width:100%;">

          <tr>
            <td style="background:#111111;border-radius:12px 12px 0 0;padding:32px 40px;text-align:center;">
              <p style="margin:0;font-size:11px;font-weight:600;letter-spacing:3px;text-transform:uppercase;color:#a1a1aa;">Confirmation</p>
              <h1 style="margin:8px 0 0;font-size:24px;font-weight:700;color:#ffffff;letter-spacing:-0.5px;">DRIVE PRO</h1>
            </td>
          </tr>

          <tr>
            <td style="background:#ffffff;padding:40px;">
              <h2 style="margin:0 0 12px;font-size:20px;font-weight:600;color:#111111;">Votre dossier a bien été reçu ✓</h2>
              <p style="margin:0 0 24px;font-size:14px;line-height:1.7;color:#71717a;">
                Bonjour <strong style="color:#111111;">${record.prenom}</strong>,<br/>
                Nous avons bien reçu votre demande d'inscription. Notre équipe examine votre dossier et vous contactera sous <strong style="color:#111111;">24 à 48h</strong> pour confirmer votre accès à la plateforme.
              </p>

              <table width="100%" cellpadding="0" cellspacing="0" style="border:1px solid #e4e4e7;border-radius:10px;overflow:hidden;margin-bottom:32px;">
                <tr>
                  <td style="padding:14px 20px;border-bottom:1px solid #f4f4f5;width:130px;font-size:12px;font-weight:600;color:#71717a;text-transform:uppercase;letter-spacing:0.5px;">Plateformes</td>
                  <td style="padding:14px 20px;border-bottom:1px solid #f4f4f5;font-size:14px;color:#111111;font-weight:500;">${plateformesLabel}</td>
                </tr>
                <tr style="background:#fafafa;">
                  <td style="padding:14px 20px;border-bottom:1px solid #f4f4f5;font-size:12px;font-weight:600;color:#71717a;text-transform:uppercase;letter-spacing:0.5px;">Forfait</td>
                  <td style="padding:14px 20px;border-bottom:1px solid #f4f4f5;font-size:14px;color:#111111;font-weight:500;">${forfaitLabel}</td>
                </tr>
                <tr>
                  <td style="padding:14px 20px;font-size:12px;font-weight:600;color:#71717a;text-transform:uppercase;letter-spacing:0.5px;">Référence</td>
                  <td style="padding:14px 20px;font-size:12px;color:#71717a;font-family:monospace;">${record.id}</td>
                </tr>
              </table>

              <p style="margin:0;font-size:14px;line-height:1.7;color:#71717a;">
                En cas de question, répondez directement à cet email.<br/>
                À très bientôt,<br/><strong style="color:#111111;">L'équipe DRIVE PRO</strong>
              </p>
            </td>
          </tr>

          <tr>
            <td style="background:#f4f4f5;border-radius:0 0 12px 12px;padding:24px 40px;text-align:center;border-top:1px solid #e4e4e7;">
              <p style="margin:0;font-size:12px;color:#a1a1aa;">Cet email est un accusé de réception automatique.</p>
            </td>
          </tr>

        </table>
      </td>
    </tr>
  </table>
</body>
</html>`

  // ── ENVOI ADMIN ──────────────────────────────────────────────
  const adminRes = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${RESEND_API_KEY}`,
    },
    body: JSON.stringify({
      from: "DRIVE PRO <no-reply@gestionflottevtc.fr>",
      to: [NOTIFY_EMAIL],
      reply_to: record.email,
      subject: `[Inscription] ${record.prenom} ${record.nom} — ${plateformesLabel}`,
      html: adminHtml,
    }),
  })

  if (!adminRes.ok) {
    const err = await adminRes.text()
    console.error("Resend admin error:", err)
    return new Response("Email send failed", { status: 500 })
  }

  // ── ENVOI CHAUFFEUR ──────────────────────────────────────────
  await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${RESEND_API_KEY}`,
    },
    body: JSON.stringify({
      from: "DRIVE PRO <no-reply@gestionflottevtc.fr>",
      to: [record.email],
      reply_to: NOTIFY_EMAIL,
      subject: "Votre demande d'inscription a bien été reçue — DRIVE PRO",
      html: confirmHtml,
    }),
  })

  return new Response(JSON.stringify({ ok: true }), {
    headers: { "Content-Type": "application/json" },
  })
})
