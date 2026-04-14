"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { MapPin, Phone, Mail } from "lucide-react"

export function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    fleetSize: "",
    message: "",
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission
    console.log("Form submitted:", formData)
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
                  <MapPin className="h-5 w-5 text-muted-foreground" />
                </div>
                <div>
                  <h3 className="font-medium text-foreground">Adresse</h3>
                  <p className="text-sm text-muted-foreground mt-1">
                    123 Avenue des Champs-Élysées<br />
                    75008 Paris, France
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-card border border-border">
                  <Phone className="h-5 w-5 text-muted-foreground" />
                </div>
                <div>
                  <h3 className="font-medium text-foreground">Téléphone</h3>
                  <p className="text-sm text-muted-foreground mt-1">+33 1 23 45 67 89</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-card border border-border">
                  <Mail className="h-5 w-5 text-muted-foreground" />
                </div>
                <div>
                  <h3 className="font-medium text-foreground">Email</h3>
                  <p className="text-sm text-muted-foreground mt-1">contact@fleetconnect.fr</p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-card rounded-2xl p-6 md:p-8 border border-border">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid sm:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="name">Nom complet</Label>
                  <Input
                    id="name"
                    placeholder="Jean Dupont"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    required
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email">Email</Label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="jean@example.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    required
                  />
                </div>
              </div>
              <div className="grid sm:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="phone">Téléphone</Label>
                  <Input
                    id="phone"
                    type="tel"
                    placeholder="+33 6 12 34 56 78"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="company">Nom de la société</Label>
                  <Input
                    id="company"
                    placeholder="Ma Société VTC"
                    value={formData.company}
                    onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                  />
                </div>
              </div>
              <div className="space-y-2">
                <Label htmlFor="fleetSize">Taille de votre flotte</Label>
                <Select
                  value={formData.fleetSize}
                  onValueChange={(value) => setFormData({ ...formData, fleetSize: value })}
                >
                  <SelectTrigger>
                    <SelectValue placeholder="Sélectionnez une option" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="1">1 véhicule (indépendant)</SelectItem>
                    <SelectItem value="2-5">2 à 5 véhicules</SelectItem>
                    <SelectItem value="6-10">6 à 10 véhicules</SelectItem>
                    <SelectItem value="11-25">11 à 25 véhicules</SelectItem>
                    <SelectItem value="25+">Plus de 25 véhicules</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="space-y-2">
                <Label htmlFor="message">Message</Label>
                <Textarea
                  id="message"
                  placeholder="Décrivez votre projet ou posez-nous vos questions..."
                  rows={4}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                />
              </div>
              <Button type="submit" className="w-full" size="lg">
                Envoyer ma demande
              </Button>
              <p className="text-xs text-muted-foreground text-center">
                En soumettant ce formulaire, vous acceptez notre politique de confidentialité.
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}
