import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { DevenirChauffeurVtc } from "@/components/devenir-chauffeur-vtc"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: 'Devenir chauffeur VTC rapidement à Paris — Guide complet',
  description:
    'Découvrez comment devenir chauffeur VTC à Paris rapidement avec DRIVE PRO. Rattachement Uber, Bolt et Heetch en 24h, paiement hebdomadaire et accompagnement complet en Île-de-France.',
  keywords: [
    'devenir VTC',
    'devenir chauffeur VTC Paris',
    'comment devenir VTC rapidement',
    'rattachement VTC',
    'gestion de flotte VTC',
    'chauffeur Uber Bolt Heetch',
    'revenus VTC',
    'démarrer VTC Île-de-France',
  ],
  alternates: { canonical: 'https://gestionflottevtc.fr/devenir-chauffeur-vtc' },
  openGraph: {
    url: 'https://gestionflottevtc.fr/devenir-chauffeur-vtc',
    title: 'Devenir chauffeur VTC rapidement à Paris — DRIVE PRO',
    description: 'Guide complet pour devenir chauffeur VTC à Paris. Rattachement Uber, Bolt, Heetch en 24h.',
  },
}

export default function DevenirChauffeurVtcPage() {
  return (
    <>
      <Header />
      <main>
        <DevenirChauffeurVtc />
      </main>
      <Footer />
    </>
  )
}
