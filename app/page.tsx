import type { Metadata } from "next"
import { Header } from "@/components/header"
import { Hero } from "@/components/hero"

export const metadata: Metadata = {
  title: 'DRIVE PRO — Gestion de flotte VTC à Paris | Rattachement Uber, Bolt, Heetch',
  description:
    'Rejoignez DRIVE PRO, la solution de gestion de flotte VTC à Paris. Rattachement Uber, Bolt et Heetch en 24h, paiement chaque semaine et support 7j/7. Démarrez rapidement votre activité VTC en Île-de-France.',
  alternates: { canonical: 'https://gestionflottevtc.fr' },
  openGraph: {
    url: 'https://gestionflottevtc.fr',
    title: 'DRIVE PRO — Gestion de flotte VTC à Paris',
    description: 'Rattachement Uber, Bolt, Heetch en 24h. Paiement hebdomadaire. Support 7j/7.',
  },
}
import { Pricing } from "@/components/pricing"
import { Process } from "@/components/process"
import { Reassurance } from "@/components/reassurance"
import { ContactForm } from "@/components/contact-form"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Pricing />
        <Process />
        <Reassurance />
        <ContactForm />
      </main>
      <Footer />
    </>
  )
}
