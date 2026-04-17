import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { DevenirChauffeurVtc } from "@/components/devenir-chauffeur-vtc"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Devenir chauffeur VTC rapidement à Paris – Guide complet | DRIVE PRO",
  description:
    "Tout savoir pour devenir chauffeur VTC à Paris rapidement. Rattachement Uber, Bolt, Heetch en 24h, paiement hebdomadaire et accompagnement complet. DRIVE PRO, votre partenaire VTC en Île-de-France.",
  keywords:
    "devenir VTC, devenir chauffeur VTC Paris, comment devenir VTC rapidement, rattachement VTC, gestion de flotte VTC, chauffeur Uber Bolt Heetch, revenus VTC, démarrer VTC Île-de-France",
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
