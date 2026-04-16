import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

export function Hero() {
  return (
    <section className="relative overflow-hidden pt-32 pb-20 md:pt-40 md:pb-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <div className="max-w-xl">
            <div className="mb-6 inline-flex items-center gap-2 rounded-full bg-secondary px-4 py-1.5 text-sm text-muted-foreground">
              <span className="h-2 w-2 rounded-full bg-accent" />
              Partenaire officiel Uber, Bolt, Heetch & FreeNow
            </div>
            <h1 className="text-3xl leading-tight font-semibold tracking-tight text-balance text-foreground md:text-4xl lg:text-5xl">
              Travaillez dès aujourd’hui avec DRIVE PRO
            </h1>
            <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
              Activation rapide, assistance administrative, support 7j/7 et
              paiement chaque semaine : tout est mis en place pour vous
              permettre de commencer à travailler sans perdre de temps, et
              maximiser vos gains.
            </p>
            <div className="mt-8 flex flex-col gap-4 sm:flex-row">
              <Button size="lg" className="gap-2">
                Contactez-nous
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
                <div className="rounded-xl border border-border bg-card p-6 shadow-sm">
                  <div className="text-3xl font-semibold text-foreground">
                    +250
                  </div>
                  <div className="mt-1 text-sm text-muted-foreground">
                    Chauffeurs actifs
                  </div>
                </div>
                <div className="rounded-xl border border-border bg-card p-6 shadow-sm">
                  <div className="text-3xl font-semibold text-foreground">
                    98%
                  </div>
                  <div className="mt-1 text-sm text-muted-foreground">
                    Taux de satisfaction
                  </div>
                </div>
              </div>
              <div className="space-y-4 pt-8">
                <div className="rounded-xl border border-border bg-card p-6 shadow-sm">
                  <div className="text-3xl font-semibold text-foreground">
                    24/7
                  </div>
                  <div className="mt-1 text-sm text-muted-foreground">
                    Support disponible
                  </div>
                </div>
                <div className="rounded-xl bg-primary p-6 shadow-sm">
                  <div className="text-3xl font-semibold text-primary-foreground">
                    4
                  </div>
                  <div className="mt-1 text-sm text-primary-foreground/80">
                    Plateformes intégrées
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Partner Logos */}
        <div className="mt-20 border-t border-border pt-12">
          <p className="mb-8 text-center text-sm text-muted-foreground">
            Connecté aux principales plateformes VTC
          </p>
          <div className="flex flex-wrap items-end justify-center gap-12 md:gap-16 [&>div]:transition-opacity [&>div]:duration-200 [&>div]:hover:opacity-50">
            <div className="logo logo-uber">
              <svg
                id="Layer_1"
                xmlns="http://www.w3.org/2000/svg"
                version="1.1"
                viewBox="0 0 155.8 52.3"
                className="h-7 w-auto text-foreground/80"
                aria-label="Uber"
              >
                <path
                  fill="currentColor"
                  d="M7.7,31.8V0H0v32.2c0,12.1,8.5,20.1,19.5,20.1s10.1-2.1,13.6-5.7v4.8h7.6V0h-7.7v31.8c0,8.2-5.5,13.7-12.6,13.7-7.2,0-12.7-5.4-12.7-13.7ZM48.3,51.5h7.3v-4.7c3.4,3.5,8.2,5.6,13.4,5.6,11,0,19.7-8.7,19.7-19.6s-8.7-19.6-19.7-19.6-9.9,2.1-13.3,5.6V0h-7.4v51.5ZM55.6,32.8c0-7.3,5.8-13,12.9-13s12.9,5.7,12.9,13-5.8,13-12.9,13-12.9-5.8-12.9-13ZM93.1,32.7c0,11.2,8.7,19.6,19.9,19.6s12.4-3,16.2-8l-5.4-4c-2.8,3.7-6.5,5.5-10.8,5.5-6.3,0-11.4-4.6-12.4-10.7h30.5v-2.4c0-11.2-7.9-19.5-18.7-19.5-11,0-19.3,8.9-19.3,19.5ZM112.2,19.7c5.5,0,10.1,3.8,11.4,9.6h-22.9c1.4-5.8,6-9.6,11.5-9.6ZM155.8,20.6v-6.9h-2.6c-4.1,0-7.1,1.9-9,4.9v-4.6h-7.2v37.5h7.4v-21.4c0-5.8,3.5-9.6,8.4-9.6h3Z"
                />
              </svg>
            </div>
            <div className="logo logo-bolt">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                version="1.1"
                viewBox="0 0 111.9 48.9"
                className="h-8 w-auto text-foreground/80"
                overflow="visible"
                aria-label="Bolt"
              >
                <path
                  fill="currentColor"
                  d="M30.4,23c4.4-7.1,2.2-16.4-4.8-20.8-2.4-1.4-5.1-2.2-7.9-2.2H0v48.9h19.9c8.3,0,15-6.8,15-15.1s-1.6-7.9-4.5-10.8ZM11.4,11.5h6.3c2,0,3.6,1.6,3.6,3.6s-1.6,3.6-3.6,3.6h-6.3s0-7.2,0-7.2ZM19.9,37.4h-8.5v-7.2h8.5c2,0,3.6,1.6,3.6,3.6s-1.6,3.6-3.6,3.6ZM90,0v48.9h-11.4V2.4l11.4-2.4ZM56.8,13.9c-9.7,0-17.6,7.9-17.6,17.7s7.9,17.7,17.6,17.7,17.6-7.9,17.6-17.7c0-9.8-7.9-17.7-17.6-17.7ZM56.8,37.4c-3.2,0-5.7-2.6-5.7-5.7s2.5-5.7,5.7-5.7,5.7,2.6,5.7,5.7-2.6,5.7-5.7,5.7ZM62.5,59.3c0,3.2-2.6,5.7-5.7,5.7s-5.7-2.6-5.7-5.7,2.6-5.7,5.7-5.7c3.1,0,5.7,2.5,5.7,5.7ZM111.8,14.5v11.5h-5.7v9c0,2.7.9,4.7,3.2,4.7s1.7,0,2.5-.3v8.5c-1.7.9-3.6,1.4-5.6,1.4h-.8c-6.3-.3-10.7-4.3-10.7-11.4h0V8.2l11.4-2.4v8.8h5.7Z"
                />
              </svg>
            </div>
            <div className="logo logo-heetch">
              <svg
                id="Logo"
                xmlns="http://www.w3.org/2000/svg"
                version="1.1"
                viewBox="0 0 96.1 17.8"
                className="h-6 w-auto text-foreground/80"
                aria-label="Heetch"
              >
                <path
                  id="Tracé_1"
                  fill="currentColor"
                  d="M3.9,6.1h5.9c.1,0,.2-.1.2-.2V.8c0-.3.2-.5.5-.5h2.6c.3,0,.5.2.5.5v14.2c0,.3-.2.5-.5.5h-2.6c-.3,0-.5-.2-.5-.5v-5.2c0-.1-.1-.2-.2-.2H3.9c-.1,0-.2.1-.2.2v5.2c0,.3-.2.5-.5.5H.5c-.3,0-.5-.2-.5-.5V.8C0,.5.2.3.5.3h2.6c.3,0,.5.2.5.5v5.1c0,.1.1.3.2.3,0,0,0,0,0,0Z"
                />
                <path
                  id="Tracé_2"
                  fill="currentColor"
                  d="M78.3,3.9l-2.3,1.3c-.2.1-.5,0-.6-.1-.8-1.1-2-1.7-3.4-1.6-2.3,0-4.2,1.8-4.2,4.1,0,.1,0,.2,0,.3-.2,2.3,1.5,4.2,3.8,4.4.1,0,.3,0,.4,0,1.3,0,2.6-.6,3.4-1.6.2-.2.5-.2.7,0l2.2,1.5c.2.2.3.5.1.7,0,0,0,0,0,0-1.5,1.9-3.8,3-6.3,2.9-4.2.2-7.8-3-8-7.2,0-.2,0-.4,0-.6C64.2,3.4,67.8,0,72.3,0c2.5,0,4.8,1.2,6.2,3.2.2.2,0,.5-.1.7,0,0,0,0,0,0Z"
                />
                <path
                  id="Tracé_3"
                  fill="currentColor"
                  d="M61.7,3.6h-3.7c-.1,0-.2.1-.2.2v11.1c0,.3-.2.5-.5.5h-2.6c-.3,0-.5-.2-.5-.5V3.9c0-.1-.1-.2-.2-.2h-3.7c-.3,0-.5-.2-.5-.5V.8c0-.3.2-.5.5-.5h11.6c.3,0,.5.2.5.5v2.4c0,.3-.2.5-.5.5Z"
                />
                <path
                  id="Tracé_4"
                  fill="currentColor"
                  d="M29.5,15.4h-10.6c-.3,0-.5-.2-.5-.5V.8c0-.3.2-.5.5-.5h10.6c.3,0,.5.2.5.5v2.3c0,.3-.2.5-.5.5h-7.2c-.1,0-.2.1-.2.2v2.1c0,.1.1.2.2.2h6.7c.3,0,.5.2.5.5v2.3c0,.3-.2.5-.5.5h-6.7c-.1,0-.2.1-.2.2v2.3c0,.1.1.2.2.2h7.2c.3,0,.5.2.5.5v2.3c0,.3-.2.5-.5.5Z"
                />
                <path
                  id="Tracé_5"
                  fill="currentColor"
                  d="M45.9,15.4h-10.6c-.3,0-.5-.2-.5-.5V.8c0-.3.2-.5.5-.5h10.6c.3,0,.5.2.5.5v2.3c0,.3-.2.5-.5.5h-7.2c-.1,0-.2.1-.2.2v2.1c0,.1.1.2.2.2h6.7c.3,0,.5.2.5.5v2.3c0,.3-.2.5-.5.5h-6.7c-.1,0-.2.1-.2.2v2.3c0,.1.1.2.2.2h7.2c.3,0,.5.2.5.5v2.3c0,.3-.2.5-.5.5Z"
                />
                <path
                  id="Tracé_6"
                  fill="currentColor"
                  d="M85.9,6.1h5.9c.1,0,.2-.1.2-.2V.8c0-.3.2-.5.5-.5h2.6c.3,0,.5.2.5.5v8.2c0,.3-.2.5-.5.5h-9.2c-.1,0-.2.1-.2.2v5.2c0,.3-.2.5-.5.5h-2.6c-.3,0-.5-.2-.5-.5V.8c0-.3.2-.5.5-.5h2.6c.3,0,.5.2.5.5v5.1c0,.1.1.3.2.3,0,0,0,0,0,0Z"
                />
                <path
                  id="Tracé_7"
                  fill="currentColor"
                  d="M96.1,15.4c0,1.3-1,2.3-2.3,2.3-1.3,0-2.3-1-2.3-2.3,0-1.3,1-2.3,2.3-2.3,0,0,0,0,0,0,1.3,0,2.3,1,2.3,2.3Z"
                />
              </svg>
            </div>
            <div className="logo logo-freenow">
              <svg
                id="Calque_2"
                xmlns="http://www.w3.org/2000/svg"
                version="1.1"
                viewBox="0 0 83.5 14.9"
                className="h-6 w-auto text-foreground/80"
                aria-label="FreeNow"
              >
                <g id="Calque_1-2">
                  <path
                    fill="currentColor"
                    d="M33,7.8c.3-1.2,1.2-1.8,2.4-1.8s2,.7,2.2,1.8c0,0-4.6,0-4.6,0ZM29.7,9.1c0,3.5,2.5,5.9,6.2,5.9s3-.4,4.1-1.1v-2.9c-1,.8-2.3,1.3-3.8,1.3s-2.9-.7-3.2-2.1h7.8c0-.4,0-.9,0-1.4,0-3.2-2.3-5.4-5.4-5.4s-5.7,2.4-5.7,5.9h0ZM42.1,14.7v-6.4c0-3.7,2.4-5.1,5.2-5.1s5.2,1.4,5.2,5.1v6.4h-3.3v-6.4c0-1.5-.8-2.1-1.9-2.1s-1.9.6-1.9,2.1v6.4h-3.3ZM65.5,3.5h3.3l2,7.4,1.7-5.9c.4-1.3,1.1-1.7,1.9-1.7s1.5.4,1.9,1.7l1.7,5.9,2-7.4h3.3l-2.9,9.4c-.4,1.5-1.2,2.1-2.3,2.1s-1.9-.6-2.3-2.1l-1.5-4.9-1.5,4.9c-.4,1.5-1.2,2.1-2.3,2.1s-1.8-.6-2.3-2.1l-2.9-9.4h0ZM0,14.7V4.9C0,1.6,2.3,0,5,0s2.4.3,2.9.6v3.1c-.5-.3-1.3-.7-2.3-.7s-2.3.6-2.3,1.9v.2h4.7v2.9H3.3v6.6s-3.3,0-3.3,0ZM9.3,14.7V3.5h3.3v1.5c.8-1.2,1.8-1.6,3-1.6s1.1.1,1.4.2v3.1c-.4-.1-1-.3-1.9-.3s-2.5.7-2.5,2.6v5.9h-3.3ZM20.9,7.8c.3-1.2,1.2-1.8,2.4-1.8s2,.7,2.2,1.8h-4.6ZM17.5,9.1c0,3.5,2.5,5.9,6.2,5.9s3-.4,4.1-1.1v-2.9c-1,.8-2.3,1.3-3.8,1.3s-2.9-.7-3.2-2.1h7.8c0-.4,0-.9,0-1.4,0-3.2-2.3-5.4-5.4-5.4s-5.7,2.4-5.7,5.9h0ZM59.7,11.9c-1.6,0-2.6-1.2-2.6-2.9s1-2.9,2.6-2.9,2.6,1.2,2.6,2.9-1,2.9-2.6,2.9ZM59.7,14.9c3.3,0,5.9-2.6,5.9-5.9s-2.5-5.9-5.9-5.9-5.9,2.5-5.9,5.9,2.5,5.9,5.9,5.9Z"
                  />
                </g>
              </svg>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
