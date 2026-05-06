import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { t } from '@/lib/content'
import CtaBand from '@/components/ui/CtaBand'

export const metadata: Metadata = {
  title: 'About SolarPro',
  description: 'Our mission, values, and the team behind every NSW solar installation.',
}

const VALUES = [
  { key: 'quality', icon: '⚡' },
  { key: 'integrity', icon: '🤝' },
  { key: 'sustainability', icon: '🌿' },
  { key: 'innovation', icon: '💡' },
]

const TEAM = [
  {
    name: 'James Thornton',
    role: 'Founder & Head of Engineering',
    avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=200&q=80',
  },
  {
    name: 'Sarah Chen',
    role: 'Lead Solar Designer',
    avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=200&q=80',
  },
  {
    name: 'Mike Patel',
    role: 'Commercial Projects Manager',
    avatar: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=200&q=80',
  },
]

export default function AboutPage() {
  return (
    <>
      {/* ── HERO: Portrait 60/40 grid split ── */}
      <section className="grid lg:grid-cols-5 min-h-[520px]" aria-label={t('about.hero.title')}>
        {/* Left 60% — editorial portrait photo */}
        <div className="lg:col-span-3 relative min-h-64 overflow-hidden bg-surface-raised">
          <Image
            src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=1000&q=85"
            alt="SolarPro team on site during a rooftop installation"
            fill
            priority
            className="object-cover"
            sizes="(max-width: 1024px) 100vw, 60vw"
          />
          <div
            className="absolute inset-0"
            style={{ background: 'linear-gradient(120deg, transparent 40%, rgba(15,23,42,0.4) 100%)' }}
            aria-hidden="true"
          />
        </div>

        {/* Right 40% — editorial copy */}
        <div className="lg:col-span-2 bg-surface-base flex flex-col justify-center px-8 py-16 lg:px-14">
          {/* Year badge */}
          <div
            className="w-16 h-16 rounded-2xl flex items-center justify-center mb-8 font-display font-bold text-lg text-text-inverse"
            style={{ background: 'var(--color-brand-primary)' }}
            aria-label="Established 2012"
          >
            &rsquo;12
          </div>
          <p className="eyebrow mb-3">{t('about.hero.eyebrow')}</p>
          <h1 className="text-display-section font-display font-bold text-text-strong mb-5 leading-snug">
            {t('about.hero.title')}
          </h1>
          <p className="text-body-fluid text-text-muted leading-relaxed">
            {t('about.hero.subtitle')}
          </p>
        </div>
      </section>

      {/* ── VALUES ── */}
      <section className="py-section-xl bg-surface-canvas" aria-label={t('about.values.title')}>
        <div className="container-solar">
          <h2 className="text-display-section font-display font-bold text-text-strong mb-10 text-center">
            {t('about.values.title')}
          </h2>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {VALUES.map(({ key, icon }) => (
              <article key={key} className="card p-6 text-center">
                <span className="text-4xl mb-4 block" role="img" aria-label={t(`about.values.${key}_title`)}>
                  {icon}
                </span>
                <h3 className="font-display font-bold text-text-strong mb-2">
                  {t(`about.values.${key}_title`)}
                </h3>
                <p className="text-sm text-text-muted">{t(`about.values.${key}_body`)}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ── TEAM ── */}
      <section className="py-section-xl bg-surface-base" aria-label={t('about.team.title')}>
        <div className="container-solar">
          <h2 className="text-display-section font-display font-bold text-text-strong mb-10 text-center">
            {t('about.team.title')}
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
            {TEAM.map((member) => (
              <article key={member.name} className="text-center">
                <div className="relative w-24 h-24 mx-auto mb-4 rounded-full overflow-hidden bg-surface-raised">
                  <Image
                    src={member.avatar}
                    alt={member.name}
                    fill
                    className="object-cover"
                    sizes="96px"
                  />
                </div>
                <h3 className="font-display font-bold text-text-strong">{member.name}</h3>
                <p className="text-sm text-text-muted mt-1">{member.role}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ── CERTIFICATIONS ── */}
      <section className="py-section-md bg-surface-canvas border-t border-border-subtle" aria-label={t('about.certifications.title')}>
        <div className="container-solar text-center">
          <p className="eyebrow mb-4">{t('about.certifications.title')}</p>
          <div className="flex flex-wrap justify-center gap-4">
            {['CEC Accredited', 'NSW Licensed', 'SolarEdge Partner', 'Enphase Certified'].map((cert) => (
              <span key={cert} className="trust-chip text-sm">{cert}</span>
            ))}
          </div>
        </div>
      </section>

      <CtaBand
        title={t('about.cta_title')}
        subtitle={t('about.cta_subtitle')}
        primaryLabel={t('cta.get_quote')}
        primaryHref="/quote"
        variant="brand"
      />
    </>
  )
}
