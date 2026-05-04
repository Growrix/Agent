export default function GalleryPage() {
  return (
    <div className="mx-auto max-w-5xl px-4 py-12">
      <h1 className="text-3xl font-extrabold text-[var(--primary)]">Before and After Gallery</h1>
      <p className="mt-2 text-slate-600">Execution baseline for drag-to-reveal plumbing job showcases.</p>
      <div className="mt-6 grid gap-4 md:grid-cols-3">
        {[1, 2, 3, 4, 5, 6].map((item) => (
          <div key={item} className="card p-3">
            <div className="h-36 rounded-lg bg-slate-200" />
            <p className="mt-2 text-sm font-semibold">Job #{item}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
