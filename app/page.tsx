import { Header } from "@/components/header"
import { Hero } from "@/components/hero"
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
