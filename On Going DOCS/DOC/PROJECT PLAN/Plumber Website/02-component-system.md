---
document_type: component-system
scope: site-wide
build_stage: 3-component-foundation
depends_on:
  - 00-master-ui-architecture.md
  - 01-design-system.md
recommended_next_reads:
  - 03-page-plan.md
---

# Component System

## System Strategy
- Build reusable components that support trust, urgency, and fast contact.
- Every interactive component must define loading, error, empty, and success states where relevant.
- Keep all mobile interactions thumb-friendly and accessible.

## Atoms
### Button
- Variants: primary, secondary, ghost, text-link, emergency.
- States: default, hover, active, loading, disabled.
- Emergency buttons can be used for click-to-call and after-hours dispatch.

### Input Family
- Includes input, textarea, select, checkbox, radio, switch.
- Must support helper text, validation messages, and preserved values after errors.

### Badge
- Variants: licensed, insured, same-day, emergency, suburb, review, service type.

### Icon
- Use semantic icons for phone, WhatsApp, chat, map pin, timer, shield, star, and tool categories.

## Molecules
### FloatingActionCluster
- Anchored to the bottom-right corner.
- Actions: Call, WhatsApp, AI chat.
- Expanded state can reveal Quote or Book on larger screens.
- Must have accessible labels and keyboard controls.

### TrustBadgeRow
- Displays license, insurance, response time, rating, and service-area badges.

### ServiceCard
- Shows service type, urgency level, common symptoms, and next action.

### AreaChip and CoverageTag
- Used in postcode and suburb browsing.
- Supports matched, partial, no-coverage, and priority-service states.

### ReviewCard
- Displays star rating, source, suburb, and short quote.

### BeforeAfterSlider
- Used sparingly for drain clears, leak repairs, bathroom fixes, or hot water replacements.

### QuoteEstimatorStep
- Handles service type, urgency, postcode, photos, and preferred contact method.

### EmergencyTriageStep
- Classifies urgent vs planned issues and suggests the best next action.

### FAQItem
- Accordion item with clear answer, recovery action, and related link.

## Organisms
### Header and Utility Strip
- Includes service links, area links, reviews, contact, and a persistent booking or quote CTA.
- Utility strip can display business hours, response time, and emergency availability.

### HeroSection
- Supports headline, proof strip, service selector, and dual CTA logic.
- Can include a postcode checker or quick symptom picker in the hero.

### IssueTriageWizard
- A short decision flow that asks what is wrong, how urgent it is, and where the job is located.

### PostcodeCheckerPanel
- Validates service coverage and routes the user to the correct area page or contact step.

### QuoteFormSection
- Short form for service, postcode, urgency, photos, and callback details.

### BookingSection
- Appointment picker with clear next steps for urgent and planned jobs.

### ReviewsWall
- Mix of review cards, ratings summary, and before/after proof.

### ServiceDetailLayout
- Problem, symptoms, process, price guidance, trust, FAQ, and booking CTA.

### AIChatWidget
- States: collapsed, greeting, active, typing, offline, handoff.
- Must support prompt chips for common plumbing questions.

### Footer
- Includes service area summary, contact methods, license details, hours, and legal links.

## Shared Behaviour Rules
- No hover-only action should hide essential information.
- Every page should expose a clear next step: call, WhatsApp, quote, book, or chat.
- All utility components should remain visible or accessible even when the user scrolls deep into content.
- The interface should feel like a premium service desk, not a generic brochure site.
