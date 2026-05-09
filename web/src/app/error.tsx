"use client";

export default function GlobalError({
  error: _error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <main
      id="main-content"
      className="flex min-h-screen flex-col items-center justify-center text-center px-[var(--space-6)]"
      aria-labelledby="error-heading"
    >
      <p className="text-overline mb-[var(--space-4)]">Something went wrong</p>
      <h1
        id="error-heading"
        className="font-display font-[800] text-[var(--color-text)] tracking-[-0.03em] mb-[var(--space-4)]"
        style={{ fontSize: "clamp(28px, 4vw, 44px)" }}
      >
        An unexpected error occurred
      </h1>
      <p className="text-[var(--color-text-muted)] mb-[var(--space-8)] max-w-[40ch]">
        We&apos;re sorry for the inconvenience. Please try refreshing the page.
      </p>
      <button
        onClick={reset}
        className="inline-flex items-center gap-[var(--space-2)] px-[var(--space-6)] py-[var(--space-4)] rounded-[var(--radius-md)] bg-[var(--color-accent)] text-[var(--color-accent-foreground)] font-semibold transition-all hover:bg-[var(--color-accent-hover)] focus-visible:outline-[3px] focus-visible:outline-[var(--color-focus-ring)] focus-visible:outline-offset-2"
      >
        Try again
      </button>
    </main>
  );
}
