export default function Home() {
  return (
    <div className="mx-auto w-full max-w-6xl px-4 py-10 md:py-16">
      <section className="grid gap-8 rounded-2xl bg-[linear-gradient(135deg,#0f4c81_0%,#145f9f_60%,#1a73ba_100%)] p-8 text-white md:grid-cols-2 md:p-12">
        <div className="space-y-5">
          <p className="text-sm font-semibold uppercase tracking-[0.22em] text-amber-300">
            Licensed and Insured | Australia-Wide Teams
          </p>
          <h1 className="text-4xl font-extrabold leading-tight md:text-5xl">
            Same-Day Plumbing With 24/7 Emergency Response
          </h1>
          <p className="max-w-lg text-lg text-blue-100">
            Burst pipe, blocked drain, gas issue, or hot water fault. Get help in
            minutes with one tap to call, WhatsApp, or our AI assistant.
          </p>
          <div className="flex flex-wrap gap-3">
            <a
              href="tel:+611300758623"
              className="rounded-xl bg-amber-400 px-6 py-3 font-semibold text-slate-900 transition hover:bg-amber-300"
            >
              Call Now
            </a>
            <a
              href="/quote"
              className="rounded-xl border border-white/60 px-6 py-3 font-semibold transition hover:bg-white/10"
            >
              Get Free Quote
            </a>
            <a
              href="/book"
              className="rounded-xl border border-white/60 px-6 py-3 font-semibold transition hover:bg-white/10"
            >
              Book Online
            </a>
          </div>
        </div>
        <div className="card p-5 text-slate-900">
          <h2 className="text-2xl font-bold">Postcode Coverage Checker</h2>
          <p className="mt-2 text-sm text-slate-600">
            Enter your suburb or postcode to confirm immediate availability.
          </p>
          <form action="/areas" className="mt-4 flex gap-2">
            <input
              name="q"
              placeholder="e.g. Parramatta or 2150"
              className="w-full rounded-lg border border-slate-300 px-3 py-2"
            />
            <button className="rounded-lg bg-[var(--primary)] px-4 py-2 font-semibold text-white">
              Check
            </button>
          </form>
          <div className="mt-5 grid grid-cols-2 gap-3 text-center md:grid-cols-4">
            {[
              ["500+", "Jobs"],
              ["10+", "Years"],
              ["4.9★", "Rating"],
              ["24/7", "Emergency"],
            ].map(([value, label]) => (
              <div key={label} className="rounded-lg bg-slate-100 px-2 py-3">
                <p className="text-xl font-extrabold text-[var(--primary)]">{value}</p>
                <p className="text-xs font-medium uppercase tracking-wide text-slate-600">
                  {label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mt-10 grid gap-6 md:grid-cols-3">
        <article className="card p-6">
          <h3 className="text-xl font-bold">Urgency Triage Tool</h3>
          <p className="mt-2 text-slate-600">
            Quick 3-question flow decides if you should call immediately or book online.
          </p>
          <a className="mt-4 inline-block font-semibold text-[var(--primary)]" href="/emergency">
            Start Triage
          </a>
        </article>
        <article className="card p-6">
          <h3 className="text-xl font-bold">Before/After Gallery</h3>
          <p className="mt-2 text-slate-600">
            Drag-to-reveal work results on every major service page.
          </p>
          <a className="mt-4 inline-block font-semibold text-[var(--primary)]" href="/gallery">
            View Gallery
          </a>
        </article>
        <article className="card p-6">
          <h3 className="text-xl font-bold">Video Testimonials</h3>
          <p className="mt-2 text-slate-600">
            Real customer stories with service and suburb context.
          </p>
          <a className="mt-4 inline-block font-semibold text-[var(--primary)]" href="/reviews">
            Watch Reviews
          </a>
        </article>
      </section>
    </div>
  );
}
