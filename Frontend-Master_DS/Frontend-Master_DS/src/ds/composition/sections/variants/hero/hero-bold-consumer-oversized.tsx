import * as React from "react";

import { Button } from "@/ds/primitives/Button";
import type { PublicSectionModel } from "@/ds/platform/publicSitePreset";
import type { SectionVariantMeta } from "@/ds/composition/sections/_schema";

type HeroModel = Extract<PublicSectionModel, { kind: "hero" }>;

export const HERO_BOLD_CONSUMER_OVERSIZED_META: SectionVariantMeta = {
  id: "hero-bold-consumer-oversized",
  kind: "hero",
  archetype: "bold-consumer",
  label: "Hero — Bold Consumer Oversized",
  description:
    "Saturated solid color band; oversized type (max 18ch); compact rhythm; magnetic-hover + idle-pulse primary CTA.",
  supportsThemes: ["dark", "light"],
  motionPresets: ["rise-soft", "magnetic-hover", "idle-pulse-once"],
  effects: {
    gradientMesh: false,
    conicGradient: false,
    fullBleedPhotograph: false,
  },
  density: "full-bleed",
  complexity: "rich",
};

export function HeroBoldConsumerOversized(props: HeroModel) {
  const { kicker, title, lede, primaryAction, secondaryAction } = props;

  return (
    <section
      className="sv-section-root sv-hero-bold-consumer-oversized"
      data-variant={HERO_BOLD_CONSUMER_OVERSIZED_META.id}
      data-archetype={HERO_BOLD_CONSUMER_OVERSIZED_META.archetype}
    >
      <div className="sv-hero-bold-consumer-oversized__inner motion-stagger-text-60">
        {kicker ? <div>{kicker}</div> : null}
        <h1 className="sv-hero-bold-consumer-oversized__title">{title}</h1>
        {lede ? <p className="sv-hero-bold-consumer-oversized__lede">{lede}</p> : null}

        {primaryAction || secondaryAction ? (
          <div className="sv-hero-bold-consumer-oversized__actions">
            {primaryAction ? (
              <Button as="a" href={primaryAction.href} size="lg" className="motion-magnetic-hover motion-idle-pulse-once">
                {primaryAction.label}
              </Button>
            ) : null}
            {secondaryAction ? (
              <Button as="a" href={secondaryAction.href} variant="secondary" size="lg">
                {secondaryAction.label}
              </Button>
            ) : null}
          </div>
        ) : null}
      </div>
    </section>
  );
}
