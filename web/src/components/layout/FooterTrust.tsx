'use client'

import Link from 'next/link'
import { t } from '@/lib/content'
import { useQuoteModal } from '@/components/providers/QuoteModalProvider'

const FOOTER_NAV = [
  { href: '/services', key: 'footer.nav_services' },
  { href: '/portfolio', key: 'footer.nav_portfolio' },
  { href: '/about', key: 'footer.nav_about' },
  { href: '/blog', key: 'footer.nav_blog' },
  { href: '/contact', key: 'footer.nav_contact' },
]

const LEGAL_LINKS = [
  { href: '/privacy', key: 'footer.legal_privacy' },
  { href: '/terms', key: 'footer.legal_terms' },
]

const SOCIAL_LINKS = [
  { href: 'https://www.instagram.com/', key: 'footer.social_instagram', icon: <InstagramIcon className="w-4 h-4" /> },
  { href: 'https://www.facebook.com/', key: 'footer.social_facebook', icon: <FacebookIcon className="w-4 h-4" /> },
  { href: 'https://www.linkedin.com/', key: 'footer.social_linkedin', icon: <LinkedInIcon className="w-4 h-4" /> },
]

export default function FooterTrust() {
  const year = new Date().getFullYear()
  const { openQuote } = useQuoteModal()

  return (
    <footer
      aria-label="Site footer"
      className="bg-text-strong text-text-inverse"
    >
      <div className="container-solar py-section-lg">
        <div className="mb-10 h-1 w-full rounded-full bg-brand-primary/80" />
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-[1.2fr_0.8fr_0.9fr] mb-section-md">
          <div className="space-y-6">
            <div className="flex items-center gap-2">
              <SolarIcon className="w-6 h-6 text-brand-primary" />
              <span className="font-display font-bold text-lg text-text-inverse">
                {t('footer.company_name')}
              </span>
            </div>
            <p className="text-sm text-text-muted leading-relaxed max-w-md">
              {t('footer.license_number')}
            </p>
            <div className="grid gap-3 sm:grid-cols-2">
              <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                <p className="mb-3 text-xs font-semibold uppercase tracking-[0.18em] text-text-muted">{t('footer.contact_title')}</p>
                <div className="space-y-3 text-sm text-text-muted">
                  <a href={`tel:${t('contact.channels.phone_value')}`} className="flex items-center gap-3 transition-fast hover:text-text-inverse">
                    <span className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-brand-primary/15 text-brand-primary"><PhoneIcon className="w-4 h-4" /></span>
                    <span>{t('contact.channels.phone_value')}</span>
                  </a>
                  <a href={`mailto:${t('contact.channels.email_value')}`} className="flex items-center gap-3 transition-fast hover:text-text-inverse">
                    <span className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-brand-accent/15 text-brand-accent"><MailIcon className="w-4 h-4" /></span>
                    <span>{t('contact.channels.email_value')}</span>
                  </a>
                  <a href={`https://wa.me/${t('contact.channels.whatsapp_raw')}`} className="flex items-center gap-3 transition-fast hover:text-text-inverse">
                    <span className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-white/10 text-white"><WhatsAppIcon className="w-4 h-4" /></span>
                    <span>{t('contact.channels.whatsapp_label')}</span>
                  </a>
                </div>
              </div>
              <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                <p className="mb-3 text-xs font-semibold uppercase tracking-[0.18em] text-text-muted">{t('footer.location_title')}</p>
                <div className="space-y-3 text-sm text-text-muted">
                  <div className="flex items-start gap-3">
                    <span className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-white/10 text-white"><PinIcon className="w-4 h-4" /></span>
                    <span>{t('footer.address')}</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-white/10 text-white"><ClockIcon className="w-4 h-4" /></span>
                    <span>{t('footer.hours')}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <nav aria-label="Footer navigation" className="rounded-2xl border border-white/10 bg-white/5 p-6">
            <p className="text-xs font-semibold uppercase tracking-widest text-text-muted mb-4">
              {t('footer.navigation_title')}
            </p>
            <ul className="flex flex-col gap-2" role="list">
              {FOOTER_NAV.map(({ href, key }) => (
                <li key={href}>
                  <Link
                    href={href}
                    className="text-sm text-text-muted hover:text-text-inverse transition-fast"
                  >
                    {t(key)}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
            <p className="text-xs font-semibold uppercase tracking-widest text-text-muted mb-4">
              {t('footer.get_started_title')}
            </p>
            <button
              type="button"
              onClick={openQuote}
              className="btn btn-accent text-sm mb-3 w-full justify-center"
            >
              {t('cta.get_quote')}
            </button>
            <Link
              href="/contact"
              className="btn bg-transparent border border-white/25 text-sm w-full justify-center text-white hover:bg-white/10"
            >
              {t('nav.contact')}
            </Link>
            <div className="mt-6">
              <p className="mb-3 text-xs font-semibold uppercase tracking-widest text-text-muted">{t('footer.follow_title')}</p>
              <div className="flex flex-wrap gap-2">
                {SOCIAL_LINKS.map(({ href, key, icon }) => (
                  <a
                    key={key}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={t(key)}
                    className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/5 text-white transition-fast hover:bg-white/10"
                  >
                    {icon}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-text-inverse/10 pt-6 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
          <div className="flex flex-col gap-1">
            <p className="text-xs text-text-muted">
              {t('footer.copyright').replace('{year}', String(year))}
            </p>
            <p className="text-xs text-text-muted">
              Built and maintained by{' '}
              <a
                href="https://www.growrixos.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-brand-primary hover:underline"
              >
                Growrix OS
              </a>
            </p>
          </div>
          <ul className="flex gap-4" role="list">
            {LEGAL_LINKS.map(({ href, key }) => (
              <li key={href}>
                <Link
                  href={href}
                  className="text-xs text-text-muted hover:text-text-inverse transition-fast"
                >
                  {t(key)}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </footer>
  )
}

function SolarIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <circle cx="12" cy="12" r="5" />
      <line x1="12" y1="1" x2="12" y2="3" />
      <line x1="12" y1="21" x2="12" y2="23" />
      <line x1="4.22" y1="4.22" x2="5.64" y2="5.64" />
      <line x1="18.36" y1="18.36" x2="19.78" y2="19.78" />
      <line x1="1" y1="12" x2="3" y2="12" />
      <line x1="21" y1="12" x2="23" y2="12" />
      <line x1="4.22" y1="19.78" x2="5.64" y2="18.36" />
      <line x1="18.36" y1="5.64" x2="19.78" y2="4.22" />
    </svg>
  )
}

function PhoneIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.86 19.86 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6A19.86 19.86 0 0 1 2.12 4.18 2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
    </svg>
  )
}

function MailIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <rect x="3" y="5" width="18" height="14" rx="2" />
      <polyline points="3 7 12 13 21 7" />
    </svg>
  )
}

function PinIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M21 10c0 7-9 13-9 13S3 17 3 10a9 9 0 0 1 18 0z" />
      <circle cx="12" cy="10" r="3" />
    </svg>
  )
}

function ClockIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <circle cx="12" cy="12" r="10" />
      <polyline points="12 6 12 12 16 14" />
    </svg>
  )
}

function WhatsAppIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884" />
    </svg>
  )
}

function InstagramIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
    </svg>
  )
}

function FacebookIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M13.5 22v-8h2.7l.4-3h-3.1V9.1c0-.9.3-1.5 1.6-1.5H17V5c-.3 0-1.4-.1-2.6-.1-2.6 0-4.4 1.6-4.4 4.5V11H7v3h3V22h3.5z" />
    </svg>
  )
}

function LinkedInIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M6.94 8.5A1.56 1.56 0 1 1 6.9 5.38a1.56 1.56 0 0 1 .04 3.12zM5.5 9.75H8.4V19H5.5zM10.2 9.75H13v1.26h.04c.39-.74 1.34-1.52 2.76-1.52 2.96 0 3.5 1.95 3.5 4.48V19h-2.9v-4.45c0-1.06-.02-2.43-1.48-2.43-1.49 0-1.72 1.16-1.72 2.35V19h-3z" />
    </svg>
  )
}
