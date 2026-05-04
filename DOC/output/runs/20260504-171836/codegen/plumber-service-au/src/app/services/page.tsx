import { ContentShell } from "@/components/shared/content-shell";

export default function ServicesPage() {
  return (
    <ContentShell title="Plumbing Services" intro="Comprehensive plumbing solutions from emergency repairs to preventative maintenance.">
      <ul className="grid gap-3 md:grid-cols-2">
        <li className="rounded-xl border border-primary/15 bg-surface p-4">Blocked drains and stormwater</li>
        <li className="rounded-xl border border-primary/15 bg-surface p-4">Hot water repair and replacement</li>
        <li className="rounded-xl border border-primary/15 bg-surface p-4">Leak detection and pipe relining</li>
        <li className="rounded-xl border border-primary/15 bg-surface p-4">Bathroom, kitchen, and gas plumbing</li>
      </ul>
    </ContentShell>
  );
}
