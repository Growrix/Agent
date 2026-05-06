'use client'

import { useRef, useState } from 'react'
import Image from 'next/image'
import { motion, useReducedMotion } from 'framer-motion'
import { cn } from '@/lib/utils'
import type { Testimonial } from '@/lib/api-client'

interface TestimonialRailProps {
  testimonials: Testimonial[]
  className?: string
}

export default function TestimonialRail({ testimonials, className }: TestimonialRailProps) {
  const [activeIdx, setActiveIdx] = useState(0)
  const shouldReduce = useReducedMotion()

  const prev = () => setActiveIdx((i) => (i - 1 + testimonials.length) % testimonials.length)
  const next = () => setActiveIdx((i) => (i + 1) % testimonials.length)

  if (!testimonials.length) return null

  return (
    <div className={cn('overflow-hidden', className)} aria-label="Customer testimonials">
      <div className="relative">
        <motion.div
          key={activeIdx}
          initial={{ opacity: 0, x: shouldReduce ? 0 : 30 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: shouldReduce ? 0 : -30 }}
          transition={{ duration: shouldReduce ? 0 : 0.28, ease: [0, 0, 0.2, 1] }}
          className="card p-8 md:p-12"
          role="article"
          aria-label={`Review by ${testimonials[activeIdx].name}`}
        >
          <StarRating rating={testimonials[activeIdx].rating} />
          <blockquote className="mt-5 mb-6">
            <p className="text-title-fluid font-display text-text-strong leading-snug italic">
              &ldquo;{testimonials[activeIdx].review}&rdquo;
            </p>
          </blockquote>
          <div className="flex items-center gap-4">
            <div>
              <p className="font-semibold text-text-strong">{testimonials[activeIdx].name}</p>
              <p className="text-sm text-text-muted">
                {testimonials[activeIdx].location} &middot; {testimonials[activeIdx].projectType}
              </p>
            </div>
          </div>
        </motion.div>

        {/* Navigation */}
        <div className="flex items-center justify-between mt-6">
          <div className="flex gap-2" role="tablist" aria-label="Select testimonial">
            {testimonials.map((_, i) => (
              <button
                key={i}
                type="button"
                role="tab"
                aria-selected={i === activeIdx}
                aria-label={`Review ${i + 1}`}
                onClick={() => setActiveIdx(i)}
                className={cn(
                  'w-2 h-2 rounded-pill transition-base',
                  i === activeIdx ? 'bg-brand-primary w-6' : 'bg-border-strong',
                )}
              />
            ))}
          </div>
          <div className="flex gap-2">
            <button
              type="button"
              onClick={prev}
              aria-label="Previous testimonial"
              className="p-2 rounded-full border border-border-subtle hover:bg-surface-raised transition-fast"
            >
              <ChevronLeftIcon />
            </button>
            <button
              type="button"
              onClick={next}
              aria-label="Next testimonial"
              className="p-2 rounded-full border border-border-subtle hover:bg-surface-raised transition-fast"
            >
              <ChevronRightIcon />
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

function StarRating({ rating }: { rating: number }) {
  return (
    <div className="flex gap-0.5" aria-label={`${rating} out of 5 stars`} role="img">
      {[1, 2, 3, 4, 5].map((star) => (
        <svg
          key={star}
          viewBox="0 0 20 20"
          className={cn('w-5 h-5', star <= rating ? 'text-brand-accent' : 'text-border-strong')}
          fill="currentColor"
          aria-hidden="true"
        >
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ))}
    </div>
  )
}

function ChevronLeftIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4" aria-hidden="true">
      <polyline points="15 18 9 12 15 6" />
    </svg>
  )
}

function ChevronRightIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4" aria-hidden="true">
      <polyline points="9 18 15 12 9 6" />
    </svg>
  )
}
