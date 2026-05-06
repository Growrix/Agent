import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import HeroMediaStack from '@/components/ui/HeroMediaStack'
import CmsCardGrid from '@/components/ui/CmsCardGrid'
import CtaBand from '@/components/ui/CtaBand'
import CaseStudyTimeline from '@/components/ui/CaseStudyTimeline'
import { t } from '@/lib/content'
import { api } from '@/lib/api-client'

export const metadata: Metadata = {
  title: 'Solar Services',
  description:
    'Residential solar, commercial solar, battery storage, and monitoring services. Licensed NSW installers.',
}

const PROCESS_STEPS = [
  { number: 1, title: 'Free site assessment', body: 'We evaluate your roof, shading, and usage profile at no cost.' },
  { number: 2, title: 'Custom system design', body: 'Our engineers design a system matched to your property and budget.' },
  { number: 3, title: 'Permits & approvals', body: 'We handle all grid applications, council, and safety approvals.' },
  { number: 4, title: 'Professional installation', body: 'CEC-accredited technicians install your system on schedule.' },
  { number: 5, title: 'Commissioning & monitoring', body: 'We power up the system and connect you to real-time monitoring.' },
]

export default async function ServicesPage() {
  const services = await api.services.list()

  const serviceCards = services.map((s) => ({
    id: s.slug,
    title: s.title,
    subtitle: s.subtitle,
    href: `/services/${s.slug}`,
    image: s.image,
    imageAlt: s.title,
    chips: s.features.slice(0, 2),
  }))

  return (
    <>
      {/* ── HERO: Full-width cinematic banner with copy in lower-third ── */}
      <HeroMediaStack
        variant="services"
        eyebrow={t('services.hero.eyebrow')}
        title={t('services.hero.title')}
        subtitle={t('services.hero.subtitle')}
        primaryCta={{ label: t('services.hero.primary_cta'), href: '/quote' }}
        imageSrc="https://images.unsplash.com/photo-1509391366360-2e959784a276?w=1600&q=85"
        imageAlt="Solar panels installed across a large rooftop at sunrise"
        trustChips={[
          t('services.trust_chips.certified'),
          t('services.trust_chips.warranty'),
          t('services.trust_chips.response'),
        ]}
      />

      {/* ── SERVICES GRID ── */}
      <section className="py-section-xl bg-surface-base" aria-label={t('services.categories_title')}>
        <div className="container-solar">
          <h2 className="text-display-section font-display font-bold text-text-strong mb-10 text-center">
            {t('services.categories_title')}
          </h2>
          <CmsCardGrid items={serviceCards} columns={2} sectionLabel={t('services.categories_title')} />
        </div>
      </section>

      {/* ── HOW IT WORKS ── */}
      <section className="py-section-xl bg-surface-canvas" aria-label={t('services.process_title')}>
        <div className="container-solar max-w-2xl">
          <p className="eyebrow mb-3">{t('services.process_title')}</p>
          <h2 className="text-display-section font-display font-bold text-text-strong mb-12">
            {t('services.process_title')}
          </h2>
          <CaseStudyTimeline steps={PROCESS_STEPS} />
        </div>
      </section>

      {/* ── FINANCING + WARRANTY CALLOUT ── */}
      <section className="py-section-xl bg-surface-base" aria-label={t('services.financing_title')}>
        <div className="container-solar">
          <div className="rounded-2xl border border-border-subtle bg-surface-canvas p-8 lg:p-10 grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2">
              <p className="eyebrow mb-3">{t('services.financing_title')}</p>
              <h2 className="text-display-section font-display font-bold text-text-strong mb-4">
                {t('services.financing_banner.title')}
              </h2>
              <p className="text-body-fluid text-text-muted leading-relaxed max-w-2xl">
                {t('services.financing_banner.body')}
              </p>
            </div>
            <ul className="card p-6 flex flex-col gap-3" role="list" aria-label={t('services.warranty_title')}>
              {[t('services.financing_banner.point_1'), t('services.financing_banner.point_2'), t('services.financing_banner.point_3')].map((point) => (
                <li key={point} className="flex items-start gap-2 text-sm text-text-default">
                  <span className="mt-1 inline-flex h-2.5 w-2.5 rounded-pill bg-brand-primary" aria-hidden="true" />
                  <span>{point}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* ── CTA BAND ── */}
      <CtaBand
        title={t('services.cta_title')}
        subtitle={t('services.cta_subtitle')}
        primaryLabel={t('cta.get_quote')}
        primaryHref="/quote"
        secondaryLabel={t('cta.book_call')}
        secondaryHref="/contact"
        variant="brand"
      />
    </>
  )
}
