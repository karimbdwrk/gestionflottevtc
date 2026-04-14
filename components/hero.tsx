import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

export function Hero() {
  return (
    <section className="relative pt-32 pb-20 md:pt-40 md:pb-32 overflow-hidden">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div className="max-w-xl">
            <div className="inline-flex items-center gap-2 rounded-full bg-secondary px-4 py-1.5 text-sm text-muted-foreground mb-6">
              <span className="h-2 w-2 rounded-full bg-accent" />
              Partenaire officiel Uber, Bolt & Heetch
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-semibold tracking-tight text-foreground leading-tight text-balance">
              La plateforme complète pour gérer votre flotte VTC
            </h1>
            <p className="mt-6 text-lg text-muted-foreground leading-relaxed">
              Connectez vos chauffeurs aux principales applications de VTC. Gérez votre flotte, suivez vos performances et maximisez vos revenus en toute simplicité.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="gap-2">
                Demander un accès
                <ArrowRight className="h-4 w-4" />
              </Button>
              <Button size="lg" variant="outline">
                Découvrir nos offres
              </Button>
            </div>
          </div>
          <div className="relative">
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-4">
                <div className="bg-card rounded-xl p-6 border border-border shadow-sm">
                  <div className="text-3xl font-semibold text-foreground">+2500</div>
                  <div className="text-sm text-muted-foreground mt-1">Chauffeurs actifs</div>
                </div>
                <div className="bg-card rounded-xl p-6 border border-border shadow-sm">
                  <div className="text-3xl font-semibold text-foreground">98%</div>
                  <div className="text-sm text-muted-foreground mt-1">Taux de satisfaction</div>
                </div>
              </div>
              <div className="space-y-4 pt-8">
                <div className="bg-card rounded-xl p-6 border border-border shadow-sm">
                  <div className="text-3xl font-semibold text-foreground">24/7</div>
                  <div className="text-sm text-muted-foreground mt-1">Support disponible</div>
                </div>
                <div className="bg-primary rounded-xl p-6 shadow-sm">
                  <div className="text-3xl font-semibold text-primary-foreground">3</div>
                  <div className="text-sm text-primary-foreground/80 mt-1">Plateformes intégrées</div>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Partner Logos */}
        <div className="mt-20 pt-12 border-t border-border">
          <p className="text-sm text-muted-foreground text-center mb-8">Connecté aux principales plateformes VTC</p>
          <div className="flex flex-wrap justify-center items-center gap-12 md:gap-16">
            <div className="text-2xl font-bold text-foreground/80">uber</div>
            <div className="text-2xl font-bold text-foreground/80">Bolt</div>
            <div className="text-2xl font-bold text-foreground/80">heetch</div>
          </div>
        </div>
      </div>
    </section>
  )
}
