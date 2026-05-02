import type { Metadata } from 'next'
import { getAllServices } from '@/sanity/queries/services'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Plumbing Services',
  description: 'Full range of residential and commercial plumbing services. Emergency, hot water, blocked drains, gas fitting and more.',
}

export default async function ServicesPage() {
  const services = await getAllServices()

  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold mb-4">Our Plumbing Services</h1>
      <p className="text-xl text-gray-600 mb-12 max-w-2xl">
        We offer a full range of residential and commercial plumbing services, all completed by licenced tradespeople.
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {services.map((service) => (
          <Link
            key={service._id}
            href={`/services/${service.slug.current}`}
            className="group bg-white border border-gray-200 rounded-xl p-6 hover:border-brand-blue hover:shadow-md transition-all"
          >
            <h2 className="text-xl font-semibold mb-2 group-hover:text-brand-blue transition-colors">
              {service.title}
            </h2>
            {service.excerpt && (
              <p className="text-gray-600 text-sm mb-4 line-clamp-3">{service.excerpt}</p>
            )}
            <span className="text-brand-blue text-sm font-medium">Learn more →</span>
          </Link>
        ))}
      </div>
    </div>
  )
}
