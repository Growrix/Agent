"use client";

export default function Error({ reset }: { reset: () => void }) {
  return (
    <main className="container-shell py-16">
      <h1 className="text-3xl font-bold text-primary">Something went wrong</h1>
      <p className="mt-3 text-muted">Please try again, or use the Call button for urgent plumbing support.</p>
      <button
        type="button"
        onClick={reset}
        className="mt-6 rounded-lg bg-primary px-5 py-2 font-semibold text-white"
      >
        Retry
      </button>
    </main>
  );
}
