import type { Metadata } from 'next'
import { getFaqItems } from '@/sanity/queries/faq'

export const metadata: Metadata = {
  title: 'Frequently Asked Questions',
  description: 'Common questions about our plumbing services, pricing, and what to expect.',
}

export default async function FaqPage() {
  const items = await getFaqItems()

  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold mb-4">Frequently Asked Questions</h1>
      <p className="text-xl text-gray-600 mb-12 max-w-2xl">
        Common questions about our plumbing services, pricing, and what to expect.
      </p>
      <div className="max-w-3xl space-y-4">
        {items.map((item) => (
          <details
            key={item._id}
            className="group bg-white border border-gray-200 rounded-xl overflow-hidden"
          >
            <summary className="cursor-pointer list-none p-5 font-semibold text-gray-900 hover:text-brand-blue flex items-center justify-between gap-4">
              {item.question}
              <span className="text-2xl leading-none group-open:rotate-45 transition-transform">+</span>
            </summary>
            <div className="px-5 pb-5 text-gray-600 leading-relaxed">
              {item.answer}
            </div>
          </details>
        ))}
      </div>
    </div>
  )
}
