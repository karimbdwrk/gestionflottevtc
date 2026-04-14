import { Shield, Clock, Headphones, TrendingUp, Award, Users } from "lucide-react"

const features = [
  {
    icon: Shield,
    title: "Sécurité garantie",
    description: "Vos données et celles de vos chauffeurs sont protégées par un chiffrement de niveau bancaire.",
  },
  {
    icon: Clock,
    title: "Disponibilité 24/7",
    description: "Notre plateforme est disponible en permanence pour que vos chauffeurs ne manquent aucune course.",
  },
  {
    icon: Headphones,
    title: "Support réactif",
    description: "Une équipe dédiée répond à vos questions en moins de 2 heures en moyenne.",
  },
  {
    icon: TrendingUp,
    title: "Optimisation des revenus",
    description: "Nos algorithmes vous aident à maximiser les courses et les revenus de votre flotte.",
  },
  {
    icon: Award,
    title: "Partenaire certifié",
    description: "Nous sommes partenaires officiels d&apos;Uber, Bolt et Heetch pour une intégration optimale.",
  },
  {
    icon: Users,
    title: "Communauté active",
    description: "Rejoignez plus de 2500 gestionnaires de flotte qui nous font confiance.",
  },
]

const stats = [
  { value: "2500+", label: "Chauffeurs actifs" },
  { value: "15M€", label: "Revenus générés" },
  { value: "98%", label: "Satisfaction client" },
  { value: "24h", label: "Délai d'activation" },
]

export function Reassurance() {
  return (
    <section id="reassurance" className="py-20 md:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-foreground text-balance">
            Pourquoi choisir FleetConnect
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Une solution fiable et performante pour développer votre activité VTC
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
