import * as React from "react";

import { SectionPattern } from "@/ds/composition/patterns/SectionPattern";
import { toHeader } from "@/ds/composition/sections/_helpers";
import type { PublicSectionModel } from "@/ds/platform/publicSitePreset";
import type { SectionVariantMeta } from "@/ds/composition/sections/_schema";

type FeaturesModel = Extract<PublicSectionModel, { kind: "features" }>;

export const FEATURES_SPLIT_ALTERNATING_META: SectionVariantMeta = {
  id: "features-split-alternating",
  kind: "features",
  archetype: "editorial-premium",
  label: "Features — Split Alternating",
  description:
    "Image-left / text-right rows that alternate direction. Each row is a 1fr/1fr grid that collapses to single column under 760px.",
  supportsThemes: ["dark", "light"],
  motionPresets: ["rise-soft"],
  effects: {
    fullBleedPhotograph: false,
  },
  density: "extended",
  complexity: "standard",
};

export function FeaturesSplitAlternating(props: FeaturesModel) {
  const { header, features } = props;

  return (
    <SectionPattern container="wide" header={toHeader(header)}>
      <div
        className="sv-features-split-alternating"
        data-variant={FEATURES_SPLIT_ALTERNATING_META.id}
        data-archetype={FEATURES_SPLIT_ALTERNATING_META.archetype}
      >
        {features.map((f, index) => {
          const reverse = index % 2 === 1;
          return (
            <div
              key={f.id}
              className={`sv-features-split-alternating__row ${reverse ? "sv-features-split-alternating__row--reverse" : ""} motion-rise-soft`}
            >
              <div className="sv-features-split-alternating__media">
                {f.media?.src ? (
                  // eslint-disable-next-line @next/next/no-img-element
                  <img src={f.media.src} alt={f.media.alt ?? ""} />
                ) : null}
              </div>
              <div className="sv-features-split-alternating__copy">
                <h3 className="sv-features-split-alternating__title">{f.title}</h3>
                {f.description ? <p className="sv-features-split-alternating__desc">{f.description}</p> : null}
              </div>
            </div>
          );
        })}
      </div>
    </SectionPattern>
  );
}
