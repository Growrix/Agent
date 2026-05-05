import { ContentBand } from "@/components/marketing/sections/content-band";
import { HeroSplit } from "@/components/marketing/sections/hero-split";
import { copy } from "@/lib/content";
import { createPageMetadata } from "@/lib/metadata";
import { getLegalPage, getMarketingHomePage } from "@/server/cms/queries";

export const metadata = createPageMetadata({
  title: copy("seo.privacy.meta_title"),
  description: copy("seo.privacy.meta_description"),
  path: "/privacy",
});

export default async function PrivacyPage() {
  const [page, homePage] = await Promise.all([getLegalPage("privacy"), getMarketingHomePage()]);

  return (
    <main className="pb-24" id="main-content">
      <HeroSplit
        actions={[{ label: copy("component.nav.contact"), href: "/contact", variant: "primary" }]}
        body={page.intro}
        compact
        eyebrow={copy("privacy.hero.title")}
        image={homePage.coverageImage}
        title={page.title}
      />
      <ContentBand intro={page.intro} paragraphs={page.paragraphs} title={page.title} />
    </main>
  );
}