'use client'

import Link from 'next/link'
import { motion, useReducedMotion } from 'framer-motion'
import { t } from '@/lib/content'
import { cn } from '@/lib/utils'
import { useQuoteModal } from '@/components/providers/QuoteModalProvider'

interface CtaBandProps {
  title: string
  subtitle?: string
  primaryLabel: string
  primaryHref: string
  secondaryLabel?: string
  secondaryHref?: string
  variant?: 'brand' | 'accent' | 'neutral'
  className?: string
}

export default function CtaBand({
  title,
  subtitle,
  primaryLabel,
  primaryHref,
  secondaryLabel,
  secondaryHref,
  variant = 'brand',
  className,
}: CtaBandProps) {
  const shouldReduce = useReducedMotion()
  const { openQuote } = useQuoteModal()

  const bgStyle =
    variant === 'brand'
      ? { backgroundColor: 'var(--color-brand-primary)' }
      : variant === 'accent'
        ? { backgroundColor: 'var(--color-brand-accent)' }
        : { backgroundColor: 'var(--color-surface-raised)' }

  const textColor = variant === 'neutral' ? 'text-text-strong' : 'text-text-inverse'

  return (
    <section
      aria-label={title}
      className={cn('py-section-lg', className)}
      style={bgStyle}
    >
      <div className="container-solar text-center">
        <h2 className={cn('text-display-section font-display font-bold mb-4 leading-tight', textColor)}>
          {title}
        </h2>
        {subtitle && (
          <p className={cn('text-body-fluid mb-8 max-w-xl mx-auto', variant === 'neutral' ? 'text-text-muted' : 'text-text-inverse/80')}>
            {subtitle}
          </p>
        )}
        <div className="flex flex-wrap justify-center gap-4">
          <motion.div
            whileHover={shouldReduce ? {} : { scale: 1.01 }}
            whileTap={shouldReduce ? {} : { scale: 0.97 }}
          >
            {primaryHref === '/quote' ? (
              <button
                type="button"
                onClick={openQuote}
                className={cn(
                  'btn',
                  variant === 'brand' ? 'btn-accent' : 'btn-primary',
                  'text-base',
                )}
              >
                {primaryLabel}
              </button>
            ) : (
              <Link
                href={primaryHref}
                className={cn(
                  'btn',
                  variant === 'brand' ? 'btn-accent' : 'btn-primary',
                  'text-base',
                )}
              >
                {primaryLabel}
              </Link>
            )}
          </motion.div>
          {secondaryLabel && secondaryHref && (
            <motion.div
              whileHover={shouldReduce ? {} : { scale: 1.01 }}
              whileTap={shouldReduce ? {} : { scale: 0.97 }}
            >
              <Link
                href={secondaryHref}
                className={cn(
                  'btn text-base',
                  variant === 'neutral'
                    ? 'btn-outline'
                    : 'btn-ghost border border-text-inverse/30 text-text-inverse hover:bg-text-inverse/10',
                )}
              >
                {secondaryLabel}
              </Link>
            </motion.div>
          )}
        </div>
      </div>
    </section>
  )
}
