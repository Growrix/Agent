import type { Metadata } from 'next'
import { getAllServiceAreas } from '@/sanity/queries/areas'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Plumbing Service Areas',
  description: 'We service homes and businesses across the region. Find your suburb to learn more.',
}

export default async function AreasPage() {
  const areas = await getAllServiceAreas()

  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold mb-4">Service Areas</h1>
      <p className="text-xl text-gray-600 mb-12 max-w-2xl">
        We service homes and businesses across the region. Select your suburb to see local availability and pricing.
      </p>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3">
        {areas.map((area) => (
          <Link
            key={area._id}
            href={`/areas/${area.slug.current}`}
            className="bg-white border border-gray-200 rounded-lg p-3 hover:border-brand-blue hover:text-brand-blue transition-all text-sm font-medium"
          >
            {area.suburb || area.title}
            {area.region && <span className="block text-xs text-gray-500 mt-1">{area.region}</span>}
          </Link>
        ))}
      </div>
    </div>
  )
}
