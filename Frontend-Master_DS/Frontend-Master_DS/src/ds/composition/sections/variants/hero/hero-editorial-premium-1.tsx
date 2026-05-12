import * as React from "react";

import { Button } from "@/ds/primitives/Button";
import type { PublicSectionModel } from "@/ds/platform/publicSitePreset";
import type { SectionVariantMeta } from "@/ds/composition/sections/_schema";

type HeroModel = Extract<PublicSectionModel, { kind: "hero" }>;

export const HERO_EDITORIAL_PREMIUM_1_META: SectionVariantMeta = {
  id: "hero-editorial-premium-1",
  kind: "hero",
  archetype: "editorial-premium",
  label: "Hero — Editorial Premium 1",
  description:
    "Full-bleed photograph with linear gradient overlay; type panel anchored lower-left; 60ch lede max-width; stagger-reveal text choreography.",
  supportsThemes: ["dark", "light"],
  motionPresets: ["stagger-text-60", "scroll-scale-1.04", "fade-in"],
  effects: {
    fullBleedPhotograph: true,
    scrollDrivenScale: true,
    layeredNoise: false,
  },
  density: "full-bleed",
  complexity: "rich",
};

export function HeroEditorialPremium1(props: HeroModel) {
  const { kicker, title, lede, primaryAction, secondaryAction, media, trustChips } = props;

  return (
    <section
      className="sv-section-root sv-hero-editorial-premium-1"
      data-variant={HERO_EDITORIAL_PREMIUM_1_META.id}
      data-archetype={HERO_EDITORIAL_PREMIUM_1_META.archetype}
    >
      {media?.src ? (
        // eslint-disable-next-line @next/next/no-img-element
        <img
          className="sv-hero-editorial-premium-1__media"
          src={media.src}
          alt={media.alt ?? ""}
          aria-hidden={media.alt ? undefined : true}
        />
      ) : (
        <div className="sv-hero-editorial-premium-1__media-placeholder" aria-hidden="true" />
      )}
      <div className="sv-overlay sv-hero-editorial-premium-1__overlay" aria-hidden="true" />

      <div className="sv-content-layer sv-hero-editorial-premium-1__panel motion-stagger-text-60">
        {kicker ? <div className="sv-hero-editorial-premium-1__kicker">{kicker}</div> : null}
        <h1 className="sv-hero-editorial-premium-1__title">{title}</h1>
        {lede ? <p className="sv-hero-editorial-premium-1__lede">{lede}</p> : null}

        {primaryAction || secondaryAction ? (
          <div className="sv-hero-editorial-premium-1__actions">
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

        {trustChips && trustChips.length > 0 ? (
          <div className="sv-hero-editorial-premium-1__trust-chips">
            {trustChips.map((chip) => (
              <span key={chip.id} className="sv-hero-editorial-premium-1__chip">
                {chip.label}
              </span>
            ))}
          </div>
        ) : null}
      </div>
    </section>
  );
}
