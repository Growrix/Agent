type ProjectCardProps = {
  title: string;
  location: string;
  beforeImage: string;
  afterImage: string;
  summary: string;
};

export function ProjectCard({ title, location, beforeImage, afterImage, summary }: ProjectCardProps) {
  return (
    <article className="overflow-hidden rounded-2xl border border-theme bg-background">
      <div className="grid min-h-52 grid-cols-2">
        <div className="bg-cover bg-center" style={{ backgroundImage: `url('${beforeImage}')` }} aria-label="Before image" />
        <div className="bg-cover bg-center" style={{ backgroundImage: `url('${afterImage}')` }} aria-label="After image" />
      </div>
      <div className="p-5">
        <h3 className="text-xl font-semibold text-foreground">{title}</h3>
        <p className="mt-1 text-xs uppercase tracking-wide text-theme-secondary">{location}</p>
        <p className="mt-2 text-sm text-theme-secondary">{summary}</p>
      </div>
    </article>
  );
}
