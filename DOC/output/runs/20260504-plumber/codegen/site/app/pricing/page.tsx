export default function PricingPage() {
  return (
    <div className="mx-auto max-w-4xl px-4 py-12">
      <h1 className="text-3xl font-extrabold text-[var(--primary)]">Transparent Pricing</h1>
      <p className="mt-2 text-slate-700">All displayed pricing includes GST.</p>
      <ul className="card mt-6 space-y-2 p-5 text-sm">
        <li>Blocked drain callout: from $220</li>
        <li>Leak detection: from $180</li>
        <li>Emergency response: from $260</li>
      </ul>
    </div>
  );
}
