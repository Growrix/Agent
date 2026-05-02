import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { getHomepageBySlug } from '@/sanity/queries/pages'
import { getAllServices } from '@/sanity/queries/services'
import { getApprovedTestimonials } from '@/sanity/queries/testimonials'
import { getFaqItems } from '@/sanity/queries/faq'
import { EmergencyCtaBanner } from '@/components/conversion/emergency-cta-banner'
import { TrustBadges } from '@/components/conversion/trust-badges'
import { CallbackRequestForm } from '@/components/forms/callback-request-form'
import { Phone, Star, CheckCircle, Clock } from 'lucide-react'
import Link from 'next/link'
import Image from 'next/image'

export async function generateMetadata(): Promise<Metadata> {
  const page = await getHomepageBySlug('home')
  return {
    title: page?.seo?.metaTitle ?? 'Expert Plumbing Services | Your Local Plumber',
    description: page?.seo?.metaDescription ?? 'Fast, reliable plumbing services. Available 24/7 for emergencies.',
    openGraph: {
      images: page?.seo?.ogImage
        ? [{ url: page.seo.ogImage.asset.url }]
        : [],
    },
  }
}

export default async function HomePage() {
  const [page, services, testimonials, faqItems] = await Promise.all([
    getHomepageBySlug('home'),
    getAllServices(),
    getApprovedTestimonials(),
    getFaqItems(),
  ])

  const phoneNumber = '1300 XXX XXX'
  const phoneHref = 'tel:1300XXXXXX'

  return (
    <>
      {/* Hero Section */}
      <section className="relative bg-brand-blue text-white py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-4 leading-tight">
              Your Local Plumber — Fast, Reliable &amp; Licenced
            </h1>
            <p className="text-xl mb-8 text-blue-100">
              Available 24/7 for emergency plumbing across the region. Upfront pricing, no call-out surprises.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href={phoneHref}
                className="inline-flex items-center justify-center gap-2 bg-brand-orange hover:bg-brand-orange-dark text-white font-bold py-4 px-8 rounded-lg text-lg transition-colors"
              >
                <Phone className="h-5 w-5" />
                Call {phoneNumber}
              </a>
              <Link
                href="/quote"
                className="inline-flex items-center justify-center gap-2 bg-white text-brand-blue hover:bg-blue-50 font-bold py-4 px-8 rounded-lg text-lg transition-colors"
              >
                Get a Free Quote
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Emergency CTA Banner */}
      <EmergencyCtaBanner phoneHref={phoneHref} phoneNumber={phoneNumber} />

      {/* Trust Badges */}
      <section className="py-8 bg-gray-50 border-b">
        <div className="container mx-auto px-4">
          <TrustBadges />
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-4">Our Plumbing Services</h2>
          <p className="text-center text-gray-600 mb-12 max-w-xl mx-auto">
            From blocked drains to hot water systems — we handle every residential and commercial plumbing job.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.slice(0, 6).map((service) => (
              <Link
                key={service._id}
                href={`/services/${service.slug.current}`}
                className="group bg-white border border-gray-200 rounded-xl p-6 hover:border-brand-blue hover:shadow-md transition-all"
              >
                <h3 className="text-lg font-semibold mb-2 group-hover:text-brand-blue transition-colors">
                  {service.title}
                </h3>
                {service.excerpt && (
                  <p className="text-gray-600 text-sm line-clamp-2">{service.excerpt}</p>
                )}
              </Link>
            ))}
          </div>
          {services.length > 6 && (
            <div className="text-center mt-8">
              <Link
                href="/services"
                className="inline-flex items-center gap-2 text-brand-blue hover:text-brand-blue-dark font-semibold"
              >
                View All Services →
              </Link>
            </div>
          )}
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Why Locals Choose Us</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { icon: Clock, title: '24/7 Emergency Response', desc: 'We answer the phone day and night — burst pipe or blocked drain, we\'re there fast.' },
              { icon: CheckCircle, title: 'Fully Licenced &amp; Insured', desc: 'All work completed by licenced tradespeople to Australian Standards.' },
              { icon: Star, title: 'Upfront Fixed Pricing', desc: 'No hidden charges. You\'ll know the price before we start work.' },
            ].map(({ icon: Icon, title, desc }) => (
              <div key={title} className="text-center">
                <div className="inline-flex items-center justify-center w-12 h-12 bg-brand-blue rounded-full mb-4">
                  <Icon className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold mb-2" dangerouslySetInnerHTML={{ __html: title }} />
                <p className="text-gray-600">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Preview */}
      {testimonials.length > 0 && (
        <section className="py-16">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-4">What Our Customers Say</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-10">
              {testimonials.slice(0, 3).map((t) => (
                <div key={t._id} className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm">
                  <div className="flex gap-1 mb-3">
                    {Array.from({ length: t.rating }).map((_, i) => (
                      <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                  <p className="text-gray-700 italic mb-4">&ldquo;{t.body}&rdquo;</p>
                  <p className="font-semibold text-sm">{t.name}</p>
                  {t.suburb && <p className="text-gray-500 text-sm">{t.suburb}</p>}
                </div>
              ))}
            </div>
            <div className="text-center mt-8">
              <Link href="/testimonials" className="text-brand-blue hover:text-brand-blue-dark font-semibold">
                Read more reviews →
              </Link>
            </div>
          </div>
        </section>
      )}

      {/* Quick Callback Form */}
      <section className="py-16 bg-brand-blue text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-3">Request a Callback</h2>
            <p className="text-center text-blue-100 mb-8">Leave your number and we&apos;ll call you back within the hour.</p>
            <CallbackRequestForm sourcePage="/" variant="light" />
          </div>
        </div>
      </section>
    </>
  )
}
