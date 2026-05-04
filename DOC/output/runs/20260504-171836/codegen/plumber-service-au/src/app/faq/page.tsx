import { ContentShell } from "@/components/shared/content-shell";

export default function FaqPage() {
  return (
    <ContentShell
      title="Frequently Asked Questions"
      intro="Clear answers on pricing, response times, emergency handling, and warranty."
    >
      <div className="space-y-3">
        <details className="rounded border border-primary/15 bg-surface p-3">
          <summary className="cursor-pointer font-semibold">How fast can you arrive?</summary>
          <p className="mt-2 text-muted">Usually within 30-60 minutes in metro emergency zones.</p>
        </details>
        <details className="rounded border border-primary/15 bg-surface p-3">
          <summary className="cursor-pointer font-semibold">Do you provide upfront pricing?</summary>
          <p className="mt-2 text-muted">Yes, we provide clear pricing before starting major works.</p>
        </details>
      </div>
    </ContentShell>
  );
}
