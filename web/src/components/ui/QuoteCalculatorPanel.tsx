'use client'

import { useState, useEffect } from 'react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'
import { motion, useMotionValue, useTransform, useReducedMotion, type MotionValue } from 'framer-motion'
import Link from 'next/link'
import { t } from '@/lib/content'
import { api, type QuoteEstimate } from '@/lib/api-client'
import { cn } from '@/lib/utils'

const leadSchema = z.object({
  name: z.string().min(2, 'Please enter your full name'),
  email: z.string().email('Please enter a valid email address'),
  phone: z.string().min(8, 'Please enter a valid phone number'),
  address: z.string().min(5, 'Please enter your property address'),
})
type LeadFormValues = z.infer<typeof leadSchema>

type Step = 'calculator' | 'form' | 'success'

export default function QuoteCalculatorPanel() {
  const [step, setStep] = useState<Step>('calculator')
  const [monthlyBill, setMonthlyBill] = useState(300)
  const [roofType, setRoofType] = useState('tile')
  const [estimate, setEstimate] = useState<QuoteEstimate | null>(null)
  const [calcLoading, setCalcLoading] = useState(false)
  const [submitLoading, setSubmitLoading] = useState(false)
  const [serverError, setServerError] = useState('')
  const shouldReduce = useReducedMotion()

  const savingsValue = useMotionValue(0)
  const displaySavings = useTransform(savingsValue, (v) => `$${Math.round(v).toLocaleString()}`)

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LeadFormValues>({ resolver: zodResolver(leadSchema) })

  const calculateEstimate = async () => {
    setCalcLoading(true)
    const result = await api.quote.estimate(monthlyBill)
    setEstimate(result)
    if (!shouldReduce) {
      // Animate savings counter
      const start = Date.now()
      const duration = 1000
      const from = 0
      const to = result.annualSavings
      const tick = () => {
        const elapsed = Date.now() - start
        const progress = Math.min(elapsed / duration, 1)
        const eased = 1 - Math.pow(1 - progress, 3)
        savingsValue.set(from + (to - from) * eased)
        if (progress < 1) requestAnimationFrame(tick)
      }
      requestAnimationFrame(tick)
    } else {
      savingsValue.set(result.annualSavings)
    }
    setCalcLoading(false)
  }

  useEffect(() => {
    calculateEstimate()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [monthlyBill])

  const onLeadSubmit = async (data: LeadFormValues) => {
    setSubmitLoading(true)
    setServerError('')
    try {
      // Stub — wire to real API
      await new Promise((r) => setTimeout(r, 800))
      console.log('Lead submitted:', data)
      setStep('success')
    } catch {
      setServerError(t('quote.error.general'))
    } finally {
      setSubmitLoading(false)
    }
  }

  if (step === 'success') {
    return (
      <div className="card p-10 text-center max-w-lg mx-auto">
        <div className="w-16 h-16 rounded-pill bg-state-success/10 flex items-center justify-center mx-auto mb-6">
          <CheckIcon className="w-8 h-8 text-state-success" />
        </div>
        <h2 className="text-title-fluid font-display font-bold text-text-strong mb-3">
          {t('quote.success.title')}
        </h2>
        <p className="text-body-fluid text-text-muted mb-8">{t('quote.success.subtitle')}</p>
        <Link href="/" className="btn btn-primary">
          {t('quote.success.cta')}
        </Link>
      </div>
    )
  }

  if (step === 'form') {
    return (
      <div className="card p-8 max-w-lg mx-auto">
        <h2 className="text-title-fluid font-display font-bold text-text-strong mb-6">
          {t('quote.form.title')}
        </h2>
        {serverError && (
          <div role="alert" className="mb-4 p-4 rounded-md text-sm text-state-danger" style={{ backgroundColor: 'var(--color-state-danger-bg)' }}>
            {serverError}
          </div>
        )}
        <form onSubmit={handleSubmit(onLeadSubmit)} noValidate className="flex flex-col gap-5" aria-label={t('quote.form.title')}>
          <Field label={t('quote.form.name_label')} error={errors.name?.message}>
            <input
              {...register('name')}
              placeholder={t('quote.form.name_placeholder')}
              autoComplete="name"
              aria-invalid={!!errors.name}
              aria-describedby={errors.name ? 'name-error' : undefined}
              className={cn('input-solar', errors.name && 'error')}
            />
            {errors.name && <ErrorMsg id="name-error">{errors.name.message}</ErrorMsg>}
          </Field>

          <Field label={t('quote.form.email_label')} error={errors.email?.message}>
            <input
              {...register('email')}
              type="email"
              placeholder={t('quote.form.email_placeholder')}
              autoComplete="email"
              aria-invalid={!!errors.email}
              aria-describedby={errors.email ? 'email-error' : undefined}
              className={cn('input-solar', errors.email && 'error')}
            />
            {errors.email && <ErrorMsg id="email-error">{errors.email.message}</ErrorMsg>}
          </Field>

          <Field label={t('quote.form.phone_label')} error={errors.phone?.message}>
            <input
              {...register('phone')}
              type="tel"
              placeholder={t('quote.form.phone_placeholder')}
              autoComplete="tel"
              aria-invalid={!!errors.phone}
              aria-describedby={errors.phone ? 'phone-error' : undefined}
              className={cn('input-solar', errors.phone && 'error')}
            />
            {errors.phone && <ErrorMsg id="phone-error">{errors.phone.message}</ErrorMsg>}
          </Field>

          <Field label={t('quote.form.address_label')} error={errors.address?.message}>
            <input
              {...register('address')}
              placeholder={t('quote.form.address_placeholder')}
              autoComplete="street-address"
              aria-invalid={!!errors.address}
              aria-describedby={errors.address ? 'address-error' : undefined}
              className={cn('input-solar', errors.address && 'error')}
            />
            {errors.address && <ErrorMsg id="address-error">{errors.address.message}</ErrorMsg>}
          </Field>

          <p className="text-xs text-text-muted">{t('quote.form.privacy_note')}</p>

          <div className="flex gap-3">
            <button
              type="button"
              onClick={() => setStep('calculator')}
              className="btn btn-ghost text-sm"
            >
              {t('cta.back')}
            </button>
            <motion.button
              type="submit"
              disabled={submitLoading}
              aria-busy={submitLoading}
              whileTap={shouldReduce ? {} : { scale: 0.97 }}
              className="btn btn-primary flex-1 disabled:opacity-60"
            >
              {submitLoading ? t('quote.form.submitting') : t('quote.form.submit')}
            </motion.button>
          </div>
        </form>
      </div>
    )
  }

  // Calculator step
  return (
    <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
      {/* Inputs */}
      <div className="card p-8">
        <h2 className="text-title-fluid font-display font-bold text-text-strong mb-6">
          {t('quote.calculator.title')}
        </h2>

        <div className="flex flex-col gap-6">
          <div>
            <label
              htmlFor="monthly-bill"
              className="block text-sm font-semibold text-text-default mb-2"
            >
              {t('quote.calculator.bill_label')}
            </label>
            <div className="relative">
              <span className="absolute left-3 top-1/2 -translate-y-1/2 text-text-muted font-medium">$</span>
              <input
                id="monthly-bill"
                type="number"
                min={50}
                max={2000}
                step={50}
                value={monthlyBill}
                onChange={(e) => setMonthlyBill(Number(e.target.value))}
                className="input-solar pl-7"
                aria-describedby="bill-hint"
              />
            </div>
            <p id="bill-hint" className="text-xs text-text-muted mt-1">
              Average monthly electricity bill in dollars
            </p>
          </div>

          <div>
            <label htmlFor="roof-type" className="block text-sm font-semibold text-text-default mb-2">
              {t('quote.calculator.roof_label')}
            </label>
            <select
              id="roof-type"
              value={roofType}
              onChange={(e) => setRoofType(e.target.value)}
              className="input-solar"
            >
              <option value="tile">{t('quote.calculator.roof_options.tile')}</option>
              <option value="metal">{t('quote.calculator.roof_options.metal')}</option>
              <option value="flat">{t('quote.calculator.roof_options.flat')}</option>
              <option value="other">{t('quote.calculator.roof_options.other')}</option>
            </select>
          </div>
        </div>
      </div>

      {/* Estimate */}
      <div className="card p-8 flex flex-col justify-between">
        <div>
          <h3 className="text-title-fluid font-display font-bold text-text-strong mb-6">
            {t('quote.calculator.output_title')}
          </h3>
          {calcLoading ? (
            <div className="flex flex-col gap-4" aria-busy="true" aria-label="Calculating estimate">
              {[1, 2, 3].map((i) => (
                <div key={i} className="h-14 rounded-md bg-surface-raised animate-pulse" />
              ))}
            </div>
          ) : estimate ? (
            <div className="flex flex-col gap-4">
              <EstimateRow
                label={t('quote.calculator.output_system_size')}
                value={`${estimate.systemSizeKw} kW`}
              />
              <EstimateRow
                label={t('quote.calculator.output_savings')}
                motionValue={displaySavings}
              />
              <EstimateRow
                label={t('quote.calculator.output_payback')}
                value={`${estimate.paybackYears} years`}
              />
            </div>
          ) : null}
        </div>
        <motion.button
          type="button"
          onClick={() => setStep('form')}
          disabled={!estimate || calcLoading}
          whileTap={shouldReduce ? {} : { scale: 0.97 }}
          whileHover={shouldReduce ? {} : { scale: 1.01 }}
          className="btn btn-primary w-full justify-center mt-8 disabled:opacity-50"
        >
          {t('quote.calculator.cta')}
        </motion.button>
      </div>
    </div>
  )
}

function EstimateRow({
  label,
  value,
  motionValue,
}: {
  label: string
  value?: string
  motionValue?: MotionValue<string>
}) {
  return (
    <div className="flex items-baseline justify-between border-b border-border-subtle pb-3">
      <span className="text-sm text-text-muted">{label}</span>
      {motionValue ? (
        <motion.span className="text-title-fluid font-display font-bold text-brand-primary">
          {motionValue}
        </motion.span>
      ) : (
        <span className="text-title-fluid font-display font-bold text-text-strong">{value}</span>
      )}
    </div>
  )
}

function Field({
  label,
  error,
  children,
}: {
  label: string
  error?: string
  children: React.ReactNode
}) {
  return (
    <div className="flex flex-col gap-1.5">
      <label className="text-sm font-semibold text-text-default">{label}</label>
      {children}
    </div>
  )
}

function ErrorMsg({ id, children }: { id: string; children: React.ReactNode }) {
  return (
    <p id={id} role="alert" className="text-xs text-state-danger mt-0.5">
      {children}
    </p>
  )
}

function CheckIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className={className} aria-hidden="true">
      <polyline points="20 6 9 17 4 12" />
    </svg>
  )
}
