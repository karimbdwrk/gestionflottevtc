import { Shield, Clock, Headphones, Banknote, Award, Users } from "lucide-react"

const features = [
  {
    icon: Award,
    title: "Rattachement VTC en 24h",
    description: "Nous prenons en charge votre rattachement VTC sur Uber, Bolt, Heetch et FreeNow. Activation rapide, sans paperasse inutile.",
  },
  {
    icon: Banknote,
    title: "Paiement chaque semaine",
    description: "Vos revenus sont versés chaque semaine, sans délai. Vous gardez une visibilité totale sur vos gains.",
  },
  {
    icon: Headphones,
    title: "Support 7j/7",
    description: "Notre équipe est disponible tous les jours pour répondre à vos questions et vous accompagner à chaque étape.",
  },
  {
    icon: Shield,
    title: "Assistance administrative",
    description: "Gestion des documents, suivi des dossiers, renouvellements : on s'occupe de tout pour que vous puissiez vous concentrer sur la route.",
  },
  {
    icon: Clock,
    title: "Aucun engagement long terme",
    description: "Pas de contrat bloquant. Vous êtes libre de faire évoluer votre formule selon votre activité.",
  },
  {
    icon: Users,
    title: "Plus de 250 chauffeurs actifs",
    description: "Rejoignez une communauté de chauffeurs VTC qui nous font confiance au quotidien dans toute, la France.",
  },
]

const stats = [
  { value: "250+", label: "Chauffeurs actifs" },
  { value: "4", label: "Plateformes intégrées" },
  { value: "7j/7", label: "Support disponible" },
  { value: "24h", label: "Délai d'activation" },
]

export function Reassurance() {
  return (
    <section id="reassurance" className="py-20 md:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-foreground text-balance">
            Pourquoi choisir <span className="font-bold">DRIVE PRO</span> pour votre rattachement VTC
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Un accompagnement complet pour démarrer vite et rouler sereinement sur toutes les plateformes
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {features.map((feature) => (
            <div key={feature.title} className="group">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-secondary text-foreground mb-4 group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                <feature.icon className="h-5 w-5" />
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-2">{feature.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>

        <div className="bg-primary rounded-2xl p-8 md:p-12">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="text-3xl md:text-4xl font-semibold text-primary-foreground">{stat.value}</div>
                <div className="text-sm text-primary-foreground/80 mt-1">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
