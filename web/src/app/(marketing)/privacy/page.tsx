import type { Metadata } from 'next'
import Link from 'next/link'
import { t } from '@/lib/content'

export const metadata: Metadata = {
  title: 'Privacy Policy',
  description: 'How SolarPro collects, uses, and protects your information.',
}

export default function PrivacyPage() {
  return (
    <section className="py-section-xl bg-surface-canvas">
      <div className="container-solar max-w-2xl">
        <Link href="/" className="text-sm text-brand-primary hover:underline mb-6 inline-block">
          ← Home
        </Link>
        <h1 className="text-display-section font-display font-bold text-text-strong mb-6">
          {t('legal.privacy.title')}
        </h1>
        <p className="text-sm text-text-muted mb-10">
          {t('legal.privacy.last_updated')}
        </p>
        <div className="prose-solar">
          <p>{t('legal.privacy.intro')}</p>
          <h2>{t('legal.privacy.collection_title')}</h2>
          <p>{t('legal.privacy.collection_body')}</p>
          <h2>{t('legal.privacy.use_title')}</h2>
          <p>{t('legal.privacy.use_body')}</p>
          <h2>{t('legal.privacy.contact_title')}</h2>
          <p>{t('legal.privacy.contact_body')}</p>
        </div>
      </div>
    </section>
  )
}
