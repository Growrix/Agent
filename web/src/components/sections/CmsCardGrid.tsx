type GridItem = {
  key: string;
  title: string;
  summary: string;
};

type CmsCardGridProps = {
  heading: string;
  items: GridItem[];
};

export const CmsCardGrid = ({ heading, items }: CmsCardGridProps) => {
  return (
    <section className="page-shell py-6 md:py-10">
      <h2 className="heading-display text-3xl md:text-4xl">{heading}</h2>
      <div className="mt-6 grid gap-4 md:grid-cols-3">
        {items.map((item) => (
          <article className="panel p-5" key={item.key}>
            <h3 className="heading-display text-xl">{item.title}</h3>
            <p className="mt-2 text-sm text-slate-700">{item.summary}</p>
          </article>
        ))}
      </div>
    </section>
  );
};
