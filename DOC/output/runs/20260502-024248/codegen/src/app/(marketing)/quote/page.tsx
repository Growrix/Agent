import type { Metadata } from 'next'
import { QuoteRequestForm } from '@/components/forms/quote-request-form'
import { Phone, CheckCircle } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Get a Free Quote',
  description: 'Request a free, no-obligation plumbing quote. We\'ll get back to you within the hour.',
}

export default async function QuotePage() {
  const phoneNumber = '1300 XXX XXX'
  const phoneHref = 'tel:1300XXXXXX'

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="max-w-2xl mx-auto">
        <h1 className="text-4xl font-bold mb-4">Get a Free Quote</h1>
        <p className="text-xl text-gray-600 mb-8">
          Fill in the form below and we&apos;ll get back to you within the hour with an upfront, no-obligation quote.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8">
          {[
            'No call-out fees',
            'Upfront fixed pricing',
            'Response within 1 hour',
          ].map((item) => (
            <div key={item} className="flex items-center gap-2 text-sm text-gray-700">
              <CheckCircle className="h-4 w-4 text-green-500 flex-shrink-0" />
              {item}
            </div>
          ))}
        </div>

        <div className="bg-white border border-gray-200 rounded-xl p-6 md:p-8 shadow-sm">
          <QuoteRequestForm sourcePage="/quote" />
        </div>

        <div className="mt-8 text-center text-gray-600">
          <p>Prefer to call?</p>
          <a href={phoneHref} className="text-brand-blue font-bold text-lg hover:text-brand-blue-dark">
            {phoneNumber}
          </a>
        </div>
      </div>
    </div>
  )
}
