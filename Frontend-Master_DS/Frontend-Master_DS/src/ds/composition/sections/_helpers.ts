import type { SectionHeaderProps } from "@/ds/components/SectionHeader";
import type { PublicSectionHeaderModel } from "@/ds/platform/publicSitePreset";

/**
 * Convert the loose section-header model into the SectionHeader props shape.
 *
 * `PublicSectionHeaderModel.title` is OPTIONAL whereas `SectionHeaderProps.title`
 * is a REQUIRED field of type `React.ReactNode`. Spreading the raw model fails
 * the strict optionality check, so we materialise every field as always-present
 * (with `undefined` value when absent). `React.ReactNode` accepts `undefined`,
 * so this conversion is type-safe.
 *
 * Returns `undefined` when the input is absent so callers can simply spread
 * `header={toHeader(section.header)}`.
 */
export function toHeader(h?: PublicSectionHeaderModel): SectionHeaderProps | undefined {
  if (!h) return undefined;
  return { kicker: h.kicker, title: h.title, lede: h.lede };
}
