import Link from 'next/link'
import { Phone, Menu } from 'lucide-react'

const navLinks = [
  { label: 'Services', href: '/services' },
  { label: 'Emergency', href: '/emergency-plumbing' },
  { label: 'Areas', href: '/areas' },
  { label: 'Blog', href: '/blog' },
  { label: 'About', href: '/about' },
  { label: 'Contact', href: '/contact' },
]

export function SiteHeader() {
  const phoneNumber = '1300 XXX XXX'
  const phoneHref = 'tel:1300XXXXXX'

  return (
    <header className="bg-white border-b border-gray-200 sticky top-0 z-40 shadow-sm">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between gap-4">
        <Link href="/" className="flex items-center gap-2 flex-shrink-0">
          <span className="text-xl font-extrabold text-brand-blue">PlumberCo</span>
        </Link>

        <nav className="hidden md:flex items-center gap-6 text-sm font-medium">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-gray-700 hover:text-brand-blue transition-colors"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <a
            href={phoneHref}
            className="hidden sm:inline-flex items-center gap-2 text-brand-blue font-bold text-sm hover:text-brand-blue-dark transition-colors"
          >
            <Phone className="h-4 w-4" />
            {phoneNumber}
          </a>
          <Link
            href="/quote"
            className="bg-brand-orange hover:bg-brand-orange-dark text-white text-sm font-bold py-2 px-4 rounded-lg transition-colors"
          >
            Get a Quote
          </Link>
        </div>
      </div>
    </header>
  )
}
