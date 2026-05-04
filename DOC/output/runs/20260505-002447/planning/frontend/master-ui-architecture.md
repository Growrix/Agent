---
document_type: master-ui-architecture
project_name: plumbing-service-website
project_archetype: marketing_site
visual_archetype: knowledge/frontend-rules/visual-archetypes/local-business-trust.md
industry_pack: knowledge/industries/local-services.md
build_stage: 1-architecture
depends_on:
  - ../brief.json
recommended_next_reads:
  - design-system.md
  - component-system.md
---

# Master UI Architecture

## 1. Product Intent
Create a trust-led plumbing marketing site for an Australian local-service business that converts urgent and planned visitors into calls or quote requests while making service coverage and credibility visible within the first screen.

## 2. Experience Direction
- Visual theme: deep blue trust shell, white content surfaces, copper accent highlights.
- Default mood: capable, reassuring, direct.
- Brand personality: reliable, grounded, responsive.
- Mobile posture: app-like contact experience with sticky actions.

## 3. Experience Principles
Lead with proof before detail. Make the phone path obvious without overpowering the quote path. Use real-service imagery and operational trust signals instead of generic abstractions. Keep every major page within one click of contact. Preserve the hero reference composition on home while translating the same rhythm into interior pages.

## 4. Core Journeys
- Emergency prospect: Home -> hero CTA -> sticky call action -> phone contact.
- Planned job lead: Home -> Services -> Service detail -> Quote -> confirmation.
- Area validation: Home -> Areas -> Area detail -> Quote.
- Credibility check: Home -> Reviews -> About -> Contact.

## 5. Site Map
| Route | Name | Required |
|---|---|---|
| / | Home | yes |
| /services | Services | yes |
| /services/[slug] | Service detail | yes |
| /areas | Areas | yes |
| /areas/[slug] | Area detail | yes |
| /reviews | Reviews | yes |
| /about | About | yes |
| /quote | Quote | yes |
| /contact | Contact | yes |
| /faq | FAQ | yes |
| /privacy | Privacy | yes |
| /terms | Terms | yes |
| /404 | Not found | yes |

## 6. Global Navigation Model
- Header links: Home, Services, Areas, Reviews, About, FAQ, Contact.
- Persistent primary CTA: Call Now.
- Persistent secondary CTA: Get a Quote.
- Utility strip: phone, business hours, emergency availability note.
- Footer groups: Services, Areas, Company, Legal, Contact.
- Deep-link behavior: every brand click returns to /; interior pages surface a quote CTA above the fold.

## 7. Mobile Navigation Model
- Bottom dock items: Call, Quote, Services, Contact.
- Sticky mobile action bar: always visible on public pages except legal pages.
- Drawer contents: full primary nav plus phone and quote actions.
- Sheet usage: FAQ answers, mobile nav, and contact-method chooser.

## 8. Shared Conversion Infrastructure
- Primary CTA appears in hero, sticky dock, mid-page CTA bands, and footer CTA.
- Secondary CTA appears in hero, service pages, and quote/contact pages.
- Phone appears in utility strip, sticky dock, and footer.
- Quote form entry points appear on Home, Service detail, Quote, and Contact.
- No account or sign-in entry points are present.

## 9. Frontend Visual Strategy
- Home hero is locked to a split composition: 42% content shell on desktop, 58% media shell.
- Left shell uses a deep blue field with a diagonal edge sliding into the photography plane.
- Right shell uses real plumber photography with a visible van/service context and warm metallic tool detail.
- Navigation and hero copy sit above the blue plane in white.
- The next section begins inside a large white card with 36px top radii, visually tucking under the hero.
- Interior pages keep the same blue/white/copper language but simplify the hero into tighter split bands.

## 10. Layout System
- Desktop: 12-column grid, 24px gutters, 1200px max marketing shell.
- Tablet: 8-column grid, 20px gutters.
- Mobile: 4-column grid, 16px gutters.
- Max widths: marketing 1200px, reading 768px, dense utility 960px.
- Section rhythm: 40 mobile / 56 tablet / 80 desktop.

## 11. Page Inventory
### Home
- Goal: convert urgent and planned visitors immediately.
- Primary CTA: Call Now.
- Secondary CTA: Get a Quote.

