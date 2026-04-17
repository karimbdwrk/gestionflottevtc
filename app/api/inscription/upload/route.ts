import { NextRequest, NextResponse } from "next/server"
import { createClient } from "@supabase/supabase-js"

export async function POST(req: NextRequest) {
  const formData = await req.formData()
  const demandeId = formData.get("demandeId")
  const docId = formData.get("docId")
  const file = formData.get("file")

  if (
    typeof demandeId !== "string" ||
    typeof docId !== "string" ||
    !(file instanceof Blob)
  ) {
    return NextResponse.json({ error: "Paramètres invalides" }, { status: 400 })
  }

  // Extraire l'extension depuis le nom du fichier si disponible
  const fileName = file instanceof File ? file.name : "document"
  const ext = fileName.split(".").pop() ?? "bin"
  const path = `${demandeId}/${docId}.${ext}`

  const supabase = createClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.SUPABASE_SERVICE_ROLE_KEY!
  )

  const { error } = await supabase.storage
    .from("documents-inscription")
    .upload(path, file, { upsert: true, contentType: file.type })

  if (error) {
    console.error("[upload] Storage error:", error)
    return NextResponse.json({ error: error.message }, { status: 500 })
  }

  return NextResponse.json({ ok: true, path })
}
