'use client'

import { useState, useEffect, useRef } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { motion, AnimatePresence, useReducedMotion } from 'framer-motion'
import { t } from '@/lib/content'
import ThemeSwitcher from '@/components/ui/ThemeSwitcher'
import { useAuthModal } from '@/components/providers/AuthModalProvider'
import { useQuoteModal } from '@/components/providers/QuoteModalProvider'

const NAV_LINKS = [
  { href: '/', key: 'nav.home' },
  { href: '/services', key: 'nav.services' },
  { href: '/portfolio', key: 'nav.portfolio' },
  { href: '/testimonials', key: 'nav.testimonials' },
  { href: '/about', key: 'nav.about' },
  { href: '/blog', key: 'nav.blog' },
]

export default function HeaderShell() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [isAtTop, setIsAtTop] = useState(true)
  const [headerVisible, setHeaderVisible] = useState(true)
  const pathname = usePathname()
  const shouldReduce = useReducedMotion()
  const menuRef = useRef<HTMLDivElement>(null)
  const lastScrollY = useRef(0)
  const { openSignIn } = useAuthModal()
  const { openQuote } = useQuoteModal()
  const isHome = pathname === '/'
  const overlayMode = isHome && isAtTop && !menuOpen
  const hideOnScroll = isHome && !isAtTop && !headerVisible && !menuOpen

  useEffect(() => {
    if (!isHome) {
      setIsAtTop(false)
      setHeaderVisible(true)
      return
    }

    const onScroll = () => {
      const currentScrollY = window.scrollY
      const scrollDelta = Math.abs(currentScrollY - lastScrollY.current)

      setIsAtTop(currentScrollY < 12)

      if (currentScrollY < 12) {
        setHeaderVisible(true)
        lastScrollY.current = currentScrollY
        return
      }

      if (scrollDelta < 8) return

      setHeaderVisible(currentScrollY < lastScrollY.current)
      lastScrollY.current = currentScrollY
    }

    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [isHome])

  // Close menu on route change
  useEffect(() => {
    setMenuOpen(false)
  }, [pathname])

  // Trap focus in open menu
  useEffect(() => {
    if (!menuOpen) return
    const first = menuRef.current?.querySelector<HTMLElement>('a, button')
    first?.focus()
  }, [menuOpen])

  const mobileMenuVariants = {
    hidden: { opacity: 0, height: 0 },
    visible: {
      opacity: 1,
      height: 'auto',
      transition: { duration: shouldReduce ? 0 : 0.22, ease: [0, 0, 0.2, 1] },
    },
    exit: {
      opacity: 0,
      height: 0,
      transition: { duration: shouldReduce ? 0 : 0.16 },
    },
  }

  return (
    <header
      className={[
        'sticky top-0 left-0 right-0 z-sticky border-b transition-base duration-300',
        hideOnScroll ? '-translate-y-full opacity-0 pointer-events-none' : 'translate-y-0 opacity-100',
        overlayMode
          ? 'bg-transparent border-transparent'
          : 'bg-surface-base/95 backdrop-blur-md border-border-subtle shadow-sm',
      ].join(' ')}
      style={{ zIndex: 'var(--z-sticky)' }}
    >
      <div className={[
        'hidden md:block border-b',
        overlayMode ? 'border-white/20 bg-transparent' : 'border-border-subtle bg-transparent',
      ].join(' ')}>
        <div className="container-solar h-9 flex items-center justify-between text-xs">
          <a
            href={`tel:${t('contact.channels.phone_value')}`}
            className={['inline-flex items-center gap-1.5 transition-fast', overlayMode ? 'text-white/88 hover:text-white' : 'text-text-muted hover:text-text-strong'].join(' ')}
          >
            <PhoneIcon className="w-3.5 h-3.5" />
            <span>{t('contact.channels.phone_value')}</span>
          </a>
          <div className="hidden md:flex items-center gap-2">
            {SOCIAL_LINKS.map(({ href, label, icon }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                className={[
                  'inline-flex h-7 w-7 items-center justify-center rounded-full border transition-fast',
                  overlayMode
                    ? 'border-white/20 text-white/85 hover:border-white/35 hover:text-white hover:bg-white/10'
                    : 'border-border-subtle text-text-muted hover:text-text-strong hover:bg-surface-raised',
                ].join(' ')}
              >
                {icon}
              </a>
            ))}
          </div>
          <p className={['inline-flex items-center gap-1.5', overlayMode ? 'text-white/88' : 'text-text-muted'].join(' ')}>
            <ClockIcon className="w-3.5 h-3.5" />
            <span>{t('footer.hours')}</span>
          </p>
        </div>
      </div>

      <nav
        aria-label="Main navigation"
        className="container-solar flex items-center justify-between h-16"
      >
        {/* Logo */}
        <Link
          href="/"
          aria-label={t('footer.company_name')}
          className={[
            'flex items-center gap-2 font-display font-bold text-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-focus-ring rounded-sm',
            overlayMode ? 'text-white' : 'text-brand-primary',
          ].join(' ')}
        >
          <SolarIcon className={overlayMode ? 'w-7 h-7 text-brand-accent' : 'w-7 h-7 text-brand-primary'} aria-hidden />
          <span>{t('footer.company_name')}</span>
        </Link>

        {/* Desktop nav */}
        <ul className="hidden lg:flex items-center gap-1" role="list">
          {NAV_LINKS.map(({ href, key }) => {
            const active = pathname === href || (href !== '/' && pathname.startsWith(href))
            return (
              <li key={href}>
                <Link
                  href={href}
                  aria-current={active ? 'page' : undefined}
                  className={[
                    'px-3 py-1.5 rounded-md text-sm font-medium transition-fast',
                    active
                      ? overlayMode
                        ? 'text-brand-accent bg-black/35'
                        : 'text-brand-primary bg-surface-raised'
                      : overlayMode
                        ? 'text-white/90 hover:text-white hover:bg-black/25'
                        : 'text-text-default hover:text-text-strong hover:bg-surface-raised',
                  ].join(' ')}
                >
                  {t(key)}
                </Link>
              </li>
            )
          })}
        </ul>

        {/* Desktop CTA actions */}
        <div className="hidden lg:flex items-center gap-2">
          <ThemeSwitcher />
          <button
            type="button"
            onClick={openSignIn}
            className={overlayMode ? 'btn text-sm bg-transparent text-white border border-white/25 hover:bg-white/10' : 'btn btn-ghost text-sm'}
          >
            {t('nav.sign_in')}
          </button>
          <button
            type="button"
            onClick={openQuote}
            className={overlayMode ? 'btn btn-accent text-sm' : 'btn btn-primary text-sm'}
          >
            {t('cta.get_quote')}
          </button>
        </div>

        {/* Mobile: theme + menu toggle */}
        <div className="lg:hidden flex items-center gap-1">
          <ThemeSwitcher />
          <button
            type="button"
            aria-label={menuOpen ? 'Close navigation menu' : 'Open navigation menu'}
            aria-expanded={menuOpen}
            aria-controls="mobile-menu"
            onClick={() => setMenuOpen((v) => !v)}
            className={[
              'p-2 rounded-md transition-fast focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-focus-ring',
              overlayMode ? 'text-white hover:bg-black/20' : 'text-text-default hover:bg-surface-raised',
            ].join(' ')}
          >
            <MenuIcon open={menuOpen} />
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            id="mobile-menu"
            ref={menuRef}
            role="dialog"
            aria-modal="true"
            aria-label="Navigation menu"
            variants={mobileMenuVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            className="lg:hidden overflow-hidden bg-surface-base border-t border-border-subtle"
          >
            <div className="container-solar py-4 flex flex-col gap-1">
              {NAV_LINKS.map(({ href, key }) => {
                const active = pathname === href || (href !== '/' && pathname.startsWith(href))
                return (
                  <Link
                    key={href}
                    href={href}
                    aria-current={active ? 'page' : undefined}
                    className={[
                      'px-3 py-2.5 rounded-md font-medium text-sm transition-fast',
                      active
                        ? 'text-brand-primary bg-surface-raised'
                        : 'text-text-default hover:text-text-strong hover:bg-surface-raised',
                    ].join(' ')}
                  >
                    {t(key)}
                  </Link>
                )
              })}
              <div className="mt-3 pt-3 border-t border-border-subtle flex flex-col gap-2">
                <button
                  type="button"
                  onClick={() => { setMenuOpen(false); openSignIn() }}
                  className="btn btn-ghost text-sm justify-center"
                >
                  {t('nav.sign_in')}
                </button>
                <button
                  type="button"
                  onClick={() => { setMenuOpen(false); openQuote() }}
                  className="btn btn-primary text-sm justify-center"
                >
                  {t('cta.get_quote')}
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}

const SOCIAL_LINKS = [
  {
    href: 'https://www.instagram.com/',
    label: t('footer.social_instagram'),
    icon: <InstagramIcon className="w-3.5 h-3.5" />,
  },
  {
    href: 'https://www.facebook.com/',
    label: t('footer.social_facebook'),
    icon: <FacebookIcon className="w-3.5 h-3.5" />,
  },
  {
    href: 'https://www.linkedin.com/',
    label: t('footer.social_linkedin'),
    icon: <LinkedInIcon className="w-3.5 h-3.5" />,
  },
]

// ─── Icon helpers ──────────────────────────────────────────────────────────────

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

function MenuIcon({ open }: { open: boolean }) {
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
      {open ? (
        <>
          <line x1="18" y1="6" x2="6" y2="18" />
          <line x1="6" y1="6" x2="18" y2="18" />
        </>
      ) : (
        <>
          <line x1="3" y1="6" x2="21" y2="6" />
          <line x1="3" y1="12" x2="21" y2="12" />
          <line x1="3" y1="18" x2="21" y2="18" />
        </>
      )}
    </svg>
  )
}

function PhoneIcon({ className }: { className?: string }) {
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
      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.86 19.86 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6A19.86 19.86 0 0 1 2.12 4.18 2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
    </svg>
  )
}

function ClockIcon({ className }: { className?: string }) {
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
      <circle cx="12" cy="12" r="10" />
      <polyline points="12 6 12 12 16 14" />
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