### Services
- Goal: help visitors identify the right service category.
- Primary CTA: Get a Quote.
- Secondary CTA: Call Now.

### Service Detail
- Goal: explain scope, proof, and next step for a single service.
- Primary CTA: Request Quote.
- Secondary CTA: Call for Same-Day Help.

### Areas
- Goal: prove coverage and locality.
- Primary CTA: Check Service Availability.
- Secondary CTA: Get a Quote.

### Area Detail
- Goal: localise trust and service proof for a suburb or metro pocket.
- Primary CTA: Book This Area.
- Secondary CTA: Call Local Team.

### Reviews
- Goal: increase confidence with social proof and trust metrics.
- Primary CTA: Get a Quote.
- Secondary CTA: Call Now.

### About
- Goal: humanise the business and operational standards.
- Primary CTA: Contact the Team.
- Secondary CTA: View Services.

### Quote
- Goal: capture a qualified lead with minimum friction.
- Primary CTA: Submit Quote Request.
- Secondary CTA: Call Instead.

### Contact
- Goal: provide all contact modes clearly.
- Primary CTA: Call Now.
- Secondary CTA: Send Message.

### FAQ
- Goal: remove objections before contact.
- Primary CTA: Still Need Help? Get a Quote.
- Secondary CTA: Call Now.

### Privacy / Terms
- Goal: satisfy legal requirements without distracting from contact routes.
- Primary CTA: Contact the Business.
- Secondary CTA: Return Home.

## 12. Cross-Page Components
- Header
- StickyContactDock
- HeroSplit
- TrustBadgeRow
- ServiceCardGrid
- QuoteFormCard
- FAQAccordion
- Footer
- Cookie banner

## 13. Shared State Requirements
- Forms: default, focus, validation-error, submitting, success, server-error.
- Listings: loading, loaded, filtered-empty, error.
- Navigation: default, hover, active, sticky, mobile-expanded.
- Contact actions: available, busy-hours note, after-hours note.

## 14. Motion Posture
- Default duration band: slow-medium from local-business-trust.
- Default easing: confident decel for entrances, standard for hovers.
- Macro defaults: section reveal, subtle route cross-fade, drawer slide.
- Micro defaults: hover lift, press feedback, count-up on proof strip.
- Reduced-motion stance: preserve hierarchy, remove travel.

## 15. Accessibility Posture
- Target standard: WCAG 2.1 AA.
- Skip link, landmarks, and visible focus rings are standard.
- Phone and quote actions always have keyboard and tap parity.
- Hero imagery is descriptive when meaningful and decorative where redundant.

## 16. Localization Posture
- Default locale: en-AU.
- i18n required: no.
- RTL: no.
- Locale switcher: none in v1.

## 17. Implementation Stack (Frontend Only)
- Framework: Next.js App Router.
- Styling: Tailwind CSS + shadcn/ui primitives.
- State: RSC for page data, local state for form UX.
- Forms: react-hook-form + zod.
- Motion: Framer Motion for shared reveals and docks.
- Image: next/image only.

## 18. Route Map
- /
- /services
- /services/[slug]
- /areas
- /areas/[slug]
- /reviews
- /about
- /quote
- /contact
- /faq
- /privacy
- /terms

## 19. File Output Inventory
- ai-context.yaml
- README.md
- master-ui-architecture.md
- design-system.md
- design-system.tokens.json
- component-system.md
- components/Button.md
- components/InputField.md
- components/TrustBadgeRow.md
- components/StatCard.md
- components/ServiceCard.md
- components/TestimonialCard.md
- components/Header.md
- components/HeroSplit.md
- components/QuoteFormCard.md
- components/ServiceGridSection.md
- components/StickyContactDock.md
- components/FAQAccordion.md
- components/Footer.md
- motion-system.md
- interaction-matrix.md
- content-library.md
- content.en-AU.json
- pages/*.md

## 20. AI Consumption Guidance
- AI first stop: ai-context.yaml.
- Human first stop: README.md.
- Read order: architecture -> design -> components -> motion -> interaction -> content -> pages.
- Output root stays inside DOC/output/runs/20260505-002447/planning/frontend.