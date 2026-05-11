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

function assertNever(value: never): never {
  throw new Error(`Unhandled section model: ${String(value)}`);
}

function renderSection(section: PublicSectionModel) {
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

    default: {
      return assertNever(section);
    }
  }
}

export function PublicPresetPage({ page }: PublicPresetPageProps) {
  return <>{page.sections.map(renderSection)}</>;
}
