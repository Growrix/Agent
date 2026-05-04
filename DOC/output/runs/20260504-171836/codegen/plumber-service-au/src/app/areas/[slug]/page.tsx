import { notFound } from "next/navigation";
import { ContentShell } from "@/components/shared/content-shell";

const AREA_DETAILS: Record<string, string> = {
  sydney: "Licensed plumbers serving Sydney metro and surrounding suburbs.",
  melbourne: "Fast-response technicians across Melbourne and nearby areas.",
  brisbane: "Reliable plumbing solutions throughout Brisbane with same-day options.",
  perth: "Emergency callout and planned service support in Perth.",
  adelaide: "Residential and commercial plumbing coverage across Adelaide.",
};

export default async function AreaDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const intro = AREA_DETAILS[slug];

  if (!intro) {
    notFound();
  }

  return <ContentShell title={`Plumbing in ${slug[0].toUpperCase()}${slug.slice(1)}`} intro={intro} />;
}
