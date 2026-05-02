import type { Metadata } from 'next'
import { QuoteRequestForm } from '@/components/forms/quote-request-form'
import { CallbackRequestForm } from '@/components/forms/callback-request-form'
import { Phone, MapPin, Clock } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Contact Us',
  description: 'Get in touch with our plumbing team. Request a quote or book a callback today.',
}

export default function ContactPage() {
  const phoneNumber = '1300 XXX XXX'
  const phoneHref = 'tel:1300XXXXXX'

  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold mb-4">Contact Us</h1>
      <p className="text-xl text-gray-600 mb-12 max-w-2xl">
        Get in touch — we&apos;re available 24/7 for emergencies and respond to quote requests within the hour.
      </p>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        <div>
          <div className="flex flex-col gap-6 mb-10">
            <div className="flex items-start gap-4">
              <Phone className="h-6 w-6 text-brand-blue flex-shrink-0 mt-1" />
              <div>
                <p className="font-semibold mb-1">Phone</p>
                <a href={phoneHref} className="text-brand-blue text-lg font-bold hover:text-brand-blue-dark">
                  {phoneNumber}
                </a>
                <p className="text-gray-500 text-sm mt-1">24/7 for emergencies</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <Clock className="h-6 w-6 text-brand-blue flex-shrink-0 mt-1" />
              <div>
                <p className="font-semibold mb-1">Business Hours</p>
                <p className="text-gray-600 text-sm">Mon–Fri: 7am–6pm</p>
                <p className="text-gray-600 text-sm">Sat: 8am–4pm</p>
                <p className="text-gray-600 text-sm">Sun & Public Holidays: Emergency only</p>
              </div>
            </div>
          </div>

          <h2 className="text-2xl font-bold mb-4">Request a Callback</h2>
          <CallbackRequestForm sourcePage="/contact" />
        </div>

        <div>
          <h2 className="text-2xl font-bold mb-4">Get a Free Quote</h2>
          <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm">
            <QuoteRequestForm sourcePage="/contact" />
          </div>
        </div>
      </div>
    </div>
  )
}
