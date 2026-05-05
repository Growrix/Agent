# Frontend Site Implementation Spec

## Scope
- Public routes: `/`, `/services`, `/services/[slug]`, `/areas`, `/areas/[slug]`, `/reviews`, `/about`, `/quote`, `/contact`, `/faq`, `/privacy`, `/terms`, `/404`
- Shared components: `Header`, `HeroSplit`, `ContentBand`, `QuoteFormCard`, `ServiceGridSection`, `TestimonialCard`, `FAQAccordion`, `StickyContactDock`, `Footer`
- Content source: content keys from `planning/frontend/content.en-AU.json` plus CMS query modules for services, areas, reviews, FAQs, and legal content

## Visual Contract
- Light-first trust theme
- Primary brand blue: `#0B5EA8`
- Accent copper: `#C98A38`
- Hero uses white navigation over a deep-blue text plane with real-service imagery to the right
- Rounded white proof shell overlaps the hero bottom on home

## Route Expectations
- Home implements hero, proof shell, service preview, process, coverage proof, metrics, and final CTA
- Services index implements service directory, differentiators, process, proof, and CTA
- Service detail implements included scope, process, proof, FAQ, and CTA
- Areas index implements area directory, service cross-links, proof strip, and CTA
- Area detail implements local services, local proof, local process, FAQ, and CTA
- Reviews implements summary, review grid, trust signals, metrics, and CTA
- About implements story, team and standards, values, proof, and CTA
- Quote and contact implement lead capture with validation and direct call fallback
- FAQ implements grouped accordions by coverage, timing, and quote topics
- Privacy and terms render CMS-backed legal body via content band
- 404 preserves call and quote recovery paths

## Implementation Rules
- Public copy resolves through the content-key layer, not inline JSX strings, except documented status text in system surfaces
- CMS-backed pages use query modules and typed content adapters
- Interactive surfaces are leaf client components only
- `generateMetadata` exists for every public page
- `generateStaticParams` exists for service and area detail routes