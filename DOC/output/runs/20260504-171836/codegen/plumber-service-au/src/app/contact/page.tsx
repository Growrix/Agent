import { ContentShell } from "@/components/shared/content-shell";

export default function ContactPage() {
  return (
    <ContentShell
      title="Contact Us"
      intro="Call or WhatsApp for urgent issues, or submit your details and we will call you back shortly."
    >
      <p className="text-muted">Phone: 0000 000 000 | WhatsApp: +61 0000 000 000</p>
    </ContentShell>
  );
}
