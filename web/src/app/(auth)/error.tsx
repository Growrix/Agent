'use client'

import Link from 'next/link'

export default function AuthError({ error, reset }: { error: Error & { digest?: string }; reset: () => void }) {
  return (
    <div className="flex items-center justify-center min-h-screen py-16 px-4" style={{ background: 'var(--color-brand-primary)' }}>
      <div className="text-center">
        <p className="text-text-inverse/60 text-sm mb-3">Something went wrong</p>
        <p className="text-text-inverse font-semibold mb-6">{error.message ?? 'An unexpected error occurred.'}</p>
        <button onClick={reset} className="btn btn-accent mr-4">Try again</button>
        <Link href="/" className="btn btn-ghost text-text-inverse">Go home</Link>
      </div>
    </div>
  )
}
