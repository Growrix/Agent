import { Phone, AlertTriangle } from 'lucide-react'

export function EmergencyCTABanner() {
  const phoneNumber = '1300 XXX XXX'
  const phoneHref = 'tel:1300XXXXXX'

  return (
    <div className="bg-red-600 text-white py-3 px-4">
      <div className="container mx-auto flex flex-col sm:flex-row items-center justify-between gap-2 text-sm">
        <div className="flex items-center gap-2 font-medium">
          <AlertTriangle className="h-4 w-4 flex-shrink-0" />
          <span>Plumbing emergency? We respond 24/7 — no extra call-out fee.</span>
        </div>
        <a
          href={phoneHref}
          className="inline-flex items-center gap-2 bg-white text-red-600 font-bold py-1.5 px-4 rounded-lg hover:bg-red-50 transition-colors text-sm flex-shrink-0"
        >
          <Phone className="h-4 w-4" />
          {phoneNumber}
        </a>
      </div>
    </div>
  )
}
