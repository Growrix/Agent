import { allContent } from "@/lib/content";

export default function TermsPage() {
  return (
    <section className="page-shell py-10">
      <div className="panel p-6 md:p-8">
        <h1 className="heading-display text-4xl">{allContent.legal.terms}</h1>
        <p className="mt-4 text-slate-700">{allContent.about.subtitle}</p>
        <p className="mt-4 text-sm text-slate-600">{allContent.legal.updated}</p>
      </div>
    </section>
  );
}
