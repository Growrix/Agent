import type { Metadata } from 'next'
import Link from 'next/link'
import { t } from '@/lib/content'
import { api } from '@/lib/api-client'
import TestimonialRail from '@/components/ui/TestimonialRail'
import CtaBand from '@/components/ui/CtaBand'

export const metadata: Metadata = {
  title: 'Customer Reviews',
  description: 'Real reviews from homeowners and businesses across NSW. 4.9 stars from 248 reviews.',
}

export default async function TestimonialsPage() {
  const testimonials = await api.testimonials.list()
  const aggregate = await api.testimonials.aggregate()

  return (
    <>
      {/* ── HERO: Quote-forward; giant decorative quote marks; NO photography ── */}
      <section
        className="relative py-24 overflow-hidden bg-surface-canvas"
        aria-label={t('testimonials.hero.title')}
      >
        {/* Giant decorative quote mark */}
        <span
          aria-hidden="true"
          className="absolute -top-4 left-4 font-display font-black text-text-strong select-none pointer-events-none"
          style={{ fontSize: '18rem', lineHeight: 1, opacity: 0.04 }}
        >
          &ldquo;
        </span>

        {/* Aggregate rating tile — floats top-right */}
        <div
          className="absolute top-8 right-6 lg:right-12 card px-5 py-4 text-center shadow-md hidden sm:block"
          aria-label={`Average rating ${aggregate.rating} from ${aggregate.count}`}
        >
          <p className="text-display-section font-display font-bold text-brand-primary leading-none">
            {aggregate.rating}
          </p>
          <div className="flex gap-0.5 justify-center my-1" role="img" aria-label="5 stars">
            {[1,2,3,4,5].map((s) => (
              <svg key={s} viewBox="0 0 20 20" fill="currentColor" className="w-4 h-4 text-brand-accent" aria-hidden="true">
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
            ))}
          </div>
          <p className="text-xs text-text-muted font-medium">{aggregate.count}</p>
          <p className="text-xs text-text-muted mt-1">{aggregate.sources}</p>
        </div>

        <div className="container-solar relative max-w-3xl">
          <p className="eyebrow mb-4">{t('testimonials.hero.eyebrow')}</p>
          <h1 className="text-display-section font-display font-bold text-text-strong mb-4 italic leading-snug">
            {t('testimonials.hero.title')}
          </h1>
          <p className="text-body-fluid text-text-muted">{t('testimonials.hero.subtitle')}</p>
        </div>
      </section>

      {/* ── TESTIMONIAL RAIL (featured) ── */}
      <section className="py-section-xl bg-surface-base" aria-label="Featured reviews">
        <div className="container-solar max-w-3xl">
          <TestimonialRail testimonials={testimonials.slice(0, 4)} />
        </div>
      </section>

      {/* ── FULL GRID ── */}
      <section className="py-section-xl bg-surface-canvas" aria-label={t('testimonials.list.title')}>
        <div className="container-solar">
          <h2 className="text-display-section font-display font-bold text-text-strong mb-10 text-center">
            {t('testimonials.list.title')}
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {testimonials.map((review) => (
              <article
                key={review.id}
                className="card p-6 flex flex-col gap-3"
                aria-label={`Review by ${review.name}`}
              >
                <div className="flex gap-0.5" role="img" aria-label={`${review.rating} out of 5 stars`}>
                  {[1,2,3,4,5].map((s) => (
                    <svg key={s} viewBox="0 0 20 20" fill="currentColor" className={`w-4 h-4 ${s <= review.rating ? 'text-brand-accent' : 'text-border-strong'}`} aria-hidden="true">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <blockquote>
                  <p className="text-sm text-text-default leading-relaxed">
                    &ldquo;{review.review}&rdquo;
                  </p>
                </blockquote>
                <div className="mt-auto pt-4 border-t border-border-subtle">
                  <p className="font-semibold text-sm text-text-strong">{review.name}</p>
                  <p className="text-xs text-text-muted mt-0.5">
                    {review.location} &middot; {review.projectType}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <CtaBand
        title={t('testimonials.cta.title')}
        subtitle={t('testimonials.cta.subtitle')}
        primaryLabel={t('cta.get_quote')}
        primaryHref="/quote"
        variant="brand"
      />
    </>
  )
}
