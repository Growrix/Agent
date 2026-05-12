import * as React from "react";

import { SectionPattern } from "@/ds/composition/patterns/SectionPattern";
import { toHeader } from "@/ds/composition/sections/_helpers";
import type { SectionVariantMeta } from "@/ds/composition/sections/_schema";
import type { PublicSectionModel } from "@/ds/platform/publicSitePreset";

type FeaturesModel = Extract<PublicSectionModel, { kind: "features" }>;

export const FEATURES_BENTO_ASYMMETRIC_META: SectionVariantMeta = {
  id: "features-bento-asymmetric",
  kind: "features",
  archetype: "modern-saas",
  label: "Features — Bento Asymmetric",
  description:
    "6-column grid with mixed cell spans (lg/wide/md). Cells stack to single column under 760px. No two adjacent cells share size in desktop layout.",
  supportsThemes: ["dark", "light"],
  motionPresets: ["rise-soft", "magnetic-hover"],
  effects: {
    gradientMesh: false,
  },
  density: "extended",
  complexity: "standard",
};

// Cycle through cell size classes so feature counts of 3..7 all look balanced.
const CELL_PATTERN = ["lg", "md", "md", "wide", "wide", "wide", "md"] as const;

export function FeaturesBentoAsymmetric(props: FeaturesModel) {
  const { header, features } = props;

  return (
    <SectionPattern container="wide" header={toHeader(header)}>
      <div
        className="sv-features-bento-asymmetric"
        data-variant={FEATURES_BENTO_ASYMMETRIC_META.id}
        data-archetype={FEATURES_BENTO_ASYMMETRIC_META.archetype}
      >
        {features.map((f, index) => {
          const size = CELL_PATTERN[index % CELL_PATTERN.length];
          return (
            <div
              key={f.id}
              className={`sv-features-bento-asymmetric__cell sv-features-bento-asymmetric__cell--${size} motion-rise-soft`}
            >
              <h3 className="sv-features-bento-asymmetric__title">{f.title}</h3>
              {f.description ? (
                <p className="sv-features-bento-asymmetric__desc">{f.description}</p>
              ) : null}
            </div>
          );
        })}
      </div>
    </SectionPattern>
  );
}
