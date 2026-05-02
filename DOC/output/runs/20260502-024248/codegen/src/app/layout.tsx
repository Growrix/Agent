import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { ClerkProvider } from '@clerk/nextjs'
import { PostHogProvider } from '@/components/providers/posthog-provider'
import './globals.css'

const clerkKey = process.env.NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY ?? ''
const clerkReady = clerkKey.startsWith('pk_test_') && clerkKey !== 'pk_test_placeholder'

const inter = Inter({ subsets: ['latin'], variable: '--font-sans' })

export const metadata: Metadata = {
  title: {
    default: 'Expert Plumbing Services | Your Local Plumber',
    template: '%s | Expert Plumbing Services',
  },
  description: 'Fast, reliable plumbing services across the region. Available 24/7 for emergencies. Call now for a free quote.',
  metadataBase: new URL(process.env.NEXT_PUBLIC_APP_URL ?? 'https://yourdomain.com.au'),
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const inner = (
    <html lang="en-AU" className={inter.variable}>
      <body className="min-h-screen bg-background font-sans antialiased">
        <PostHogProvider>{children}</PostHogProvider>
      </body>
    </html>
  )
  return clerkReady ? <ClerkProvider>{inner}</ClerkProvider> : inner
}
