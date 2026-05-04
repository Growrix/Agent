---
document_type: component-system
project_name: plumbing-service-website
build_stage: 3-component-foundation
depends_on:
  - master-ui-architecture.md
  - design-system.md
recommended_next_reads:
  - motion-system.md
  - pages/
---

# Component System

## 1. Strategy
Use reusable product-grade components only. Atoms live in src/components/ui, molecules in src/components/marketing/shared, and organisms in src/components/marketing/sections. The set is intentionally narrow so the visual system remains disciplined and trust-led.

## 2. Atoms list
- [Button](components/Button.md)

## 3. Molecules list
- [InputField](components/InputField.md)
- [TrustBadgeRow](components/TrustBadgeRow.md)
- [StatCard](components/StatCard.md)
- [ServiceCard](components/ServiceCard.md)
- [TestimonialCard](components/TestimonialCard.md)

## 4. Organisms list
- [Header](components/Header.md)
- [HeroSplit](components/HeroSplit.md)
- [ContentBand](components/ContentBand.md)
- [QuoteFormCard](components/QuoteFormCard.md)
- [ServiceGridSection](components/ServiceGridSection.md)
- [StickyContactDock](components/StickyContactDock.md)
- [FAQAccordion](components/FAQAccordion.md)
- [Footer](components/Footer.md)

## 5. Shared Accessibility Rules
- Focus-visible is mandatory for every interactive element.
- Hover-only discovery is forbidden.
- Form labels remain visible and tied to aria-describedby on validation errors.

## 6. Responsive Behavior Rules
- Components stack vertically on mobile first.
- Touch-first actions stay full-width below lg where appropriate.
- Hero media and card grids collapse without hiding trust content.

## 7. State Management Guidance
- Navigation drawer state is local client state.
- Quote form state is local and preserved during validation failure.
- Filter states for services and areas sync to searchParams.

## 8. Why this pattern fits
This component set supports a high-trust local-service site without introducing unnecessary variation. Shared proof, CTA, and contact components keep the experience recognisable from home through interior pages and preserve the exact hero-led visual rhythm the user requested.