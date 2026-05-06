'use client'

import Link from 'next/link'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'
import { motion, useReducedMotion } from 'framer-motion'
import { t } from '@/lib/content'
import { cn } from '@/lib/utils'

type Mode = 'sign-in' | 'sign-up'

const signInSchema = z.object({
  email: z.string().email('Please enter a valid email'),
  password: z.string().min(6, 'Password must be at least 6 characters'),
})

const signUpSchema = z.object({
  name: z.string().min(2, 'Please enter your full name'),
  email: z.string().email('Please enter a valid email'),
  password: z.string().min(8, 'Password must be at least 8 characters'),
})

type SignInValues = z.infer<typeof signInSchema>
type SignUpValues = z.infer<typeof signUpSchema>

interface AuthFormCardProps {
  mode: Mode
  onSwitchMode?: () => void
}

export default function AuthFormCard({ mode, onSwitchMode }: AuthFormCardProps) {
  const shouldReduce = useReducedMotion()
  const isSignIn = mode === 'sign-in'

  const schema = isSignIn ? signInSchema : signUpSchema
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<SignInValues | SignUpValues>({ resolver: zodResolver(schema) })

  const onSubmit = async (data: SignInValues | SignUpValues) => {
    // Stub — wire to real auth endpoint
    await new Promise((r) => setTimeout(r, 600))
    console.log('Auth submit:', data)
  }

  const title = isSignIn ? t('auth.sign_in_form.title') : t('auth.sign_up_form.title')
  const subtitle = isSignIn ? t('auth.sign_in_form.subtitle') : t('auth.sign_up_form.subtitle')
  const submitLabel = isSignIn ? t('auth.sign_in_form.submit') : t('auth.sign_up_form.submit')

  return (
    <div className="card p-8 w-full max-w-md mx-auto">
      {/* Logo */}
      <div className="flex justify-center mb-6">
        <SolarLogo />
      </div>

      <h1 className="text-title-fluid font-display font-bold text-text-strong text-center mb-2">
        {title}
      </h1>
      <p className="text-sm text-text-muted text-center mb-8">{subtitle}</p>

      <form
        onSubmit={handleSubmit(onSubmit)}
        noValidate
        className="flex flex-col gap-5"
        aria-label={title}
      >
        {!isSignIn && (
          <div className="flex flex-col gap-1.5">
            <label htmlFor="name" className="text-sm font-semibold text-text-default">
              {t('auth.sign_up_form.name_label')}
            </label>
            <input
              {...register('name')}
              id="name"
              type="text"
              autoComplete="name"
              aria-invalid={!!('name' in errors && errors.name)}
              className={cn('input-solar', 'name' in errors && errors.name && 'error')}
            />
            {'name' in errors && errors.name && (
              <p role="alert" className="text-xs text-state-danger">
                {errors.name.message}
              </p>
            )}
          </div>
        )}

        <div className="flex flex-col gap-1.5">
          <label htmlFor="email" className="text-sm font-semibold text-text-default">
            {isSignIn ? t('auth.sign_in_form.email_label') : t('auth.sign_up_form.email_label')}
          </label>
          <input
            {...register('email')}
            id="email"
            type="email"
            autoComplete="email"
            aria-invalid={!!errors.email}
            className={cn('input-solar', errors.email && 'error')}
          />
          {errors.email && (
            <p role="alert" className="text-xs text-state-danger">
              {errors.email.message}
            </p>
          )}
        </div>

        <div className="flex flex-col gap-1.5">
          <div className="flex items-center justify-between">
            <label htmlFor="password" className="text-sm font-semibold text-text-default">
              {isSignIn ? t('auth.sign_in_form.password_label') : t('auth.sign_up_form.password_label')}
            </label>
            {isSignIn && (
              <Link href="#" className="text-xs text-brand-primary hover:underline">
                {t('auth.sign_in_form.forgot_password')}
              </Link>
            )}
          </div>
          <input
            {...register('password')}
            id="password"
            type="password"
            autoComplete={isSignIn ? 'current-password' : 'new-password'}
            aria-invalid={!!errors.password}
            aria-describedby={!isSignIn ? 'password-hint' : undefined}
            className={cn('input-solar', errors.password && 'error')}
          />
          {!isSignIn && (
            <p id="password-hint" className="text-xs text-text-muted">
              {t('auth.sign_up_form.password_hint')}
            </p>
          )}
          {errors.password && (
            <p role="alert" className="text-xs text-state-danger">
              {errors.password.message}
            </p>
          )}
        </div>

        <motion.button
          type="submit"
          disabled={isSubmitting}
          aria-busy={isSubmitting}
          whileTap={shouldReduce ? {} : { scale: 0.97 }}
          className="btn btn-primary w-full justify-center disabled:opacity-60"
        >
          {isSubmitting ? t('utility.loading') : submitLabel}
        </motion.button>
      </form>

      <p className="text-sm text-text-muted text-center mt-6">
        {isSignIn ? t('auth.sign_in_form.no_account') : t('auth.sign_up_form.have_account')}{' '}
        {onSwitchMode ? (
          <button
            type="button"
            onClick={onSwitchMode}
            className="text-brand-primary hover:underline font-medium bg-transparent border-0 p-0 cursor-pointer"
          >
            {isSignIn ? t('auth.sign_in_form.register_link') : t('auth.sign_up_form.sign_in_link')}
          </button>
        ) : (
          <Link
            href={isSignIn ? '/sign-up' : '/sign-in'}
            className="text-brand-primary hover:underline font-medium"
          >
            {isSignIn ? t('auth.sign_in_form.register_link') : t('auth.sign_up_form.sign_in_link')}
          </Link>
        )}
      </p>
    </div>
  )
}

function SolarLogo() {
  return (
    <svg
      viewBox="0 0 32 32"
      fill="none"
      className="w-10 h-10 text-brand-primary"
      aria-hidden="true"
    >
      <circle cx="16" cy="16" r="7" stroke="currentColor" strokeWidth="2.5" />
      <line x1="16" y1="2" x2="16" y2="6" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
      <line x1="16" y1="26" x2="16" y2="30" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
      <line x1="5.37" y1="5.37" x2="8.2" y2="8.2" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
      <line x1="23.8" y1="23.8" x2="26.63" y2="26.63" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
      <line x1="2" y1="16" x2="6" y2="16" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
      <line x1="26" y1="16" x2="30" y2="16" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
    </svg>
  )
}
