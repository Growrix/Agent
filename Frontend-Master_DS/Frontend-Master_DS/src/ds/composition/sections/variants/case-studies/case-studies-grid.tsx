import * as React from "react";

import { SectionPattern } from "@/ds/composition/patterns/SectionPattern";
import { toHeader } from "@/ds/composition/sections/_helpers";
import type { PublicSectionModel } from "@/ds/platform/publicSitePreset";
import type { SectionVariantMeta } from "@/ds/composition/sections/_schema";

type CaseStudiesModel = Extract<PublicSectionModel, { kind: "case-studies" }>;

export const CASE_STUDIES_GRID_META: SectionVariantMeta = {
  id: "case-studies-grid",
  kind: "case-studies",
  archetype: "portfolio-craft",
  label: "Case Studies — 2-Column Grid",
  description:
    "Two-column responsive grid of case-study cards (16:9 media + tags + title). Cards lift 2px and gain shadow-md on hover. Collapses to single column under 760px.",
  supportsThemes: ["dark", "light"],
  motionPresets: ["rise-soft", "magnetic-hover"],
  effects: {
    fullBleedPhotograph: true,
  },
  density: "extended",
  complexity: "standard",
  isDefault: true,
};

export function CaseStudiesGrid(props: CaseStudiesModel) {
  const { header, items } = props;

  return (
    <SectionPattern container="wide" header={toHeader(header)}>
      <div
        className="sv-case-studies-grid"
        data-variant={CASE_STUDIES_GRID_META.id}
        data-archetype={CASE_STUDIES_GRID_META.archetype}
      >
        {items.map((item) => (
          <a key={item.id} href={item.href} className="sv-case-studies-grid__card motion-rise-soft">
            <div className="sv-case-studies-grid__media">
              {item.media?.src ? (
                // eslint-disable-next-line @next/next/no-img-element
                <img src={item.media.src} alt={item.media.alt ?? ""} />
              ) : null}
            </div>
            <div className="sv-case-studies-grid__body">
              <h3 className="sv-case-studies-grid__title">{item.title}</h3>
              {item.tags && item.tags.length > 0 ? (
                <div className="sv-case-studies-grid__tags">
                  {item.tags.map((tag) => (
                    <span key={tag} className="sv-case-studies-grid__tag">
                      {tag}
                    </span>
                  ))}
                </div>
              ) : null}
            </div>
          </a>
        ))}
      </div>
    </SectionPattern>
  );
}
