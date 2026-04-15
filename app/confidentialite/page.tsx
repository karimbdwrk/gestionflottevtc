import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Politique de Confidentialité — DRIVE PRO",
  description: "Politique de confidentialité et traitement des données personnelles de la plateforme DRIVE PRO.",
}

export default function ConfidentialitePage() {
  return (
    <>
      <Header />
      <main className="min-h-screen bg-background pt-24 pb-20">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <div className="mb-10">
            <span className="inline-block text-xs font-medium uppercase tracking-widest text-muted-foreground mb-4">
              Données personnelles
            </span>
            <h1 className="text-3xl md:text-4xl font-semibold tracking-tight text-foreground">
              Politique de Confidentialité
            </h1>
            <p className="mt-3 text-sm text-muted-foreground">
              Dernière mise à jour : 15 avril 2026 — Conforme au RGPD (Règlement UE 2016/679)
            </p>
          </div>

          <div className="prose prose-neutral dark:prose-invert max-w-none space-y-10 text-foreground">

            <Section title="1. Responsable du traitement">
              <p>
                Le responsable du traitement des données à caractère personnel collectées sur la plateforme DRIVE PRO est :
              </p>
              <ul>
                <li><strong>Société :</strong> DRIVE PRO</li>
                <li><strong>Email :</strong> <a href="mailto:contact@drivepro.fr" className="underline underline-offset-2">contact@drivepro.fr</a></li>
              </ul>
            </Section>

            <Section title="2. Données collectées">
              <p>Nous collectons les données suivantes selon le contexte d'utilisation :</p>

              <p><strong>Via le formulaire de contact :</strong></p>
              <ul>
                <li>Nom complet</li>
                <li>Adresse email</li>
                <li>Numéro de téléphone (facultatif)</li>
                <li>Nom de la société (facultatif)</li>
                <li>Taille de la flotte (facultatif)</li>
                <li>Message libre</li>
              </ul>

              <p><strong>Via le formulaire d'inscription (demande d'accès) :</strong></p>
              <ul>
                <li>Prénom et nom</li>
                <li>Adresse email et numéro de téléphone</li>
                <li>Date de naissance</li>
                <li>Adresse postale complète</li>
                <li>Expérience professionnelle VTC</li>
                <li>Plateformes souhaitées (Uber, Bolt, Heetch)</li>
                <li>Forfait sélectionné</li>
              </ul>

              <p><strong>Documents transmis lors de l'inscription :</strong></p>
              <ul>
                <li>Pièce d'identité (CNI recto/verso ou passeport)</li>
                <li>Permis de conduire (recto/verso)</li>
                <li>Carte professionnelle VTC</li>
                <li>Attestation d'assurance VTC</li>
                <li>Extrait de casier judiciaire (bulletin n°3)</li>
                <li>Justificatif de domicile (facultatif)</li>
                <li>Kbis ou attestation URSSAF (facultatif)</li>
              </ul>

              <p><strong>Données techniques (collectées automatiquement) :</strong></p>
              <ul>
                <li>Adresse IP</li>
                <li>Type de navigateur et système d'exploitation</li>
                <li>Pages visitées et durée de la visite</li>
                <li>Cookies de session (gestion de l'authentification)</li>
              </ul>
            </Section>

            <Section title="3. Finalités et bases légales du traitement">
              <p>Vos données sont traitées pour les finalités suivantes :</p>
              <ul>
                <li><strong>Traitement de votre demande de contact</strong> — base légale : intérêt légitime</li>
                <li><strong>Instruction de votre dossier d'inscription</strong> — base légale : exécution d'un contrat (pré-contractuel)</li>
                <li><strong>Vérification de l'éligibilité professionnelle</strong> (documents VTC) — base légale : obligation légale / exécution du contrat</li>
                <li><strong>Rattachement aux plateformes partenaires</strong> (Uber, Bolt, Heetch, FreeNow) — base légale : exécution du contrat</li>
                <li><strong>Gestion de la relation client et support</strong> — base légale : exécution du contrat</li>
                <li><strong>Amélioration de la plateforme</strong> (données anonymisées) — base légale : intérêt légitime</li>
              </ul>
            </Section>

            <Section title="4. Durée de conservation">
              <ul>
                <li><strong>Données de contact :</strong> 3 ans à compter du dernier contact</li>
                <li><strong>Dossier d'inscription et documents :</strong> durée de la relation contractuelle + 5 ans (obligations légales)</li>
                <li><strong>Documents d'identité :</strong> uniquement pendant la durée de traitement du dossier, puis supprimés dans un délai de 30 jours en l'absence de relation contractuelle</li>
                <li><strong>Données de connexion et cookies :</strong> 13 mois maximum</li>
              </ul>
            </Section>

            <Section title="5. Destinataires des données">
              <p>Vos données peuvent être partagées avec :</p>
              <ul>
                <li><strong>Les plateformes partenaires</strong> (Uber, Bolt, Heetch, FreeNow) dans le cadre strictement nécessaire au rattachement du chauffeur</li>
                <li><strong>Nos sous-traitants techniques</strong> (hébergement : Supabase/Vercel, infrastructure sécurisée en Europe)</li>
                <li><strong>Les autorités compétentes</strong> en cas d'obligation légale</li>
              </ul>
              <p>Vos données ne sont jamais vendues à des tiers.</p>
            </Section>

            <Section title="6. Transferts hors Union Européenne">
              <p>
                Les données sont hébergées sur des serveurs situés dans l'Union Européenne. En cas de traitement hors UE (notamment via certains sous-traitants), des garanties appropriées sont mises en place (clauses contractuelles types de la Commission européenne).
              </p>
            </Section>

            <Section title="7. Sécurité des données">
              <p>
                DRIVE PRO met en œuvre les mesures techniques et organisationnelles appropriées pour protéger vos données contre tout accès non autorisé, perte, altération ou divulgation :
              </p>
              <ul>
                <li>Chiffrement des données en transit (HTTPS/TLS)</li>
                <li>Chiffrement des données au repos</li>
                <li>Accès aux données restreint au personnel habilité</li>
                <li>Stockage des documents dans un espace privé sécurisé (non accessible publiquement)</li>
                <li>Authentification sécurisée pour l'accès à l'espace administration</li>
              </ul>
            </Section>

            <Section title="8. Vos droits">
              <p>Conformément au RGPD, vous disposez des droits suivants sur vos données personnelles :</p>
              <ul>
                <li><strong>Droit d'accès :</strong> obtenir une copie de vos données</li>
                <li><strong>Droit de rectification :</strong> corriger des données inexactes ou incomplètes</li>
                <li><strong>Droit à l'effacement :</strong> demander la suppression de vos données (sous réserve des obligations légales)</li>
                <li><strong>Droit à la limitation :</strong> limiter le traitement de vos données</li>
                <li><strong>Droit à la portabilité :</strong> recevoir vos données dans un format structuré</li>
                <li><strong>Droit d'opposition :</strong> vous opposer au traitement basé sur l'intérêt légitime</li>
                <li><strong>Droit de retirer votre consentement</strong> à tout moment, sans affecter la licéité des traitements antérieurs</li>
              </ul>
              <p>
                Pour exercer ces droits, contactez-nous à : <a href="mailto:contact@drivepro.fr" className="underline underline-offset-2">contact@drivepro.fr</a>. Nous répondons dans un délai de 30 jours. Vous pouvez également introduire une réclamation auprès de la <strong>CNIL</strong> (<a href="https://www.cnil.fr" target="_blank" rel="noopener noreferrer" className="underline underline-offset-2">www.cnil.fr</a>).
              </p>
            </Section>

            <Section title="9. Cookies">
              <p>
                La plateforme utilise des cookies strictement nécessaires au fonctionnement (gestion de session d'authentification). Aucun cookie publicitaire ou de tracking tiers n'est utilisé.
              </p>
              <p>
                Vous pouvez gérer les cookies via les paramètres de votre navigateur. La désactivation des cookies de session peut empêcher l'accès à certaines fonctionnalités.
              </p>
            </Section>

            <Section title="10. Modifications de la politique">
              <p>
                DRIVE PRO peut mettre à jour cette politique de confidentialité. Toute modification substantielle sera notifiée par email aux utilisateurs enregistrés. La date de mise à jour figure en haut de ce document.
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
