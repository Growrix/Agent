import type { Metadata } from 'next'
import Link from 'next/link'
import { t } from '@/lib/content'

export const metadata: Metadata = {
  title: 'My Account',
  description: 'Manage your SolarPro quote, installation, and system monitoring.',
}

const PANELS = [
  { key: 'quote', href: '#', icon: '📋', label: t('account.panel.quote_title'), sub: t('account.panel.quote_sub') },
  { key: 'installation', href: '#', icon: '🔧', label: t('account.panel.install_title'), sub: t('account.panel.install_sub') },
  { key: 'monitoring', href: '#', icon: '📡', label: t('account.panel.monitoring_title'), sub: t('account.panel.monitoring_sub') },
  { key: 'documents', href: '#', icon: '📄', label: t('account.panel.docs_title'), sub: t('account.panel.docs_sub') },
]

export default function AccountPage() {
  return (
    <div className="min-h-screen bg-surface-canvas py-section-xl">
      <div className="container-solar max-w-3xl">
        <header className="mb-12">
          <p className="eyebrow mb-2">{t('account.welcome_eyebrow')}</p>
          <h1 className="text-display-section font-display font-bold text-text-strong">
            {t('account.welcome_title')}
          </h1>
        </header>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {PANELS.map((panel) => (
            <a
              key={panel.key}
              href={panel.href}
              className="card p-6 flex gap-4 items-start group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-focus-ring rounded-xl"
            >
              <span className="text-3xl" role="img" aria-label={panel.label}>{panel.icon}</span>
              <div>
                <h2 className="font-display font-bold text-text-strong mb-1 group-hover:text-brand-primary transition-fast">
                  {panel.label}
                </h2>
                <p className="text-sm text-text-muted">{panel.sub}</p>
              </div>
            </a>
          ))}
        </div>

        <div className="mt-12 pt-8 border-t border-border-subtle">
          <Link
            href="/quote"
            className="btn btn-outline"
          >
            {t('account.start_new_quote')}
          </Link>
        </div>
      </div>
    </div>
  )
}
