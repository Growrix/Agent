'use client'

import { useRef, useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { motion, useInView, useReducedMotion } from 'framer-motion'
import { t } from '@/lib/content'
import CmsCardGrid from '@/components/ui/CmsCardGrid'
import TestimonialRail from '@/components/ui/TestimonialRail'
import CtaBand from '@/components/ui/CtaBand'
import ChatAssistantModal from '@/components/ui/ChatAssistantModal'
import SupportFabCluster from '@/components/ui/SupportFabCluster'
import type { Testimonial } from '@/lib/api-client'

const SERVICES = [
  {
    id: 'residential',
    title: 'Residential Solar',
    subtitle: 'Panels, inverters, and battery storage for your home.',
    href: '/services/residential-solar',
    image: 'https://images.unsplash.com/photo-1508514177221-188b1cf16e9d?w=600&q=80',
    imageAlt: 'Solar panels on a residential rooftop',
    chips: ['From 6.6 kW', 'Battery ready'],
  },
  {
    id: 'commercial',
    title: 'Commercial Solar',
    subtitle: 'Large-scale systems optimised for maximum ROI.',
    href: '/services/commercial-solar',
    image: 'https://images.unsplash.com/photo-1509391366360-2e959784a276?w=600&q=80',
    imageAlt: 'Commercial solar array on rooftop',
    chips: ['45–200 kW', 'SCADA monitoring'],
  },
  {
    id: 'battery',
    title: 'Battery Storage',
    subtitle: 'Store solar energy and use it day or night.',
    href: '/services/battery-storage',
    image: 'https://images.unsplash.com/photo-1497440001374-f26997328c1b?w=600&q=80',
    imageAlt: 'Battery storage unit installation',
    chips: ['Powerwall', 'Enphase'],
  },
]

const TESTIMONIALS: Testimonial[] = [
  {
    id: '1',
    name: 'Sarah & James Thompson',
    location: 'Newcastle, NSW',
    review: 'Exceptional from start to finish. Our bills dropped by 80% and the install was done in two days.',
    rating: 5,
    date: '2024-08-14',
    projectType: 'Residential Solar + Battery',
  },
  {
    id: '2',
    name: 'Michael Chen',
    location: 'Gosford, NSW',
    review: 'Professional, punctual, and the monitoring app is fantastic. Six months in, performing above projected output.',
    rating: 5,
    date: '2024-09-02',
    projectType: 'Residential Solar 13.2 kW',
  },
]

export default function HomePage() {
  const [assistantOpen, setAssistantOpen] = useState(false)
  const heroRef = useRef<HTMLDivElement>(null)
  const isHeroInView = useInView(heroRef, { once: true })
  const shouldReduce = useReducedMotion()

  const stagger = {
    hidden: {},
    visible: { transition: { staggerChildren: shouldReduce ? 0 : 0.08 } },
  }
  const fadeUp = {
    hidden: { opacity: 0, y: shouldReduce ? 0 : 16 },
    visible: { opacity: 1, y: 0, transition: { duration: shouldReduce ? 0 : 0.32, ease: [0, 0, 0.2, 1] } },
  }

  return (
    <>
      {/* ── HERO: 55/45 copy-left / media-right, image overflows bottom ── */}
      <section
        className="relative overflow-hidden bg-surface-canvas"
        style={{ minHeight: '88vh' }}
        aria-label={t('home.hero.title')}
      >
        <div className="container-solar relative z-10 grid grid-cols-1 lg:grid-cols-[55fr_45fr] gap-8 items-center py-20 lg:py-0" style={{ minHeight: '88vh' }}>
          {/* Copy panel */}
          <motion.div
            ref={heroRef}
            variants={stagger}
            initial="hidden"
            animate={isHeroInView ? 'visible' : 'hidden'}
            className="flex flex-col gap-6 max-w-xl"
          >
            <motion.p variants={fadeUp} className="eyebrow">
              {t('home.hero.eyebrow')}
            </motion.p>
            <motion.h1
              variants={fadeUp}
              className="text-display-hero font-display font-bold text-text-strong leading-[1.04]"
            >
              {t('home.hero.title')}
            </motion.h1>
            <motion.p variants={fadeUp} className="text-body-fluid text-text-muted max-w-lg">
              {t('home.hero.subtitle')}
            </motion.p>
            <motion.div variants={fadeUp} className="flex flex-col sm:flex-row gap-3">
              <motion.div whileHover={shouldReduce ? {} : { scale: 1.01 }} whileTap={shouldReduce ? {} : { scale: 0.97 }}>
                <Link href="/quote" className="btn btn-primary text-base">
                  {t('home.hero.primary_cta')}
                </Link>
              </motion.div>
              <motion.div whileHover={shouldReduce ? {} : { scale: 1.01 }} whileTap={shouldReduce ? {} : { scale: 0.97 }}>
                <Link href="/portfolio" className="btn btn-outline text-base">
                  {t('home.hero.secondary_cta')}
                </Link>
              </motion.div>
            </motion.div>
            {/* Trust chips */}
            <motion.div variants={fadeUp} className="flex flex-wrap gap-2 pt-2">
              <span className="trust-chip">
                <ShieldIcon /> {t('home.trust.license')}
              </span>
              <span className="trust-chip">
                <StarIcon /> {t('home.trust.warranty')}
              </span>
              <span className="trust-chip">
                <CheckIcon /> {t('home.trust.installations')}
              </span>
            </motion.div>
          </motion.div>

          {/* Media panel — overflows bottom on desktop */}
          <motion.div
            initial={{ opacity: 0, x: shouldReduce ? 0 : 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: shouldReduce ? 0 : 0.18, duration: shouldReduce ? 0 : 0.45, ease: [0, 0, 0.2, 1] }}
            className="relative hidden lg:block"
            style={{ height: '110%', position: 'absolute', right: 0, top: '-5%', width: '48%' }}
          >
            <div className="absolute inset-0 rounded-l-3xl overflow-hidden">
              <Image
                src="https://images.unsplash.com/photo-1508514177221-188b1cf16e9d?w=1000&q=85"
                alt="Solar panels installed on a sunny residential rooftop"
                fill
                priority
                className="object-cover"
                sizes="(max-width: 1024px) 0vw, 50vw"
              />
              <div
                className="absolute inset-0"
                style={{
                  background: 'linear-gradient(to right, var(--color-surface-canvas) 0%, transparent 15%)',
                }}
                aria-hidden="true"
              />
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── STATS STRIP ── */}
      <section className="bg-text-strong text-text-inverse py-8" aria-label={t('home.testimonials_title')}>
        <div className="container-solar grid grid-cols-1 sm:grid-cols-3 gap-6">
          <div className="rounded-lg bg-white/5 border border-white/10 p-5">
            <p className="font-display text-3xl font-bold text-text-inverse mb-1">{t('home.stats.installs_value')}</p>
            <p className="text-sm text-text-inverse/80">{t('home.stats.installs_label')}</p>
          </div>
          <div className="rounded-lg bg-white/5 border border-white/10 p-5">
            <p className="font-display text-3xl font-bold text-text-inverse mb-1">{t('home.stats.warranty_value')}</p>
            <p className="text-sm text-text-inverse/80">{t('home.stats.warranty_label')}</p>
          </div>
          <div className="rounded-lg bg-white/5 border border-white/10 p-5">
            <p className="font-display text-3xl font-bold text-text-inverse mb-1">{t('home.stats.rating_value')}</p>
            <p className="text-sm text-text-inverse/80">{t('home.stats.rating_label')}</p>
          </div>
        </div>
      </section>

      {/* ── SERVICES OVERVIEW ── */}
      <section className="py-section-xl bg-surface-base" aria-label={t('home.services_title')}>
        <div className="container-solar">
          <div className="text-center mb-12">
            <p className="eyebrow mb-3">{t('cta.learn_more')}</p>
            <h2 className="text-display-section font-display font-bold text-text-strong mb-4">
              {t('home.services_title')}
            </h2>
            <p className="text-body-fluid text-text-muted max-w-xl mx-auto">
              {t('home.services_subtitle')}
            </p>
          </div>
          <CmsCardGrid items={SERVICES} columns={3} sectionLabel={t('home.services_title')} />
          <div className="text-center mt-10">
            <Link href="/services" className="btn btn-outline">
              {t('cta.see_all')} services
            </Link>
          </div>
        </div>
      </section>

      {/* ── PORTFOLIO SLICE ── */}
      <section className="py-section-xl bg-surface-canvas" aria-label={t('home.portfolio_title')}>
        <div className="container-solar">
          <div className="flex items-end justify-between mb-10">
            <div>
              <p className="eyebrow mb-2">{t('home.portfolio_title')}</p>
              <h2 className="text-display-section font-display font-bold text-text-strong">
                {t('home.portfolio_subtitle')}
              </h2>
            </div>
            <Link href="/portfolio" className="hidden sm:block btn btn-ghost text-sm">
              {t('cta.see_all')} →
            </Link>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {[
              { src: 'https://images.unsplash.com/photo-1613665813446-82a78c468a1d?w=600&q=80', alt: 'Hunter Valley winery solar installation', label: '120 kW Commercial', href: '/portfolio/hunter-valley-winery' },
              { src: 'https://images.unsplash.com/photo-1508514177221-188b1cf16e9d?w=600&q=80', alt: 'Newcastle family home solar panels', label: '13.2 kW Residential', href: '/portfolio/newcastle-residence' },
              { src: 'https://images.unsplash.com/photo-1509391366360-2e959784a276?w=600&q=80', alt: 'Gosford medical centre rooftop solar', label: '45 kW Commercial', href: '/portfolio/gosford-medical-centre' },
            ].map((item) => (
              <motion.div
                key={item.href}
                whileHover={shouldReduce ? {} : { y: -4, boxShadow: 'var(--shadow-hover)' }}
                transition={{ duration: 0.2 }}
                className="relative aspect-video rounded-lg overflow-hidden group"
              >
                <Link href={item.href} className="block h-full focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-focus-ring rounded-lg">
                  <Image src={item.src} alt={item.alt} fill className="object-cover transition-base group-hover:scale-[1.03]" sizes="(max-width: 640px) 100vw, 33vw" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                  <span className="absolute bottom-3 left-3 text-sm font-semibold text-text-inverse">
                    {item.label}
                  </span>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── TESTIMONIALS SLICE ── */}
      <section className="py-section-xl bg-surface-base" aria-label={t('home.testimonials_title')}>
        <div className="container-solar max-w-3xl">
          <p className="eyebrow mb-3 text-center">{t('home.testimonials_title')}</p>
          <TestimonialRail testimonials={TESTIMONIALS} />
        </div>
      </section>

      {/* ── FEATURED CASE STUDY HIGHLIGHT ── */}
      <section className="py-section-xl bg-surface-canvas" aria-label={t('home.featured_case.title')}>
        <div className="container-solar">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch">
            <div className="relative rounded-xl overflow-hidden min-h-[300px]">
              <Image
                src="https://images.unsplash.com/photo-1592833159155-c62df1b65634?w=1100&q=85"
                alt="Residential rooftop solar case study"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/35 to-transparent" aria-hidden="true" />
              <div className="absolute bottom-4 left-4 right-4 flex flex-wrap gap-2">
                <span className="inline-flex items-center rounded-pill bg-black/60 border border-white/20 px-3 py-1 text-xs font-medium text-white">
                  {t('home.featured_case.metric_1')}
                </span>
                <span className="inline-flex items-center rounded-pill bg-black/60 border border-white/20 px-3 py-1 text-xs font-medium text-white">
                  {t('home.featured_case.metric_2')}
                </span>
              </div>
            </div>
            <div className="card p-8 flex flex-col justify-center">
              <p className="eyebrow mb-3">{t('home.featured_case.eyebrow')}</p>
              <h2 className="text-display-section font-display font-bold text-text-strong mb-4">
                {t('home.featured_case.title')}
              </h2>
              <p className="text-body-fluid text-text-muted mb-6 leading-relaxed">
                {t('home.featured_case.body')}
              </p>
              <Link href="/portfolio/newcastle-residence" className="btn btn-outline w-fit">
                {t('home.featured_case.cta')}
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ── CTA BAND ── */}
      <CtaBand
        title={t('home.cta_title')}
        subtitle={t('home.cta_subtitle')}
        primaryLabel={t('home.cta_primary')}
        primaryHref="/quote"
        secondaryLabel={t('home.cta_secondary')}
        secondaryHref="/contact"
        variant="brand"
      />

      {/* ── SUPPORT FAB ── */}
      <SupportFabCluster onOpenAssistant={() => setAssistantOpen(true)} />
      <ChatAssistantModal open={assistantOpen} onClose={() => setAssistantOpen(false)} />
    </>
  )
}

function ShieldIcon() {
  return <svg viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-3.5 h-3.5 text-brand-primary" aria-hidden="true"><path d="M8 1.5L2.5 3.5v4c0 3.5 2.5 5.5 5.5 6.5 3-1 5.5-3 5.5-6.5v-4L8 1.5z" /></svg>
}
function StarIcon() {
  return <svg viewBox="0 0 16 16" fill="currentColor" className="w-3.5 h-3.5 text-brand-accent" aria-hidden="true"><path d="M8 1.5l1.47 3.03 3.33.48-2.41 2.35.57 3.32L8 9.14l-2.96 1.54.57-3.32L3.2 5.01l3.33-.48L8 1.5z" /></svg>
}
function CheckIcon() {
  return <svg viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" className="w-3.5 h-3.5 text-state-success" aria-hidden="true"><polyline points="13 4 6 11 3 8" /></svg>
}
