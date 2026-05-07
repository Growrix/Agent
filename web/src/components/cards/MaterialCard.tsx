type MaterialCardProps = {
  name: string;
  durability: string;
  bestFor: string;
  note: string;
};

export function MaterialCard({ name, durability, bestFor, note }: MaterialCardProps) {
  return (
    <article className="rounded-2xl border border-theme bg-surface-raised p-6">
      <h3 className="text-2xl font-semibold text-foreground">{name}</h3>
      <p className="mt-2 text-sm text-theme-secondary">Durability: {durability}</p>
      <p className="mt-1 text-sm text-theme-secondary">Best for: {bestFor}</p>
      <p className="mt-4 text-sm text-theme-secondary">{note}</p>
    </article>
  );
}
