import { ContentShell } from "@/components/shared/content-shell";

export default function QuotePage() {
  return (
    <ContentShell title="Request a Quote" intro="Share your plumbing issue details and suburb to get a quick estimate.">
      <form className="grid gap-3 rounded-xl border border-primary/15 bg-surface p-4 md:grid-cols-2">
        <input className="rounded border border-primary/20 p-2" placeholder="Name" />
        <input className="rounded border border-primary/20 p-2" placeholder="Phone" />
        <input className="rounded border border-primary/20 p-2" placeholder="Suburb" />
        <input className="rounded border border-primary/20 p-2" placeholder="Postcode" />
        <textarea className="rounded border border-primary/20 p-2 md:col-span-2" placeholder="Issue details" rows={4} />
        <button type="button" className="rounded bg-primary px-4 py-2 font-semibold text-white md:col-span-2">
          Submit
        </button>
      </form>
    </ContentShell>
  );
}
