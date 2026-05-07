import Link from "next/link";

type ServiceCardProps = {
  title: string;
  description: string;
  href: string;
};

export function ServiceCard({ title, description, href }: ServiceCardProps) {
  return (
    <article className="rounded-2xl border border-theme bg-surface-raised p-6">
      <h3 className="text-2xl font-semibold text-foreground">{title}</h3>
      <p className="mt-3 text-theme-secondary">{description}</p>
      <Link href={href} className="mt-4 inline-flex text-primary-600 underline-offset-4 hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-focus">
        Open details
      </Link>
    </article>
  );
}
