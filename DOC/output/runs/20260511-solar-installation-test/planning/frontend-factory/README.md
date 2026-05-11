# Frontend Factory Planning Bundle

This planning bundle defines a standalone-factory test project for a solar installation service company website focused on lead generation.

## Project

- Project name: HelioRise Solar
- Project slug: `heliorise-solar`
- Target mode: `standalone_factory`
- Planning root: `DOC/output/runs/20260511-solar-installation-test/planning/frontend-factory/`
- Standalone brief: `ai-product-factory/briefs/solar-installation-service-test-brief.json`
- Planned runtime app root: `ai-product-factory/generated/apps/solar-installation-test-20260511/heliorise-solar`

## Conversion Strategy

- Primary conversion: quote request form
- Fast-contact channels: WhatsApp, direct call, AI assistant handoff
- Mobile priority: sticky bottom contact bar
- Trust levers: process transparency, financing clarity, testimonials, FAQ, literal installation photography

## Route Coverage

- `/`
- `/residential-solar`
- `/commercial-solar`
- `/financing-and-incentives`
- `/contact`

Every route is covered by an explicit execution scope in `scope-manifest.json`.

## Communication Requirements

- WhatsApp must be visible from every lead route.
- Call actions must be available in the header and mobile sticky bar.
- AI assistant must qualify leads and offer a direct handoff instead of trapping users in chat.
- Reduced-motion fallback is required for all contact and dock animations.