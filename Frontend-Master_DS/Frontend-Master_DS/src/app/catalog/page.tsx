import * as React from "react";

import {
  ARCHETYPES,
  Card,
  MOTION_PRESETS,
  SECTION_REGISTRY,
  SECTION_VARIANT_META_LIST,
  SectionPattern,
  Stack,
  THEMES,
  Text,
  type PublicSectionModel,
} from "@/ds";

export const metadata = {
  title: "DS Catalog · Section Variants",
  description: "Live showroom of every section variant, motion preset, archetype, and theme registered in the design system.",
};

/** Sample content per kind so each variant has something to render. */
const SAMPLE_CONTENT: Record<string, Partial<PublicSectionModel>> = {
  hero: {
    kicker: "DS Catalog",
    title: "Variant preview",
    lede: "Sample content rendered through this variant. Replace via preset content keys in production.",
    primaryAction: { label: "Primary", href: "#" },
    secondaryAction: { label: "Secondary", href: "#" },
    trustChips: [
      { id: "a", label: "Sample chip A" },
      { id: "b", label: "Sample chip B" },
    ],
  },
  features: {
    header: {
      kicker: "Section preview",
      title: "Variant preview",
      lede: "Replace with project content via preset.",
    },
    features: [
      { id: "f1", title: "Sample feature one", description: "Two-sentence description placeholder for catalog preview." },
      { id: "f2", title: "Sample feature two", description: "Two-sentence description placeholder for catalog preview." },
      { id: "f3", title: "Sample feature three", description: "Two-sentence description placeholder for catalog preview." },
      { id: "f4", title: "Sample feature four", description: "Two-sentence description placeholder for catalog preview." },
      { id: "f5", title: "Sample feature five", description: "Two-sentence description placeholder for catalog preview." },
      { id: "f6", title: "Sample feature six", description: "Two-sentence description placeholder for catalog preview." },
    ],
  },
  testimonials: {
    header: { kicker: "Section preview", title: "Variant preview" },
    items: [
      { id: "t1", quote: "Sample testimonial quote rendered in catalog preview mode.", name: "Sample Name", meta: "Role · Company" },
      { id: "t2", quote: "Sample testimonial quote rendered in catalog preview mode.", name: "Sample Name", meta: "Role · Company" },
      { id: "t3", quote: "Sample testimonial quote rendered in catalog preview mode.", name: "Sample Name", meta: "Role · Company" },
    ],
  },
  cta: {
    header: { title: "Variant preview headline" },
    body: "Sample body copy explaining the conversion outcome.",
    primaryAction: { label: "Primary", href: "#" },
    secondaryAction: { label: "Secondary", href: "#" },
  },
  "stats-band": {
    header: { kicker: "Section preview", title: "Variant preview" },
    stats: [
      { id: "s1", value: "1,200", label: "Sample metric" },
      { id: "s2", value: "9.4M", label: "Sample metric" },
      { id: "s3", value: "$3.1M", label: "Sample metric" },
      { id: "s4", value: "4.9 / 5", label: "Sample metric" },
    ],
  },
  "process-steps": {
    header: { kicker: "Section preview", title: "Variant preview" },
    steps: [
      { id: "p1", title: "Step one", description: "Two-sentence description of what happens in this step." },
      { id: "p2", title: "Step two", description: "Two-sentence description of what happens in this step." },
      { id: "p3", title: "Step three", description: "Two-sentence description of what happens in this step." },
      { id: "p4", title: "Step four", description: "Two-sentence description of what happens in this step." },
    ],
  },
  "logo-cloud": {
    header: { kicker: "Section preview", title: "Variant preview" },
    logos: [
      { id: "l1", label: "Sample Co" },
      { id: "l2", label: "Acme Ltd" },
      { id: "l3", label: "Northwind" },
      { id: "l4", label: "Lattice" },
      { id: "l5", label: "Brightside" },
      { id: "l6", label: "Pencilworks" },
    ],
  },
  "case-studies": {
    header: { kicker: "Section preview", title: "Variant preview" },
    items: [
      { id: "c1", title: "Sample case study one", href: "#", tags: ["Sample", "Tag"] },
      { id: "c2", title: "Sample case study two", href: "#", tags: ["Sample", "Tag"] },
    ],
  },
};

/** Compose a section model from a variant's meta + sample content. */
function buildSampleSection(variantId: string, kind: PublicSectionModel["kind"]): PublicSectionModel {
  const base = SAMPLE_CONTENT[kind] ?? {};
  return {
    id: `catalog-${variantId}`,
    kind,
    variant: variantId,
    ...base,
  } as PublicSectionModel;
}

export default function CatalogPage() {
  return (
    <main className="ui-stack-loose">
      <SectionPattern
        container="wide"
        header={{
          kicker: "Design System",
          title: "DS Catalog",
          lede: "Every section variant, motion preset, archetype, and theme registered in this design system. Use this surface to confirm variants render correctly and to brief AI agents that consume the DS.",
        }}
      >
        <Stack>
          <Card>
            <Stack gap="compact">
              <Text>
                <strong>Counts:</strong> {SECTION_VARIANT_META_LIST.length} section variants ·{" "}
                {Object.keys(ARCHETYPES).length} archetypes · {Object.keys(MOTION_PRESETS).length} motion presets ·{" "}
                {THEMES.length} themes.
              </Text>
              <Text tone="muted" variant="body-small">
                The machine-readable contract lives at <code>generated/ds.contract.json</code>. Run{" "}
                <code>npm run ds:contract</code> to regenerate.
              </Text>
            </Stack>
          </Card>
        </Stack>
      </SectionPattern>

      {SECTION_VARIANT_META_LIST.map((meta) => {
        const entry = SECTION_REGISTRY[meta.id];
        const Component = entry.component;
        const section = buildSampleSection(meta.id, meta.kind);

        return (
          <section key={meta.id} className="ui-stack-tight" data-catalog-variant={meta.id}>
            <SectionPattern container="wide" header={{ kicker: meta.archetype, title: meta.label, lede: meta.description }}>
              <Card>
                <Stack gap="compact">
                  <Text tone="muted" variant="body-small">
                    <code>variant id: {meta.id}</code> · kind: {meta.kind} · density: {meta.density} · complexity: {meta.complexity}
                  </Text>
                  <Text tone="muted" variant="body-small">
                    motion: {meta.motionPresets.length === 0 ? "(none)" : meta.motionPresets.join(", ")}
                  </Text>
                </Stack>
              </Card>
            </SectionPattern>
            <Component {...section} />
          </section>
        );
      })}
    </main>
  );
}
