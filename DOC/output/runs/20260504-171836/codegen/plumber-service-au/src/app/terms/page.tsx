import { ContentShell } from "@/components/shared/content-shell";

export default function TermsPage() {
  return (
    <ContentShell
      title="Terms of Service"
      intro="Service scope, booking terms, warranties, cancellation windows, and customer obligations."
    >
      <p className="text-muted">Terms are provided before job acceptance for transparency.</p>
    </ContentShell>
  );
}
