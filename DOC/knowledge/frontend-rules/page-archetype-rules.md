# Page Archetype Rules

Defines the required and recommended sections per page kind, and the section composition pattern that every per-page spec must follow. The page_planner uses this as the source of truth.

## Page composition contract (every page)

Every page spec MUST declare:

1. Page identity: `route`, `name`, `archetype`, `auth: public|protected`, `data_source` per section.
2. Sections in **visual order**, each with:
   - section name
   - purpose (1 line)
   - content keys consumed (from `docs/frontend/content-library.md`)
   - components used (from component system)
   - data source for the section
   - interactions (per `interaction-planner` output)
   - states (loading / empty / error / success / not-found as applicable)
   - responsive adaptation (desktop / tablet / mobile)
   - motion declarations (referencing `motion-system.md`)
3. SEO block: title, description, og:title, og:description, og:image, canonical, schema.org JSON-LD where applicable.
4. Conversion path: primary path, secondary path, exit points.
5. Accessibility notes specific to this page.
6. Performance notes (LCP target, image weight budget).

If any of the above is missing, the spec is invalid and the reviewer rejects it (constraint **F7**).

## Required sections per page archetype

### Home (any project archetype)
1. Header / nav (organism: Header)
2. Hero (organism: HeroSection)
3. Value (FeatureSection or capability rail)
4. Proof (TestimonialSection or stat strip)
5. Supporting story or process (ContentSection)
6. Conversion (CTASection)
7. Footer (organism: Footer)
Recommended additions: utility ribbon, AI/chat surface, blog/insights teaser, shop spotlight, FAQ, final CTA band.

### Service overview (marketing_site / professional_services)
1. Header
2. Hero (intent + first CTA)
3. Service grid (FeatureSection or grid of Cards)
4. Differentiators
5. Process or engagement model
6. Proof (case study teaser)
7. CTA
8. Footer

### Service detail (marketing_site)
1. Header
2. Hero (service-specific)
3. What's included (FeatureBlocks)
4. How it works (StepIndicator + ContentSection)
5. Pricing or quote-driven CTA
6. Proof (testimonial / case study teaser)
7. FAQ (objection handling)
8. CTA
9. Footer

### Product overview (ecommerce)
1. Header (with cart, search)
2. Hero (collection or campaign)
3. Filter + sort + grid (FilterPanel + ListingSection)
4. Featured collection or trust badges
5. Footer

### Product detail (ecommerce)
1. Header
2. Gallery (MediaGallery)
3. Title + price + variants + CTA
4. Description tabs (TabGroup: description, materials, shipping, returns)
5. Reviews (TestimonialSection)
6. Recommendations (ListingSection)
7. Footer

### Cart / Checkout (ecommerce / marketplace)
1. Header (minimal during checkout)
2. Order summary (CheckoutSection)
3. Shipping address form (FormSection)
4. Payment (Stripe handoff)
5. Trust strip (secure checkout, returns)
6. Footer (minimal)

### Pricing (saas_app / marketing_site)
1. Header
2. Hero (positioning)
3. Plan tiers (PricingSection)
4. Feature comparison table (ComparisonSection)
5. FAQ (FAQSection)
6. Final CTA
7. Footer

### About (any)
1. Header
2. Hero (mission or origin)
3. Story / approach (ContentSection)
4. Team (grid of Cards with avatars)
5. Values (FeatureSection)
6. Proof (TestimonialSection)
7. CTA
8. Footer

### Contact (any)
1. Header
2. Hero (clear "how to reach us")
3. Multi-channel contact (FormSection + alternates: email/phone/WhatsApp)
4. Map or address block (if local)
5. Footer

### FAQ (any)
1. Header
2. Hero
3. Categorized accordion (AccordionItem rows under headings)
4. Still-have-questions CTA
5. Footer

### Blog index (content_site / saas_app / marketing_site)
1. Header
2. Hero (latest or featured)
3. Filter / category strip
4. Article grid (ListingSection)
5. Newsletter (CTASection)
6. Footer

### Blog detail
1. Header
2. Article hero (title, date, author)
3. Article body (rich text)
4. Author bio
5. Related articles (ListingSection)
6. Newsletter or final CTA
7. Footer

### Sign-in / Sign-up (saas_app / dashboard_tool / ecommerce-with-account)
1. Minimal header (logo only)
2. AuthSection (FormSection variant)
3. Alternate path (sign-up ↔ sign-in)
4. Trust strip (compliance, security)
5. Minimal footer

### Onboarding (saas_app / dashboard_tool)
Multi-step. Each step:
- StepIndicator
- One-task-per-step content
- Skip / next / back controls

### Dashboard (saas_app / dashboard_tool / marketplace)
1. App shell: TopBar + SidebarNavigation
2. Summary header (greeting + key metric tiles)
3. Primary panel (per surface: queue, list, detail, chart)
4. Secondary panel (recent activity / shortcuts)
5. Empty / loading / error states for every panel

### Listing (marketplace / ecommerce)
1. Header (with search)
2. Hero or category strip
3. FilterPanel + ListingSection
4. Trust strip (verification, reviews)
5. Footer

### Listing detail (marketplace)
1. Header
2. Gallery
3. Title + price + seller (with verified badge)
4. Description / specs
5. Reviews
6. Related listings
7. Footer

### Case study (portfolio_site / professional_services)
1. Header
2. Project hero (image + title + role + year)
3. Context (client, scope, team)
4. Problem
5. Approach
6. Solution media (gallery + text)
7. Outcome (metrics or testimonial)
8. Next-project navigator
9. Footer

### Landing page (landing_page)
1. Hero with single CTA
2. Logo bar (proof)
3. Value (3 bullets max)
4. Demo or mid-page proof
5. Single CTA (repeated)
6. FAQ (max 6 items)
7. Final CTA (same primary)
8. Minimal footer

### 404
1. Minimal header
2. "Page not found" headline + helpful sub
3. Quick links to top destinations
4. Search box (if applicable)
5. Footer

### Privacy / Terms / Legal
1. Minimal header
2. Title + last-updated date
3. Long-form content (CMS-backed if available)
4. Contact line
5. Footer

## Mandatory utility surfaces

Independent of archetype, every site MUST plan:

- Utility ribbon (optional but reserved slot for trust / promo)
- Sticky mobile CTA (where archetype calls for it; e.g., `local-business-trust` mandates it)
- Cookie consent banner (where compliance requires)
- Accessibility skip link (every page)

## Section minimum count rule (constraint F2)

Every public page MUST declare ≥7 sections (header, hero, value, proof, conversion, supporting, footer). Pages where this does not apply (404, legal, narrow utility pages) are exempt and explicitly marked `min_sections_exempt: true` with reason.

## Conversion path declaration

Every page spec MUST declare:
- `primary_path`: ordered surfaces from this page to the primary CTA conversion.
- `secondary_path`: ordered alternative.
- `exit_points`: legitimate next destinations even if not converting.

## Output

The page_planner emits one Markdown file per route under `docs/frontend/pages/<route-slug>.md` using the per-page spec template at `execution/spec-rules/per-page-spec.md`.
