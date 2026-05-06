'use client'

import Link from 'next/link'
import { t } from '@/lib/content'

export default function ErrorPage({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  return (
    <div className="flex flex-col items-center justify-center min-h-[60vh] px-4 text-center">
      <h1 className="text-display-section font-display font-bold text-text-strong mb-4">
        {t('utility.error.title')}
      </h1>
      <p className="text-body-fluid text-text-muted mb-8 max-w-md">
        {t('utility.error.subtitle')}
      </p>
      <div className="flex gap-4">
        <button type="button" onClick={reset} className="btn btn-primary">
          {t('utility.error.retry')}
        </button>
        <Link href="/" className="btn btn-outline">
          {t('cta.back')}
        </Link>
      </div>
    </div>
  )
}
