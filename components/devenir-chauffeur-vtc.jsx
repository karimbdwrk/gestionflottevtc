import { Button } from "@/components/ui/button"
import {
  Check,
  ArrowRight,
  Zap,
  TrendingUp,
  Settings,
  Rocket,
  MapPin,
  MessageCircle,
  ClipboardList,
} from "lucide-react"
import { ContactForm } from "@/components/contact-form"

const etapesVtc = [
  "Obtenir une carte professionnelle VTC",
  "Avoir un véhicule conforme aux exigences",
  "S'inscrire sur les plateformes (Uber, Bolt, Heetch)",
  "Créer une structure ou passer par une gestion de flotte VTC",
]

const avantagRapide = [
  "Éviter les démarches administratives longues",
  "Être accompagné à chaque étape",
  "Démarrer plus rapidement",
  "Accéder directement aux plateformes",
]

const revenusBenefits = [
  "Paiement hebdomadaire garanti",
  "Accès multi-plateformes (Uber, Bolt, Heetch)",
  "Conseils pour optimiser vos gains et vos horaires",
]

const gestionFlotteBenefits = [
  "Rattachement VTC immédiat",
  "Gestion administrative simplifiée",
  "Accompagnement complet étape par étape",
  "Support disponible 7j/7",
]

const avantagesDrivePro = [
  "Rattachement Uber, Bolt et Heetch",
  "Démarrage rapide, même si vous débutez",
  "Paiement hebdomadaire",
  "Assistance administrative complète",
  "Support réactif 7j/7",
]

const statsIdf = [
  { value: "250+", label: "Chauffeurs actifs" },
  { value: "3", label: "Plateformes intégrées" },
  { value: "7j/7", label: "Support disponible" },
  { value: "24h", label: "Délai d'activation" },
]

