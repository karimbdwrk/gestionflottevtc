"use client"

import { useState, useRef } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Checkbox } from "@/components/ui/checkbox"
import { Upload, CheckCircle2, FileText, AlertCircle } from "lucide-react"
import { cn } from "@/lib/utils"

const PLATFORMS = [
  { id: "uber", label: "Uber" },
  { id: "bolt", label: "Bolt" },
  { id: "heetch", label: "Heetch" },
]

const DOCUMENTS = [
  { id: "carte_grise", label: "Carte grise du véhicule", description: "Document d'immatriculation", required: true },
  { id: "memo_assurance", label: "Mémo d'assurance du véhicule", description: "Document récapitulatif d'assurance", required: true },
  { id: "carte_vtc_recto", label: "Carte VTC — recto", description: "Carte professionnelle VTC recto", required: true },
  { id: "carte_vtc_verso", label: "Carte VTC — verso", description: "Carte professionnelle VTC verso", required: true },
  { id: "rc_pro", label: "Assurance RC Pro", description: "Responsabilité civile professionnelle", required: true },
]

type FileMap = Record<string, File | null>
type PlatformMap = Record<string, boolean>

function FileUploadZone({
  docId,
  label,
  description,
  required,
  file,
  onChange,
}: {
  docId: string
  label: string
  description: string
  required: boolean
  file: File | null
  onChange: (id: string, file: File | null) => void
}) {
  const inputRef = useRef<HTMLInputElement>(null)

  return (
    <div
      className={cn(
        "relative border rounded-xl p-4 cursor-pointer transition-colors group",
        file
          ? "border-foreground/30 bg-muted/40"
          : "border-dashed border-border hover:border-foreground/30 hover:bg-muted/20"
      )}
      onClick={() => inputRef.current?.click()}
    >
      <input
        ref={inputRef}
        type="file"
        className="hidden"
        accept=".pdf,.jpg,.jpeg,.png"
        onChange={(e) => onChange(docId, e.target.files?.[0] ?? null)}
      />
      <div className="flex items-start gap-3">
        <div className={cn(
          "flex h-10 w-10 shrink-0 items-center justify-center rounded-lg",
          file ? "bg-foreground text-background" : "bg-muted"
        )}>
          {file ? <CheckCircle2 className="h-5 w-5" /> : <Upload className="h-5 w-5 text-muted-foreground" />}
        </div>
        <div className="min-w-0 flex-1">
          <div className="flex items-center gap-1.5">
            <span className="text-sm font-medium text-foreground">{label}</span>
            {required && <span className="text-xs text-muted-foreground">*</span>}
          </div>
          <p className="text-xs text-muted-foreground mt-0.5 truncate">
            {file ? file.name : description}
          </p>
        </div>
        {file && (
          <button
            type="button"
            className="text-xs text-muted-foreground hover:text-foreground transition-colors shrink-0"
            onClick={(e) => {
              e.stopPropagation()
              onChange(docId, null)
              if (inputRef.current) inputRef.current.value = ""
            }}
          >
            Retirer
          </button>
        )}
      </div>
    </div>
  )
}

