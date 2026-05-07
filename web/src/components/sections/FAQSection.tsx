import Link from "next/link";

type FAQSectionProps = {
  title: string;
  items: Array<{ question: string; answer: string }>;
  showAllLink?: boolean;
};

export function FAQSection({ title, items, showAllLink = false }: FAQSectionProps) {
  return (
    <section className="mx-auto w-full max-w-6xl px-4 py-16">
      <div className="flex items-end justify-between gap-4">
        <h2 className="text-3xl font-semibold text-foreground">{title}</h2>
        {showAllLink ? (
          <Link href="/faq" className="text-sm text-primary-600 underline-offset-4 hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-focus">
            View all questions
          </Link>
        ) : null}
      </div>
      <div className="mt-8 space-y-4">
        {items.map((item) => (
          <details key={item.question} className="rounded-2xl border border-theme bg-surface-raised p-5">
            <summary className="cursor-pointer text-lg font-semibold text-foreground">{item.question}</summary>
            <p className="mt-3 text-theme-secondary">{item.answer}</p>
          </details>
        ))}
      </div>
    </section>
  );
}
