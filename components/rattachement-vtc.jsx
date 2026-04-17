import { Button } from "@/components/ui/button"
import {
  Check,
  ArrowRight,
  Zap,
  TrendingUp,
  Settings,
  Rocket,
  BarChart3,
  MapPin,
  MessageCircle,
} from "lucide-react"

import { ContactForm } from "@/components/contact-form"

const rattachementBenefits = [
  "Être opérationnel en très peu de temps",
  "Éviter les démarches longues et complexes",
  "Accéder directement aux plateformes Uber, Bolt et Heetch",
  "Commencer à générer des revenus sans attendre",
]

const revenusBenefits = [
  "Paiement hebdomadaire garanti",
  "Conseils pour optimiser vos courses et vos horaires",
  "Multi-plateformes (Uber, Bolt, Heetch) pour maximiser votre CA",
  "Zéro perte de temps sur l'administratif",
]

const gestionItems = [
  "Rattachement Uber, Bolt et Heetch",
  "Gestion administrative simplifiée",
  "Suivi et renouvellement des documents",
  "Assistance chauffeur personnalisée",
  "Support disponible 7j/7",
]

const demarrageBenefits = [
  "Démarrage rapide, même si vous débutez",
  "Accompagnement étape par étape",
  "Aucune perte de temps en démarches",
  "Process simple, clair et efficace",
]

const raisonsChoisir = [
  "Éviter les démarches administratives complexes",
  "Accéder rapidement aux plateformes",
  "Sécuriser et régulariser vos paiements",
  "Bénéficier d'un accompagnement humain",
  "Optimiser votre activité et vos revenus",
]

const statsIdf = [
  { value: "250+", label: "Chauffeurs actifs" },
  { value: "4", label: "Plateformes intégrées" },
  { value: "7j/7", label: "Support disponible" },
  { value: "24h", label: "Délai d'activation" },
]

