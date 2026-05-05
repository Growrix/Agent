import { Button } from "@/components/marketing/shared/button";
import { HeroSplit } from "@/components/marketing/sections/hero-split";
import { copy } from "@/lib/content";
import { siteConfig } from "@/config/site";

export default function NotFound() {
  return (
    <main className="pb-24" id="main-content">
      <HeroSplit
        actions={[
          { label: copy("not_found.cta_primary"), href: "/", variant: "primary" },
          { label: copy("not_found.cta_secondary"), href: "/services", variant: "secondary" },
        ]}
        body={copy("not_found.hero.body")}
        compact
        eyebrow={copy("not_found.hero.title")}
        image={{ alt: copy("home.hero.media_alt"), src: siteConfig.images.hero }}
        title={copy("not_found.hero.title")}
      />
      <section className="section-shell mt-12">
        <div className="surface-panel rounded-4xl p-8">
          <div className="flex flex-wrap gap-3">
            <Button href={siteConfig.phoneHref}>{copy("component.button.call_now")}</Button>
            <Button href="/quote" variant="ghost">
              {copy("component.button.get_quote")}
            </Button>
          </div>
        </div>
      </section>
    </main>
  );
}