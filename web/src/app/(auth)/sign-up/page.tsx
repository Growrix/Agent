import type { Metadata } from 'next'
import AuthFormCard from '@/components/ui/AuthFormCard'
import { t } from '@/lib/content'

export const metadata: Metadata = {
  title: 'Create Account',
  description: 'Create your SolarPro account to track your quote and installation.',
}

export default function SignUpPage() {
  return (
    <div
      className="min-h-screen flex flex-col items-center justify-center py-16 px-4"
      style={{ background: 'linear-gradient(160deg, var(--color-brand-primary) 0%, color-mix(in srgb, var(--color-brand-primary) 60%, #0f172a) 100%)' }}
    >
      <p className="font-display font-bold text-text-inverse text-2xl mb-8">SolarPro</p>
      <AuthFormCard mode="sign-up" />

      {/* Social proof strip */}
      <div className="mt-8 flex items-center gap-4 text-center">
        <div className="text-text-inverse/70 text-xs">
          <span className="block font-bold text-text-inverse text-lg">4.9★</span>
          {t('auth.trust_rating')}
        </div>
        <div className="w-px h-8 bg-text-inverse/20" aria-hidden="true" />
        <div className="text-text-inverse/70 text-xs">
          <span className="block font-bold text-text-inverse text-lg">500+</span>
          {t('auth.trust_installs')}
        </div>
        <div className="w-px h-8 bg-text-inverse/20" aria-hidden="true" />
        <div className="text-text-inverse/70 text-xs">
          <span className="block font-bold text-text-inverse text-lg">10yr</span>
          {t('auth.trust_warranty')}
        </div>
      </div>

      <p className="text-xs text-text-inverse/50 mt-6 text-center">
        {t('auth.have_account')}{' '}
        <a href="/sign-in" className="text-brand-accent hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-focus-ring rounded">
          {t('auth.sign_in')}
        </a>
      </p>
    </div>
  )
}
