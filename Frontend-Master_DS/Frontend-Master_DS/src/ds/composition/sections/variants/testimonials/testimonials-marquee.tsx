import * as React from "react";

import { SectionPattern } from "@/ds/composition/patterns/SectionPattern";
import { toHeader } from "@/ds/composition/sections/_helpers";
import type { PublicSectionModel } from "@/ds/platform/publicSitePreset";
import type { SectionVariantMeta } from "@/ds/composition/sections/_schema";

type TestimonialsModel = Extract<PublicSectionModel, { kind: "testimonials" }>;

export const TESTIMONIALS_MARQUEE_META: SectionVariantMeta = {
  id: "testimonials-marquee",
  kind: "testimonials",
  archetype: "modern-saas",
  label: "Testimonials — Marquee",
  description:
    "Infinite horizontal marquee of testimonial cards. Pauses on hover. Track is duplicated so the loop is seamless. Suppressed under prefers-reduced-motion.",
  supportsThemes: ["dark", "light"],
  motionPresets: ["fade-in"],
  effects: {},
  density: "extended",
  complexity: "standard",
};

export function TestimonialsMarquee(props: TestimonialsModel) {
  const { header, items } = props;
  // Duplicate the list so the marquee loop is visually seamless.
  const looped = React.useMemo(() => [...items, ...items], [items]);

  return (
    <SectionPattern container="wide" header={toHeader(header)}>
      <div
        className="sv-testimonials-marquee"
        data-variant={TESTIMONIALS_MARQUEE_META.id}
        data-archetype={TESTIMONIALS_MARQUEE_META.archetype}
        aria-roledescription="carousel"
      >
        <div className="sv-testimonials-marquee__track" role="list">
          {looped.map((t, index) => (
            <article
              key={`${t.id}-${index}`}
              role="listitem"
              className="sv-testimonials-marquee__card"
              aria-hidden={index >= items.length ? true : undefined}
            >
              <p className="sv-testimonials-marquee__quote">“{t.quote}”</p>
              <div className="sv-testimonials-marquee__byline">
                <strong>{t.name}</strong>
                {t.meta ? <span> · {t.meta}</span> : null}
              </div>
            </article>
          ))}
        </div>
      </div>
    </SectionPattern>
  );
}
