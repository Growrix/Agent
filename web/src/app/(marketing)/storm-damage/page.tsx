import Link from "next/link";
import { t } from "@/lib/content";
import { ContactInfoStrip } from "@/components/sections/ContactInfoStrip";
import { ProcessTimelineSection } from "@/components/sections/ProcessTimelineSection";
import { LeadCaptureFormSection } from "@/components/sections/LeadCaptureFormSection";
import { FAQSection } from "@/components/sections/FAQSection";
import { CTABand } from "@/components/sections/CTABand";

export default function StormDamagePage() {
  const stormFaq = [
    {
      question: "What should I do right after storm damage?",
      answer: "Document visible damage safely, avoid climbing the roof, and contact our team for inspection."
    },
    {
      question: "Can you help with insurance scope documentation?",
      answer: "Yes. We provide photo evidence and clear scope notes for adjuster review."
    },
    {
      question: "How quickly can your team respond?",
      answer: "During service hours, most emergency requests receive contact in under ten minutes."
    }
  ];

  return (
    <main id="main-content">
      <section className="relative min-h-[80svh] bg-[url('https://images.pexels.com/photos/2098428/pexels-photo-2098428.jpeg')] bg-cover bg-center">
        <div className="absolute inset-0 bg-linear-to-r from-black/70 via-black/60 to-(--color-accent-700)/60" />
        <div className="relative mx-auto flex min-h-[80svh] max-w-4xl flex-col items-center justify-center px-4 text-center text-white">
          <h1 className="text-4xl font-semibold md:text-6xl">{t("hero.storm.headline")}</h1>
          <p className="mt-4 max-w-[60ch] text-lg text-white/90">{t("hero.storm.subheading")}</p>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <Link href="/contact" className="rounded-full bg-accent-500 px-6 py-3 font-semibold text-foreground">{t("hero.storm.cta")}</Link>
            <a href="tel:+15550128891" className="rounded-full border border-white/80 px-6 py-3 font-semibold text-white">{t("hero.storm.phone")}</a>
          </div>
        </div>
      </section>

      <ContactInfoStrip />

      <section className="mx-auto w-full max-w-4xl px-4 py-16">
        <h2 className="text-3xl font-semibold text-foreground">Insurance Claim Support</h2>
        <p className="mt-3 text-theme-secondary">We document visible damage, provide a clear scope summary, and help you prepare for adjuster review.</p>
      </section>

      <ProcessTimelineSection />

      <LeadCaptureFormSection
        title="Emergency Storm Damage Intake"
        description="Share the address and a short description so our response team can prioritize your inspection."
        compact
      />

      <FAQSection title="Storm Damage Questions" items={stormFaq} />

      <CTABand
        title="Need Immediate Support?"
        description="Call our team now and we will guide your next step right away."
        href="/contact"
        buttonText={t("hero.storm.cta")}
      />
    </main>
  );
}



