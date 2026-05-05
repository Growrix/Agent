import { allContent } from "@/lib/content";
import { fallbackCards } from "@/lib/page-data";
import { CmsCardGrid } from "@/components/sections/CmsCardGrid";
import { CaseStudyTimeline } from "@/components/sections/CaseStudyTimeline";
import { CtaBand } from "@/components/sections/CtaBand";

export default function AccountPage() {
  return (
    <>
      <section className="page-shell py-10">
        <div className="panel p-6 md:p-8">
          <h1 className="heading-display text-4xl">{allContent.account.title}</h1>
          <p className="mt-3 text-slate-700">{allContent.account.subtitle}</p>
        </div>
      </section>
      <CaseStudyTimeline heading={allContent.account.title} />
      <CmsCardGrid heading={allContent.home.sections.projects} items={fallbackCards} />
      <CtaBand
        primaryHref="/contact"
        primaryLabel={allContent.actions.contactTeam}
        secondaryHref="/quote"
        secondaryLabel={allContent.actions.getQuote}
        title={allContent.account.subtitle}
      />
    </>
  );
}
