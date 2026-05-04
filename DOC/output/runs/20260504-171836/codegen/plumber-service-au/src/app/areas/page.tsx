import { ContentShell } from "@/components/shared/content-shell";

export default function AreasPage() {
  const cities = ["Sydney", "Melbourne", "Brisbane", "Perth", "Adelaide", "Canberra"];

  return (
    <ContentShell title="Areas We Serve" intro="Local teams across key metro and surrounding suburbs in Australia.">
      <div className="grid gap-3 md:grid-cols-3">
        {cities.map((city) => (
          <div key={city} className="rounded-xl border border-primary/15 bg-surface p-4">
            {city}
          </div>
        ))}
      </div>
    </ContentShell>
  );
}
