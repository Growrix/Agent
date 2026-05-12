import * as React from "react";

import { Button } from "@/ds/primitives/Button";
import type { PublicSectionModel } from "@/ds/platform/publicSitePreset";
import type { SectionVariantMeta } from "@/ds/composition/sections/_schema";

type HeroModel = Extract<PublicSectionModel, { kind: "hero" }>;

export const HERO_AI_PRODUCT_STREAMING_META: SectionVariantMeta = {
  id: "hero-ai-product-streaming",
  kind: "hero",
  archetype: "ai-product",
  label: "Hero — AI Product Streaming",
  description:
    "Deep dark base + ambient blurred mesh; centred type (max 22ch); mono kicker; reveal-glass + stagger choreography.",
  supportsThemes: ["dark"],
  motionPresets: ["reveal-glass", "stagger-text-60", "fade-in"],
  effects: {
    gradientMesh: true,
    glassmorphism: true,
    animatedBorder: false,
  },
  density: "full-bleed",
  complexity: "rich",
};

export function HeroAiProductStreaming(props: HeroModel) {
  const { kicker, title, lede, primaryAction, secondaryAction } = props;

  return (
    <section
      className="sv-section-root sv-hero-ai-product-streaming"
      data-variant={HERO_AI_PRODUCT_STREAMING_META.id}
      data-archetype={HERO_AI_PRODUCT_STREAMING_META.archetype}
    >
      <div className="sv-overlay sv-hero-ai-product-streaming__mesh motion-reveal-glass" aria-hidden="true" />

      <div className="sv-content-layer sv-hero-ai-product-streaming__inner motion-stagger-text-60">
        {kicker ? <div className="sv-hero-ai-product-streaming__kicker">{kicker}</div> : null}
        <h1 className="sv-hero-ai-product-streaming__title">{title}</h1>
        {lede ? <p className="sv-hero-ai-product-streaming__lede">{lede}</p> : null}
        {primaryAction || secondaryAction ? (
          <div className="sv-hero-modern-saas-split__actions">
            {primaryAction ? (
              <Button as="a" href={primaryAction.href} size="lg" className="motion-magnetic-hover">
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
