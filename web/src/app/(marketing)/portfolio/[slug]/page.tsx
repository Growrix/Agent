import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import Image from 'next/image'
import Link from 'next/link'
import { t } from '@/lib/content'
import { api } from '@/lib/api-client'
import CtaBand from '@/components/ui/CtaBand'

interface Props {
  params: Promise<{ slug: string }>
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params
  const project = await api.portfolio.bySlug(slug)
  if (!project) return { title: 'Project not found' }
  return { title: project.title, description: project.highlights.join('. ') }
}

export default async function PortfolioDetailPage({ params }: Props) {
  const { slug } = await params
  const project = await api.portfolio.bySlug(slug)
  if (!project) notFound()

  return (
    <>
      <section className="relative h-80 lg:h-[480px] overflow-hidden" aria-label={project.title}>
        <Image
          src={project.image}
          alt={project.title}
          fill
          priority
          className="object-cover"
          sizes="100vw"
        />
        <div
          className="absolute inset-0"
          style={{ background: 'linear-gradient(to top, var(--color-surface-overlay) 0%, transparent 60%)' }}
          aria-hidden="true"
        />
        <div className="absolute bottom-8 container-solar left-0 right-0 mx-auto">
          <Link href="/portfolio" className="text-text-inverse/80 text-sm hover:text-text-inverse transition-fast mb-2 inline-block">
            ← {t('nav.portfolio')}
          </Link>
          <div className="flex items-center gap-3 mb-2">
            <span className="trust-chip bg-text-inverse/10 border-text-inverse/20 text-text-inverse text-xs">
              {project.type}
            </span>
            <span className="trust-chip bg-text-inverse/10 border-text-inverse/20 text-text-inverse text-xs">
              {project.systemSizeKw} kW
            </span>
          </div>
          <h1 className="text-display-section font-display font-bold text-text-inverse">
            {project.title}
          </h1>
        </div>
      </section>

      <section className="py-section-xl bg-surface-base">
        <div className="container-solar grid lg:grid-cols-[2fr_1fr] gap-16">
          <div>
            <p className="text-sm text-text-muted mb-2">{project.location}</p>
            <p className="text-body-fluid text-text-muted mb-10">
              Completed {new Date(project.completedAt).toLocaleDateString('en-AU', { month: 'long', year: 'numeric' })}
            </p>
            <h2 className="text-title-fluid font-display font-bold text-text-strong mb-6">
              Project highlights
            </h2>
            <ul className="flex flex-col gap-4" role="list">
              {project.highlights.map((h) => (
                <li key={h} className="flex items-start gap-4 p-4 bg-surface-canvas rounded-lg border border-border-subtle">
                  <span className="w-8 h-8 rounded-pill bg-brand-primary/10 flex items-center justify-center shrink-0 mt-0.5">
                    <svg viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" className="w-3.5 h-3.5 text-brand-primary" aria-hidden="true"><polyline points="13 4 6 11 3 8" /></svg>
                  </span>
                  <span className="text-text-default">{h}</span>
                </li>
              ))}
            </ul>
          </div>
          <aside className="sticky top-24 h-fit">
            <div className="card p-6">
              <h3 className="font-display font-bold text-text-strong mb-3">
                Get a similar result for your property
              </h3>
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
        title="Your property could be next"
        subtitle="Get a free site assessment and instant estimate."
        primaryLabel={t('cta.get_quote')}
        primaryHref="/quote"
        variant="brand"
      />
    </>
  )
}
