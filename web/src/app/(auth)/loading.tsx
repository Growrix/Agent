export default function Loading() {
  return (
    <div className="flex items-center justify-center min-h-64 py-section-xl" aria-label="Loading page content" aria-live="polite">
      <div className="flex flex-col items-center gap-4">
        <div className="w-10 h-10 border-2 border-brand-primary border-t-transparent rounded-full animate-spin" aria-hidden="true" />
        <p className="text-sm text-text-muted">Loading…</p>
      </div>
    </div>
  )
}
