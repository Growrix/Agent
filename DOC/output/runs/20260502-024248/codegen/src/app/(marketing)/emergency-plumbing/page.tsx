import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { getMarketingPageBySlug } from '@/sanity/queries/pages'
import { CallbackRequestForm } from '@/components/forms/callback-request-form'
import { Phone, AlertTriangle } from 'lucide-react'

export const revalidate = 30

export async function generateMetadata(): Promise<Metadata> {
  const page = await getMarketingPageBySlug('emergency-plumbing')
  return {
    title: page?.seo?.metaTitle ?? '24/7 Emergency Plumber | Call Now',
    description: page?.seo?.metaDescription ?? 'Emergency plumber available 24/7. Burst pipes, blocked drains, gas leaks — we respond fast.',
  }
}

export default async function EmergencyPlumbingPage() {
  const phoneNumber = '1300 XXX XXX'
  const phoneHref = 'tel:1300XXXXXX'

  return (
    <div>
      {/* Emergency Hero — highest urgency layout */}
      <section className="bg-red-600 text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <div className="inline-flex items-center gap-2 bg-red-500 text-white text-sm font-bold px-4 py-2 rounded-full mb-6 animate-pulse">
            <AlertTriangle className="h-4 w-4" />
            Available Right Now — 24/7
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Emergency Plumber — We Come to You Fast</h1>
          <p className="text-xl text-red-100 mb-8 max-w-xl mx-auto">
            Burst pipe? Blocked drain? Gas leak? Don&apos;t wait — call now and a licenced plumber will be dispatched immediately.
          </p>
          <a
            href={phoneHref}
            className="inline-flex items-center gap-3 bg-white text-red-600 hover:bg-red-50 font-bold text-2xl py-5 px-10 rounded-xl transition-colors shadow-lg"
          >
            <Phone className="h-7 w-7" />
            {phoneNumber}
          </a>
          <p className="mt-4 text-red-200 text-sm">No call-out fees. Upfront pricing. Fully licenced.</p>
        </div>
      </section>

      {/* Common emergencies */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 text-center">Common Emergency Plumbing Jobs</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {[
              'Burst Pipes',
              'Blocked Drains',
              'Gas Leaks',
              'Flooding',
              'Hot Water Failure',
              'Sewage Backups',
            ].map((item) => (
              <div key={item} className="bg-red-50 border border-red-100 rounded-lg p-4 text-center font-medium text-red-800">
                {item}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Callback form */}
      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-md mx-auto">
            <h2 className="text-2xl font-bold mb-2 text-center">Can&apos;t Call Right Now?</h2>
            <p className="text-gray-600 text-center mb-6">Leave your number and we&apos;ll call you back within minutes.</p>
            <CallbackRequestForm sourcePage="/emergency-plumbing" />
          </div>
        </div>
      </section>
    </div>
  )
}
