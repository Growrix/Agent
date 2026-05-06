import type { Metadata } from 'next'
import { Inter, Sora } from 'next/font/google'
import { ThemeProvider } from '@/components/providers/ThemeProvider'
import '@/styles/globals.css'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-body',
  display: 'swap',
})

const sora = Sora({
  subsets: ['latin'],
  variable: '--font-display',
  weight: ['400', '500', '600', '700', '800'],
  display: 'swap',
})

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL ?? 'https://solarpro.example.com'),
  title: {
    default: 'SolarPro Installations — Clean energy for homes and businesses',
    template: '%s | SolarPro Installations',
  },
  description:
    'Licensed solar installation specialists. Residential and commercial systems across NSW. Free instant quote in under 3 minutes.',
  openGraph: {
    type: 'website',
    siteName: 'SolarPro Installations',
  },
  twitter: {
    card: 'summary_large_image',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${sora.variable}`}
    >
      <body className="antialiased bg-surface-canvas text-text-default">
        {/* Skip to main — first focusable element on every page */}
        <a href="#main-content" className="skip-link">
          Skip to main content
        </a>
        <ThemeProvider>
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
