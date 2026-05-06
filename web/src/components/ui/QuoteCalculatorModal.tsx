'use client'

import { useCallback, useEffect } from 'react'
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion'
import QuoteCalculatorPanel from '@/components/ui/QuoteCalculatorPanel'
import { useQuoteModal } from '@/components/providers/QuoteModalProvider'
import { t } from '@/lib/content'

export default function QuoteCalculatorModal() {
  const { isOpen, closeQuote } = useQuoteModal()
  const shouldReduce = useReducedMotion()

  const onKeyDown = useCallback(
    (event: KeyboardEvent) => {
      if (event.key === 'Escape') closeQuote()
    },
    [closeQuote]
  )

  useEffect(() => {
    if (isOpen) {
      document.addEventListener('keydown', onKeyDown)
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }

    return () => {
      document.removeEventListener('keydown', onKeyDown)
      document.body.style.overflow = ''
    }
  }, [isOpen, onKeyDown])

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          role="dialog"
          aria-modal="true"
          aria-label={t('quote.modal.title')}
          className="fixed inset-0 p-4 md:p-8 overflow-y-auto"
          style={{ zIndex: 'var(--z-modal)', backgroundColor: 'var(--color-surface-overlay)' }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1, transition: { duration: shouldReduce ? 0 : 0.16 } }}
          exit={{ opacity: 0, transition: { duration: shouldReduce ? 0 : 0.12 } }}
          onClick={(event) => {
            if (event.target === event.currentTarget) closeQuote()
          }}
        >
          <motion.div
            initial={{ opacity: 0, y: shouldReduce ? 0 : 22, scale: shouldReduce ? 1 : 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1, transition: { duration: shouldReduce ? 0 : 0.22, ease: [0, 0, 0.2, 1] } }}
            exit={{ opacity: 0, y: shouldReduce ? 0 : 10, scale: shouldReduce ? 1 : 0.98, transition: { duration: shouldReduce ? 0 : 0.14 } }}
            className="max-w-5xl mx-auto"
          >
            <div className="card p-4 md:p-6 mb-4 flex items-start justify-between gap-4">
              <div>
                <p className="eyebrow mb-2">{t('quote.hero.eyebrow')}</p>
                <h2 className="text-title-fluid font-display font-bold text-text-strong">
                  {t('quote.modal.title')}
                </h2>
                <p className="text-sm text-text-muted mt-2">{t('quote.modal.subtitle')}</p>
              </div>
              <button
                type="button"
                onClick={closeQuote}
                aria-label={t('cta.close')}
                className="p-2 rounded-md text-text-muted hover:text-text-strong hover:bg-surface-raised transition-fast focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-focus-ring"
              >
                <CloseIcon />
              </button>
            </div>
            <QuoteCalculatorPanel />
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}

function CloseIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="w-5 h-5"
      aria-hidden="true"
    >
      <line x1="18" y1="6" x2="6" y2="18" />
      <line x1="6" y1="6" x2="18" y2="18" />
    </svg>
  )
}