export function InscriptionForm() {
  const [submitted, setSubmitted] = useState(false)
  const [submitting, setSubmitting] = useState(false)
  const [submitError, setSubmitError] = useState("")
  const [touched, setTouched] = useState<Record<string, boolean>>({})
  const touch = (field: string) => setTouched((prev) => ({ ...prev, [field]: true }))
  const [platforms, setPlatforms] = useState<PlatformMap>({ uber: false, bolt: false, heetch: false })
  const [files, setFiles] = useState<FileMap>(
    Object.fromEntries(DOCUMENTS.map((d) => [d.id, null]))
  )
  const [formData, setFormData] = useState({
    prenom: "",
    nom: "",
    email: "",
    telephone: "",
    experience: "",
    forfait: "",
    message: "",
  })
  // Antispam : timestamp de chargement du formulaire
  const loadedAt = useRef<number>(Date.now())

  const [cguAccepted, setCguAccepted] = useState(false)

  const missingRequired = DOCUMENTS.filter((d) => d.required && !files[d.id])
  const noPlatform = !Object.values(platforms).some(Boolean)

  function capitalizeSentences(text: string) {
    return text.replace(/(^|[.!?]\s+)([a-z\u00e0-\u00ff])/g, (_, sep, char) => sep + char.toUpperCase())
  }

  function sanitizeName(text: string) {
    const filtered = text.replace(/[^a-zA-Z\u00C0-\u024F\s-]/g, "")
    return filtered
      .split(" ")
      .map((word) =>
        word
          .split("-")
          .map((part) => (part ? part.charAt(0).toUpperCase() + part.slice(1) : ""))
          .join("-")
      )
      .join(" ")
  }

  function isEmailValid(email: string) {
    return /^[a-zA-Z0-9._%+\-]+@[a-zA-Z0-9.\-]+\.[a-zA-Z]{2,}$/.test(email)
  }

  function formatPhone(raw: string) {
    let digits = raw.replace(/[^\d]/g, "")
    if (digits.startsWith("0") && digits.length > 1) {
      digits = "33" + digits.slice(1)
    }
    digits = digits.slice(0, 11)
    if (!digits) return ""
    const parts = []
    let rest = digits
    if (rest.startsWith("33")) {
      parts.push("+33")
      rest = rest.slice(2)
    }
    if (rest.length > 0) parts.push(rest.slice(0, 1))
    if (rest.length > 1) parts.push(rest.slice(1, 3))
    if (rest.length > 3) parts.push(rest.slice(3, 5))
    if (rest.length > 5) parts.push(rest.slice(5, 7))
    if (rest.length > 7) parts.push(rest.slice(7, 9))
    return parts.join(" ")
  }

  function isPhoneValid(phone: string) {
    return phone.replace(/[^\d]/g, "").length === 11
  }

  const handleFile = (id: string, file: File | null) => {
    setFiles((prev) => ({ ...prev, [id]: file }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (missingRequired.length > 0 || noPlatform) return
    setSubmitting(true)
    setSubmitError("")

    // 1. Envoyer les données via la route API (antispam côté serveur)
    const res = await fetch("/api/inscription", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        prenom: formData.prenom,
        nom: formData.nom,
        email: formData.email,
        telephone: formData.telephone,
        experience: formData.experience || null,
        forfait: formData.forfait || null,
        message: formData.message || null,
        plateformes: Object.keys(platforms).filter((k) => platforms[k]),
        // Antispam
        _loadedAt: loadedAt.current,
        _trap: "",
      }),
    })

    if (!res.ok) {
      const data = await res.json().catch(() => ({}))
      setSubmitError(data.error ?? "Une erreur est survenue. Veuillez réessayer.")
      setSubmitting(false)
      return
    }

    const { id: demandeId } = await res.json()

    // 2. Uploader les documents via la route API (service role, bypass RLS)
    const uploadErrors: string[] = []
    for (const doc of DOCUMENTS) {
      const file = files[doc.id]
      if (!file) continue
      const fd = new FormData()
      fd.append("demandeId", demandeId)
      fd.append("docId", doc.id)
      fd.append("file", file)
      const upRes = await fetch("/api/inscription/upload", { method: "POST", body: fd })
      if (!upRes.ok) uploadErrors.push(doc.label)
    }

    if (uploadErrors.length > 0) {
      setSubmitError(`Demande enregistrée mais erreur sur : ${uploadErrors.join(", ")}. Contactez-nous.`)
      setSubmitting(false)
      return
    }

    setSubmitting(false)
    setSubmitted(true)
    window.scrollTo({ top: 0, behavior: "smooth" })
  }

  if (submitted) {
    return (
      <div className="flex flex-col items-center justify-center py-24 text-center px-4">
        <div className="flex h-16 w-16 items-center justify-center rounded-full bg-foreground mb-6">
          <CheckCircle2 className="h-8 w-8 text-background" />
        </div>
        <h2 className="text-2xl font-semibold text-foreground">Demande envoyée !</h2>
        <p className="mt-3 text-muted-foreground max-w-md">
          Votre dossier a bien été reçu. Notre équipe l'examine et vous contacte sous 24–48h pour confirmer votre accès à la plateforme.
        </p>
        <Button className="mt-8" onClick={() => (window.location.href = "/")}>
          Retour à l'accueil
        </Button>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-10">
      {/* Honeypot — caché visuellement, ne doit pas être rempli */}
      <div aria-hidden="true" style={{ position: "absolute", left: "-9999px", opacity: 0, pointerEvents: "none" }}>
        <label htmlFor="_trap">Ne pas remplir</label>
        <input id="_trap" name="_trap" type="text" tabIndex={-1} autoComplete="off" />
      </div>

      {/* Informations personnelles */}
      <section className="bg-card border border-border rounded-2xl p-6 md:p-8 space-y-6">
        <div>
          <h2 className="text-lg font-semibold text-foreground">Informations personnelles</h2>
          <p className="text-sm text-muted-foreground mt-1">Vos coordonnées pour vous identifier et vous recontacter.</p>
        </div>

        <div className="grid sm:grid-cols-2 gap-4">
          <div className="space-y-2">
            <Label htmlFor="prenom">Prénom <span className="text-muted-foreground">*</span></Label>
            <Input
              id="prenom"
              placeholder="Jean"
              required
              value={formData.prenom}
              onChange={(e) => setFormData((p) => ({ ...p, prenom: sanitizeName(e.target.value) }))}
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="nom">Nom <span className="text-muted-foreground">*</span></Label>
            <Input
              id="nom"
              placeholder="Dupont"
              required
              value={formData.nom}
              onChange={(e) => setFormData((p) => ({ ...p, nom: sanitizeName(e.target.value) }))}
            />
          </div>
        </div>

        <div className="grid sm:grid-cols-2 gap-4">
          <div className="space-y-2">
            <Label htmlFor="email">Email <span className="text-muted-foreground">*</span></Label>
            <Input
              id="email"
              type="text"
              inputMode="email"
              autoComplete="email"
              placeholder="jean.dupont@exemple.fr"
              value={formData.email}
              onChange={(e) => setFormData((p) => ({ ...p, email: e.target.value.toLowerCase().replace(/[^a-z0-9._%+\-@]/g, "") }))}
              onBlur={() => touch("email")}
            />
            {touched.email && !isEmailValid(formData.email) && (
              <p className="text-xs text-destructive">Adresse email invalide</p>
            )}
          </div>
          <div className="space-y-2">
            <Label htmlFor="telephone">Téléphone <span className="text-muted-foreground">*</span></Label>
            <Input
              id="telephone"
              type="tel"
              placeholder="+33 6 12 34 56 78"
              value={formData.telephone}
              onChange={(e) => setFormData((p) => ({ ...p, telephone: formatPhone(e.target.value) }))}
              onBlur={() => touch("telephone")}
            />
            {touched.telephone && !isPhoneValid(formData.telephone) ? (
              <p className="text-xs text-destructive">Numéro incomplet (format : +33 6 12 34 56 78)</p>
            ) : (
              <p className="text-xs text-muted-foreground">Numéro associé à vos comptes Uber, Bolt, Heetch… si vous avez des comptes actifs.</p>
            )}
          </div>
        </div>


      </section>

      {/* Informations professionnelles */}
      <section className="bg-card border border-border rounded-2xl p-6 md:p-8 space-y-6">
        <div>
          <h2 className="text-lg font-semibold text-foreground">Informations professionnelles</h2>
          <p className="text-sm text-muted-foreground mt-1">Votre expérience et les plateformes qui vous intéressent.</p>
        </div>

        <div className="space-y-3">
          <Label>Plateformes souhaitées <span className="text-muted-foreground">*</span></Label>
          <div className="flex flex-wrap gap-4">
            {PLATFORMS.map((p) => (
              <label key={p.id} className="flex items-center gap-2 cursor-pointer">
                <Checkbox
                  id={p.id}
                  checked={platforms[p.id]}
                  onCheckedChange={(checked) =>
                    setPlatforms((prev) => ({ ...prev, [p.id]: !!checked }))
                  }
                />
                <span className="text-sm font-medium text-foreground">{p.label}</span>
              </label>
            ))}
          </div>
          {noPlatform && (
            <p className="text-xs text-muted-foreground flex items-center gap-1">
              <AlertCircle className="h-3 w-3" /> Sélectionnez au moins une plateforme
            </p>
          )}
        </div>

        <div className="grid sm:grid-cols-2 gap-4">
          <div className="space-y-2">
            <Label htmlFor="experience">Expérience VTC</Label>
            <Select onValueChange={(v) => setFormData((p) => ({ ...p, experience: v }))}>
              <SelectTrigger id="experience">
                <SelectValue placeholder="Sélectionner..." />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="debutant">Débutant (moins de 6 mois)</SelectItem>
                <SelectItem value="1an">1 an</SelectItem>
                <SelectItem value="2-3ans">2 à 3 ans</SelectItem>
                <SelectItem value="plus3ans">Plus de 3 ans</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <div className="space-y-2">
            <Label htmlFor="forfait">Forfait souhaité</Label>
            <Select onValueChange={(v) => setFormData((p) => ({ ...p, forfait: v }))}>
              <SelectTrigger id="forfait">
                <SelectValue placeholder="Sélectionner..." />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="essentiel">Essentiel — 50€/semaine</SelectItem>
                <SelectItem value="commission">Commission — À partir de 70€/semaine</SelectItem>
                <SelectItem value="mesure">Sur mesure — Sur devis</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>

        <div className="space-y-2">
          <Label htmlFor="message">Message (facultatif)</Label>
          <Textarea
            id="message"
            placeholder="Présentez-vous, posez vos questions ou précisez votre situation..."
            rows={4}
            value={formData.message}
            onChange={(e) => setFormData((p) => ({ ...p, message: capitalizeSentences(e.target.value) }))}
          />
        </div>
      </section>

      {/* Documents */}
      <section className="bg-card border border-border rounded-2xl p-6 md:p-8 space-y-6">
        <div>
          <h2 className="text-lg font-semibold text-foreground">Documents requis</h2>
          <p className="text-sm text-muted-foreground mt-1">
            Formats acceptés : PDF, JPG, PNG. Taille max 10 Mo par fichier.{" "}
            <span className="text-foreground">Les champs * sont obligatoires.</span>
          </p>
        </div>

        <div className="grid sm:grid-cols-2 gap-3">
          {DOCUMENTS.map((doc) => (
            <FileUploadZone
              key={doc.id}
              docId={doc.id}
              label={doc.label}
              description={doc.description}
              required={doc.required}
              file={files[doc.id]}
              onChange={handleFile}
            />
          ))}
        </div>

        {missingRequired.length > 0 && (
          <div className="flex items-start gap-2 rounded-lg bg-muted p-3 text-sm text-muted-foreground">
            <FileText className="h-4 w-4 shrink-0 mt-0.5" />
            <span>
              Documents manquants :{" "}
              <span className="text-foreground font-medium">
                {missingRequired.map((d) => d.label).join(", ")}
              </span>
            </span>
          </div>
        )}
      </section>

      {/* CGU + submit */}
      <div className="space-y-4">
        <label className="flex items-start gap-3 cursor-pointer">
          <Checkbox id="cgu" checked={cguAccepted} onCheckedChange={(v) => setCguAccepted(!!v)} className="mt-0.5" />
          <span className="text-sm text-muted-foreground leading-relaxed">
            J'accepte les{" "}
            <a href="/cgu" className="text-foreground underline underline-offset-2 hover:no-underline">
              Conditions Générales d'Utilisation
            </a>{" "}
            et la{" "}
            <a href="/confidentialite" className="text-foreground underline underline-offset-2 hover:no-underline">
              Politique de Confidentialité
            </a>
            . *
          </span>
        </label>

        {submitError && (
          <p className="text-sm text-destructive flex items-center gap-1.5">
            <AlertCircle className="h-4 w-4 shrink-0" />
            {submitError}
          </p>
        )}

        <Button
          type="submit"
          size="lg"
          className="w-full sm:w-auto"
          disabled={missingRequired.length > 0 || noPlatform || !cguAccepted || submitting}
        >
          {submitting ? "Envoi en cours..." : "Envoyer ma demande"}
        </Button>
      </div>
    </form>
  )
}
