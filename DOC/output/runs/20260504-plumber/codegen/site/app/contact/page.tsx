export default function ContactPage() {
  return (
    <div className="mx-auto max-w-4xl px-4 py-12">
      <h1 className="text-3xl font-extrabold text-[var(--primary)]">Contact Us</h1>
      <p className="mt-2 text-slate-600">Call, WhatsApp, AI chat, or form submission.</p>
      <form className="card mt-6 grid gap-3 p-6">
        <input className="rounded-lg border border-slate-300 px-3 py-2" placeholder="Name" />
        <input className="rounded-lg border border-slate-300 px-3 py-2" placeholder="Phone" />
        <textarea className="rounded-lg border border-slate-300 px-3 py-2" rows={4} placeholder="Your message" />
        <button className="rounded-lg bg-[var(--primary)] px-4 py-2 font-semibold text-white">Send</button>
      </form>
    </div>
  );
}
