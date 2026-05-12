import * as React from "react";

import { Button } from "@/ds/primitives/Button";
import type { PublicSectionModel } from "@/ds/platform/publicSitePreset";
import type { SectionVariantMeta } from "@/ds/composition/sections/_schema";

type CtaModel = Extract<PublicSectionModel, { kind: "cta" }>;

export const CTA_FULL_BLEED_META: SectionVariantMeta = {
  id: "cta-full-bleed",
  kind: "cta",
  archetype: "bold-consumer",
  label: "CTA — Full Bleed",
  description:
    "Inverse-colored full-bleed banner; centred oversized headline (max 22ch); single primary + optional secondary CTA; large vertical padding.",
  supportsThemes: ["dark", "light"],
  motionPresets: ["rise-soft", "idle-pulse-once"],
  effects: {
    fullBleedPhotograph: false,
  },
  density: "full-bleed",
  complexity: "standard",
};

export function CtaFullBleed(props: CtaModel) {
  const { header, body, primaryAction, secondaryAction } = props;

  return (
    <section
      className="sv-section-root sv-cta-full-bleed"
      data-variant={CTA_FULL_BLEED_META.id}
      data-archetype={CTA_FULL_BLEED_META.archetype}
    >
      <div className="sv-cta-full-bleed__inner motion-rise-soft">
        {header?.title ? <h2 className="sv-cta-full-bleed__title">{header.title}</h2> : null}
        {body ? <p className="sv-cta-full-bleed__body">{body}</p> : null}
        {primaryAction || secondaryAction ? (
          <div className="sv-cta-full-bleed__actions">
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
