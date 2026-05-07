type FinancingCardProps = {
  title: string;
  description: string;
};

export function FinancingCard({ title, description }: FinancingCardProps) {
  return (
    <article className="rounded-2xl border border-theme bg-background p-6">
      <h3 className="text-xl font-semibold text-foreground">{title}</h3>
      <p className="mt-3 text-sm text-theme-secondary">{description}</p>
    </article>
  );
}
