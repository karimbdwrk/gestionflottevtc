import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { InscriptionForm } from "@/components/inscription-form"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: 'Inscription chauffeur VTC — Déposez votre dossier',
  description:
    'Déposez votre dossier en ligne pour rejoindre DRIVE PRO. Rattachement VTC rapide sur Uber, Bolt et Heetch à Paris. Formulaire simple, activation en 24h.',
  alternates: { canonical: 'https://gestionflottevtc.fr/inscription' },
  openGraph: {
    url: 'https://gestionflottevtc.fr/inscription',
    title: 'Inscription chauffeur VTC — DRIVE PRO',
    description: 'Déposez votre dossier pour un rattachement VTC rapide sur Uber, Bolt, Heetch.',
  },
}

export default function InscriptionPage() {
  return (
    <>
      <Header />
      <main className="min-h-screen bg-background pt-24 pb-20">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          {/* En-tête */}
          <div className="mb-10">
            <span className="inline-block text-xs font-medium uppercase tracking-widest text-muted-foreground mb-4">
              Rejoindre la plateforme
            </span>
            <h1 className="text-3xl md:text-4xl font-semibold tracking-tight text-foreground text-balance">
              Faites votre demande d'accès
            </h1>
            <p className="mt-4 text-lg text-muted-foreground leading-relaxed">
              Remplissez le formulaire ci-dessous et transmettez vos documents. Notre équipe examine votre dossier et vous répond sous 24–48h.
            </p>
          </div>

          <InscriptionForm />
        </div>
      </main>
      <Footer />
    </>
  )
}
