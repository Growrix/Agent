'use client'

import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'
import { useRouter } from 'next/navigation'

const AUSTRALIAN_PHONE_RE = /^(\+61|0)[2-9]\d{8}$/

const quoteSchema = z.object({
  name: z.string().min(2, 'Name is required'),
  phone: z.string().regex(AUSTRALIAN_PHONE_RE, 'Enter a valid Australian phone number'),
  email: z.string().email('Enter a valid email address'),
  suburb: z.string().min(2, 'Suburb is required'),
  service_slug: z.string().optional(),
  urgency: z.enum(['standard', 'urgent', 'emergency']).default('standard'),
  message: z.string().optional(),
  consent: z.literal(true, { errorMap: () => ({ message: 'You must consent to be contacted' }) }),
  _hp: z.string().max(0, 'Bot detected'),
})

type QuoteFormValues = z.infer<typeof quoteSchema>

interface QuoteRequestFormProps {
  sourcePage?: string
  defaultSuburb?: string
}

export function QuoteRequestForm({ sourcePage, defaultSuburb }: QuoteRequestFormProps) {
  const router = useRouter()
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<QuoteFormValues>({
    resolver: zodResolver(quoteSchema),
    defaultValues: {
      suburb: defaultSuburb ?? '',
      urgency: 'standard',
      _hp: '',
    },
  })

  async function onSubmit(data: QuoteFormValues) {
    const payload = {
      name: data.name,
      phone: data.phone,
      email: data.email,
      suburb: data.suburb,
      service_slug: data.service_slug,
      urgency: data.urgency,
      message: data.message,
      source_page: sourcePage,
      _hp: data._hp,
    }

    const res = await fetch('/api/lead-enquiries', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload),
    })

    if (!res.ok) {
      const json = await res.json().catch(() => ({}))
      throw new Error(json.error ?? 'Failed to submit. Please try again.')
    }

    router.push('/thank-you?type=quote')
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
        <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
          Full Name *
        </label>
        <input
          id="name"
          type="text"
          autoComplete="name"
          {...register('name')}
          className="w-full border border-gray-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-brand-blue"
        />
        {errors.name && <p className="text-red-600 text-xs mt-1">{errors.name.message}</p>}
      </div>

      <div>
        <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
          Phone *
        </label>
        <input
          id="phone"
          type="tel"
          autoComplete="tel"
          placeholder="0400 000 000"
          {...register('phone')}
          className="w-full border border-gray-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-brand-blue"
        />
        {errors.phone && <p className="text-red-600 text-xs mt-1">{errors.phone.message}</p>}
      </div>

      <div>
        <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
          Email *
        </label>
        <input
          id="email"
          type="email"
          autoComplete="email"
          {...register('email')}
          className="w-full border border-gray-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-brand-blue"
        />
        {errors.email && <p className="text-red-600 text-xs mt-1">{errors.email.message}</p>}
      </div>

      <div>
        <label htmlFor="suburb" className="block text-sm font-medium text-gray-700 mb-1">
          Suburb *
        </label>
        <input
          id="suburb"
          type="text"
          autoComplete="address-level2"
          {...register('suburb')}
          className="w-full border border-gray-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-brand-blue"
        />
        {errors.suburb && <p className="text-red-600 text-xs mt-1">{errors.suburb.message}</p>}
      </div>

      <div>
        <label htmlFor="urgency" className="block text-sm font-medium text-gray-700 mb-1">
          Urgency
        </label>
        <select
          id="urgency"
          {...register('urgency')}
          className="w-full border border-gray-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-brand-blue bg-white"
        >
          <option value="standard">Standard — within a few days</option>
          <option value="urgent">Urgent — same day / next day</option>
          <option value="emergency">Emergency — right now</option>
        </select>
      </div>

      <div>
        <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
          Describe the problem (optional)
        </label>
        <textarea
          id="message"
          rows={3}
          {...register('message')}
          className="w-full border border-gray-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-brand-blue resize-none"
        />
      </div>

      <div className="flex items-start gap-2">
        <input
          id="consent"
          type="checkbox"
          {...register('consent')}
          className="mt-0.5 h-4 w-4 border-gray-300 rounded text-brand-blue focus:ring-brand-blue"
        />
        <label htmlFor="consent" className="text-xs text-gray-600">
          I consent to being contacted by PlumberCo regarding my enquiry. *
        </label>
      </div>
      {errors.consent && <p className="text-red-600 text-xs -mt-2">{errors.consent.message}</p>}

      <button
        type="submit"
        disabled={isSubmitting}
        className="w-full bg-brand-orange hover:bg-brand-orange-dark disabled:opacity-60 text-white font-bold py-3 px-6 rounded-lg transition-colors"
      >
        {isSubmitting ? 'Sending…' : 'Get a Free Quote'}
      </button>
    </form>
  )
}
