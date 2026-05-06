import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import CtaBand from '@/components/ui/CtaBand'
import { t } from '@/lib/content'
import { api } from '@/lib/api-client'

export const metadata: Metadata = {
  title: 'Portfolio — Solar Installations',
  description: 'Real residential and commercial solar projects across NSW.',
}

export default async function PortfolioPage() {
  const projects = await api.portfolio.list()

  return (
    <>
      {/* ── HERO: 3-column bleed grid IS the hero; frosted glass title card ── */}
      <section className="relative" aria-label={t('portfolio.hero.title')}>
        <div className="grid grid-cols-3 gap-0.5 h-[500px] lg:h-[600px]">
          <div className="relative col-span-2">
            <Image
              src="https://images.unsplash.com/photo-1613665813446-82a78c468a1d?w=1000&q=85"
              alt="Hunter Valley winery commercial solar installation"
              fill
              priority
              className="object-cover"
              sizes="(max-width: 1024px) 66vw, 66vw"
            />
          </div>
          <div className="grid grid-rows-2 gap-0.5">
            <div className="relative overflow-hidden">
              <Image
                src="https://images.unsplash.com/photo-1508514177221-188b1cf16e9d?w=600&q=80"
                alt="Residential solar panels on rooftop"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 33vw, 33vw"
              />
            </div>
            <div className="relative overflow-hidden">
              <Image
                src="https://images.unsplash.com/photo-1509391366360-2e959784a276?w=600&q=80"
                alt="Commercial rooftop solar array"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 33vw, 33vw"
              />
            </div>
          </div>
        </div>

        {/* Frosted glass title card — top-left */}
        <div
          className="absolute top-6 left-6 lg:top-10 lg:left-10 max-w-sm p-6 rounded-2xl"
          style={{
            background: 'rgba(255,255,255,0.82)',
            backdropFilter: 'blur(16px)',
            WebkitBackdropFilter: 'blur(16px)',
            boxShadow: 'var(--shadow-lg)',
            border: '1px solid rgba(255,255,255,0.6)',
          }}
        >
          <p className="eyebrow mb-2">{t('portfolio.hero.eyebrow')}</p>
          <h1 className="font-display font-bold text-text-strong leading-snug" style={{ fontSize: 'clamp(1.1rem, 2vw, 1.5rem)' }}>
            {t('portfolio.hero.title')}
          </h1>
          <p className="text-sm text-text-muted mt-2">{t('portfolio.hero.subtitle')}</p>
        </div>
      </section>

      {/* ── PROJECT GRID ── */}
      <section className="py-section-xl bg-surface-canvas" aria-label="All projects">
        <div className="container-solar">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project) => (
              <article key={project.slug}>
                <Link
                  href={`/portfolio/${project.slug}`}
                  className="group block card overflow-hidden focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-focus-ring rounded-lg"
                >
                  <div className="relative aspect-video overflow-hidden bg-surface-raised">
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      className="object-cover transition-base group-hover:scale-[1.03]"
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    />
                    <span className="absolute top-3 right-3 trust-chip bg-text-strong text-text-inverse border-0 text-xs">
                      {project.systemSizeKw} kW
                    </span>
                  </div>
                  <div className="p-5">
                    <span className="eyebrow text-xs mb-1 block">{project.type}</span>
                    <h2 className="font-display font-semibold text-text-strong mb-2 leading-snug group-hover:text-brand-primary transition-fast">
                      {project.title}
                    </h2>
                    <p className="text-sm text-text-muted mb-3">{project.location}</p>
                    <ul className="flex flex-col gap-1" role="list">
                      {project.highlights.slice(0, 2).map((h) => (
                        <li key={h} className="text-sm text-text-default flex items-center gap-2">
                          <span className="w-1.5 h-1.5 rounded-full bg-brand-primary shrink-0" aria-hidden="true" />
                          {h}
                        </li>
                      ))}
                    </ul>
                  </div>
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>

      <CtaBand
        title={t('portfolio.cta_title')}
        subtitle={t('portfolio.cta_subtitle')}
        primaryLabel={t('cta.get_quote')}
        primaryHref="/quote"
        variant="brand"
      />
    </>
  )
}
