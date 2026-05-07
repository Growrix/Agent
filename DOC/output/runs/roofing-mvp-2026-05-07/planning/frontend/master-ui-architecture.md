# Master UI Architecture — Roofing MVP

**Status:** PLANNED | **Timestamp:** 2026-05-07 | **Quality Target:** World-class

---

## Product Intent

High-ticket roofing lead platform driving inspection request volume and trust-backed conversion. Storm-damage homeowners, planned-reroof customers, and commercial property managers expect transparency, rapid response, and credible proof before committing to contact.

**Outcome:** Users complete inspection requests or emergency contacts within first session; trust signals reduce sales-cycle friction.

---

## Experience Direction

### Vision

A warm, locally-grounded digital storefront that feels like calling a neighbor you trust. Every surface communicates: we know roofing, we serve your area, we respond fast, and we stand behind our work.

### Experience Principles

1. **Trust before pitch** — proof (certifications, projects, reviews) appears before conversion asks.
2. **Urgency clarity** — storm-damage path is a distinct, visual, fast-contact journey; non-urgent paths remain calm.
3. **Proof density** — real photos (projects, team, vehicles) dominate; zero generic stock-photography hero or service cards.
4. **Response transparency** — "we answer in <X> minutes" and "same-day appointments available" are visible hero-level promises.
5. **Material education** — before/after and use-case guidance reduce customer indecision on replacement projects.
6. **Financing confidence** — warranty and financing clarity near every primary CTA to lift close-ready leads.
7. **Mobile-first urgency** — sticky contact buttons, fast-dialing hero CTA, and bottom-nav prominence on all mobile surfaces.

---

## Core Journeys

### Journey 1: Emergency Storm Path
```
Storm Damage Hero (urgent visual treatment)
  → Fast Contact CTA (click-to-call or form)
  → Insurance Claim Explainer (optional read)
  → Inspection Confirmation
```
**Time to contact:** < 20 seconds.
**Trigger:** SEO campaign traffic spike post-storm; paid ads on "roof damage + [area]"; direct URL share.
**KPI:** Form completion rate; time-to-contact.

### Journey 2: Planned Reroof Research
```
Home Hero (calm, professional tone)
  → Services Overview (navigation)
  → Material Comparison (education, use-case guidance)
  → Project Gallery (proof + before/after)
  → Financing & Warranty (confidence strip)
  → Inspection / Quote Request
```
**Time to contact:** 3–5 minutes.
**Trigger:** Organic search for "roofing services", "new roof cost", "roof replacement".
**KPI:** Inspection request completion rate.

### Journey 3: Service Area Verification
```
Home Hero
  → Areas Served Link / Footer
  → Area Detail / Postcode Lookup
  → Confirm Coverage
  → Contact CTA
```
**Time to contact:** < 60 seconds.
**Trigger:** Local SEO; directory links.
**KPI:** Area-specific form completions.

### Journey 4: Warranty & Financing Deep Dive
```
Home Hero
  → Financing Page (financing options, warranty details)
  → Material Comparison (reference warranty outcomes)
  → Inspection Request (confidence increased)
```
**Time to contact:** 2–3 minutes.
**Trigger:** Organic / paid traffic for "roof financing" or "warranty terms".
**KPI:** Lead quality (financing pre-qualified).

### Journey 5: Project Social Proof
```
Home Hero
  → Projects / Gallery (before/after, filters by job type / location)
  → Read Detailed Outcome
  → Warranty / Financing Info (if needed)
  → Contact
```
**Time to contact:** 2–4 minutes.
**Trigger:** Google Business Profile, word-of-mouth, direct search for local projects.
**KPI:** Lead quality (intent-qualified).

---

## Site Map & Route Inventory

### Public Marketing Pages

