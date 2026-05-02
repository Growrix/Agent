import Link from 'next/link'

export default function NotFound() {
  return (
    <div className="min-h-[50vh] flex flex-col items-center justify-center text-center px-4">
      <h2 className="text-3xl font-bold mb-4">Page Not Found</h2>
      <p className="text-gray-600 mb-6 max-w-md">
        Sorry, we couldn&apos;t find what you were looking for. Try navigating from the homepage or call us directly.
      </p>
      <div className="flex gap-4">
        <Link
          href="/"
          className="bg-brand-blue text-white font-semibold py-2 px-6 rounded-lg hover:bg-brand-blue-dark transition-colors"
        >
          Back to Home
        </Link>
        <a
          href="tel:1300XXXXXX"
          className="bg-brand-orange text-white font-semibold py-2 px-6 rounded-lg hover:bg-brand-orange-dark transition-colors"
        >
          Call Us
        </a>
      </div>
    </div>
  )
}
