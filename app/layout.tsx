import type { Metadata } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import { ThemeProvider } from '@/components/theme-provider'
import { ScrollToHash } from '@/components/scroll-to-hash'
import './globals.css'

const _geist = Geist({ subsets: ["latin"] });
const _geistMono = Geist_Mono({ subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL('https://gestionflottevtc.fr'),
  title: {
    default: 'DRIVE PRO — Gestion de flotte VTC à Paris | Rattachement Uber, Bolt, Heetch',
    template: '%s | DRIVE PRO',
  },
  description:
    'DRIVE PRO vous accompagne pour devenir chauffeur VTC à Paris. Rattachement Uber, Bolt et Heetch en 24h, paiement hebdomadaire, support 7j/7 et gestion administrative complète.',
  keywords: [
    'gestion de flotte VTC',
    'rattachement VTC',
    'chauffeur VTC Paris',
    'rattachement Uber',
    'rattachement Bolt',
    'rattachement Heetch',
    'devenir VTC',
    'VTC Île-de-France',
  ],
  authors: [{ name: 'DRIVE PRO' }],
  creator: 'DRIVE PRO',
  publisher: 'DRIVE PRO',
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true },
  },
  openGraph: {
    type: 'website',
    locale: 'fr_FR',
    url: 'https://gestionflottevtc.fr',
    siteName: 'DRIVE PRO',
    title: 'DRIVE PRO — Gestion de flotte VTC à Paris | Rattachement Uber, Bolt, Heetch',
    description:
      'Rattachement VTC rapide à Paris. Uber, Bolt, Heetch en 24h. Paiement hebdomadaire et support 7j/7.',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'DRIVE PRO — Gestion de flotte VTC à Paris',
    description:
      'Rattachement VTC rapide à Paris. Uber, Bolt, Heetch en 24h. Paiement hebdomadaire et support 7j/7.',
  },
  icons: {
    icon: [
      {
        url: '/icon-light-32x32.png',
        media: '(prefers-color-scheme: light)',
      },
      {
        url: '/icon-dark-32x32.png',
        media: '(prefers-color-scheme: dark)',
      },
      {
        url: '/icon.svg',
        type: 'image/svg+xml',
      },
    ],
    apple: '/apple-icon.png',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="fr" className="bg-background" data-scroll-behavior="smooth" suppressHydrationWarning>
      <body className="font-sans antialiased">
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
          <ScrollToHash />
          {children}
          {process.env.NODE_ENV === 'production' && <Analytics />}
        </ThemeProvider>
      </body>
    </html>
  )
}
