import type { Metadata } from 'next'
import { GeistSans } from 'geist/font/sans'
import { GeistMono } from 'geist/font/mono'
import { ClerkProvider } from '@clerk/nextjs'
import { PostHogProvider } from '@/components/providers/posthog-provider'
import './globals.css'

export const metadata: Metadata = {
  title: {
    default: 'Expert Plumbing Services | Your Local Plumber',
    template: '%s | Expert Plumbing Services',
  },
  description: 'Fast, reliable plumbing services across the region. Available 24/7 for emergencies. Call now for a free quote.',
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL ?? 'https://yourdomain.com.au'),
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <ClerkProvider
      signInUrl={process.env.NEXT_PUBLIC_CLERK_SIGN_IN_URL}
      afterSignInUrl={process.env.NEXT_PUBLIC_CLERK_AFTER_SIGN_IN_URL}
    >
      <html lang="en-AU" className={`${GeistSans.variable} ${GeistMono.variable}`}>
        <body className="min-h-screen bg-background font-sans antialiased">
          <PostHogProvider>
            {children}
          </PostHogProvider>
        </body>
      </html>
    </ClerkProvider>
  )
}
