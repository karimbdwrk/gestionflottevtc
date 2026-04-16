import { serve } from "https://deno.land/std@0.177.0/http/server.ts"

const RESEND_API_KEY = Deno.env.get("RESEND_API_KEY")!
const NOTIFY_EMAIL = Deno.env.get("NOTIFY_EMAIL") ?? "kbdrivepro75@gmail.com"

interface ContactPayload {
  record: {
    id: string
    name: string
    email: string
    phone: string | null
    subject: string | null
    message: string | null
    created_at: string
  }
}

serve(async (req) => {
  console.log("notify-contact appelé:", req.method)

  if (req.method !== "POST") {
    return new Response("Method Not Allowed", { status: 405 })
  }

  let payload: ContactPayload
  try {
    payload = await req.json()
    console.log("Payload reçu:", JSON.stringify(payload))
  } catch (e) {
    console.error("Erreur parsing JSON:", e)
    return new Response("Invalid JSON", { status: 400 })
  }

  const { record } = payload
  if (!record?.email) {
    console.error("Champ record.email manquant dans le payload")
    return new Response("Missing record", { status: 400 })
  }

  const subjectLabels: Record<string, string> = {
    inscription: "Inscription chauffeur",
    forfait: "Renseignement forfait",
    partenariat: "Partenariat",
    support: "Support technique",
    autre: "Autre",
  }

  const subjectLabel = record.subject ? (subjectLabels[record.subject] ?? record.subject) : "—"

  const date = new Date(record.created_at).toLocaleString("fr-FR", {
    day: "2-digit", month: "long", year: "numeric",
    hour: "2-digit", minute: "2-digit",
  })

  const html = `<!DOCTYPE html>
<html lang="fr">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Nouveau contact — DRIVE PRO</title>
</head>
<body style="margin:0;padding:0;background-color:#f4f4f5;font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif;">
  <table width="100%" cellpadding="0" cellspacing="0" style="background:#f4f4f5;padding:40px 16px;">
    <tr>
      <td align="center">
        <table width="600" cellpadding="0" cellspacing="0" style="max-width:600px;width:100%;">

          <!-- HEADER -->
          <tr>
            <td style="background:#111111;border-radius:12px 12px 0 0;padding:32px 40px;text-align:center;">
              <p style="margin:0;font-size:11px;font-weight:600;letter-spacing:3px;text-transform:uppercase;color:#a1a1aa;">Notification</p>
              <h1 style="margin:8px 0 0;font-size:24px;font-weight:700;color:#ffffff;letter-spacing:-0.5px;">DRIVE PRO</h1>
            </td>
          </tr>

          <!-- BODY -->
          <tr>
            <td style="background:#ffffff;padding:40px;">

              <!-- TITLE -->
              <h2 style="margin:0 0 6px;font-size:20px;font-weight:600;color:#111111;">Nouveau message de contact</h2>
              <p style="margin:0 0 32px;font-size:14px;color:#71717a;">Reçu le ${date}</p>

              <!-- BADGE SUJET -->
              <div style="margin-bottom:28px;">
                <span style="display:inline-block;background:#f4f4f5;border:1px solid #e4e4e7;border-radius:999px;padding:4px 14px;font-size:12px;font-weight:600;color:#3f3f46;letter-spacing:0.5px;text-transform:uppercase;">${subjectLabel}</span>
              </div>

              <!-- INFOS -->
              <table width="100%" cellpadding="0" cellspacing="0" style="border:1px solid #e4e4e7;border-radius:10px;overflow:hidden;margin-bottom:28px;">
                <tr>
                  <td style="padding:14px 20px;border-bottom:1px solid #f4f4f5;width:110px;font-size:12px;font-weight:600;color:#71717a;text-transform:uppercase;letter-spacing:0.5px;vertical-align:top;">Nom</td>
                  <td style="padding:14px 20px;border-bottom:1px solid #f4f4f5;font-size:14px;color:#111111;font-weight:500;">${record.name}</td>
                </tr>
                <tr style="background:#fafafa;">
                  <td style="padding:14px 20px;border-bottom:1px solid #f4f4f5;font-size:12px;font-weight:600;color:#71717a;text-transform:uppercase;letter-spacing:0.5px;vertical-align:top;">Email</td>
                  <td style="padding:14px 20px;border-bottom:1px solid #f4f4f5;font-size:14px;">
                    <a href="mailto:${record.email}" style="color:#111111;text-decoration:underline;font-weight:500;">${record.email}</a>
                  </td>
                </tr>
                <tr>
                  <td style="padding:14px 20px;font-size:12px;font-weight:600;color:#71717a;text-transform:uppercase;letter-spacing:0.5px;vertical-align:top;">Téléphone</td>
                  <td style="padding:14px 20px;font-size:14px;color:#111111;font-weight:500;">${record.phone ?? "—"}</td>
                </tr>
              </table>

              <!-- MESSAGE -->
              ${record.message ? `
              <div style="margin-bottom:32px;">
                <p style="margin:0 0 10px;font-size:12px;font-weight:600;color:#71717a;text-transform:uppercase;letter-spacing:0.5px;">Message</p>
                <div style="background:#fafafa;border:1px solid #e4e4e7;border-radius:10px;padding:20px;font-size:14px;line-height:1.7;color:#3f3f46;white-space:pre-wrap;">${record.message}</div>
              </div>` : ""}

              <!-- CTA -->
              <table width="100%" cellpadding="0" cellspacing="0">
                <tr>
                  <td align="center">
                    <a href="mailto:${record.email}?subject=Re: ${subjectLabel}" style="display:inline-block;background:#111111;color:#ffffff;font-size:14px;font-weight:600;padding:12px 28px;border-radius:8px;text-decoration:none;letter-spacing:0.2px;">
                      Répondre à ${record.name}
                    </a>
                  </td>
                </tr>
              </table>

            </td>
          </tr>

          <!-- FOOTER -->
          <tr>
            <td style="background:#f4f4f5;border-radius:0 0 12px 12px;padding:24px 40px;text-align:center;border-top:1px solid #e4e4e7;">
              <p style="margin:0;font-size:12px;color:#a1a1aa;">Cet email a été généré automatiquement par DRIVE PRO.</p>
              <p style="margin:6px 0 0;font-size:12px;color:#a1a1aa;">Ne pas répondre directement à cet email.</p>
            </td>
          </tr>

        </table>
      </td>
    </tr>
  </table>
</body>
</html>`

  const res = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${RESEND_API_KEY}`,
    },
    body: JSON.stringify({
      from: "DRIVE PRO <no-reply@gestionflottevtc.fr>",
      to: [NOTIFY_EMAIL],
      reply_to: record.email,
      subject: `[Contact] ${subjectLabel} — ${record.name}`,
      html,
    }),
  })

  if (!res.ok) {
    const err = await res.text()
    console.error("Resend error:", err)
    return new Response("Email send failed", { status: 500 })
  }

  // Accusé de réception au contact
  const confirmHtml = `<!DOCTYPE html>
<html lang="fr">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Votre message a bien été reçu — DRIVE PRO</title>
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
              <h2 style="margin:0 0 12px;font-size:20px;font-weight:600;color:#111111;">Votre message a bien été reçu ✓</h2>
              <p style="margin:0 0 24px;font-size:14px;line-height:1.7;color:#71717a;">Bonjour <strong style="color:#111111;">${record.name}</strong>,<br/>Nous avons bien reçu votre message et nous vous répondrons dans les plus brefs délais.</p>
              <table width="100%" cellpadding="0" cellspacing="0" style="border:1px solid #e4e4e7;border-radius:10px;overflow:hidden;margin-bottom:32px;">
                <tr>
                  <td style="padding:14px 20px;border-bottom:1px solid #f4f4f5;width:110px;font-size:12px;font-weight:600;color:#71717a;text-transform:uppercase;letter-spacing:0.5px;">Sujet</td>
                  <td style="padding:14px 20px;border-bottom:1px solid #f4f4f5;font-size:14px;color:#111111;font-weight:500;">${subjectLabel}</td>
                </tr>
                <tr style="background:#fafafa;">
                  <td style="padding:14px 20px;font-size:12px;font-weight:600;color:#71717a;text-transform:uppercase;letter-spacing:0.5px;">Date</td>
                  <td style="padding:14px 20px;font-size:14px;color:#111111;font-weight:500;">${date}</td>
                </tr>
              </table>
              <p style="margin:0;font-size:14px;line-height:1.7;color:#71717a;">À très bientôt,<br/><strong style="color:#111111;">L'équipe DRIVE PRO</strong></p>
            </td>
          </tr>
          <tr>
            <td style="background:#f4f4f5;border-radius:0 0 12px 12px;padding:24px 40px;text-align:center;border-top:1px solid #e4e4e7;">
              <p style="margin:0;font-size:12px;color:#a1a1aa;">Cet email est un accusé de réception automatique. Ne pas y répondre.</p>
            </td>
          </tr>
        </table>
      </td>
    </tr>
  </table>
</body>
</html>`

  await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${RESEND_API_KEY}`,
    },
    body: JSON.stringify({
      from: "DRIVE PRO <no-reply@gestionflottevtc.fr>",
      to: [record.email],
      subject: "Votre message a bien été reçu — DRIVE PRO",
      html: confirmHtml,
    }),
  })

  return new Response(JSON.stringify({ ok: true }), {
    headers: { "Content-Type": "application/json" },
  })
})
