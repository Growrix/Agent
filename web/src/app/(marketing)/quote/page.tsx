import { allContent } from "@/lib/content";
import { HeroMediaStack } from "@/components/sections/HeroMediaStack";
import { QuoteCalculatorPanel } from "@/components/forms/QuoteCalculatorPanel";
import { CtaBand } from "@/components/sections/CtaBand";

export default function QuotePage() {
  return (
    <>
      <HeroMediaStack imageAlt={allContent.quote.title} subtitle={allContent.quote.subtitle} title={allContent.quote.title} />
      <QuoteCalculatorPanel />
      <CtaBand
        primaryHref="/contact"
        primaryLabel={allContent.actions.contactTeam}
        secondaryHref="/"
        secondaryLabel={allContent.nav.home}
        title={allContent.quote.form.success}
      />
    </>
  );
}
