const faqs = [
  "Do you provide 24/7 emergency service?",
  "Can you provide same-day blocked drain assistance?",
  "Are your plumbers licensed in my state?",
];

export default function FaqPage() {
  return (
    <div className="mx-auto max-w-4xl px-4 py-12">
      <h1 className="text-3xl font-extrabold text-[var(--primary)]">Frequently Asked Questions</h1>
      <div className="mt-6 space-y-3">
        {faqs.map((item) => (
          <details key={item} className="card p-4">
            <summary className="cursor-pointer font-semibold">{item}</summary>
            <p className="mt-2 text-sm text-slate-600">Our team can confirm details in chat or by phone immediately.</p>
          </details>
        ))}
      </div>
    </div>
  );
}
