"use client";

export default function GlobalError({ reset }: { error: Error; reset: () => void }) {
  return (
    <div className="page-shell py-12">
      <div className="panel p-8">
        <p>Something went wrong.</p>
        <button className="focusable mt-4 rounded-full bg-emerald-800 px-5 py-2 text-white" onClick={() => reset()} type="button">
          Retry
        </button>
      </div>
    </div>
  );
}
