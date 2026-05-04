import Link from "next/link";
import { ContentShell } from "@/components/shared/content-shell";

export default function Home() {
  return (
    <ContentShell
      title="Same-day plumbing across Australia"
      intro="Emergency response, transparent pricing, and licensed professionals. Call, WhatsApp, or ask the AI assistant instantly."
    >
      <section className="grid gap-4 md:grid-cols-3">
        <article className="rounded-2xl border border-primary/15 bg-surface p-5 shadow-sm">
          <h2 className="text-xl font-bold text-primary">Emergency Fast Response</h2>
          <p className="mt-2 text-muted">Burst pipes, blocked drains, hot water outages. We dispatch priority teams in under 30 minutes in metro zones.</p>
        </article>
        <article className="rounded-2xl border border-primary/15 bg-surface p-5 shadow-sm">
          <h2 className="text-xl font-bold text-primary">Instant Quote Path</h2>
          <p className="mt-2 text-muted">Use our quote flow with suburb and urgency selection to get a same-day estimate and callback window.</p>
        </article>
        <article className="rounded-2xl border border-primary/15 bg-surface p-5 shadow-sm">
          <h2 className="text-xl font-bold text-primary">Trusted Local Team</h2>
          <p className="mt-2 text-muted">Fully insured, certified technicians with proven reviews across Sydney, Melbourne, Brisbane, Perth, and Adelaide.</p>
        </article>
      </section>

      <section className="mt-10 rounded-2xl bg-primary p-6 text-white">
        <h2 className="text-2xl font-bold">Need a plumber right now?</h2>
        <p className="mt-2 text-white/90">For urgent issues, use the floating Call or WhatsApp buttons at the bottom-right. For troubleshooting, open AI Chat.</p>
        <div className="mt-4 flex flex-wrap gap-3">
          <Link href="/quote" className="rounded-full bg-accent px-5 py-2 font-bold text-primary">
            Start Quote
          </Link>
          <Link href="/services" className="rounded-full border border-white/30 px-5 py-2 font-semibold text-white">
            Explore Services
          </Link>
        </div>
      </section>
    </ContentShell>
  );
}
