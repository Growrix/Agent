type AccordionProps = {
  items: Array<{ question: string; answer: string }>;
};

export function Accordion({ items }: AccordionProps) {
  return (
    <div className="space-y-4">
      {items.map((item) => (
        <details key={item.question} className="rounded-2xl border border-theme bg-surface-raised p-5">
          <summary className="cursor-pointer text-lg font-semibold text-foreground">{item.question}</summary>
          <p className="mt-3 text-theme-secondary">{item.answer}</p>
        </details>
      ))}
    </div>
  );
}
