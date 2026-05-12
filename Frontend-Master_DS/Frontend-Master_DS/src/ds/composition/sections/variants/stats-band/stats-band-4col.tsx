import * as React from "react";

import { SectionPattern } from "@/ds/composition/patterns/SectionPattern";
import { toHeader } from "@/ds/composition/sections/_helpers";
import type { PublicSectionModel } from "@/ds/platform/publicSitePreset";
import type { SectionVariantMeta } from "@/ds/composition/sections/_schema";

type StatsBandModel = Extract<PublicSectionModel, { kind: "stats-band" }>;

export const STATS_BAND_4COL_META: SectionVariantMeta = {
  id: "stats-band-4col",
  kind: "stats-band",
  archetype: "modern-saas",
  label: "Stats Band — 4 Column",
  description:
    "4-column row of large numbers with labels and optional sublabels. Stacks to 2 columns under 760px. Rule dividers between cells.",
  supportsThemes: ["dark", "light"],
  motionPresets: ["fade-in"],
  effects: {},
  density: "compact",
  complexity: "minimal",
  isDefault: true,
};

export function StatsBand4Col(props: StatsBandModel) {
  const { header, stats } = props;

  return (
    <SectionPattern container="wide" header={toHeader(header)}>
      <div
        className="sv-stats-band"
        data-variant={STATS_BAND_4COL_META.id}
        data-archetype={STATS_BAND_4COL_META.archetype}
      >
        {stats.map((s) => (
          <div key={s.id} className="sv-stats-band__cell motion-fade-in">
            <div className="sv-stats-band__value">{s.value}</div>
            <div className="sv-stats-band__label">{s.label}</div>
            {s.sublabel ? <div className="sv-stats-band__sublabel">{s.sublabel}</div> : null}
          </div>
        ))}
      </div>
    </SectionPattern>
  );
}
