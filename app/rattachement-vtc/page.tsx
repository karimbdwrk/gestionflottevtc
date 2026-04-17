import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { RattachementVtc } from "@/components/rattachement-vtc"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: 'Gestion de flotte VTC à Paris — Rattachement Uber, Bolt, Heetch',
  description:
    'Démarrez rapidement grâce à notre service de gestion de flotte VTC à Paris. Rattachement Uber, Bolt et Heetch en 24h, paiement hebdomadaire, support 7j/7. Partenaire officiel des chauffeurs VTC en Île-de-France.',
  keywords: [
    'gestion de flotte VTC',
    'rattachement VTC',
    'rattachement Uber',
    'rattachement Bolt',
    'rattachement Heetch',
    'chauffeur VTC Paris',
    'démarrer VTC rapidement',
    'flotte VTC Île-de-France',
  ],
  alternates: { canonical: 'https://gestionflottevtc.fr/rattachement-vtc' },
  openGraph: {
    url: 'https://gestionflottevtc.fr/rattachement-vtc',
    title: 'Gestion de flotte VTC à Paris — Rattachement Uber, Bolt, Heetch | DRIVE PRO',
    description: 'Rattachement VTC en 24h à Paris. Uber, Bolt, Heetch. Paiement hebdomadaire et support 7j/7.',
  },
}

export default function RattachementVtcPage() {
  return (
    <>
      <Header />
      <main>
        <RattachementVtc />
      </main>
      <Footer />
    </>
  )
}