| Route | Title | User Intent | Primary Section | Conversion CTA | Trust Signal Must-Have |
|---|---|---|---|---|---|
| `/` | **Home** | Find fast contact / prove credibility | Storm urgency hero OR calm inspection hero | Inspection request / Emergency contact | License, years, areas, review count |
| `/services` | **Roofing Services** | Understand service types | Service grid with filters | Browse specific service | Certification badges, response-time |
| `/services/[slug]` | **Service Detail** (Inspection / Replacement / Repair / Maintenance) | Learn specifics, build confidence | Outcome-focused section (what happens, why matters, proof) | Inspection or quote request | Project examples, warranty info |
| `/storm-damage` | **Emergency: Storm Damage** | Urgent contact, insurance help | Stripped-down hero with emergency CTA + explainer | Click-to-call / Emergency form | Response-time promise, certification |
| `/materials` | **Roofing Materials** | Compare options (asphalt, metal, tile) | Material card stack with use-case guidance | Material info request / Inspection | Durability + warranty comparison |
| `/projects` | **Project Gallery** | See recent work, confirm quality | Before/after grid with filters (job type / area / outcome) | Contact to discuss similar project | Recent local work, warranty stamp |
| `/financing` | **Financing & Warranty** | Reduce payment objections, clarify terms | Financing options grid + warranty partner logos + trust copy | Inspection with financing pre-qual | Partner logos, terms clarity |
| `/contact` | **Contact** | Fallback contact form | Contact form + office hours + map + phone | Form submission | Hours, address, phone |
| `/faq` | **FAQ** | Answer common objections | Accordion Q&A (warranty, financing, process, timeline) | Related service / Contact link | Clear, specific answers |
| `/about` | **About / Team** | Build trust via people | Team photos, years in business, origin story, values | Contact to work with us | Real team photos, credentials |
| `/areas` | **Service Areas** | Verify local coverage | Area filter / search + list + map | Confirm coverage, then contact | List of areas served |
| `/areas/[slug]` | **Area Landing** (dynamic per postcode / city) | Geo-targeted conversion | Area-specific hero + local projects + area facts | Inspection / Contact | Local projects, area response time |
| `/privacy` | **Privacy Policy** | Legal compliance | Policy text | None (legal footer link) | Version date |
| `/terms` | **Terms & Conditions** | Legal compliance | Policy text | None (legal footer link) | Version date |
| `/404` | **Not Found** | Navigation recovery | Friendly error + nav shortcuts | Home / Services | None |

### Global Navigation Model

**Desktop Header (sticky, transparent to opaque on scroll)**
- Logo + Brand name (left)
- Nav menu (center): Home, Services, Materials, Projects, Financing, About
- Utility bar (right): Phone number, Business hours, Contact CTA button
- ThemeSwitcher (right corner, after utility)

**Mobile Header (sticky, minimized)**
- Logo / Menu icon (left)
- Title (center)
- ThemeSwitcher + Menu toggle (right)

**Mobile Bottom Nav (fixed, 5-tab icon bar, `< lg` breakpoint)**
- Home (icon: house)
- Services (icon: toolbox)
- Materials (icon: layers)
- Projects (icon: image)
- Contact (icon: phone)

**Desktop Sidebar (optional, reserved for future expansion)**
- Not included in MVP.

**Footer (dense information architecture)**
- Column 1: Brand + phone + hours
- Column 2: Services (list of slugs)
- Column 3: Company (About, Blog, FAQ)
- Column 4: Legal (Privacy, Terms, Contact)
- Column 5: Social links (optional)
- Bottom bar: License number, areas served, © year, Footer Attribution link

---

## Shared Conversion Infrastructure

### Click-to-Call (Primary CTA)
- **Desktop:** Header utility phone number (clickable tel: link).
- **Mobile:** Sticky header button (fixed top, high z-index); plus click-to-call on every prominent phone display.
- **Fallback:** Inspection request form.

### Inspection Request Form (Short, Preserves Answers)
Fields: Name, Phone, Email, Service Type (dropdown), Address / Postcode, Brief description (textarea).
- Error recovery: form fields preserve entered values.
- Success state: confirmation message + "we'll call you" timeline.
- Analytics: track field-by-field drop-off.

### Emergency Contact Path
- **Trigger:** /storm-damage page or "Emergency" CTA.
- **Form variant:** Pre-filled service type = "Emergency inspection"; fields: Name, Phone, Address, Description.
- **Response:** Immediate confirmation + ops notification.

