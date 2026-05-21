import type { Metadata } from 'next'
import { Inter, JetBrains_Mono } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const inter = Inter({ 
  subsets: ["latin"],
  variable: '--font-sans',
})

const jetbrainsMono = JetBrains_Mono({ 
  subsets: ["latin"],
  variable: '--font-mono',
})

export const metadata: Metadata = {
  title: 'Mourad EL OUATIK | Cybersecurity Engineer & AI Researcher',
  description: 'Cybersecurity Engineering student at ENSA Marrakech specializing in DevSecOps, Cloud Security, and AI. Passionate about post-quantum cryptography and threat intelligence.',
  keywords: ['Cybersecurity', 'DevSecOps', 'Cloud Security', 'AI', 'Post-Quantum Cryptography', 'ENSA Marrakech', 'Security Research'],
  authors: [{ name: 'Mourad EL OUATIK' }],
  openGraph: {
    title: 'Mourad EL OUATIK | Cybersecurity Engineer & AI Researcher',
    description: 'Cybersecurity Engineering student specializing in DevSecOps, Cloud Security, and AI Research.',
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
    <html lang="en" className={`${inter.variable} ${jetbrainsMono.variable} bg-background`}>
      <body className="font-sans antialiased">
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
