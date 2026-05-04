const sampleFrames = [
  { label: "Before", tone: "bg-slate-300" },
  { label: "After", tone: "bg-blue-300" },
];

export default async function ServiceDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  return (
    <div className="mx-auto max-w-5xl px-4 py-12">
      <h1 className="text-3xl font-extrabold capitalize text-[var(--primary)]">{slug.replaceAll("-", " ")}</h1>
      <p className="mt-2 text-slate-600">Same-day service with transparent pricing and licensed technicians.</p>

      <section className="card mt-6 p-6">
        <h2 className="text-xl font-bold">Before and After Gallery Slider</h2>
        <p className="mt-1 text-sm text-slate-600">Drag-to-reveal concept represented in this execution baseline.</p>
        <div className="mt-4 grid gap-3 md:grid-cols-2">
          {sampleFrames.map((item) => (
            <div key={item.label} className={`h-40 rounded-lg ${item.tone} p-3 font-semibold text-slate-900`}>
              {item.label}
            </div>
          ))}
        </div>
      </section>

      <section className="card mt-6 p-6">
        <h2 className="text-xl font-bold">Video Testimonials</h2>
        <div className="mt-4 grid gap-3 md:grid-cols-3">
          {[1, 2, 3].map((video) => (
            <div key={video} className="aspect-video rounded-lg bg-slate-200" />
          ))}
        </div>
      </section>
    </div>
  );
}
