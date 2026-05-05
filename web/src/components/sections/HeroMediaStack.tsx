import Image from "next/image";

type HeroMediaStackProps = {
  title: string;
  subtitle: string;
  imageAlt: string;
};

export const HeroMediaStack = ({ title, subtitle, imageAlt }: HeroMediaStackProps) => {
  return (
    <section className="page-shell grid gap-6 py-10 md:grid-cols-[1.1fr_1fr] md:py-14">
      <div className="panel p-6 md:p-8">
        <h1 className="heading-display text-4xl md:text-6xl">{title}</h1>
        <p className="mt-4 max-w-prose text-base text-slate-700 md:text-lg">{subtitle}</p>
      </div>
      <div className="panel overflow-hidden">
        <Image
          alt={imageAlt}
          className="h-full min-h-80 w-full object-cover"
          height={900}
          priority
          src="https://images.unsplash.com/photo-1509391366360-2e959784a276?auto=format&fit=crop&w=1400&q=80"
          width={1400}
        />
      </div>
    </section>
  );
};
