---
document_type: component-system
project_name: local-plumbing-marketing-site
build_stage: 3-component-foundation
depends_on:
  - master-ui-architecture.md
  - design-system.md
recommended_next_reads:
  - motion-system.md
  - pages/
---

# Component System — local-plumbing-marketing-site

## 1. Strategy
Reusable product-grade components only.

Layering:
- Atoms: primitives (button, inputs, badge, icon)
- Molecules: composed UI building blocks (cards, accordions, breadcrumb, action bar)
- Organisms: page-scale sections and shared layout (header, hero, grid, detail, testimonials)

Codebase placement (planned):
- Atoms: `src/components/ui/`
- Molecules: `src/components/shared/`
- Organisms: `src/components/sections/` and `src/components/layout/`

## 2. Atoms list
- [Button](components/Button.md)
- [Input](components/Input.md)
- [Textarea](components/Textarea.md)
- [Select](components/Select.md)
- [Checkbox](components/Checkbox.md)
- [Badge](components/Badge.md)
- [Icon](components/Icon.md)
- [Spinner](components/Spinner.md)
- [Divider](components/Divider.md)

## 3. Molecules list
- [Card](components/Card.md)
- [AccordionItem](components/AccordionItem.md)
- [FormRow](components/FormRow.md)
- [TestimonialCard](components/TestimonialCard.md)
- [StatBlock](components/StatBlock.md)
- [MediaBlock](components/MediaBlock.md)
- [AlertMessage](components/AlertMessage.md)
- [StepIndicator](components/StepIndicator.md)
- [Breadcrumbs](components/Breadcrumbs.md)
- [ActionBar](components/ActionBar.md)

## 4. Organisms list
- [Header](components/Header.md)
- [Footer](components/Footer.md)
- [HeroSection](components/HeroSection.md)
- [FeatureSection](components/FeatureSection.md)
- [GridSection](components/GridSection.md)
- [DetailSection](components/DetailSection.md)
- [TestimonialSection](components/TestimonialSection.md)
- [FAQSection](components/FAQSection.md)
- [CTASection](components/CTASection.md)
- [FormSection](components/FormSection.md)

## 5. Shared Accessibility Rules
- Source of truth: `DOC/knowledge/frontend-rules/accessibility-rules.md`.
- All interactive elements have visible focus (`--color-focus-ring` + `--shadow-focus`).
- No hover-only behavior: every disclosure has tap parity.
- Form inputs always have labels; error messages use `aria-describedby`.

## 6. Responsive Behavior Rules
- Source of truth: `DOC/knowledge/frontend-rules/responsive-rules.md`.
- Mobile-first compositions; desktop is an enhancement.
- Sticky mobile action bar is the only bottom sticky surface.
- Sheets (drawers) replace complex disclosures on mobile.

## 7. State Management Guidance
No auth, no payments, no persistent user state.

Planned client-side UI state (Zustand):
- mobile navigation drawer open/closed
- sticky action bar “secondary actions” expanded/collapsed (if used)
- accordion open state (local per accordion)

Form state:
- react-hook-form + zod only (quote form fields, client-only validation)

Cookie consent:
- no cookie consent banner planned for US-only launch; if expanding beyond US, revisit consent requirements per `brief.json` compliance notes.

## 8. Why this pattern fits
Local-services visitors decide quickly when trust signals and contact paths are clear. A small, consistent set of components reduces cognitive load, improves accessibility, and keeps the mobile conversion path (call/quote) reliably reachable across all pages.
