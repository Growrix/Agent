import Link from "next/link";

type CTABandProps = {
  title: string;
  description: string;
  href: string;
  buttonText: string;
};

export function CTABand({ title, description, href, buttonText }: CTABandProps) {
  return (
    <section className="bg-primary-700 py-16 text-theme-inverse">
      <div className="mx-auto w-full max-w-6xl px-4">
        <h2 className="text-3xl font-semibold">{title}</h2>
        <p className="mt-3 max-w-[60ch] text-white/90">{description}</p>
        <Link href={href} className="mt-6 inline-flex rounded-full bg-accent-500 px-5 py-3 font-semibold text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-focus">
          {buttonText}
        </Link>
      </div>
    </section>
  );
}
