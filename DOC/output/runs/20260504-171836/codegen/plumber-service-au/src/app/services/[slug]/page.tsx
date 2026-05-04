import { notFound } from "next/navigation";
import { ContentShell } from "@/components/shared/content-shell";

const SERVICE_DETAILS: Record<string, { title: string; intro: string }> = {
  emergency: {
    title: "Emergency Plumbing",
    intro: "Fast response for leaks, blocked drains, and urgent plumbing failures.",
  },
  "hot-water": {
    title: "Hot Water Services",
    intro: "Repair, replacement, and maintenance for electric and gas hot water systems.",
  },
  "blocked-drains": {
    title: "Blocked Drains",
    intro: "Inspection, clearing, and prevention plans for recurring drain issues.",
  },
};

export default async function ServiceDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const detail = SERVICE_DETAILS[slug];

  if (!detail) {
    notFound();
  }

  return <ContentShell title={detail.title} intro={detail.intro} />;
}
