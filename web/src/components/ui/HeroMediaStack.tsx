'use client'

import { useRef } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { motion, useInView, useReducedMotion } from 'framer-motion'
import { t } from '@/lib/content'
import { cn } from '@/lib/utils'

interface HeroMediaStackProps {
  variant: 'services' | 'portfolio' | 'quote'
  title: string
  subtitle?: string
  eyebrow?: string
  primaryCta?: { label: string; href: string }
  secondaryCta?: { label: string; href: string }
  imageSrc: string
  imageAlt: string
  trustChips?: string[]
  className?: string
}

export default function HeroMediaStack({
  variant,
  title,
  subtitle,
  eyebrow,
  primaryCta,
  secondaryCta,
  imageSrc,
  imageAlt,
  trustChips,
  className,
}: HeroMediaStackProps) {
  const ref = useRef<HTMLElement>(null)
  const isInView = useInView(ref, { once: true, margin: '-5%' })
  const shouldReduce = useReducedMotion()

  const containerVariants = {
    hidden: {},
    visible: {
      transition: { staggerChildren: shouldReduce ? 0 : 0.08 },
    },
  }
  const itemVariants = {
    hidden: { opacity: 0, y: shouldReduce ? 0 : 16 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: shouldReduce ? 0 : 0.32, ease: [0, 0, 0.2, 1] },
    },
  }

  if (variant === 'services') {
    return (
      <section
        ref={ref}
        aria-label={title}
        className={cn('relative overflow-hidden', className)}
        style={{ minHeight: '80svh' }}
      >
        <Image
          src={imageSrc}
          alt={imageAlt}
          fill
          priority
          className="object-cover"
          sizes="100vw"
        />
        {/* Warm gradient overlay at bottom 40% */}
        <div
          className="absolute inset-0"
          style={{
            background:
              'linear-gradient(to top, rgba(2,6,23,0.92) 0%, rgba(2,6,23,0.72) 45%, rgba(2,6,23,0.35) 70%, rgba(2,6,23,0.06) 100%)',
          }}
          aria-hidden="true"
        />
        <div className="absolute inset-0 flex flex-col justify-end">
          <div className="container-solar pb-20 lg:pb-24">
            <motion.div
              variants={containerVariants}
              initial="hidden"
              animate={isInView ? 'visible' : 'hidden'}
              className="max-w-3xl"
            >
              {eyebrow && (
                <motion.p variants={itemVariants} className="eyebrow text-brand-accent mb-3">
                  {eyebrow}
                </motion.p>
              )}
              <motion.h1
                variants={itemVariants}
                className="text-display-section font-display font-bold text-text-inverse mb-4 leading-tight"
              >
                {title}
              </motion.h1>
              {subtitle && (
                <motion.p
                  variants={itemVariants}
                  className="text-body-fluid text-text-inverse/90 mb-8 max-w-2xl leading-relaxed whitespace-normal break-words"
                >
                  {subtitle}
                </motion.p>
              )}
              {(primaryCta || secondaryCta) && (
                <motion.div variants={itemVariants} className="flex flex-wrap gap-3">
                  {primaryCta && (
                    <Link href={primaryCta.href} className="btn btn-accent">
                      {primaryCta.label}
                    </Link>
                  )}
                  {secondaryCta && (
                    <Link href={secondaryCta.href} className="btn btn-inverse">
                      {secondaryCta.label}
                    </Link>
                  )}
                </motion.div>
              )}
              {trustChips && trustChips.length > 0 && (
                <motion.div variants={itemVariants} className="flex flex-wrap gap-2 mt-8">
                  {trustChips.map((chip) => (
                    <span
                      key={chip}
                      className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-pill bg-black/60 border border-white/25 text-white text-xs font-medium"
                    >
                      {chip}
                    </span>
                  ))}
                </motion.div>
              )}
            </motion.div>
          </div>
        </div>
      </section>
    )
  }

  if (variant === 'quote') {
    return (
      <section
        ref={ref}
        aria-label={title}
        className={cn('bg-surface-canvas py-16', className)}
      >
        <div className="container-solar">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={isInView ? 'visible' : 'hidden'}
            className="max-w-2xl mx-auto text-center"
          >
            {/* Step indicator */}
            <motion.div variants={itemVariants} className="flex items-center justify-center gap-2 mb-6">
              {[1, 2, 3].map((n) => (
                <span
                  key={n}
                  className={cn(
                    'w-2.5 h-2.5 rounded-pill border-2 transition-base',
                    n === 1
                      ? 'bg-brand-primary border-brand-primary'
                      : 'bg-transparent border-border-strong',
                  )}
                  aria-hidden="true"
                />
              ))}
              <span className="text-caption-fluid text-text-muted ml-2 font-semibold tracking-widest uppercase">
                {eyebrow}
              </span>
            </motion.div>
            <motion.h1
              variants={itemVariants}
              className="text-display-section font-display font-bold text-text-strong mb-4"
            >
              {title}
            </motion.h1>
            {subtitle && (
              <motion.p variants={itemVariants} className="text-body-fluid text-text-muted">
                {subtitle}
              </motion.p>
            )}
          </motion.div>
        </div>
      </section>
    )
  }

  // Default: portfolio-style (used as fallback)
  return (
    <section
      ref={ref}
      aria-label={title}
      className={cn('bg-surface-canvas py-section-lg', className)}
    >
      <div className="container-solar">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
        >
          {eyebrow && (
            <motion.p variants={itemVariants} className="eyebrow mb-3">
              {eyebrow}
            </motion.p>
          )}
          <motion.h1
            variants={itemVariants}
            className="text-display-section font-display font-bold text-text-strong mb-4 max-w-3xl"
          >
            {title}
          </motion.h1>
          {subtitle && (
            <motion.p variants={itemVariants} className="text-body-fluid text-text-muted max-w-2xl">
              {subtitle}
            </motion.p>
          )}
        </motion.div>
      </div>
    </section>
  )
}

// ─── Section reveal wrapper (reusable) ────────────────────────────────────────

export function RevealSection({
  children,
  className,
}: {
  children: React.ReactNode
  className?: string
}) {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, margin: '-8%' })
  const shouldReduce = useReducedMotion()

  const containerVariants = {
    hidden: {},
    visible: {
      transition: { staggerChildren: shouldReduce ? 0 : 0.08 },
    },
  }

  return (
    <motion.div
      ref={ref}
      variants={containerVariants}
      initial="hidden"
      animate={isInView ? 'visible' : 'hidden'}
      className={className}
    >
      {children}
    </motion.div>
  )
}

export function RevealItem({
  children,
  className,
}: {
  children: React.ReactNode
  className?: string
}) {
  const shouldReduce = useReducedMotion()
  const itemVariants = {
    hidden: { opacity: 0, y: shouldReduce ? 0 : 16 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: shouldReduce ? 0 : 0.32, ease: [0, 0, 0.2, 1] },
    },
  }

  return (
    <motion.div variants={itemVariants} className={className}>
      {children}
    </motion.div>
  )
}
