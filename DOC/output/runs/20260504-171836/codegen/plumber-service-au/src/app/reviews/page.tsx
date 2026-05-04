import { ContentShell } from "@/components/shared/content-shell";

export default function ReviewsPage() {
  return (
    <ContentShell title="Customer Reviews" intro="Real customer feedback highlighting response speed, quality, and professionalism.">
      <div className="space-y-4">
        <blockquote className="rounded-xl border border-primary/15 bg-surface p-4">
          &quot;Arrived in 25 minutes and fixed a burst pipe immediately.&quot; - S. Martin, Sydney
        </blockquote>
        <blockquote className="rounded-xl border border-primary/15 bg-surface p-4">
          &quot;Transparent pricing and great communication from booking to completion.&quot; - K. Tan, Melbourne
        </blockquote>
      </div>
    </ContentShell>
  );
}
