import Link from 'next/link'
import { t } from '@/lib/content'

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[70vh] px-4 text-center">
      <p className="eyebrow mb-4">404</p>
      <h1 className="text-display-section font-display font-bold text-text-strong mb-4">
        {t('utility.not_found.title')}
      </h1>
      <p className="text-body-fluid text-text-muted mb-8 max-w-md">
        {t('utility.not_found.subtitle')}
      </p>
      <Link href="/" className="btn btn-primary">
        {t('utility.not_found.cta')}
      </Link>
    </div>
  )
}
