const videos = [
  { name: "S. Kumar", area: "Parramatta", service: "Blocked Drains" },
  { name: "R. Taylor", area: "Ryde", service: "Hot Water Systems" },
  { name: "M. Lee", area: "Blacktown", service: "Emergency Plumbing" },
];

export default function ReviewsPage() {
  return (
    <div className="mx-auto max-w-5xl px-4 py-12">
      <h1 className="text-3xl font-extrabold text-[var(--primary)]">Customer Reviews and Video Testimonials</h1>
      <p className="mt-2 text-slate-600">Rated 4.9/5 from 320+ local jobs.</p>
      <div className="mt-6 grid gap-4 md:grid-cols-3">
        {videos.map((video) => (
          <article key={video.name} className="card p-4">
            <div className="aspect-video rounded-lg bg-slate-200" />
            <h2 className="mt-3 font-bold">{video.name}</h2>
            <p className="text-sm text-slate-600">{video.service} in {video.area}</p>
          </article>
        ))}
      </div>
    </div>
  );
}
