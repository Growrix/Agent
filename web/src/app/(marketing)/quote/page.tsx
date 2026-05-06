'use client'

import { useState } from 'react'
import QuoteCalculatorPanel from '@/components/ui/QuoteCalculatorPanel'
import SupportFabCluster from '@/components/ui/SupportFabCluster'
import ChatAssistantModal from '@/components/ui/ChatAssistantModal'
import { t } from '@/lib/content'

export default function QuotePage() {
  const [assistantOpen, setAssistantOpen] = useState(false)

  return (
    <>
      {/* ── HERO: Focused funnel — muted brand bg, step indicators, no photograph ── */}
      <section
        className="pt-16 pb-10"
        style={{ background: 'linear-gradient(160deg, var(--color-brand-primary) 0%, color-mix(in srgb, var(--color-brand-primary) 70%, #0f172a) 100%)' }}
        aria-label={t('quote.hero.title')}
      >
        <div className="container-solar max-w-xl text-center">
          <p className="eyebrow text-brand-accent mb-3">{t('quote.hero.eyebrow')}</p>
          <h1 className="text-display-section font-display font-bold text-text-inverse mb-4">
            {t('quote.hero.title')}
          </h1>
          <p className="text-body-fluid text-text-inverse/70 mb-10">
            {t('quote.hero.subtitle')}
          </p>

          {/* Step indicator */}
          <div className="flex items-center justify-center gap-2 mb-2" aria-label="Progress steps">
            {[t('quote.step1'), t('quote.step2'), t('quote.step3')].map((label, i) => (
              <div key={i} className="flex items-center gap-2">
                <div className="flex flex-col items-center">
                  <span
                    className="w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold"
                    style={{ background: 'rgba(255,255,255,0.15)', color: 'var(--color-text-inverse)' }}
                    aria-hidden="true"
                  >
                    {i + 1}
                  </span>
                  <span className="text-xs text-text-inverse/60 mt-1 whitespace-nowrap">{label}</span>
                </div>
                {i < 2 && (
                  <div className="w-8 h-px bg-text-inverse/20 -mt-4" aria-hidden="true" />
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CALCULATOR ── */}
      <section className="py-section-xl bg-surface-canvas" aria-label={t('quote.calculator_label')}>
        <div className="container-solar max-w-xl">
          <QuoteCalculatorPanel />
        </div>
      </section>

      <SupportFabCluster onOpenAssistant={() => setAssistantOpen(true)} />
      <ChatAssistantModal open={assistantOpen} onClose={() => setAssistantOpen(false)} />
    </>
  )
}
