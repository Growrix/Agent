'use client'

export default function AdminLeadsError({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  return (
    <div className="text-center py-12">
      <h2 className="text-xl font-bold mb-3">Failed to load leads</h2>
      <p className="text-gray-600 mb-4">{error.message}</p>
      <button
        onClick={reset}
        className="bg-brand-blue text-white font-semibold py-2 px-6 rounded-lg hover:bg-brand-blue-dark transition-colors"
      >
        Try again
      </button>
    </div>
  )
}
