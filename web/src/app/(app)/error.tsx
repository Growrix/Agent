'use client'

import Link from 'next/link'

export default function AppError({ error, reset }: { error: Error & { digest?: string }; reset: () => void }) {
  return (
    <div className="flex items-center justify-center min-h-screen bg-surface-canvas py-16 px-4">
      <div className="text-center max-w-sm">
        <p className="text-text-muted text-sm mb-3">Something went wrong</p>
        <p className="text-text-strong font-semibold mb-6">{error.message ?? 'An unexpected error occurred.'}</p>
        <button onClick={reset} className="btn btn-primary mr-4">Try again</button>
        <Link href="/" className="btn btn-outline">Go home</Link>
      </div>
    </div>
  )
}
