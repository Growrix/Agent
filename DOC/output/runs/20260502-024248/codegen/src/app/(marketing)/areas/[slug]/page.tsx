import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { getServiceAreaBySlug, getAllServiceAreaSlugs } from '@/sanity/queries/areas'
import { QuoteRequestForm } from '@/components/forms/quote-request-form'
import { Phone, MapPin } from 'lucide-react'

export async function generateStaticParams() {
  const slugs = await getAllServiceAreaSlugs()
  return slugs.map((slug) => ({ slug }))
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>
}): Promise<Metadata> {
  const { slug } = await params
  const area = await getServiceAreaBySlug(slug)
  if (!area) return {}
  return {
    title: area.seo?.metaTitle ?? `Plumber in ${area.suburb || area.title}`,
    description: area.seo?.metaDescription ?? `Local licenced plumber in ${area.suburb || area.title}. Fast response, upfront pricing.`,
  }
}

export default async function AreaPage({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  const area = await getServiceAreaBySlug(slug)

  if (!area) {
    notFound()
  }

  const suburb = area.suburb || area.title
  const phoneNumber = '1300 XXX XXX'
  const phoneHref = 'tel:1300XXXXXX'

  return (
    <div>
      <section className="bg-gray-50 py-12 border-b">
        <div className="container mx-auto px-4">
          <nav className="text-sm text-gray-500 mb-4">
            <a href="/" className="hover:text-brand-blue">Home</a>
            {' / '}
            <a href="/areas" className="hover:text-brand-blue">Service Areas</a>
            {' / '}
            <span className="text-gray-900">{suburb}</span>
          </nav>
          <div className="flex items-start gap-3 mb-4">
            <MapPin className="h-8 w-8 text-brand-blue flex-shrink-0 mt-1" />
            <div>
              <h1 className="text-4xl font-bold">Plumber in {suburb}</h1>
              {area.region && <p className="text-gray-500 mt-1">{area.region}</p>}
            </div>
          </div>
          <p className="text-xl text-gray-600 mb-6 max-w-2xl">
            Local licenced plumber servicing {suburb} and surrounding areas. Same-day and emergency bookings available.
          </p>
          <a
            href={phoneHref}
            className="inline-flex items-center gap-2 bg-brand-orange hover:bg-brand-orange-dark text-white font-bold py-3 px-6 rounded-lg transition-colors"
          >
            <Phone className="h-5 w-5" />
            Call {phoneNumber}
          </a>
        </div>
      </section>

      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          <div className="lg:col-span-2">
            <h2 className="text-2xl font-bold mb-4">Plumbing Services in {suburb}</h2>
            <p className="text-gray-600 mb-6">
              Our fully licenced plumbers cover all residential and commercial plumbing needs in {suburb}. 
              From emergency burst pipes to routine tap repairs, we offer upfront pricing and fast response times.
            </p>
          </div>
          <div className="lg:col-span-1">
            <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm sticky top-24">
              <h2 className="text-xl font-bold mb-4">Get a Quote in {suburb}</h2>
              <QuoteRequestForm sourcePage={`/areas/${slug}`} defaultSuburb={suburb} />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
