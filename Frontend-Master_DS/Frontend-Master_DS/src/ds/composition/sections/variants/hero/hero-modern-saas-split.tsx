import * as React from "react";

import { Button } from "@/ds/primitives/Button";
import type { PublicSectionModel } from "@/ds/platform/publicSitePreset";
import type { SectionVariantMeta } from "@/ds/composition/sections/_schema";

type HeroModel = Extract<PublicSectionModel, { kind: "hero" }>;

export const HERO_MODERN_SAAS_SPLIT_META: SectionVariantMeta = {
  id: "hero-modern-saas-split",
  kind: "hero",
  archetype: "modern-saas",
  label: "Hero — Modern SaaS Split",
  description:
    "Asymmetric 60/40 split with text-left + product preview right; gradient mesh backdrop; staggered text reveal; magnetic-hover primary CTA.",
  supportsThemes: ["dark", "light"],
  motionPresets: ["stagger-text-60", "magnetic-hover", "rise-soft"],
  effects: {
    gradientMesh: true,
    glassmorphism: false,
    scrollDrivenScale: false,
  },
  density: "extended",
  complexity: "rich",
};

export function HeroModernSaasSplit(props: HeroModel) {
  const { kicker, title, lede, primaryAction, secondaryAction, media } = props;

  return (
    <section
      className="sv-section-root sv-hero-modern-saas-split"
      data-variant={HERO_MODERN_SAAS_SPLIT_META.id}
      data-archetype={HERO_MODERN_SAAS_SPLIT_META.archetype}
    >
      <div className="sv-overlay sv-hero-modern-saas-split__mesh" aria-hidden="true" />

      <div className="sv-content-layer sv-hero-modern-saas-split__copy motion-stagger-text-60">
        {kicker ? <div className="sv-hero-modern-saas-split__kicker">{kicker}</div> : null}
        <h1 className="sv-hero-modern-saas-split__title">{title}</h1>
        {lede ? <p className="sv-hero-modern-saas-split__lede">{lede}</p> : null}
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

      <div className="sv-content-layer sv-hero-modern-saas-split__preview motion-rise-soft">
        {media?.src ? (
          // eslint-disable-next-line @next/next/no-img-element
          <img src={media.src} alt={media.alt ?? ""} aria-hidden={media.alt ? undefined : true} />
        ) : null}
      </div>
    </section>
  );
}
