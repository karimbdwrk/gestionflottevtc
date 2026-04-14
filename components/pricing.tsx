import { Button } from "@/components/ui/button"
import { Check } from "lucide-react"

const plans = [
  {
    name: "Starter",
    description: "Pour les indépendants qui débutent",
    price: "49",
    period: "/mois",
    features: [
      "1 chauffeur",
      "Rattachement à 1 plateforme",
      "Tableau de bord basique",
      "Support par email",
      "Facturation automatique",
    ],
    popular: false,
  },
  {
    name: "Pro",
    description: "Pour les flottes en croissance",
    price: "149",
    period: "/mois",
    features: [
      "Jusqu'à 10 chauffeurs",
      "Rattachement Uber, Bolt & Heetch",
      "Tableau de bord avancé",
      "Support prioritaire 24/7",
      "Facturation & comptabilité",
      "Gestion des documents",
      "Rapports personnalisés",
    ],
    popular: true,
  },
  {
    name: "Enterprise",
    description: "Pour les grandes flottes",
    price: "Sur mesure",
    period: "",
    features: [
      "Chauffeurs illimités",
      "Toutes les plateformes",
      "API personnalisée",
      "Account manager dédié",
      "Formation sur site",
      "Intégrations sur mesure",
      "SLA garanti 99.9%",
    ],
    popular: false,
  },
]

export function Pricing() {
  return (
    <section id="forfaits" className="py-20 md:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-foreground text-balance">
            Des forfaits adaptés à votre activité
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Choisissez le plan qui correspond à la taille de votre flotte et à vos besoins
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={`relative bg-card rounded-2xl p-8 border ${
                plan.popular
                  ? "border-primary shadow-lg scale-105"
                  : "border-border"
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                  <span className="inline-block bg-primary text-primary-foreground text-xs font-medium px-3 py-1 rounded-full">
                    Le plus populaire
                  </span>
                </div>
              )}
              <div className="mb-6">
                <h3 className="text-xl font-semibold text-foreground">{plan.name}</h3>
                <p className="text-sm text-muted-foreground mt-1">{plan.description}</p>
              </div>
              <div className="mb-6">
                <span className="text-4xl font-semibold text-foreground">
                  {plan.price.includes("mesure") ? "" : "€"}{plan.price}
                </span>
                <span className="text-muted-foreground">{plan.period}</span>
              </div>
              <ul className="space-y-3 mb-8">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-3">
                    <Check className="h-5 w-5 text-accent shrink-0 mt-0.5" />
                    <span className="text-sm text-muted-foreground">{feature}</span>
                  </li>
                ))}
              </ul>
              <Button
                className="w-full"
                variant={plan.popular ? "default" : "outline"}
              >
                {plan.price.includes("mesure") ? "Nous contacter" : "Commencer"}
              </Button>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
