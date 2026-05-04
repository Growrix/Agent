import { ContentShell } from "@/components/shared/content-shell";

export default function AboutPage() {
  return (
    <ContentShell
      title="About Plumber AU"
      intro="Trusted plumbing specialists focused on quick response, clear communication, and long-term reliability."
    >
      <p className="max-w-3xl text-muted">
        Our licensed and insured teams handle residential and small-commercial plumbing with safety-first standards and practical solutions.
      </p>
    </ContentShell>
  );
}
