import Link from "next/link";

type CtaBandProps = {
  title: string;
  primaryLabel: string;
  primaryHref: string;
  secondaryLabel: string;
  secondaryHref: string;
};

export const CtaBand = ({ title, primaryLabel, primaryHref, secondaryLabel, secondaryHref }: CtaBandProps) => {
  return (
    <section className="page-shell py-8 md:py-12">
      <div className="panel bg-linear-to-r from-emerald-900 to-emerald-700 p-6 text-white md:p-8">
        <h2 className="heading-display text-3xl text-white md:text-4xl">{title}</h2>
        <div className="mt-5 flex flex-wrap gap-3">
          <Link className="focusable rounded-full bg-white px-5 py-2 text-emerald-900" href={primaryHref}>
            {primaryLabel}
          </Link>
          <Link className="focusable rounded-full border border-white px-5 py-2" href={secondaryHref}>
            {secondaryLabel}
          </Link>
        </div>
      </div>
    </section>
  );
};
