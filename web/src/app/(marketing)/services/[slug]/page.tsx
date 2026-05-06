import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import Image from 'next/image'
import Link from 'next/link'
import { t } from '@/lib/content'
import { api } from '@/lib/api-client'
import CtaBand from '@/components/ui/CtaBand'
import CaseStudyTimeline from '@/components/ui/CaseStudyTimeline'

interface Props {
  params: Promise<{ slug: string }>
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params
  const service = await api.services.bySlug(slug)
  if (!service) return { title: 'Service not found' }
  return {
    title: service.title,
    description: service.description,
  }
}

const PROCESS_STEPS = [
  { number: 1, title: 'Free site assessment', body: 'Roof, shading, and usage profile evaluated at no cost.' },
  { number: 2, title: 'Custom system design', body: 'System matched exactly to your property and energy goals.' },
  { number: 3, title: 'Installation & commissioning', body: 'CEC-accredited team installs and commissions your system.' },
  { number: 4, title: 'Monitoring & support', body: 'Real-time monitoring and rapid-response service team.' },
]

export default async function ServiceDetailPage({ params }: Props) {
  const { slug } = await params
  const service = await api.services.bySlug(slug)
  if (!service) notFound()

  return (
    <>
      {/* Hero */}
      <section className="relative h-72 lg:h-96 overflow-hidden" aria-label={service.title}>
        <Image
          src={service.image}
          alt={service.title}
          fill
          priority
          className="object-cover"
          sizes="100vw"
        />
        <div
          className="absolute inset-0"
          style={{ background: 'linear-gradient(to top, var(--color-surface-overlay) 0%, rgba(15,23,42,0.3) 60%, transparent 100%)' }}
          aria-hidden="true"
        />
        <div className="absolute bottom-8 left-0 right-0 container-solar">
          <Link href="/services" className="text-text-inverse/80 text-sm hover:text-text-inverse transition-fast mb-2 inline-block">
            ← {t('nav.services')}
          </Link>
          <h1 className="text-display-section font-display font-bold text-text-inverse">{service.title}</h1>
        </div>
      </section>

      <section className="py-section-xl bg-surface-base">
        <div className="container-solar grid lg:grid-cols-[2fr_1fr] gap-16">
          <div>
            <p className="text-body-fluid text-text-muted leading-relaxed mb-8">{service.description}</p>
            <h2 className="text-title-fluid font-display font-bold text-text-strong mb-6">
              What&apos;s included
            </h2>
            <ul className="flex flex-col gap-3 mb-12" role="list">
              {service.features.map((f) => (
                <li key={f} className="flex items-start gap-3">
                  <span className="mt-0.5 w-5 h-5 rounded-pill bg-state-success/10 flex items-center justify-center shrink-0">
                    <svg viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" className="w-3 h-3 text-state-success" aria-hidden="true"><polyline points="13 4 6 11 3 8" /></svg>
                  </span>
                  <span className="text-sm text-text-default">{f}</span>
                </li>
              ))}
            </ul>
            <CaseStudyTimeline steps={PROCESS_STEPS} />
          </div>

          {/* Sidebar CTA */}
          <aside className="sticky top-24 h-fit">
            <div className="card p-6">
              <h3 className="font-display font-bold text-text-strong mb-3">
                Get a free quote for {service.title.toLowerCase()}
              </h3>
              <p className="text-sm text-text-muted mb-6">
                Use our instant calculator to estimate system size and savings.
              </p>
              <Link href="/quote" className="btn btn-primary w-full justify-center mb-3">
                {t('cta.get_quote')}
              </Link>
              <Link href="/contact" className="btn btn-outline w-full justify-center">
                {t('cta.book_call')}
              </Link>
            </div>
          </aside>
        </div>
      </section>

      <CtaBand
        title="Ready to get started?"
        subtitle="Our engineers are ready to design your system."
        primaryLabel={t('cta.get_quote')}
        primaryHref="/quote"
        variant="brand"
      />
    </>
  )
}
