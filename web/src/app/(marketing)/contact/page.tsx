'use client'

import { useState } from 'react'
import SupportFabCluster from '@/components/ui/SupportFabCluster'
import ChatAssistantModal from '@/components/ui/ChatAssistantModal'
import { t } from '@/lib/content'

const CHANNELS = [
  {
    id: 'phone',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6" aria-hidden="true">
        <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 9.81 19.79 19.79 0 01.02 1.18 2 2 0 012 0h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L6.09 7.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 14v2.92z" />
      </svg>
    ),
    label: t('contact.channels.phone_label'),
    value: t('contact.channels.phone_value'),
    href: `tel:${t('contact.channels.phone_value')}`,
    sublabel: t('contact.channels.phone_hours'),
  },
  {
    id: 'whatsapp',
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6" aria-hidden="true">
        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
      </svg>
    ),
    label: t('contact.channels.whatsapp_label'),
    value: t('contact.channels.whatsapp_value'),
    href: `https://wa.me/${t('contact.channels.whatsapp_raw')}`,
    sublabel: t('contact.channels.whatsapp_response'),
  },
  {
    id: 'email',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6" aria-hidden="true">
        <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
        <polyline points="22,6 12,13 2,6" />
      </svg>
    ),
    label: t('contact.channels.email_label'),
    value: t('contact.channels.email_value'),
    href: `mailto:${t('contact.channels.email_value')}`,
    sublabel: t('contact.channels.email_response'),
  },
  {
    id: 'assistant',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6" aria-hidden="true">
        <path d="M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2z" />
      </svg>
    ),
    label: t('contact.channels.assistant_label'),
    value: t('contact.channels.assistant_value'),
    href: '#assistant',
    sublabel: t('contact.channels.assistant_sublabel'),
    isAssistant: true,
  },
]

export default function ContactPage() {
  const [assistantOpen, setAssistantOpen] = useState(false)

  return (
    <>
      {/* ── HERO: Brand-primary bg, NO photography, two-column utility ── */}
      <section
        className="py-section-xl"
        style={{ background: 'var(--color-brand-primary)' }}
        aria-label={t('contact.hero.title')}
      >
        <div className="container-solar grid lg:grid-cols-2 gap-16">
          {/* Left — channels */}
          <div>
            <p className="eyebrow text-brand-accent mb-3">{t('contact.hero.eyebrow')}</p>
            <h1 className="text-display-section font-display font-bold text-text-inverse mb-3">
              {t('contact.hero.title')}
            </h1>
            <p className="text-body-fluid text-text-inverse/70 mb-10">
              {t('contact.hero.subtitle')}
            </p>

            <ul className="flex flex-col gap-3" role="list">
              {CHANNELS.map((ch) => (
                <li key={ch.id}>
                  {ch.isAssistant ? (
                    <button
                      type="button"
                      onClick={() => setAssistantOpen(true)}
                      className="w-full flex items-center gap-4 p-4 rounded-xl text-left transition-fast focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-focus-ring"
                      style={{ background: 'rgba(255,255,255,0.08)', border: '1px solid rgba(255,255,255,0.12)' }}
                      aria-label={`${ch.label}: ${ch.value}`}
                    >
                      <span className="w-10 h-10 rounded-xl flex items-center justify-center shrink-0 text-brand-accent" style={{ background: 'rgba(217,119,6,0.15)' }}>
                        {ch.icon}
                      </span>
                      <span className="flex flex-col">
                        <span className="text-xs text-text-inverse/50 font-medium uppercase tracking-wide">{ch.label}</span>
                        <span className="text-text-inverse font-semibold">{ch.value}</span>
                        <span className="text-xs text-text-inverse/60 mt-0.5">{ch.sublabel}</span>
                      </span>
                    </button>
                  ) : (
                    <a
                      href={ch.href}
                      className="flex items-center gap-4 p-4 rounded-xl transition-fast focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-focus-ring"
                      style={{ background: 'rgba(255,255,255,0.08)', border: '1px solid rgba(255,255,255,0.12)' }}
                      aria-label={`${ch.label}: ${ch.value}`}
                    >
                      <span className="w-10 h-10 rounded-xl flex items-center justify-center shrink-0 text-brand-accent" style={{ background: 'rgba(217,119,6,0.15)' }}>
                        {ch.icon}
                      </span>
                      <span className="flex flex-col">
                        <span className="text-xs text-text-inverse/50 font-medium uppercase tracking-wide">{ch.label}</span>
                        <span className="text-text-inverse font-semibold">{ch.value}</span>
                        <span className="text-xs text-text-inverse/60 mt-0.5">{ch.sublabel}</span>
                      </span>
                    </a>
                  )}
                </li>
              ))}
            </ul>
          </div>

          {/* Right — address + hours */}
          <div className="flex flex-col gap-6">
            <div
              className="rounded-2xl p-7"
              style={{ background: 'rgba(255,255,255,0.06)', border: '1px solid rgba(255,255,255,0.1)' }}
            >
              <h2 className="text-sm font-medium text-text-inverse/50 uppercase tracking-widest mb-4">
                {t('contact.address.title')}
              </h2>
              <address className="not-italic text-text-inverse/80 leading-relaxed text-sm">
                {t('contact.address.line1')}<br />
                {t('contact.address.line2')}<br />
                {t('contact.address.city')}<br />
              </address>
            </div>
            <div
              className="rounded-2xl p-7"
              style={{ background: 'rgba(255,255,255,0.06)', border: '1px solid rgba(255,255,255,0.1)' }}
            >
              <h2 className="text-sm font-medium text-text-inverse/50 uppercase tracking-widest mb-4">
                {t('contact.hours.title')}
              </h2>
              <dl className="flex flex-col gap-2 text-sm">
                {['mon_fri', 'sat', 'sun'].map((day) => (
                  <div key={day} className="flex justify-between gap-8">
                    <dt className="text-text-inverse/60">{t(`contact.hours.${day}_label`)}</dt>
                    <dd className="text-text-inverse font-medium">{t(`contact.hours.${day}_value`)}</dd>
                  </div>
                ))}
              </dl>
            </div>
          </div>
        </div>
      </section>

      <SupportFabCluster onOpenAssistant={() => setAssistantOpen(true)} />
      <ChatAssistantModal open={assistantOpen} onClose={() => setAssistantOpen(false)} />
    </>
  )
}
