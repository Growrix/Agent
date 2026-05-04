import { ContentShell } from "@/components/shared/content-shell";

export default function BlogPage() {
  return (
    <ContentShell
      title="Plumbing Tips and Guides"
      intro="Practical guides on prevention, maintenance, and emergency actions for homeowners."
    >
      <ul className="space-y-3">
        <li className="rounded border border-primary/15 bg-surface p-4">
          How to reduce blocked drain incidents during heavy rain
        </li>
        <li className="rounded border border-primary/15 bg-surface p-4">
          Signs your hot water system needs replacement
        </li>
      </ul>
    </ContentShell>
  );
}
