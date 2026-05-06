'use client'

import Link from 'next/link'
import { useEffect } from 'react'
import { t } from '@/lib/content'
import { useQuoteModal } from '@/components/providers/QuoteModalProvider'

export default function QuotePage() {
  const { openQuote } = useQuoteModal()

  useEffect(() => {
    openQuote()
  }, [openQuote])

  return (
    <>
      <section className="py-section-xl bg-surface-canvas" aria-label={t('quote.modal.title')}>
        <div className="container-solar max-w-xl text-center">
          <h1 className="text-display-section font-display font-bold text-text-strong mb-4">
            {t('quote.modal.title')}
          </h1>
          <p className="text-body-fluid text-text-muted mb-8">
            {t('quote.modal.subtitle')}
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            <button type="button" onClick={openQuote} className="btn btn-primary">
              {t('home.hero_form.open_calculator')}
            </button>
            <Link href="/" className="btn btn-ghost border border-border-subtle">
              {t('cta.back')}
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
