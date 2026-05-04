import { ContentShell } from "@/components/shared/content-shell";

export default function PrivacyPage() {
  return (
    <ContentShell
      title="Privacy Policy"
      intro="How we collect and handle enquiry, chat, and booking data in accordance with Australian privacy expectations."
    >
      <p className="text-muted">We only collect required service data and do not sell personal information.</p>
    </ContentShell>
  );
}