export function DevenirChauffeurVtc() {
  return (
    <>
      {/* ── Hero ─────────────────────────────────────────────────── */}
      <section className="relative overflow-hidden pt-32 pb-20 md:pt-40 md:pb-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <div className="mb-6 inline-flex items-center gap-2 rounded-full bg-secondary px-4 py-1.5 text-sm text-muted-foreground">
              <span className="h-2 w-2 rounded-full bg-accent" />
              Guide complet — Solution clé en main
            </div>
            <h1 className="text-3xl leading-tight font-semibold tracking-tight text-balance text-foreground md:text-4xl lg:text-5xl">
              Devenir chauffeur VTC rapidement à Paris — Guide complet et
              solution clé en main
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-relaxed text-muted-foreground">
              Devenir chauffeur VTC est aujourd'hui une opportunité accessible
              pour générer des revenus rapidement et travailler en toute
              indépendance sur des plateformes comme Uber, Bolt ou Heetch.
            </p>
            <p className="mt-4 max-w-2xl text-base leading-relaxed text-muted-foreground">
              Cependant, les démarches peuvent être longues et complexes. Avec{" "}
              <strong className="text-foreground">DRIVE PRO</strong>, vous
              bénéficiez d'une solution simple pour démarrer rapidement en VTC,
              avec un accompagnement complet et un rattachement VTC rapide.
            </p>
            <div className="mt-8 flex flex-col gap-4 sm:flex-row">
              <Button size="lg" asChild className="gap-2">
                <a href="#contact">
                  Démarrer maintenant <ArrowRight className="h-4 w-4" />
                </a>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <a href="/inscription">Déposer mon dossier</a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* ── Comment devenir VTC ───────────────────────────────────── */}
      <section className="bg-secondary/30 py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
            <div>
              <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-secondary px-4 py-1.5 text-sm text-muted-foreground">
                <ClipboardList className="h-3.5 w-3.5" />
                Les étapes
              </div>
              <h2 className="text-2xl font-semibold tracking-tight text-balance text-foreground md:text-3xl">
                Comment devenir VTC ?
              </h2>
              <p className="mt-4 leading-relaxed text-muted-foreground">
                Pour devenir chauffeur VTC, plusieurs étapes sont nécessaires.
                Ces démarches peuvent prendre du temps si vous êtes seul.
              </p>
              <ul className="mt-6 space-y-3">
                {etapesVtc.map((item) => (
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
              <p className="mt-6 text-sm font-medium text-foreground">
                C'est pourquoi de nombreux chauffeurs choisissent aujourd'hui
                une solution de rattachement VTC pour aller plus vite.
              </p>
            </div>
            <div className="flex flex-col gap-4">
              {etapesVtc.map((step, i) => (
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

      {/* ── Devenir VTC rapidement ────────────────────────────────── */}
      <section className="py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
            <div className="grid gap-3">
              {avantagRapide.map((item) => (
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
            <div>
              <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-secondary px-4 py-1.5 text-sm text-muted-foreground">
                <Zap className="h-3.5 w-3.5" />
                Sans complications
              </div>
              <h2 className="text-2xl font-semibold tracking-tight text-balance text-foreground md:text-3xl">
                Devenir VTC rapidement sans complications
              </h2>
              <p className="mt-4 leading-relaxed text-muted-foreground">
                Avec une solution de gestion de flotte VTC, vous bénéficiez d'un
                accompagnement à chaque étape. DRIVE PRO vous permet de
                commencer à travailler en VTC sans perdre de temps.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── Revenus chauffeur ─────────────────────────────────────── */}
      <section className="bg-secondary/30 py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto mb-14 max-w-2xl text-center">
            <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-secondary px-4 py-1.5 text-sm text-muted-foreground">
              <TrendingUp className="h-3.5 w-3.5" />
              Revenus & gains
            </div>
            <h2 className="text-2xl font-semibold tracking-tight text-balance text-foreground md:text-3xl">
              Combien gagne un chauffeur VTC ?
            </h2>
            <p className="mt-4 leading-relaxed text-muted-foreground">
              Les revenus d'un chauffeur VTC dépendent du nombre d'heures
              travaillées, des zones d'activité et des plateformes utilisées.
              Grâce à une bonne organisation et une optimisation des courses, il
              est possible de générer des revenus réguliers chaque semaine.
            </p>
          </div>
          <div className="mx-auto grid max-w-3xl gap-6 sm:grid-cols-3">
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
              Objectif : maximiser votre chiffre d'affaires.
            </p>
          </div>
        </div>
      </section>

      {/* ── Pourquoi gestion de flotte ────────────────────────────── */}
      <section className="py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
            <div>
              <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-secondary px-4 py-1.5 text-sm text-muted-foreground">
                <Settings className="h-3.5 w-3.5" />
                La solution la plus rapide
              </div>
              <h2 className="text-2xl font-semibold tracking-tight text-balance text-foreground md:text-3xl">
                Pourquoi choisir une gestion de flotte VTC ?
              </h2>
              <p className="mt-4 leading-relaxed text-muted-foreground">
                La gestion de flotte VTC est la solution la plus rapide pour
                démarrer. Vous vous concentrez uniquement sur votre activité :
                conduire et générer du chiffre.
              </p>
            </div>
            <div className="grid gap-3">
              {gestionFlotteBenefits.map((item) => (
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
          </div>
        </div>
      </section>

      {/* ── Avantages DRIVE PRO ───────────────────────────────────── */}
      <section className="bg-secondary/30 py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto mb-12 max-w-2xl text-center">
            <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-secondary px-4 py-1.5 text-sm text-muted-foreground">
              <Rocket className="h-3.5 w-3.5" />
              Nos avantages
            </div>
            <h2 className="text-2xl font-semibold tracking-tight text-balance text-foreground md:text-3xl">
              Les avantages de DRIVE PRO
            </h2>
            <p className="mt-4 leading-relaxed text-muted-foreground">
              Notre objectif est de vous permettre de travailler rapidement et
              efficacement, dès le premier jour.
            </p>
          </div>
          <div className="mx-auto grid max-w-4xl gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {avantagesDrivePro.map((item) => (
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
                Devenir VTC à Paris et en Île-de-France
              </h2>
              <p className="mt-4 leading-relaxed text-muted-foreground">
                Le marché VTC est particulièrement dynamique à Paris et en
                Île-de-France. Un environnement idéal pour développer votre
                activité rapidement.
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
                    Forte demande clients toute l'année
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
                    Nombreuses courses disponibles 24h/24
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
                    Zones à fort potentiel identifiées par notre équipe
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

      {/* ── CTA WhatsApp ─────────────────────────────────────────── */}
      {/* <section className="bg-foreground py-20 text-background md:py-28">
        <div className="mx-auto max-w-7xl px-4 text-center sm:px-6 lg:px-8">
          <div className="mb-6 inline-flex items-center gap-2 rounded-full bg-background/10 px-4 py-1.5 text-sm text-background/70">
            <MessageCircle className="h-3.5 w-3.5" />
            Réponse rapide garantie
          </div>
          <h2 className="text-2xl font-semibold tracking-tight text-balance md:text-3xl">
            Démarrez dès maintenant
          </h2>
          <p className="mx-auto mt-4 max-w-xl leading-relaxed text-background/70">
            Vous souhaitez devenir chauffeur VTC rapidement ? DRIVE PRO vous
            accompagne pour un rattachement VTC simple et rapide. Contactez-nous
            dès maintenant via WhatsApp pour commencer sans attendre.
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

      {/* ── Contact form ─────────────────────────────────────────── */}
      <div id="contact">
        <ContactForm />
      </div>

      {/* ── SEO footer ───────────────────────────────────────────── */}
      <section className="border-t border-border py-10">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <p className="mx-auto max-w-4xl text-center text-xs leading-relaxed text-muted-foreground/50">
            Mots-clés : devenir VTC, devenir chauffeur VTC Paris, comment
            devenir VTC rapidement, rattachement VTC, gestion de flotte VTC,
            chauffeur Uber Bolt Heetch, revenus VTC, démarrer VTC Île-de-France.
          </p>
        </div>
      </section>
    </>
  )
}
