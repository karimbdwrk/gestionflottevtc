import { FileText, UserCheck, Link2, Rocket } from "lucide-react"

const steps = [
  {
    number: "01",
    icon: FileText,
    title: "Inscription en ligne",
    description: "Remplissez le formulaire avec vos informations professionnelles et les documents requis.",
  },
  {
    number: "02",
    icon: UserCheck,
    title: "Validation du dossier",
    description: "Notre équipe vérifie vos documents sous 24h et valide votre inscription.",
  },
  {
    number: "03",
    icon: Link2,
    title: "Rattachement aux plateformes",
    description: "Nous connectons vos chauffeurs à Uber, Bolt et Heetch selon votre forfait.",
  },
  {
    number: "04",
    icon: Rocket,
    title: "Lancez votre activité",
    description: "Accédez à votre tableau de bord et commencez à générer des revenus immédiatement.",
  },
]

export function Process() {
  return (
    <section id="process" className="py-20 md:py-32 bg-secondary">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-foreground text-balance">
            Comment ça marche
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Un processus simple et rapide pour démarrer votre activité VTC
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <div key={step.number} className="relative">
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-12 left-[60%] w-[80%] h-px bg-border" />
              )}
              <div className="bg-card rounded-2xl p-6 border border-border h-full">
                <div className="flex items-center gap-4 mb-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary text-primary-foreground">
                    <step.icon className="h-5 w-5" />
                  </div>
                  <span className="text-4xl font-semibold text-border">{step.number}</span>
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-2">{step.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{step.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
