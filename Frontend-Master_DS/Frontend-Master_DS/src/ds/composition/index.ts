export * as blocks from "./blocks";
export * as patterns from "./patterns";
export * as templates from "./templates";
export * from "./sections";

// Direct re-exports of high-traffic composition utilities so consumers can
// `import { SectionPattern, PageTemplate } from "@/ds"` without going through
// the namespace barrel.
export { SectionPattern, type SectionPatternProps } from "./patterns/SectionPattern";
export { PageTemplate, type PageTemplateProps } from "./templates/PageTemplate";
