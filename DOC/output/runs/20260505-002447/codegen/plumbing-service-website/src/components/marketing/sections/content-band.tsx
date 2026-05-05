type ContentBandProps = {
  title: string;
  intro: string;
  paragraphs: string[];
};

export function ContentBand({ title, intro, paragraphs }: ContentBandProps) {
  return (
    <section className="section-shell mt-12">
      <div className="surface-panel rounded-4xl p-6 sm:p-8 lg:p-10">
        <h2 className="font-display text-3xl font-semibold text-foreground">{title}</h2>
        <p className="mt-4 max-w-3xl text-base leading-8 text-slate-600">{intro}</p>
        <div className="mt-8 space-y-6 text-sm leading-8 text-slate-700 sm:text-base">
          {paragraphs.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
        </div>
      </div>
    </section>
  );
}