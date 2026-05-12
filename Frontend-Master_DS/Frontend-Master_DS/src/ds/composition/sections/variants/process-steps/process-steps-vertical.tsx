import * as React from "react";

import { SectionPattern } from "@/ds/composition/patterns/SectionPattern";
import { toHeader } from "@/ds/composition/sections/_helpers";
import type { PublicSectionModel } from "@/ds/platform/publicSitePreset";
import type { SectionVariantMeta } from "@/ds/composition/sections/_schema";

type ProcessStepsModel = Extract<PublicSectionModel, { kind: "process-steps" }>;

export const PROCESS_STEPS_VERTICAL_META: SectionVariantMeta = {
  id: "process-steps-vertical",
  kind: "process-steps",
  archetype: "local-business-trust",
  label: "Process Steps — Vertical Timeline",
  description:
    "Vertically stacked steps with circular numbered badges; max-width 56rem centred; rise-soft entrance per step.",
  supportsThemes: ["dark", "light"],
  motionPresets: ["rise-soft"],
  effects: {},
  density: "extended",
  complexity: "standard",
  isDefault: true,
};

export function ProcessStepsVertical(props: ProcessStepsModel) {
  const { header, steps } = props;

  return (
    <SectionPattern container="wide" header={toHeader(header)}>
      <ol
        className="sv-process-steps-vertical"
        data-variant={PROCESS_STEPS_VERTICAL_META.id}
        data-archetype={PROCESS_STEPS_VERTICAL_META.archetype}
      >
        {steps.map((step, index) => (
          <li key={step.id} className="sv-process-steps-vertical__step motion-rise-soft">
            <div className="sv-process-steps-vertical__number" aria-hidden="true">
              {step.number ?? String(index + 1)}
            </div>
            <div>
              <h3 className="sv-process-steps-vertical__title">{step.title}</h3>
              {step.description ? (
                <p className="sv-process-steps-vertical__desc">{step.description}</p>
              ) : null}
            </div>
          </li>
        ))}
      </ol>
    </SectionPattern>
  );
}
