import Link from "next/link"

const navigation = {
  services: [
    { name: "Gestion de flotte", href: "#" },
    { name: "Rattachement Uber", href: "#" },
    { name: "Rattachement Bolt", href: "#" },
    { name: "Rattachement Heetch", href: "#" },
  ],
  company: [
    { name: "À propos", href: "#" },
    { name: "Carrières", href: "#" },
    { name: "Blog", href: "#" },
    { name: "Presse", href: "#" },
  ],
  legal: [
    { name: "CGU", href: "#" },
    { name: "CGV", href: "#" },
    { name: "Confidentialité", href: "#" },
    { name: "Cookies", href: "#" },
  ],
  social: [
    { name: "LinkedIn", href: "#" },
    { name: "Twitter", href: "#" },
    { name: "Facebook", href: "#" },
    { name: "Instagram", href: "#" },
  ],
}

export function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-8">
          <div className="col-span-2 md:col-span-1">
            <Link href="/" className="text-xl font-semibold">
              FleetConnect
            </Link>
            <p className="mt-4 text-sm text-primary-foreground/70 max-w-xs">
              La plateforme de référence pour la gestion de flottes VTC en France.
            </p>
          </div>
          <div>
            <h3 className="text-sm font-semibold mb-4">Services</h3>
            <ul className="space-y-3">
              {navigation.services.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="text-sm text-primary-foreground/70 hover:text-primary-foreground transition-colors"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="text-sm font-semibold mb-4">Entreprise</h3>
            <ul className="space-y-3">
              {navigation.company.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="text-sm text-primary-foreground/70 hover:text-primary-foreground transition-colors"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="text-sm font-semibold mb-4">Légal</h3>
            <ul className="space-y-3">
              {navigation.legal.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="text-sm text-primary-foreground/70 hover:text-primary-foreground transition-colors"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="text-sm font-semibold mb-4">Social</h3>
            <ul className="space-y-3">
              {navigation.social.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="text-sm text-primary-foreground/70 hover:text-primary-foreground transition-colors"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="mt-12 pt-8 border-t border-primary-foreground/10">
          <p className="text-sm text-primary-foreground/70 text-center">
            © {new Date().getFullYear()} FleetConnect. Tous droits réservés.
          </p>
        </div>
      </div>
    </footer>
  )
}
