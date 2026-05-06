import type { Metadata } from 'next'
import Link from 'next/link'
import { t } from '@/lib/content'

export const metadata: Metadata = {
  title: 'Terms of Service',
  description: 'Terms and conditions for using SolarPro services.',
}

export default function TermsPage() {
  return (
    <section className="py-section-xl bg-surface-canvas">
      <div className="container-solar max-w-2xl">
        <Link href="/" className="text-sm text-brand-primary hover:underline mb-6 inline-block">
          ← Home
        </Link>
        <h1 className="text-display-section font-display font-bold text-text-strong mb-6">
          {t('legal.terms.title')}
        </h1>
        <p className="text-sm text-text-muted mb-10">
          {t('legal.terms.last_updated')}
        </p>
        <div className="prose-solar">
          <p>{t('legal.terms.intro')}</p>
          <h2>{t('legal.terms.services_title')}</h2>
          <p>{t('legal.terms.services_body')}</p>
          <h2>{t('legal.terms.liability_title')}</h2>
          <p>{t('legal.terms.liability_body')}</p>
          <h2>{t('legal.terms.contact_title')}</h2>
          <p>{t('legal.terms.contact_body')}</p>
        </div>
      </div>
    </section>
  )
}
