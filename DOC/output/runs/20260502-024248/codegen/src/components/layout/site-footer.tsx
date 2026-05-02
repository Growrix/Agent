import Link from 'next/link'
import { Phone } from 'lucide-react'

const services = [
  { label: 'Emergency Plumbing', href: '/emergency-plumbing' },
  { label: 'Hot Water Systems', href: '/services/hot-water' },
  { label: 'Blocked Drains', href: '/services/blocked-drains' },
  { label: 'Leak Detection', href: '/services/leak-detection' },
  { label: 'Pipe Repairs', href: '/services/pipe-repairs' },
]

const company = [
  { label: 'About Us', href: '/about' },
  { label: 'Blog', href: '/blog' },
  { label: 'Testimonials', href: '/testimonials' },
  { label: 'Contact', href: '/contact' },
  { label: 'FAQ', href: '/faq' },
]

const legal = [
  { label: 'Privacy Policy', href: '/privacy' },
  { label: 'Terms & Conditions', href: '/terms' },
]

export function SiteFooter() {
  const phoneNumber = '1300 XXX XXX'
  const phoneHref = 'tel:1300XXXXXX'
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-gray-900 text-gray-300 mt-auto">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          <div>
            <Link href="/" className="text-xl font-extrabold text-white mb-4 block">
              PlumberCo
            </Link>
            <p className="text-sm text-gray-400 mb-4">
              Your local licenced plumber. Serving the region with upfront pricing and fast response times.
            </p>
            <a
              href={phoneHref}
              className="inline-flex items-center gap-2 text-white font-bold hover:text-brand-orange transition-colors"
            >
              <Phone className="h-4 w-4" />
              {phoneNumber}
            </a>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-3">Services</h3>
            <ul className="space-y-2">
              {services.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-sm hover:text-white transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-3">Company</h3>
            <ul className="space-y-2">
              {company.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-sm hover:text-white transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-3">Legal</h3>
            <ul className="space-y-2">
              {legal.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-sm hover:text-white transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
            <p className="text-xs text-gray-500 mt-4">Plumber Licence No. XXXXXXXXX</p>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-6 text-xs text-gray-500 text-center">
          &copy; {currentYear} PlumberCo. All rights reserved.
        </div>
      </div>
    </footer>
  )
}
