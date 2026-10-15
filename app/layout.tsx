import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const inter = Inter({ 
  subsets: ["latin"],
  variable: '--font-sans',
})

export const metadata: Metadata = {
  title: 'Mourad EL OUATIK | Consultant Cybersécurité & GRC',
  description: "Étudiant ingénieur cybersécurité (ENSA Marrakech) en recherche d'un PFE de 6 mois en conseil Cybersécurité & GRC : ISO 27001, ISO 27035, NIST CSF, Zero Trust, SOC.",
  keywords: ['Cybersécurité', 'GRC', 'ISO 27001', 'ISO 27035', 'NIST CSF', 'Zero Trust', 'SOC', 'ENSA Marrakech'],
  authors: [{ name: 'Mourad EL OUATIK' }],
  openGraph: {
    title: 'Mourad EL OUATIK | Consultant Cybersécurité & GRC',
    description: 'Étudiant ingénieur cybersécurité — ISO 27001, NIST CSF, Zero Trust & SOC.',
    type: 'website',
  },
  icons: {
    icon: '/logo.png',
    apple: '/logo.png',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="fr" className={`${inter.variable} bg-background`}>
      <body className="font-sans antialiased">
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
