'use client'

import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'
import { useRouter } from 'next/navigation'

const AUSTRALIAN_PHONE_RE = /^(\+61|0)[2-9]\d{8}$/

const callbackSchema = z.object({
  name: z.string().min(2, 'Name is required'),
  phone: z.string().regex(AUSTRALIAN_PHONE_RE, 'Enter a valid Australian phone number'),
  preferred_time: z.string().optional(),
  suburb: z.string().optional(),
  message: z.string().optional(),
  _hp: z.string().max(0, 'Bot detected'),
})

type CallbackFormValues = z.infer<typeof callbackSchema>

interface CallbackRequestFormProps {
  sourcePage?: string
  variant?: 'light' | 'dark'
}

export function CallbackRequestForm({ sourcePage, variant = 'light' }: CallbackRequestFormProps) {
  const router = useRouter()
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<CallbackFormValues>({
    resolver: zodResolver(callbackSchema),
    defaultValues: { _hp: '' },
  })

  const inputClass = `w-full border rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-brand-blue ${
    variant === 'dark'
      ? 'bg-white/10 border-white/20 text-white placeholder-white/60'
      : 'border-gray-300 bg-white text-gray-900'
  }`
  const labelClass = `block text-sm font-medium mb-1 ${variant === 'dark' ? 'text-white' : 'text-gray-700'}`

  async function onSubmit(data: CallbackFormValues) {
    const payload = {
      name: data.name,
      phone: data.phone,
      preferred_time: data.preferred_time,
      suburb: data.suburb,
      message: data.message,
      source_page: sourcePage,
      _hp: data._hp,
    }

    const res = await fetch('/api/callback-requests', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload),
    })

    if (!res.ok) {
      const json = await res.json().catch(() => ({}))
      throw new Error(json.error ?? 'Failed to submit. Please try again.')
    }

    router.push('/thank-you?type=callback')
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} noValidate className="space-y-4">
      {/* Honeypot */}
      <input
        {...register('_hp')}
        type="text"
        aria-hidden="true"
        tabIndex={-1}
        autoComplete="off"
        className="hidden"
      />

      <div>
        <label htmlFor="cb-name" className={labelClass}>
          Your Name *
        </label>
        <input
          id="cb-name"
          type="text"
          autoComplete="name"
          {...register('name')}
          className={inputClass}
        />
        {errors.name && <p className="text-red-400 text-xs mt-1">{errors.name.message}</p>}
      </div>

      <div>
        <label htmlFor="cb-phone" className={labelClass}>
          Phone *
        </label>
        <input
          id="cb-phone"
          type="tel"
          autoComplete="tel"
          placeholder="0400 000 000"
          {...register('phone')}
          className={inputClass}
        />
        {errors.phone && <p className="text-red-400 text-xs mt-1">{errors.phone.message}</p>}
      </div>

      <div>
        <label htmlFor="cb-time" className={labelClass}>
          Best time to call (optional)
        </label>
        <input
          id="cb-time"
          type="text"
          placeholder="e.g. Mornings, After 3pm"
          {...register('preferred_time')}
          className={inputClass}
        />
      </div>

      <div>
        <label htmlFor="cb-message" className={labelClass}>
          Brief description (optional)
        </label>
        <textarea
          id="cb-message"
          rows={3}
          {...register('message')}
          className={`${inputClass} resize-none`}
        />
      </div>

      <button
        type="submit"
        disabled={isSubmitting}
        className="w-full bg-brand-blue hover:bg-brand-blue-dark disabled:opacity-60 text-white font-bold py-3 px-6 rounded-lg transition-colors"
      >
        {isSubmitting ? 'Sending…' : 'Request Callback'}
      </button>
    </form>
  )
}
