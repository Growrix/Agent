import * as React from "react";

import { SectionPattern } from "@/ds/composition/patterns/SectionPattern";
import { toHeader } from "@/ds/composition/sections/_helpers";
import type { PublicSectionModel } from "@/ds/platform/publicSitePreset";
import type { SectionVariantMeta } from "@/ds/composition/sections/_schema";

type LogoCloudModel = Extract<PublicSectionModel, { kind: "logo-cloud" }>;

export const LOGO_CLOUD_GRID_META: SectionVariantMeta = {
  id: "logo-cloud-grid",
  kind: "logo-cloud",
  archetype: "modern-saas",
  label: "Logo Cloud — Greyscale Grid",
  description:
    "Auto-fit grid (min 120px per item). Logos render at 60% opacity, lift to 100% on hover. Fade-in entrance. Renders text fallback if no media supplied.",
  supportsThemes: ["dark", "light"],
  motionPresets: ["fade-in"],
  effects: {},
  density: "compact",
  complexity: "minimal",
  isDefault: true,
};

export function LogoCloudGrid(props: LogoCloudModel) {
  const { header, logos } = props;

  return (
    <SectionPattern container="wide" header={toHeader(header)}>
      <div
        className="sv-logo-cloud-grid"
        data-variant={LOGO_CLOUD_GRID_META.id}
        data-archetype={LOGO_CLOUD_GRID_META.archetype}
      >
        {logos.map((logo) =>
          logo.href ? (
            <a
              key={logo.id}
              href={logo.href}
              className="sv-logo-cloud-grid__item motion-fade-in"
              aria-label={logo.label}
            >
              {logo.media?.src ? (
                // eslint-disable-next-line @next/next/no-img-element
                <img src={logo.media.src} alt={logo.media.alt ?? logo.label} />
              ) : (
                <span>{logo.label}</span>
              )}
            </a>
          ) : (
            <div key={logo.id} className="sv-logo-cloud-grid__item motion-fade-in" aria-label={logo.label}>
              {logo.media?.src ? (
                // eslint-disable-next-line @next/next/no-img-element
                <img src={logo.media.src} alt={logo.media.alt ?? logo.label} />
              ) : (
                <span>{logo.label}</span>
              )}
            </div>
          ),
        )}
      </div>
    </SectionPattern>
  );
}
