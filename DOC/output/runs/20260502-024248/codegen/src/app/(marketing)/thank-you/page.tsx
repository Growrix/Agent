import type { Metadata } from 'next'
import { Suspense } from 'react'
import { CheckCircle, Phone } from 'lucide-react'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Thank You — Enquiry Received',
  robots: { index: false },
}

function ThankYouContent({ type }: { type: string | null }) {
  const isQuote = type === 'quote'
  return (
    <div className="text-center max-w-lg mx-auto">
      <div className="inline-flex items-center justify-center w-16 h-16 bg-green-100 rounded-full mb-6">
        <CheckCircle className="h-8 w-8 text-green-600" />
      </div>
      <h1 className="text-3xl font-bold mb-4">
        {isQuote ? 'Quote Request Received!' : 'Callback Request Received!'}
      </h1>
      <p className="text-xl text-gray-600 mb-6">
        {isQuote
          ? 'Thanks for getting in touch. We\'ll review your request and get back to you within the hour with an upfront quote.'
          : 'Thanks! We\'ll call you back as soon as possible — usually within the hour during business hours.'}
      </p>
      <p className="text-gray-600 mb-8">
        Need to speak with someone right now?{' '}
        <a href="tel:1300XXXXXX" className="text-brand-blue font-bold hover:text-brand-blue-dark">
          Call 1300 XXX XXX
        </a>
      </p>
      <Link
        href="/"
        className="inline-flex items-center gap-2 bg-brand-blue text-white hover:bg-brand-blue-dark font-semibold py-3 px-6 rounded-lg transition-colors"
      >
        Back to Home
      </Link>
    </div>
  )
}

export default function ThankYouPage({
  searchParams,
}: {
  searchParams: Promise<{ type?: string }>
}) {
  return (
    <div className="container mx-auto px-4 py-20">
      <Suspense fallback={<div className="text-center py-20">Loading...</div>}>
        <ThankYouPageInner searchParamsPromise={searchParams} />
      </Suspense>
    </div>
  )
}

async function ThankYouPageInner({
  searchParamsPromise,
}: {
  searchParamsPromise: Promise<{ type?: string }>
}) {
  const params = await searchParamsPromise
  return <ThankYouContent type={params.type ?? null} />
}
