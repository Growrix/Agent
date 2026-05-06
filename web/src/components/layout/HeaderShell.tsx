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
  const [scrolled, setScrolled] = useState(false)
  const pathname = usePathname()
  const shouldReduce = useReducedMotion()
  const menuRef = useRef<HTMLDivElement>(null)
  const { openSignIn } = useAuthModal()
  const { openQuote } = useQuoteModal()
  const overlayMode = pathname === '/' && !scrolled && !menuOpen

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

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
        'sticky top-0 left-0 right-0 z-sticky border-b transition-base',
        overlayMode
          ? 'bg-transparent border-transparent'
          : 'bg-surface-base/95 backdrop-blur-md border-border-subtle shadow-sm',
      ].join(' ')}
      style={{ zIndex: 'var(--z-sticky)' }}
    >
      <div className={[
        'hidden md:block border-b',
        overlayMode ? 'border-white/15 bg-black/25' : 'border-border-subtle bg-surface-raised/75',
      ].join(' ')}>
        <div className="container-solar h-9 flex items-center justify-between text-xs">
          <p className={overlayMode ? 'text-white/85' : 'text-text-muted'}>
            {t('header.topbar.phone_prefix')} {t('contact.channels.phone_value')}
          </p>
          <p className={overlayMode ? 'text-white/80' : 'text-text-muted'}>
            {t('header.topbar.service_note')}
          </p>
          <p className={overlayMode ? 'text-white/85' : 'text-text-muted'}>
            {t('header.topbar.hours_prefix')} {t('footer.hours')}
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
            className="p-2 rounded-md text-text-default hover:bg-surface-raised transition-fast focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-focus-ring"
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
