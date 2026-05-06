import type { Metadata } from 'next'
import AuthFormCard from '@/components/ui/AuthFormCard'
import { t } from '@/lib/content'

export const metadata: Metadata = {
  title: 'Sign In',
  description: 'Sign in to your SolarPro account.',
}

export default function SignInPage() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center py-16 px-4"
      style={{ background: 'linear-gradient(160deg, var(--color-brand-primary) 0%, color-mix(in srgb, var(--color-brand-primary) 60%, #0f172a) 100%)' }}
    >
      <p className="font-display font-bold text-text-inverse text-2xl mb-8">SolarPro</p>
      <AuthFormCard mode="sign-in" />
      <p className="text-xs text-text-inverse/50 mt-6 text-center">
        {t('auth.no_account')}{' '}
        <a href="/sign-up" className="text-brand-accent hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-focus-ring rounded">
          {t('auth.create_account')}
        </a>
      </p>
    </div>
  )
}
