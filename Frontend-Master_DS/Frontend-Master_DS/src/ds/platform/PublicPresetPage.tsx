import * as React from "react";

import { Section } from "../components/Section";
import { Card } from "../components/Card";
import { HeroSection, FeatureGrid, NewsletterSignup, TestimonialCard } from "../components/Marketing";
import { BlogList, FAQAccordion } from "../components/PublicBlocks";
import { SectionPattern } from "../composition/patterns/SectionPattern";
import { Button } from "../primitives/Button";
import { Grid } from "../primitives/Grid";
import { Stack } from "../primitives/Stack";
import { Text } from "../primitives/Text";
import { getDefaultVariantForKind, getSectionVariant } from "../composition/sections/_registry";

import type { PublicPageModel, PublicSectionHeaderModel, PublicSectionModel } from "./publicSitePreset";

export type PublicPresetPageProps = {
  page: PublicPageModel;
};

function toHeaderProps(header?: PublicSectionHeaderModel) {
  if (!header) return undefined;
  return {
    kicker: header.kicker,
    title: header.title,
    lede: header.lede,
  };
}

/**
 * Resolve which component renders a given section.
 *
 * Priority:
 *  1. Explicit `section.variant` id matching a registry entry of the SAME kind.
 *  2. Default variant registered for the kind (`isDefault: true`).
 *  3. Built-in fallback below (preserves original behaviour for `hero`, `features`,
 *     `testimonials`, `faq`, `blogList`, `cta`, `newsletter`).
 *
 * If a `section.variant` is supplied but the registered variant's kind does not
 * match the section's kind, the variant is ignored and the renderer falls back
 * to the kind-default. This protects presets from accidental variant/kind
 * mismatches.
 */
function renderSection(section: PublicSectionModel): React.ReactNode {
  // 1. Explicit variant on the section
  if (section.variant) {
    const entry = getSectionVariant(section.variant);
    if (entry && entry.meta.kind === section.kind) {
      const Comp = entry.component;
      return <Comp key={section.id} {...section} />;
    }
  }

  // 2. Kind-level default variant
  const def = getDefaultVariantForKind(section.kind);
  if (def) {
    const Comp = def.component;
    return <Comp key={section.id} {...section} />;
  }

  // 3. Built-in fallbacks (legacy behaviour)
  switch (section.kind) {
    case "hero":
      return (
        <Section key={section.id} container="wide" size="lg">
          <HeroSection
            kicker={section.kicker}
            title={section.title}
            lede={section.lede}
            primaryAction={section.primaryAction}
            secondaryAction={section.secondaryAction}
          />
        </Section>
      );

    case "features":
      return (
        <SectionPattern key={section.id} container="wide" header={toHeaderProps(section.header)}>
          <FeatureGrid features={section.features} />
        </SectionPattern>
      );

    case "testimonials":
      return (
        <SectionPattern key={section.id} container="wide" header={toHeaderProps(section.header)}>
          <Grid columns={3}>
            {section.items.map((t) => (
              <TestimonialCard key={t.id} quote={t.quote} name={t.name} meta={t.meta} />
            ))}
          </Grid>
        </SectionPattern>
      );

    case "faq":
      return (
        <SectionPattern key={section.id} container="wide" header={toHeaderProps(section.header)}>
          <FAQAccordion items={section.items} />
        </SectionPattern>
      );

    case "blogList":
      return (
        <SectionPattern key={section.id} container="wide" header={toHeaderProps(section.header)}>
          <BlogList posts={section.posts} />
        </SectionPattern>
      );

    case "cta": {
      const header = toHeaderProps(section.header);
      const actions = section.primaryAction || section.secondaryAction;

      return (
        <SectionPattern
          key={section.id}
          container="wide"
          header={header}
          actions={
            actions ? (
              <div className="ui-row">
                {section.primaryAction ? (
                  <Button as="a" href={section.primaryAction.href}>
                    {section.primaryAction.label}
                  </Button>
                ) : null}
                {section.secondaryAction ? (
                  <Button as="a" href={section.secondaryAction.href} variant="secondary">
                    {section.secondaryAction.label}
                  </Button>
                ) : null}
              </div>
            ) : null
          }
        >
          <Card>
            <Stack gap="compact">
              {section.body ? <Text tone="muted">{section.body}</Text> : null}
              <Text tone="muted" variant="body-small">
                Mock UI only. Wire actions and forms to your backend/CMS.
              </Text>
            </Stack>
          </Card>
        </SectionPattern>
      );
    }

    case "newsletter":
      return (
        <SectionPattern key={section.id} container="wide" header={toHeaderProps(section.header)}>
          <NewsletterSignup title={section.title} />
        </SectionPattern>
      );

    // New kinds with no fallback default — registry MUST supply a variant.
    case "stats-band":
    case "process-steps":
    case "logo-cloud":
    case "case-studies":
      // If no registry variant matched and no default exists, render a labelled empty
      // surface so the preset author notices missing wiring rather than a silent gap.
      return (
        <SectionPattern key={section.id} container="wide" header={toHeaderProps((section as { header?: PublicSectionHeaderModel }).header)}>
          <Card>
            <Stack gap="compact">
              <Text tone="muted">
                No variant registered for section kind <code>{section.kind}</code>. Set
                <code> section.variant</code> on this section or add a default variant to
                the registry.
              </Text>
            </Stack>
          </Card>
        </SectionPattern>
      );

    default:
      // Exhaustiveness check.
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      throw new Error(`Unhandled section kind: ${(section as any).kind}`);
  }
}

export function PublicPresetPage({ page }: PublicPresetPageProps) {
  return <>{page.sections.map(renderSection)}</>;
}
