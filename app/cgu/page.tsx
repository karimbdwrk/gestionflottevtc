import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Conditions Générales d'Utilisation — DRIVE PRO",
  description: "Conditions générales d'utilisation de la plateforme DRIVE PRO, service de gestion de flotte VTC.",
}

export default function CguPage() {
  return (
    <>
      <Header />
      <main className="min-h-screen bg-background pt-24 pb-20">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <div className="mb-10">
            <span className="inline-block text-xs font-medium uppercase tracking-widest text-muted-foreground mb-4">
              Mentions légales
            </span>
            <h1 className="text-3xl md:text-4xl font-semibold tracking-tight text-foreground">
              Conditions Générales d'Utilisation
            </h1>
            <p className="mt-3 text-sm text-muted-foreground">
              Dernière mise à jour : 15 avril 2026
            </p>
          </div>

          <div className="prose prose-neutral dark:prose-invert max-w-none space-y-10 text-foreground">

            <Section title="1. Présentation de la plateforme">
              <p>
                DRIVE PRO est une plateforme de gestion de flotte VTC éditée par la société <strong>DRIVE PRO</strong>, dont le siège social est en France. Elle permet aux chauffeurs VTC de se rattacher aux plateformes Uber, Bolt, Heetch et FreeNow, de gérer leurs documents administratifs et de bénéficier d'un accompagnement opérationnel.
              </p>
              <p>
                Contact : <a href="mailto:contact@drivepro.fr" className="underline underline-offset-2">contact@drivepro.fr</a>
              </p>
            </Section>

            <Section title="2. Acceptation des conditions">
              <p>
                L'accès à la plateforme et l'utilisation des services impliquent l'acceptation pleine et entière des présentes CGU. Si vous n'acceptez pas ces conditions, vous devez cesser d'utiliser la plateforme.
              </p>
              <p>
                DRIVE PRO se réserve le droit de modifier les présentes CGU à tout moment. Les utilisateurs seront informés de toute modification substantielle par email.
              </p>
            </Section>

            <Section title="3. Conditions d'accès">
              <p>Pour utiliser la plateforme, vous devez :</p>
              <ul>
                <li>Être une personne physique majeure (18 ans ou plus)</li>
                <li>Être titulaire d'une carte professionnelle VTC en cours de validité</li>
                <li>Posséder un permis de conduire valide</li>
                <li>Disposer d'une assurance VTC professionnelle</li>
                <li>Fournir un extrait de casier judiciaire (bulletin n°3) de moins de 3 mois</li>
                <li>Soumettre un dossier complet via le formulaire d'inscription</li>
              </ul>
              <p>
                DRIVE PRO se réserve le droit de refuser ou de suspendre l'accès à tout utilisateur ne respectant pas ces conditions ou dont le dossier est incomplet ou frauduleux.
              </p>
            </Section>

            <Section title="4. Description des services">
              <p>DRIVE PRO propose les services suivants aux chauffeurs VTC :</p>
              <ul>
                <li>Rattachement et activation sur les plateformes Uber, Bolt, Heetch et FreeNow</li>
                <li>Assistance administrative pour la constitution et le suivi des dossiers</li>
                <li>Suivi des documents (renouvellement, conformité)</li>
                <li>Paiement des rémunérations à fréquence hebdomadaire</li>
                <li>Support client disponible 7j/7</li>
              </ul>
            </Section>

            <Section title="5. Forfaits et tarification">
              <p>Les services sont proposés selon trois formules :</p>
              <ul>
                <li><strong>Essentiel</strong> : 50 € par semaine, coût fixe.</li>
                <li><strong>Commission</strong> : à partir de 70 € par semaine, calculé selon le contrat de travail. Les charges URSSAF et cotisations sociales ne sont pas incluses.</li>
                <li><strong>Sur mesure</strong> : tarif établi sur devis, selon les besoins spécifiques.</li>
              </ul>
              <p>
                Les tarifs sont susceptibles d'évoluer. Tout changement sera notifié aux utilisateurs actifs avec un préavis minimum de 7 jours.
              </p>
            </Section>

            <Section title="6. Obligations de l'utilisateur">
              <p>L'utilisateur s'engage à :</p>
              <ul>
                <li>Fournir des informations exactes, complètes et à jour lors de l'inscription et tout au long de l'utilisation du service</li>
                <li>Maintenir la confidentialité de ses accès et identifiants</li>
                <li>Informer DRIVE PRO sans délai de tout changement de situation (expiration de documents, changement d'adresse, etc.)</li>
                <li>Ne pas utiliser la plateforme à des fins illicites ou frauduleuses</li>
                <li>Respecter la réglementation en vigueur relative à l'activité de chauffeur VTC</li>
              </ul>
            </Section>

            <Section title="7. Responsabilité">
              <p>
                DRIVE PRO s'efforce d'assurer la disponibilité et le bon fonctionnement de la plateforme, mais ne saurait être tenu responsable des interruptions temporaires liées à des opérations de maintenance ou à des facteurs extérieurs.
              </p>
              <p>
                DRIVE PRO n'est pas responsable des décisions prises par les plateformes tierces (Uber, Bolt, Heetch, FreeNow) concernant l'activation, la suspension ou la désactivation d'un compte chauffeur.
              </p>
            </Section>

            <Section title="8. Suspension et résiliation">
              <p>
                DRIVE PRO peut suspendre ou résilier l'accès d'un utilisateur en cas de violation des présentes CGU, de fourniture d'informations frauduleuses, ou de comportement contraire à la loi, sans préavis ni indemnité.
              </p>
              <p>
                L'utilisateur peut mettre fin à son utilisation des services à tout moment en contactant DRIVE PRO à l'adresse <a href="mailto:contact@drivepro.fr" className="underline underline-offset-2">contact@drivepro.fr</a>.
              </p>
            </Section>

            <Section title="9. Propriété intellectuelle">
              <p>
                L'ensemble des éléments constituant la plateforme DRIVE PRO (logo, design, textes, fonctionnalités) est protégé par le droit d'auteur et reste la propriété exclusive de DRIVE PRO. Toute reproduction ou utilisation sans autorisation écrite préalable est interdite.
              </p>
            </Section>

            <Section title="10. Droit applicable et litiges">
              <p>
                Les présentes CGU sont soumises au droit français. En cas de litige, une solution amiable sera privilégiée. À défaut, les tribunaux compétents de Paris seront seuls compétents.
              </p>
            </Section>

          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <section className="space-y-4">
      <h2 className="text-xl font-semibold text-foreground border-b border-border pb-2">{title}</h2>
      <div className="space-y-3 text-muted-foreground leading-relaxed [&_strong]:text-foreground [&_a]:text-foreground [&_ul]:list-disc [&_ul]:pl-5 [&_ul]:space-y-1.5">
        {children}
      </div>
    </section>
  )
}