export function RattachementVtc() {
  return (
    <>
      {/* ── Hero ─────────────────────────────────────────────────── */}
      <section className="relative overflow-hidden pt-32 pb-20 md:pt-40 md:pb-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <div className="mb-6 inline-flex items-center gap-2 rounded-full bg-secondary px-4 py-1.5 text-sm text-muted-foreground">
              <span className="h-2 w-2 rounded-full bg-accent" />
              Partenaire officiel Uber, Bolt &amp; Heetch
            </div>
            <h1 className="text-3xl leading-tight font-semibold tracking-tight text-balance text-foreground md:text-4xl lg:text-5xl">
              Gestion de flotte VTC à Paris — Rattachement Uber, Bolt et Heetch
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-relaxed text-muted-foreground">
              La gestion de flotte VTC est aujourd'hui la solution la plus
              simple pour commencer à travailler rapidement sur des plateformes
              comme Uber, Bolt ou Heetch sans perdre de temps dans les démarches
              administratives.
            </p>
            <p className="mt-4 max-w-2xl text-base leading-relaxed text-muted-foreground">
              Avec <strong className="text-foreground">DRIVE PRO</strong>,
              profitez d'un rattachement VTC rapide, d'un accompagnement complet
              et d'un système optimisé pour maximiser vos gains — tout en
              simplifiant votre activité au quotidien.
            </p>
            <div className="mt-8 flex flex-col gap-4 sm:flex-row">
              <Button size="lg" asChild className="gap-2">
                <a href="/#contact">
                  Nous contacter <ArrowRight className="h-4 w-4" />
                </a>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <a href="/#forfaits">Découvrir nos forfaits</a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* ── Rattachement rapide ───────────────────────────────────── */}
      <section className="bg-secondary/30 py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
            <div>
              <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-secondary px-4 py-1.5 text-sm text-muted-foreground">
                <Zap className="h-3.5 w-3.5" />
                Rattachement simplifié
              </div>
              <h2 className="text-2xl font-semibold tracking-tight text-balance text-foreground md:text-3xl">
                Rattachement VTC rapide et simplifié
              </h2>
              <p className="mt-4 leading-relaxed text-muted-foreground">
                Le rattachement VTC permet aux chauffeurs de travailler
                légalement et rapidement via une structure déjà en place. Grâce
                à notre solution, vous gagnez un temps précieux dès le premier
                jour.
              </p>
              <ul className="mt-6 space-y-3">
                {rattachementBenefits.map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-foreground">
                      <Check
                        className="h-3 w-3 text-background"
                        strokeWidth={3}
                      />
                    </span>
                    <span className="text-muted-foreground">{item}</span>
                  </li>
                ))}
              </ul>
              <p className="mt-6 text-sm text-muted-foreground italic">
                Notre objectif est simple : vous faire gagner du temps et de
                l'argent dès le départ.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="rounded-2xl border border-border bg-card p-6 shadow-sm">
                <div className="text-3xl font-semibold text-foreground">
                  24h
                </div>
                <div className="mt-1 text-sm text-muted-foreground">
                  Délai d'activation moyen
                </div>
              </div>
              <div className="rounded-2xl border border-border bg-card p-6 shadow-sm">
                <div className="text-3xl font-semibold text-foreground">3</div>
                <div className="mt-1 text-sm text-muted-foreground">
                  Plateformes rattachées
                </div>
              </div>
              <div className="col-span-2 rounded-2xl border border-border bg-card p-6 shadow-sm">
                <div className="text-3xl font-semibold text-foreground">
                  250+
                </div>
                <div className="mt-1 text-sm text-muted-foreground">
                  Chauffeurs actifs nous font confiance
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Optimisation revenus ──────────────────────────────────── */}
      <section className="py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto mb-14 max-w-2xl text-center">
            <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-secondary px-4 py-1.5 text-sm text-muted-foreground">
              <TrendingUp className="h-3.5 w-3.5" />
              Revenus optimisés
            </div>
            <h2 className="text-2xl font-semibold tracking-tight text-balance text-foreground md:text-3xl">
              Optimisation des revenus et gains chauffeurs
            </h2>
            <p className="mt-4 leading-relaxed text-muted-foreground">
              La gestion de flotte ne sert pas uniquement à simplifier les
              démarches. Elle permet aussi une véritable optimisation de vos
              gains VTC.
            </p>
          </div>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {revenusBenefits.map((item) => (
              <div
                key={item}
                className="flex flex-col gap-3 rounded-2xl border border-border bg-card p-6 shadow-sm"
              >
                <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-foreground">
                  <Check className="h-4 w-4 text-background" strokeWidth={3} />
                </span>
                <p className="text-sm leading-relaxed text-foreground">
                  {item}
                </p>
              </div>
            ))}
          </div>
          <div className="mx-auto mt-10 max-w-2xl rounded-2xl border border-border bg-secondary/40 px-8 py-6 text-center">
            <p className="font-medium text-foreground">
              Résultat : plus de courses, plus de régularité, plus de revenus.
            </p>
          </div>
        </div>
      </section>

      {/* ── Gestion complète ─────────────────────────────────────── */}
      <section className="bg-secondary/30 py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
            <div className="order-2 grid gap-3 lg:order-1">
              {gestionItems.map((item) => (
                <div
                  key={item}
                  className="flex items-center gap-4 rounded-xl border border-border bg-card px-5 py-4 shadow-sm"
                >
                  <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-foreground">
                    <Check
                      className="h-3.5 w-3.5 text-background"
                      strokeWidth={3}
                    />
                  </span>
                  <span className="text-sm text-foreground">{item}</span>
                </div>
              ))}
            </div>
            <div className="order-1 lg:order-2">
              <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-secondary px-4 py-1.5 text-sm text-muted-foreground">
                <Settings className="h-3.5 w-3.5" />
                Service tout-en-un
              </div>
              <h2 className="text-2xl font-semibold tracking-tight text-balance text-foreground md:text-3xl">
                Une gestion de flotte VTC complète
              </h2>
              <p className="mt-4 leading-relaxed text-muted-foreground">
                Notre service prend en charge tous les aspects essentiels de
                votre activité. Vous vous concentrez uniquement sur ce qui
                compte : conduire et générer du chiffre.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── Démarrage rapide ─────────────────────────────────────── */}
      <section className="py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
            <div>
              <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-secondary px-4 py-1.5 text-sm text-muted-foreground">
                <Rocket className="h-3.5 w-3.5" />
                Lancement facile
              </div>
              <h2 className="text-2xl font-semibold tracking-tight text-balance text-foreground md:text-3xl">
                Démarrez rapidement, sans complication
              </h2>
              <p className="mt-4 leading-relaxed text-muted-foreground">
                Se lancer en VTC peut être compliqué sans accompagnement. Avec
                DRIVE PRO, chaque étape est simplifiée pour que vous puissiez
                commencer à travailler rapidement, même si vous débutez.
              </p>
              <ul className="mt-6 space-y-3">
                {demarrageBenefits.map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-foreground">
                      <Check
                        className="h-3 w-3 text-background"
                        strokeWidth={3}
                      />
                    </span>
                    <span className="text-muted-foreground">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="flex flex-col gap-4">
              {[
                "Inscription en ligne",
                "Validation du dossier sous 24h",
                "Rattachement aux plateformes",
                "Vous commencez à travailler",
              ].map((step, i) => (
                <div
                  key={step}
                  className="flex items-center gap-5 rounded-2xl border border-border bg-card px-6 py-5 shadow-sm"
                >
                  <span className="w-8 shrink-0 text-2xl font-semibold text-muted-foreground/40 tabular-nums">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span className="text-sm font-medium text-foreground">
                    {step}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── Pourquoi choisir ─────────────────────────────────────── */}
      <section className="bg-secondary/30 py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto mb-12 max-w-2xl text-center">
            <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-secondary px-4 py-1.5 text-sm text-muted-foreground">
              <BarChart3 className="h-3.5 w-3.5" />
              Nos avantages
            </div>
            <h2 className="text-2xl font-semibold tracking-tight text-balance text-foreground md:text-3xl">
              Pourquoi choisir la gestion de flotte VTC ?
            </h2>
            <p className="mt-4 leading-relaxed text-muted-foreground">
              La gestion de flotte est aujourd'hui la solution la plus utilisée
              par les chauffeurs souhaitant travailler efficacement et sans
              friction.
            </p>
          </div>
          <div className="mx-auto grid max-w-4xl gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {raisonsChoisir.map((item) => (
              <div
                key={item}
                className="flex items-start gap-3 rounded-xl border border-border bg-card px-5 py-4 shadow-sm"
              >
                <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-foreground">
                  <Check className="h-3 w-3 text-background" strokeWidth={3} />
                </span>
                <span className="text-sm text-foreground">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Paris & IDF ──────────────────────────────────────────── */}
      <section className="py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
            <div>
              <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-secondary px-4 py-1.5 text-sm text-muted-foreground">
                <MapPin className="h-3.5 w-3.5" />
                Paris &amp; Île-de-France
              </div>
              <h2 className="text-2xl font-semibold tracking-tight text-balance text-foreground md:text-3xl">
                Gestion de flotte VTC à Paris et en Île-de-France
              </h2>
              <p className="mt-4 leading-relaxed text-muted-foreground">
                DRIVE PRO accompagne les chauffeurs VTC sur Paris et toute
                l'Île-de-France. Nous connaissons parfaitement le terrain pour
                vous aider à développer votre activité rapidement.
              </p>
              <ul className="mt-6 space-y-3">
                <li className="flex items-start gap-3">
                  <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-foreground">
                    <Check
                      className="h-3 w-3 text-background"
                      strokeWidth={3}
                    />
                  </span>
                  <span className="text-muted-foreground">
                    Les zones les plus rentables de Paris et IDF
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-foreground">
                    <Check
                      className="h-3 w-3 text-background"
                      strokeWidth={3}
                    />
                  </span>
                  <span className="text-muted-foreground">
                    Les horaires optimisés selon la demande
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-foreground">
                    <Check
                      className="h-3 w-3 text-background"
                      strokeWidth={3}
                    />
                  </span>
                  <span className="text-muted-foreground">
                    Des stratégies concrètes pour augmenter vos gains
                  </span>
                </li>
              </ul>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {statsIdf.map(({ value, label }) => (
                <div
                  key={label}
                  className="rounded-2xl border border-border bg-card p-6 text-center shadow-sm"
                >
                  <div className="text-3xl font-semibold text-foreground">
                    {value}
                  </div>
                  <div className="mt-1 text-sm text-muted-foreground">
                    {label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── CTA Contact ──────────────────────────────────────────── */}
      {/* <section className="bg-foreground py-20 text-background md:py-28">
        <div className="mx-auto max-w-7xl px-4 text-center sm:px-6 lg:px-8">
          <div className="mb-6 inline-flex items-center gap-2 rounded-full bg-background/10 px-4 py-1.5 text-sm text-background/70">
            <MessageCircle className="h-3.5 w-3.5" />
            Réponse rapide garantie
          </div>
          <h2 className="text-2xl font-semibold tracking-tight text-balance md:text-3xl">
            Prêt pour votre rattachement VTC ?
          </h2>
          <p className="mx-auto mt-4 max-w-xl leading-relaxed text-background/70">
            Contactez-nous directement via WhatsApp pour une réponse rapide et
            un accompagnement personnalisé. Notre équipe vous guide dès
            aujourd'hui.
          </p>
          <div className="mt-8 flex flex-col justify-center gap-4 sm:flex-row">
            <Button
              size="lg"
              variant="secondary"
              asChild
              className="gap-2 bg-background text-foreground hover:bg-background/90"
            >
              <a
                href="https://wa.me/33600000000"
                target="_blank"
                rel="noopener noreferrer"
              >
                <MessageCircle className="h-4 w-4" />
                Nous contacter sur WhatsApp
              </a>
            </Button>
            <Button
              size="lg"
              variant="outline"
              asChild
              className="gap-2 border-background/30 text-background hover:bg-background/10"
            >
              <a href="/inscription">
                Déposer mon dossier <ArrowRight className="h-4 w-4" />
              </a>
            </Button>
          </div>
        </div>
      </section> */}
      <ContactForm />

      {/* ── SEO footer ───────────────────────────────────────────── */}
      <section className="border-t border-border py-10">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <p className="mx-auto max-w-4xl text-center text-xs leading-relaxed text-muted-foreground/50">
            Gestion de flotte VTC, rattachement VTC, rattachement Uber,
            rattachement Bolt, rattachement Heetch, chauffeur VTC Paris,
            démarrer VTC rapidement, gagner de l'argent VTC, optimisation
            revenus VTC, flotte VTC Île-de-France.
          </p>
        </div>
      </section>
    </>
  )
}
