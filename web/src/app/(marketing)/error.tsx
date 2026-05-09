"use client";

export default function MarketingError({
  error: _error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <div
      className="flex min-h-[60vh] flex-col items-center justify-center text-center px-[var(--space-6)]"
      role="alert"
    >
      <h2 className="font-display font-bold text-2xl text-[var(--color-text)] mb-[var(--space-4)]">
        Something went wrong
      </h2>
      <p className="text-[var(--color-text-muted)] mb-[var(--space-6)] max-w-[36ch]">
        We couldn&apos;t load this page. Please try again.
      </p>
      <button
        onClick={reset}
        className="inline-flex items-center px-[var(--space-6)] py-[var(--space-3)] rounded-[var(--radius-md)] bg-[var(--color-accent)] text-[var(--color-accent-foreground)] font-semibold transition-colors hover:bg-[var(--color-accent-hover)] focus-visible:outline-[3px] focus-visible:outline-[var(--color-focus-ring)] focus-visible:outline-offset-2"
      >
        Retry
      </button>
    </div>
  );
}