### Material Comparison Affordance
- **Location:** `/materials` page; embedded on `/services` and `/services/replacement`.
- **Format:** 3-column card stack (Asphalt, Metal, Tile) with attributes: cost range, durability, aesthetic, maintenance, warranty.
- **CTA:** "Learn more" or "Request inspection" for each material.

### Financing & Warranty Trust Strip
- **Location:** Below primary CTA on Home hero; dedicated page `/financing`; near conversion CTAs on Service pages.
- **Content:** Financing partner logos + "flexible payment plans" + warranty partner logos + "backed by [partner] 20-year warranty".
- **CTA:** "See financing options" or "Inspect your roof".

---

## Frontend Visual Strategy

### Archetype: Local-Business-Trust
- **Mood:** Warm, credible, locally-rooted; professional but friendly.
- **Color intent:** Deep credible hue (navy / teal) + warm accent (amber / orange).
- **Imagery:** Real photos of staff, vehicles, work sites, before/after galleries. Zero generic stock.
- **Motion:** Reassuring restraint; 220–280ms durations; calm-precise temperament.
- **Typography:** Confident, humanist sans; large readable body for accessibility.

### Token Defaults (to be materialize in design-system.md)
- **Primary color:** Navy (#0F3A66) or client-provided deep hue.
- **Accent color:** Amber (#F59E0B) or warm CTA hue.
- **Background:** Off-white warm neutral (#F8F6F1).
- **Surface:** Pure white (#FFFFFF).
- **Typography display:** 56 / 48 / 40 / 32 px scale.
- **Typography body:** 18 / 16 / 14 px scale with 1.65 line-height.
- **Section rhythm:** 80px desktop / 56px tablet / 40px mobile.
- **Spacing unit:** 8px base; card padding 24px standard / 20px mobile.
- **Radius:** Cards 12px, hero panels 16px, inputs 10–12px.

### Dark Theme
- **Background:** Near-black (#0F172A).
- **Surface:** Dark slate (#1E293B).
- **Primary:** Light slate (#E2E8F0).
- **Accent:** Warm gold (#FCD34D) [adjusted from amber for contrast].
- **Text:** Near-white (#F1F5F9).
- **Reduced-motion fallback:** Instant or CSS-only transition.

---

## Layout System

### Breakpoints
- **Mobile:** `< 640px` (xs)
- **Tablet:** `640px–1024px` (sm/md)
- **Desktop:** `≥ 1024px` (lg/xl)

### Container Widths
- **Mobile:** Full-bleed with 16px side padding.
- **Tablet:** 92% width, max-width 720px.
- **Desktop:** 92% width, max-width 1200px.

### Section Stack
- **Primary sections:** 80px top/bottom padding (desktop), 56px (tablet), 40px (mobile).
- **Hero section:** Full-bleed; min-height 100svh or 80svh; background image + gradient overlay.
- **Card grids:** 3-column (desktop), 2-column (tablet), 1-column (mobile); 24px gap.
- **Sticky elements:** Mobile sticky header (56px height); mobile bottom nav (64px height).

### Responsive Content Density
- **Desktop:** 3-column grid, moderate padding, balanced whitespace.
- **Tablet:** 2-column grid, adjusted padding.
- **Mobile:** 1-column stack, reduced padding, taller touch targets (48px minimum).

---

## Page Inventory (Compact Reference)

1. **Home** — Storm urgency hero + calm inspection hero variant + trust signals + recent projects teaser + CTA band
2. **Services** — Service grid with icons and links to detail pages
3. **Service Detail** — Outcome-focused sections for inspection / replacement / repair / maintenance
4. **Storm Damage** — Urgent visual design + fast contact CTA + insurance explainer
5. **Materials** — Material comparison cards + use-case guidance + warranty chart
6. **Projects** — Before/after gallery with job-type and area filters; warranty stamps visible
7. **Financing** — Financing options grid + warranty partner showcase + trust copy
8. **Contact** — Contact form + contact info + map + hours
9. **FAQ** — Accordion Q&A on warranty, financing, process, timeline
10. **About** — Team member photos + origin story + credentials + CTA
11. **Areas Served** — Area list / search + area detail pages (dynamic per postcode)
12. **Legal** — Privacy, Terms (minimal, linked from footer)

---

## Cross-Page Shared Components

### Atoms
- Button (primary, secondary, tertiary; sizes; states)
- Input / Textarea
- Select / Dropdown
- Checkbox / Radio
- Badge (certification, availability, warranty)
- Icon (inline, 20×20 or 24×24, outline 1.5–2px stroke)
- Text link
- Divider

### Molecules
- Header (desktop + mobile + sticky behavior)
- Footer (dense info architecture)
- Nav menu (horizontal, accordion, mobile drawer)
- Hero (full-bleed background + text reveal + trust chips + CTA)
- Service card (icon, title, description, CTA link)
- Project card (before/after toggle or carousel, warranty badge)
- Financing card (payment option, partner logo)
- Testimonial card (quote, author, photo)
- Contact info strip (phone, hours, address)
- Trust badge bar (certifications, insurance, years)
- Material comparison card (attributes + use-case + CTA)

### Organisms
- Hero section (full-page entrance, text reveal, CTAs, background media)
- Service grid (3-column desktop, filters, detail links)
- Project gallery (before/after carousel, job-type + area filters)
- Material comparison section (3-column cards, attribute matrix)
- Financing section (options grid, warranty partner logos, trust copy)
- FAQ section (accordion per category)
- Form section (inspection request, emergency contact, quote)
- Header / Nav (sticky, responsive, mobile drawer)
- Footer (dense IA, legal links, social)
- Review aggregate strip (star rating, count, source badge)
- CTA band (prominent conversion section, repeated at page end)
- Testimonial carousel (rotating quotes, optional looping)
- Area coverage widget (postcode lookup or area list)

### Mandatory Global Components
- **ThemeSwitcher** — sun/moon icon toggle in header (desktop) + mobile toolbar; localStorage persistence; `data-theme="dark"` on `<html>`.
- **MobileBottomNav** — icon tab bar (5 tabs max) visible on `< lg` breakpoints; sticky bottom with safe-area-inset-bottom; active state indicated by color + icon scale.
- **AuthModal** — overlay modal for future auth expansion; triggered from header CTA; currently optional but infrastructure declared for dev readiness.

---

## Shared State Requirements

### Client State
- **Theme state:** Light / Dark; persisted to localStorage.
- **Navigation state:** Mobile menu open / closed; focus management.
- **Form state:** Inspection request form values (preserved on error); success message display.
- **Scroll state:** Header transparency/opaque transition (sticky header scroll effect).

### Data Fetching
- **Services:** Pulled from CMS on `/services` and detail pages; cached for 1 hour.
- **Projects:** Pulled from CMS on `/projects`; filters applied client-side.
- **Areas:** Pulled from CMS on `/areas`; search/filter client-side.
- **Testimonials / Reviews:** Pulled from CMS or external reviews API (Google Business Profile).
- **Financing partners:** Static data in CMS or hardcoded (low-change).

### Sync Across Routes
- **Header state** (phone number, hours, area list) — hydrated from layout component, reused on all routes.
- **Footer state** — same as header; reused on all routes.
- **Mobile bottom nav** — same active-tab state across all routes; synced via router location.

---

## Motion Posture

### Temperament: Calm-Precise (Local-Business-Trust)
- **Duration band:** 220–280ms.
- **Easing:** ease-out for entrance; ease-in-out for state transitions.
- **Reduced-motion fallback:** Instant rendering or opacity-only fade for all animations.
- **Purpose:** Every motion is functional (clarify state change, guide attention, confirm action). Decorative motion is forbidden.

### Key Motion Moments
1. **Text reveal on hero:** Staggered per-word or per-line entrance on page load; 200ms per word; reduced-motion → instant.
2. **Trust badge entrance:** Slide-up + fade from below hero; 240ms; reduced-motion → opacity fade.
3. **Service card hover:** Color shift + subtle scale (1.02); 200ms.
4. **Form state transitions:** Loading spinner on submit; success checkmark reveal; error shake + color flash.
5. **Navigation drawer toggle (mobile):** Slide from left with backdrop blur; 240ms ease-out.
6. **Scroll-triggered reveal:** Section fade-in on scroll into viewport; 280ms.

### Forbidden Patterns
- Auto-play videos or animations.
- Decorative hover effects that compete with functional CTAs.
- Rapid, attention-grabbing motion on non-conversion elements.

---

## Accessibility Posture (WCAG 2.1 AA+)

### Landmarks
- `<header>` contains navigation.
- `<main>` wraps all content sections.
- `<footer>` contains legal + company info.
- `<nav>` elements for primary and mobile nav.

### Heading Outline
- `<h1>` — Brand name or hero headline (only one per page).
- `<h2>` — Section headings (services, projects, financing, etc.).
- `<h3>` — Card or subsection headings.
- Sequential order maintained; no skipped levels.

### Color Contrast
- **Text on background:** ≥ 4.5:1 for body text (WCAG AA); ≥ 3:1 for large text (18px+).
- **Interactive elements:** ≥ 3:1 against adjacent colors.
- **Trust chips on images:** Dark pill background (rgba(0,0,0,0.6)) with light text to guarantee ≥ 4.5:1.
- **Dark theme:** All contrast ratios re-verified in dark color scheme.

### Focus & Keyboard Navigation
- **Tab order:** Logical (left-to-right, top-to-bottom); skip-to-main link at top.
- **Focus indicator:** Visible 2–3px outline; contrast ≥ 3:1 against background.
- **Interactive elements:** All buttons, links, form inputs focusable via Tab; trap focus in modals.
- **Keyboard shortcuts:** Enter/Space on buttons; Escape to close modals/drawers.

### Form Accessibility
- **Labels:** Explicit `<label>` associated with every input via `for` attribute.
- **Error messages:** Associated with input via `aria-describedby`; announced on focus.
- **Required fields:** Marked with `aria-required="true"` and visual indicator.
- **Submit feedback:** Loading state announced via `aria-live="polite"`; success/error message announced.

### Motion & Reduced Motion
- **`prefers-reduced-motion` CSS:** Every animation has a reduced-motion fallback (instant or opacity-only).
- **Testing:** Verify all interactions and transitions are accessible at reduced-motion preference.

### ARIA Roles & Live Regions
- **Navigation:** `role="navigation"` or `<nav>`.
- **Main content:** `role="main"` or `<main>`.
- **Form alerts:** `aria-live="polite"` for error/success messages.
- **Slide-in panels:** `role="complementary"` for side sheets; trap focus.
- **Rating displays:** `aria-label` for star ratings (e.g., "4.8 out of 5 stars").

---

## Localization Posture

### Content Localization
- **Target locales (MVP):** en-US.
- **Future-ready:** All visible strings extracted to content-library keys (not hardcoded).
- **i18n approach:** next-intl or similar; placeholder structure in dev.
- **Number/date formatting:** Locale-aware via Intl API (phone formatting, date display).

### Geographic Targeting
- **Areas served:** Editable via CMS; no hardcoded area list.
- **Local SEO:** City-specific landing pages (`/areas/[slug]`) generated dynamically.
- **Schema.org/LocalBusiness:** Includes area list in JSON-LD.

---

## Implementation Stack

### Frontend Framework
- **Runtime:** Next.js 15+ (App Router, Server Components preferred)
- **Styling:** Tailwind CSS (with custom tokens in config)
- **Component library:** Radix UI (headless, a11y-first) + custom shadcn components
- **Animation:** Framer Motion (with reduced-motion awareness)
- **Forms:** React Hook Form + Zod for validation
- **Analytics:** PostHog or Vercel Analytics
- **CMS:** Sanity.io (headless CMS for content + projects + services + areas)

### Deployment
- **Platform:** Vercel
- **Build:** Next.js static + ISR (incremental static regeneration) for CMS-driven pages
- **Edge:** Vercel Edge functions for form routing
- **Monitoring:** Vercel Analytics + PostHog

### Development Ergonomics
- **Package manager:** pnpm
- **Monorepo (if multi-workspace):** Turborepo (optional; can be flat for MVP).
- **Linting:** ESLint + Prettier
- **Type safety:** TypeScript strict mode
- **Testing:** Vitest (unit) + Playwright (e2e)
- **Environment:** Node 20+

### Repository Root Commands (from workspace root)
```
pnpm dev          # Start dev server
pnpm build        # Build for production
pnpm lint         # Run linting checks
pnpm test         # Run tests
pnpm type-check   # TypeScript type checking
```

**Shim required:** Yes. Root package.json includes these scripts with `next dev`, `next build`, etc., delegated to the `/frontend` workspace (if monorepo) or the Next.js project root.

---

## Route Map

```
App Router Structure (Next.js):
/
├── layout.tsx                    (root layout, header, footer, theme provider)
├── page.tsx                      (home hero + sections)
├── globals.css                   (tailwind, design tokens, theme vars)
├── (marketing)
│   ├── services
│   │   ├── page.tsx             (services grid)
│   │   └── [slug]
│   │       └── page.tsx         (service detail)
│   ├── storm-damage
│   │   └── page.tsx             (emergency landing)
│   ├── materials
│   │   └── page.tsx             (material comparison)
│   ├── projects
│   │   └── page.tsx             (gallery + filters)
│   ├── financing
│   │   └── page.tsx             (financing + warranty)
│   ├── areas
│   │   ├── page.tsx             (area list / search)
│   │   └── [slug]
│   │       └── page.tsx         (area-specific landing)
│   ├── about
│   │   └── page.tsx             (team + about)
│   ├── faq
│   │   └── page.tsx             (accordion)
│   ├── contact
│   │   └── page.tsx             (contact form)
│   ├── privacy
│   │   └── page.tsx             (policy)
│   └── terms
│       └── page.tsx             (policy)
├── api
│   ├── forms
│   │   ├── inspection.ts        (POST inspection request)
│   │   ├── emergency.ts         (POST emergency contact)
│   │   └── quote.ts             (POST quote request)
│   └── health.ts                (GET health check)
├── components
│   ├── layout
│   │   ├── Header.tsx
│   │   ├── Footer.tsx
│   │   ├── MobileBottomNav.tsx
│   │   └── ThemeSwitcher.tsx
│   ├── sections
│   │   ├── HeroSection.tsx
│   │   ├── TrustSignalStrip.tsx
│   │   ├── ServiceGrid.tsx
│   │   ├── ProjectGallery.tsx
│   │   ├── MaterialComparison.tsx
│   │   ├── FinancingStrip.tsx
│   │   └── CTABand.tsx
│   ├── forms
│   │   ├── InspectionRequestForm.tsx
│   │   ├── EmergencyContactForm.tsx
│   │   └── QuoteRequestForm.tsx
│   ├── cards
│   │   ├── ServiceCard.tsx
│   │   ├── ProjectCard.tsx
│   │   ├── MaterialCard.tsx
│   │   └── TestimonialCard.tsx
│   └── shared
│       ├── Button.tsx
│       ├── Badge.tsx
│       ├── Icon.tsx
│       └── ...
├── lib
│   ├── hooks
│   │   ├── useReducedMotion.ts
│   │   ├── useTheme.ts
│   │   └── useIsMobile.ts
│   ├── sanity.ts              (CMS client)
│   ├── analytics.ts
│   ├── types.ts               (shared types)
│   └── utils.ts
└── public
    ├── images
    │   ├── hero
    │   ├── projects
    │   ├── team
    │   └── ...
    ├── icons
    │   ├── services
    │   ├── materials
    │   └── ...
    └── ...
```

---

## File Output Inventory

### Required artifacts (this bundle)
```
roofing-mvp-2026-05-07/planning/frontend/
├── README.md                           ← human-first index
├── ai-context.yaml                     ← AI-first navigation
├── brief.json                          ← intake output (locked)
├── master-ui-architecture.md           ← this file
├── design-system.md                    ← color, typography, spacing, tokens
├── design-system.tokens.json           ← machine-readable design tokens
├── component-system.md                 ← component index
├── components/
│   ├── Button.md
│   ├── Hero.md
│   ├── ServiceCard.md
│   ├── ProjectCard.md
│   ├── MaterialCard.md
│   ├── Form.md
│   ├── Header.md
│   ├── Footer.md
│   ├── MobileBottomNav.md
│   └── ThemeSwitcher.md
├── motion-system.md                    ← animation catalog
├── content-library.md                  ← all visible strings keyed
├── content.en-US.json                  ← machine-readable content
├── interaction-matrix.md               ← hover / click / form / scroll behaviors
├── visual-differentiation-map.md       ← per-route visual deltas
├── pages/
│   ├── home.md                         ← design brief (outcomes + slots)
│   ├── services.md
│   ├── service-detail.md
│   ├── storm-damage.md
│   ├── materials.md
│   ├── projects.md
│   ├── financing.md
│   ├── contact.md
│   ├── faq.md
│   ├── about.md
│   ├── areas.md
│   ├── area-detail.md
│   └── legal.md
├── visual-reference-pack.md            ← hero/mobile/asset direction
└── frontend.json                       ← machine-readable summary + validation
```

---

## AI Consumption Guidance

**For frontend_developer:**
1. Start with `design-system.md` to set up Tailwind config + CSS vars.
2. Build shared components per `component-system.md` (atoms first, then molecules, organisms).
3. For each page route, read `pages/<route>.md` for outcomes and required slots; interpret as design guidance (not DOM prescription).
4. Use `motion-system.md` as the animation spec; check `interaction-matrix.md` for per-component behaviors.
5. Pull all visible strings from `content.<locale>.json`; never hardcode copy.
6. Reference `visual-reference-pack.md` for hero / mobile composition intent.

**For QA:**
1. Use `visual-differentiation-map.md` to spot visual inconsistencies between routes.
2. Cross-check `component-system.md` state matrix against implemented components.
3. Verify all animations have reduced-motion fallback (test via browser settings or `prefers-reduced-motion` media query).
4. Validate form error recovery per `interaction-matrix.md`.

**For stakeholder reviews:**
1. Read `README.md` for quick orientation.
2. Skim `pages/home.md` to see primary user outcomes.
3. Check `visual-reference-pack.md` for hero and mobile wireframes.
4. Review `content-library.md` for actual copy (not placeholder Lorem).

---

## Validation Checklist

- [ ] All 7 pages have ≥ 5 sections (home ≥ 7).
- [ ] Every visible string is a content-library key (no inline copy).
- [ ] Every component state declared in component-state-matrix.
- [ ] Hero has full-bleed background, text reveal animation, trust chips, and CTA.
- [ ] Dark theme defined with all CSS vars in `[data-theme="dark"]` block.
- [ ] ThemeSwitcher and MobileBottomNav declared in header + mobile nav.
- [ ] Every animation has reduced-motion fallback.
- [ ] All trust signals (license, insurance, years, areas, reviews, response-time) placed per archetype.
- [ ] No raw color / spacing / motion / radius values in specs (all tokens).
- [ ] Form error recovery preserves user input; success state confirmed.
- [ ] Footer attribution from brief propagated to footer spec.
- [ ] WCAG 2.1 AA contrast verified for all fg/bg pairings.
- [ ] Mobile parity: no hover-only discovery patterns.
- [ ] Visual differentiation map confirms unique composition per HIGH/MEDIUM latitude route.

---

**Next Steps:**
- Design System Planner creates `design-system.md` and `design-system.tokens.json`.
- Component System Planner creates component specs in `components/` folder.
- Motion Planner creates `motion-system.md`.
- Content Planner creates `content-library.md` and `content.en-US.json`.
- Page Planner creates page briefs in `pages/` folder.
- Visual Reference Planner creates `visual-reference-pack.md`.
- QA validates against constraints F1..F12, AC1..AC12.
- Frontend developer implements per final spec.
