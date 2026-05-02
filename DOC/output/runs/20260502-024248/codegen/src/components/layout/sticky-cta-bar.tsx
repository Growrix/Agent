'use client'

import { useEffect, useState } from 'react'
import { Phone } from 'lucide-react'
import Link from 'next/link'

export function StickyCTABar() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setVisible(window.scrollY > 300)
    }
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  if (!visible) return null

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 md:hidden bg-white border-t border-gray-200 shadow-lg">
      <div className="flex">
        <a
          href="tel:1300XXXXXX"
          className="flex-1 flex items-center justify-center gap-2 bg-brand-blue text-white font-bold py-4 text-sm"
        >
          <Phone className="h-4 w-4" />
          Call Now
        </a>
        <Link
          href="/quote"
          className="flex-1 flex items-center justify-center bg-brand-orange text-white font-bold py-4 text-sm"
        >
          Get a Quote
        </Link>
      </div>
    </div>
  )
}
