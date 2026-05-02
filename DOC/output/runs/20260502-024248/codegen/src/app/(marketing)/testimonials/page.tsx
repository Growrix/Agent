import type { Metadata } from 'next'
import { getApprovedTestimonials } from '@/sanity/queries/testimonials'
import { Star } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Customer Reviews',
  description: 'Read what our customers say about our plumbing services.',
}

export default async function TestimonialsPage() {
  const testimonials = await getApprovedTestimonials()

  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold mb-4">Customer Reviews</h1>
      <p className="text-xl text-gray-600 mb-12 max-w-2xl">
        Honest reviews from real customers across the region.
      </p>
      {testimonials.length === 0 ? (
        <p className="text-gray-500">No reviews yet — check back soon!</p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((t) => (
            <div key={t._id} className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm flex flex-col">
              <div className="flex gap-1 mb-3">
                {Array.from({ length: t.rating }).map((_, i) => (
                  <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                ))}
              </div>
              <p className="text-gray-700 italic flex-1 mb-4">&ldquo;{t.body}&rdquo;</p>
              <div>
                <p className="font-semibold text-sm">{t.name}</p>
                {t.suburb && <p className="text-gray-500 text-sm">{t.suburb}</p>}
                {t.service && (
                  <p className="text-xs text-brand-blue mt-1">{t.service.title}</p>
                )}
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  )
}
