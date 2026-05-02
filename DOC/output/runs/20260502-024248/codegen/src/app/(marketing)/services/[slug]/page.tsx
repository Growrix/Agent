import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { getServiceBySlug, getAllServiceSlugs } from '@/sanity/queries/services'
import { QuoteRequestForm } from '@/components/forms/quote-request-form'
import { Phone, CheckCircle } from 'lucide-react'

export async function generateStaticParams() {
  const slugs = await getAllServiceSlugs()
  return slugs.map((slug) => ({ slug }))
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>
}): Promise<Metadata> {
  const { slug } = await params
  const service = await getServiceBySlug(slug)
  if (!service) return {}
  return {
    title: service.seo?.metaTitle ?? service.title,
    description: service.seo?.metaDescription,
    openGraph: {
      images: service.seo?.ogImage ? [{ url: service.seo.ogImage.asset.url }] : [],
    },
  }
}

export default async function ServicePage({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  const service = await getServiceBySlug(slug)

  if (!service) {
    notFound()
  }

  const phoneNumber = '1300 XXX XXX'
  const phoneHref = 'tel:1300XXXXXX'

  return (
    <div>
      {/* Hero */}
      <section className="bg-gray-50 py-12 border-b">
        <div className="container mx-auto px-4">
          <nav className="text-sm text-gray-500 mb-4">
            <a href="/" className="hover:text-brand-blue">Home</a>
            {' / '}
            <a href="/services" className="hover:text-brand-blue">Services</a>
            {' / '}
            <span className="text-gray-900">{service.title}</span>
          </nav>
          <h1 className="text-4xl font-bold mb-4">{service.title}</h1>
          {service.excerpt && (
            <p className="text-xl text-gray-600 mb-6 max-w-2xl">{service.excerpt}</p>
          )}
          <div className="flex flex-col sm:flex-row gap-4">
            <a
              href={phoneHref}
              className="inline-flex items-center gap-2 bg-brand-orange hover:bg-brand-orange-dark text-white font-bold py-3 px-6 rounded-lg transition-colors"
            >
              <Phone className="h-5 w-5" />
              Call {phoneNumber}
            </a>
          </div>
        </div>
      </section>

      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Main content */}
          <div className="lg:col-span-2">
            {Array.isArray(service.body) && service.body.length > 0 && (
              <div className="prose prose-lg max-w-none">
                {/* Portable text would be rendered here with a proper PT renderer */}
                <p className="text-gray-600">Service details loaded from CMS.</p>
              </div>
            )}
          </div>

          {/* Sidebar — Quote Form */}
          <div className="lg:col-span-1">
            <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm sticky top-24">
              <h2 className="text-xl font-bold mb-4">Get a Quote for {service.title}</h2>
              <QuoteRequestForm
                sourcePage={`/services/${slug}`}
                defaultServiceSlug={slug}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
