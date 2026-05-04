import { ContentShell } from "@/components/shared/content-shell";

export default function BookPage() {
  return (
    <ContentShell title="Book a Service" intro="Choose your preferred time window and we will confirm availability.">
      <div className="rounded-xl border border-primary/15 bg-surface p-6">
        Online booking widget placeholder for calendar provider integration.
      </div>
    </ContentShell>
  );
}
