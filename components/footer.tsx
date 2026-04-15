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
    // { name: "Blog", href: "#" },
    // { name: "Presse", href: "#" },
  ],
  legal: [
    { name: "CGU", href: "/cgu" },
    // { name: "CGV", href: "#" },
    { name: "Confidentialité", href: "/confidentialite" },
    { name: "Cookies", href: "#" },
  ],
  // social: [
  //   { name: "LinkedIn", href: "#" },
  //   { name: "Twitter", href: "#" },
  //   { name: "Facebook", href: "#" },
  //   { name: "Instagram", href: "#" },
  // ],
}

export function Footer() {
  return (
    <footer className="bg-zinc-900 dark:bg-background/80 text-zinc-50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          <div className="col-span-2 md:col-span-1">
            <Link href="/" className="text-xl font-semibold">
              DRIVE PRO
            </Link>
            <p className="mt-4 text-sm text-zinc-400 max-w-xs">
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
                    className="text-sm text-zinc-400 hover:text-zinc-50 transition-colors"
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
                    className="text-sm text-zinc-400 hover:text-zinc-50 transition-colors"
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
                    className="text-sm text-zinc-400 hover:text-zinc-50 transition-colors"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          {/* <div>
            <h3 className="text-sm font-semibold mb-4">Social</h3>
            <ul className="space-y-3">
              {navigation.social.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="text-sm text-zinc-400 hover:text-zinc-50 transition-colors"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div> */}
        </div>
        <div className="mt-12 pt-8 border-t border-zinc-700">
          <p className="text-sm text-zinc-400 text-center">
            © {new Date().getFullYear()} DRIVE PRO. Tous droits réservés.
          </p>
        </div>
      </div>
    </footer>
  )
}
