'use client'

import Image from 'next/image'
import Link from 'next/link'
import { motion, useReducedMotion } from 'framer-motion'
import { cn } from '@/lib/utils'

interface CardItem {
  id: string
  title: string
  subtitle?: string
  body?: string
  href?: string
  image?: string
  imageAlt?: string
  badge?: string
  chips?: string[]
}

interface CmsCardGridProps {
  items: CardItem[]
  columns?: 2 | 3 | 4
  variant?: 'default' | 'service' | 'compact'
  className?: string
  sectionLabel?: string
}

export default function CmsCardGrid({
  items,
  columns = 3,
  variant = 'default',
  className,
  sectionLabel,
}: CmsCardGridProps) {
  const shouldReduce = useReducedMotion()

  const colClasses = {
    2: 'grid-cols-1 sm:grid-cols-2',
    3: 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-3',
    4: 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-4',
  }[columns]

  return (
    <ul
      role="list"
      aria-label={sectionLabel}
      className={cn('grid gap-6', colClasses, className)}
    >
      {items.map((item) => (
        <CardItem key={item.id} item={item} variant={variant} shouldReduce={!!shouldReduce} />
      ))}
    </ul>
  )
}

function CardItem({
  item,
  variant,
  shouldReduce,
}: {
  item: CardItem
  variant: string
  shouldReduce: boolean
}) {
  const innerClassName = cn(
    'block h-full focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-focus-ring rounded-lg',
    item.href && 'cursor-pointer',
  )

  const innerContent = (
    <>
      {item.image && variant !== 'compact' && (
        <div className="relative aspect-video overflow-hidden bg-surface-raised">
          <Image
            src={item.image}
            alt={item.imageAlt ?? item.title}
            fill
            className="object-cover transition-base group-hover:scale-[1.02]"
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
          />
          {item.badge && (
            <span className="absolute top-3 left-3 eyebrow bg-brand-accent text-text-on-accent px-2.5 py-1 rounded-pill text-xs">
              {item.badge}
            </span>
          )}
        </div>
      )}
      <div className="p-5">
        {item.chips && (
          <div className="flex flex-wrap gap-1.5 mb-3">
            {item.chips.map((chip) => (
              <span key={chip} className="trust-chip text-xs">
                {chip}
              </span>
            ))}
          </div>
        )}
        <h3 className="font-display font-semibold text-title-fluid text-text-strong mb-2 leading-snug">
          {item.title}
        </h3>
        {item.subtitle && (
          <p className="text-sm text-text-muted mb-2">{item.subtitle}</p>
        )}
        {item.body && (
          <p className="text-sm text-text-default leading-relaxed">{item.body}</p>
        )}
        {item.href && (
          <span className="inline-flex items-center gap-1 text-sm font-semibold text-brand-primary mt-3 group-hover:gap-2 transition-fast">
            Learn more <ArrowIcon />
          </span>
        )}
      </div>
    </>
  )

  return (
    <motion.li
      whileHover={
        shouldReduce
          ? {}
          : { y: -4, boxShadow: 'var(--shadow-hover)' }
      }
      transition={{ duration: 0.2, ease: [0, 0, 0.2, 1] }}
      className="card group"
    >
      {item.href ? (
        <Link href={item.href} className={innerClassName}>{innerContent}</Link>
      ) : (
        <div className={innerClassName}>{innerContent}</div>
      )}
    </motion.li>
  )
}

function ArrowIcon() {
  return (
    <svg
      viewBox="0 0 16 16"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="w-3.5 h-3.5"
      aria-hidden="true"
    >
      <line x1="3" y1="8" x2="13" y2="8" />
      <polyline points="9 4 13 8 9 12" />
    </svg>
  )
}
