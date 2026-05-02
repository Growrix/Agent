'use client'

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  return (
    <div className="min-h-[50vh] flex flex-col items-center justify-center text-center px-4">
      <h2 className="text-2xl font-bold mb-4">Something went wrong</h2>
      <p className="text-gray-600 mb-6 max-w-md">
        We had trouble loading this page. Please try again or call us directly on{' '}
        <a href="tel:1300XXXXXX" className="text-brand-blue font-semibold">
          1300 XXX XXX
        </a>
        .
      </p>
      <button
        onClick={reset}
        className="bg-brand-blue text-white font-semibold py-2 px-6 rounded-lg hover:bg-brand-blue-dark transition-colors"
      >
        Try again
      </button>
    </div>
  )
}
