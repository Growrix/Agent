import Link from 'next/link'
import { t } from '@/lib/content'

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

export default function FooterTrust() {
  const year = new Date().getFullYear()

  return (
    <footer
      aria-label="Site footer"
      className="bg-text-strong text-text-inverse"
    >
      <div className="container-solar py-section-lg">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-section-md">
          {/* Brand column */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <SolarIcon className="w-6 h-6 text-brand-primary" />
              <span className="font-display font-bold text-lg text-text-inverse">
                {t('footer.company_name')}
              </span>
            </div>
            <p className="text-sm text-text-muted leading-relaxed mb-4">
              {t('footer.license_number')}
            </p>
            <address className="not-italic text-sm text-text-muted leading-relaxed">
              {t('footer.address')}
              <br />
              {t('footer.hours')}
            </address>
          </div>

          {/* Nav column */}
          <nav aria-label="Footer navigation">
            <p className="text-xs font-semibold uppercase tracking-widest text-text-muted mb-4">
              Navigation
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

          {/* CTA column */}
          <div>
            <p className="text-xs font-semibold uppercase tracking-widest text-text-muted mb-4">
              Get started
            </p>
            <Link
              href="/quote"
              className="btn btn-accent text-sm mb-3 w-full justify-center"
            >
              {t('cta.get_quote')}
            </Link>
            <Link
              href="/contact"
              className="btn btn-ghost border border-text-inverse/20 text-sm w-full justify-center text-text-inverse hover:bg-text-inverse/10"
            >
              {t('nav.contact')}
            </Link>
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
