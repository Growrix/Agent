type TestimonialCardProps = {
  quote: string;
  author: string;
  context: string;
};

export function TestimonialCard({ quote, author, context }: TestimonialCardProps) {
  return (
    <article className="rounded-2xl border border-theme bg-surface-raised p-6">
      <p className="text-theme-secondary">&ldquo;{quote}&rdquo;</p>
      <p className="mt-4 text-sm font-semibold text-foreground">{author}</p>
      <p className="text-xs text-theme-secondary">{context}</p>
    </article>
  );
}
