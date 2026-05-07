"use client";

export default function Error({ reset }: { error: Error; reset: () => void }) {
  return (
    <main className="mx-auto flex min-h-[60svh] w-full max-w-6xl flex-col items-center justify-center gap-4 px-4 py-16 text-center">
      <h1 className="text-3xl font-semibold text-foreground">Something went wrong.</h1>
      <button
        type="button"
        onClick={reset}
        className="rounded-full bg-primary-600 px-5 py-3 text-theme-inverse focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-focus"
      >
        Try again
      </button>
    </main>
  );
}



