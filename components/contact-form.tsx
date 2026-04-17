"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Phone, Mail } from "lucide-react"
import { createClient } from "@/lib/supabase/client"

export function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  })
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle")
  const [errorMsg, setErrorMsg] = useState("")
  const [customSubject, setCustomSubject] = useState("")
  const [touched, setTouched] = useState<Record<string, boolean>>({})

  const touch = (field: string) => setTouched((prev) => ({ ...prev, [field]: true }))

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

  function formatPhone(raw: string) {
    // Conserver uniquement chiffres et +
    let digits = raw.replace(/[^\d]/g, "")
    // Remplacer le 0 initial par +33 + chiffre suivant
    if (digits.startsWith("0") && digits.length > 1) {
      digits = "33" + digits.slice(1)
    }
    // Limiter à 11 chiffres (33 + 9 chiffres)
    digits = digits.slice(0, 11)
    if (!digits) return ""
    // Formater +33 X XX XX XX XX
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

  function isNameValid(name: string) {
    return name.trim().split(/\s+/).filter(Boolean).length >= 2
  }

  function isEmailValid(email: string) {
    return /^[a-zA-Z0-9._%+\-]+@[a-zA-Z0-9.\-]+\.[a-zA-Z]{2,}$/.test(email)
  }

  function isPhoneValid(phone: string) {
    return phone.replace(/[^\d]/g, "").length === 11
  }

  const isFormValid =
    isNameValid(formData.name) &&
    isEmailValid(formData.email) &&
    isPhoneValid(formData.phone) &&
    formData.subject !== "" &&
    (formData.subject !== "autre" || customSubject.trim().length >= 2) &&
    formData.message.trim().length >= 30

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setStatus("loading")
    setErrorMsg("")

    const supabase = createClient()
    const { error } = await supabase.from("contacts").insert({
      name: formData.name,
      email: formData.email,
      phone: formData.phone || null,
      subject: formData.subject === "autre" ? (customSubject.trim() || "Autre") : formData.subject || null,
      message: formData.message || null,
    })

    if (error) {
      setErrorMsg("Une erreur est survenue. Veuillez réessayer.")
      setStatus("error")
      return
    }

    setStatus("success")
  }

  return (
    <section id="contact" className="py-20 md:py-32 bg-secondary">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
          <div>
            <h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-foreground text-balance">
              Parlons de votre projet
            </h2>
            <p className="mt-4 text-lg text-muted-foreground leading-relaxed">
              Vous avez des questions ou souhaitez en savoir plus sur nos services ? Notre équipe est là pour vous accompagner.
            </p>

            <div className="mt-10 space-y-6">
              <div className="flex items-start gap-4">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-card border border-border">
                  <Phone className="h-5 w-5 text-muted-foreground" />
                </div>
                <div>
                  <h3 className="font-medium text-foreground">WhatsApp</h3>
                  <p className="text-sm text-muted-foreground mt-1">+33 1 23 45 67 89</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-card border border-border">
                  <Mail className="h-5 w-5 text-muted-foreground" />
                </div>
                <div>
                  <h3 className="font-medium text-foreground">Email</h3>
                  <p className="text-sm text-muted-foreground mt-1">contact@drivepro.fr</p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-card rounded-2xl p-6 md:p-8 border border-border">
            {status === "success" ? (
              <div className="flex flex-col items-center justify-center h-full gap-4 py-12 text-center">
                <div className="text-4xl">✓</div>
                <p className="text-lg font-medium text-foreground">Message envoyé !</p>
                <p className="text-sm text-muted-foreground">Nous vous répondrons dans les plus brefs délais.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid sm:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="name">Nom complet *</Label>
                    <Input
                      id="name"
                      placeholder="Jean Dupont"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: sanitizeName(e.target.value) })}
                      onBlur={() => touch("name")}
                    />
                    {touched.name && !isNameValid(formData.name) && (
                      <p className="text-xs text-destructive">Indiquez prénom et nom (ex : Jean Dupont)</p>
                    )}
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email">Email *</Label>
                    <Input
                      id="email"
                      type="text"
                      inputMode="email"
                      autoComplete="email"
                      placeholder="jean@example.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value.toLowerCase().replace(/[^a-z0-9._%+\-@]/g, "") })}
                      onBlur={() => touch("email")}
                    />
                    {touched.email && !isEmailValid(formData.email) && (
                      <p className="text-xs text-destructive">Adresse email invalide</p>
                    )}
                  </div>
                </div>
                <div className="grid sm:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="phone">Téléphone *</Label>
                    <Input
                      id="phone"
                      type="tel"
                      placeholder="+33 6 12 34 56 78"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: formatPhone(e.target.value) })}
                      onBlur={() => touch("phone")}
                    />
                    {touched.phone && !isPhoneValid(formData.phone) && (
                      <p className="text-xs text-destructive">Numéro incomplet (format : +33 6 12 34 56 78)</p>
                    )}
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="subject">Sujet *</Label>
                    <Select
                      value={formData.subject}
                      onValueChange={(value) => {
                        setFormData({ ...formData, subject: value })
                        if (value !== "autre") setCustomSubject("")
                      }}
                    >
                      <SelectTrigger className="w-full">
                        <SelectValue placeholder="Sélectionnez un sujet" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="inscription">Inscription chauffeur</SelectItem>
                        <SelectItem value="forfait">Renseignement forfait</SelectItem>
                        <SelectItem value="partenariat">Partenariat</SelectItem>
                        <SelectItem value="support">Support technique</SelectItem>
                        <SelectItem value="autre">Autre</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>
                {formData.subject === "autre" && (
                  <div className="space-y-2">
                    <Label htmlFor="customSubject">Précisez le sujet *</Label>
                    <Input
                      id="customSubject"
                      placeholder="Décrivez brièvement votre sujet..."
                      value={customSubject}
                      onChange={(e) => setCustomSubject(capitalizeSentences(e.target.value))}
                      onBlur={() => touch("customSubject")}
                    />
                    {touched.customSubject && customSubject.trim().length < 2 && (
                      <p className="text-xs text-destructive">Veuillez préciser le sujet</p>
                    )}
                  </div>
                )}
                <div className="space-y-2">
                  <Label htmlFor="message">
                    Message
                    {touched.message && formData.message.trim().length > 0 && formData.message.trim().length < 30 && (
                      <span className="ml-1 text-xs text-muted-foreground">({formData.message.trim().length}/30 car. min.)</span>
                    )}
                  </Label>
                  <Textarea
                    id="message"
                    placeholder="Décrivez votre projet ou posez-nous vos questions..."
                    rows={4}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: capitalizeSentences(e.target.value) })}
                    onBlur={() => touch("message")}
                  />
                  {touched.message && formData.message.trim().length < 30 && (
                    <p className="text-xs text-destructive">Message trop court (30 caractères minimum)</p>
                  )}
                </div>
                <Button type="submit" className="w-full" size="lg" disabled={status === "loading" || !isFormValid}>
                  {status === "loading" ? "Envoi en cours..." : "Envoyer le message"}
                </Button>
                {status === "error" && (
                  <p className="text-sm text-destructive text-center">{errorMsg}</p>
                )}
                <p className="text-xs text-muted-foreground text-center">
                  En soumettant ce formulaire, vous acceptez notre politique de confidentialité.
                </p>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
