# Master UI Architecture — SunEnergy Pro

**Project:** SunEnergy Pro Solar Installation Website  
**Version:** 1.0  
**Status:** PLANNED  
**Date:** 2026-05-11

---

## 1. Product Intent & Experience Direction

### Core Intent
SunEnergy Pro is a premium local solar installation company website designed as a **lead-generation engine** that builds trust through portfolio proof, customer testimonials, and expert certifications while providing multiple frictionless conversion paths (contact form, WhatsApp, phone, lead magnets).

### Experience Direction
- **Confidence + Accessibility:** Professional expertise presented in accessible, non-technical language.
- **Trust-First:** Every surface prioritizes credibility signals (portfolio, certifications, customer reviews, years in business).
- **Mobile-Native:** Optimized for mobile users who research solar on-the-go; sticky contact CTAs on all screens.
- **Lead Funnel Clarity:** Clear progression from awareness (education) → consideration (portfolio, testimonials) → decision (contact, calculator, financing).
- **Conversion Infrastructure:** Multiple pathways to lead capture, not single-funnel gatekeeping.

### Target Audience Segments
1. **Homeowner Researchers (45-65):** Desktop-first, research-heavy, convert via form or phone.
2. **Young Professionals (25-40):** Mobile-first, quick-decision, convert via WhatsApp or quick contact.
3. **Commercial Buyers (35-55):** Desktop-heavy, ROI-focused, convert via calculator or deep case studies.
4. **Budget-Conscious Decision-Makers:** Financing page is critical; ROI calculator is key educational tool.

---

## 2. Experience Principles

**P1 — Lead Generation is Paramount**  
Every page, section, and interaction must ladder up to lead capture. No fluff; every element serves conversion or trust-building.

**P2 — Trust Through Proof**  
Portfolio, certifications, customer reviews, and metrics are not decoration—they are the primary credibility mechanism. No assertions without evidence.

**P3 — Mobile + Desktop Parity**  
Contact CTAs (WhatsApp, phone, form) are equally discoverable on mobile and desktop. Bottom nav on mobile; header + sidebar on desktop.

**P4 — Frictionless Contact**  
Users should never wait more than 2 taps to reach a contact mechanism. Phone + WhatsApp visible on every page.

**P5 — Education Reduces Friction**  
Prospect skepticism is addressed through education (ROI calculator, financing explainer, FAQ, blog). An educated lead is a qualified lead.

**P6 — Local Trust Signals**  
Service area map, local certifications, community involvement, local testimonials, Google Business integration build local credibility.

---

## 3. Core User Journeys

### Journey 1: Awareness → Portfolio → Contact (Trust-Building Path)
```
Home (hero, value prop)
  ↓
[Browse portfolio]
Portfolio Gallery (see proof of capability)
  ↓
[Impressed by case study]
Specific Case Study (deep-dive, metrics, ROI)
  ↓
[Convinced, ready to talk]
Contact Page (form, phone, WhatsApp)
  ↓
Lead Captured → Sales Follow-up
```

**Trigger:** High-confidence visual prospect (attracted by portfolio before committing to contact).  
**Conversion Point:** Contact form, phone call, or WhatsApp message.

---

### Journey 2: Education → ROI Clarity → Lead Magnet (Calculator Path)
```
Home or Blog (awareness)
  ↓
[Want to know savings potential]
Financing Page + ROI Calculator (enter details, instant estimate)
  ↓
[Results shock them positively]
Lead Magnet: "Get Detailed Assessment" (email capture)
  ↓
Sales Follow-up with personalized quote
```

**Trigger:** ROI curiosity; user self-qualifies via calculator.  
**Conversion Point:** Lead magnet email capture; lead routed to sales team.

---

### Journey 3: Quick Contact → Instant Conversion (Mobile-First Path)
```
[Mobile user browsing home or services]
[Sees sticky header: "Chat Now" button]
WhatsApp/Call CTA
  ↓
Instant connection to live support
  ↓
Qualification call or WhatsApp conversation
  ↓
Booked consultation or site survey
```

**Trigger:** Mobile user, urgent need, low friction preference.  
**Conversion Point:** Direct call or WhatsApp message.

---

### Journey 4: Deep Credibility Building (Enterprise/Commercial Path)
```
[Commercial buyer, high budget, needs certainty]
Home (trust badges, metrics)
  ↓
Certifications & Warranties (compliance assurance)
  ↓
Team & Expert Profiles (credibility of people)
  ↓
Case Studies (similar projects, proven results)
  ↓
[Confidence built over multiple visits]
Contact Page or Proposal Request
```

**Trigger:** High-value prospect, research-heavy, multiple touchpoints.  
**Conversion Point:** Contact form with proposal request, not quick call.

---

## 4. Site Map

```
ROOT (/)
├── Home
├── SERVICES
│   ├── Services Hub
│   ├── Service Detail Routes (dynamic)
│   └── Solar Calculator (lead magnet)
├── PORTFOLIO & PROOF
│   ├── Portfolio Gallery
│   ├── Case Studies Hub
│   ├── Case Study Detail Routes (dynamic)
│   └── Customer Testimonials
├── COMPANY & TRUST
│   ├── About Company
│   ├── Team & Experts
│   ├── Certifications & Warranties
│   └── News & Updates
├── EDUCATION & NURTURE
│   ├── Blog Hub
│   ├── Blog Post Detail Routes (dynamic)
│   ├── Resources Library
│   ├── FAQ
│   └── Financing & ROI Guide
├── CONTACT & CONVERSION
│   ├── Contact Page (form + map + hours)
│   ├── Free Solar Assessment (lead magnet)
│   ├── Service Area Locator
│   └── Schedule Consultation
└── LEGAL & INFRASTRUCTURE
    ├── Privacy
    ├── Terms
    ├── Accessibility
    └── Cookie Management
```

---

## 5. Global Navigation Model

### Desktop (>= 1024px)
```
┌─ HEADER ──────────────────────────────────────────┐
│ [Logo] [Home|Services|Portfolio|Financing|Contact] │
│                    [Social Icons] │ Theme │ [Call|WhatsApp]
└────────────────────────────────────────────────────┘
```

**Header Behavior:**
- At top of hero: Semi-transparent, dark text with backdrop blur (if light hero background).
- On scroll down: Solid background, elevated shadow, sticky.
- On scroll up: Reveal with smooth entrance animation.
- CTAs: Phone icon (click-to-call) + WhatsApp icon (opens WhatsApp link) always visible on right.

### Mobile (< 1024px)
```
┌─ HEADER ──────────────────────────────────────────┐
│ [Logo]              [Menu Icon] [Theme] [Call/WhatsApp]
└────────────────────────────────────────────────────┘

CONTENT AREA

┌─ MOBILE BOTTOM NAV ────────────────────────────────┐
│ [Home] [Services] [Portfolio] [Contact] [More ...] │
│  icon    icon       icon        icon      icon    │
│  label   label      label       label     label   │
└────────────────────────────────────────────────────┘
```

**MobileBottomNav Tabs:**
1. **Home:** / (index)
2. **Services:** /services (main service hub)
3. **Portfolio:** /portfolio (before/after, case studies)
4. **Contact:** /contact (form, map, phone, WhatsApp)
5. **More:** /faq, /about, /financing (overflow menu)

**Mobile Menu (Hamburger):**
Drawer slides from top or left with full navigation tree, lead capture CTA at top of drawer.

### Tablet (1024px - 1440px)
Hybrid approach: Sticky header with full nav + abbreviated MobileBottomNav (3 critical tabs).

---

## 6. Global Layout System

### Breakpoints & Viewport Tiers
```
Mobile:   < 640px   (sp) — single column, full-width
Tablet:   640-1024px (tb) — 2-3 column, padded
Desktop:  >= 1024px (dk) — full-width, max-width container
```

### Container Constraints
- **Fluid:** 100vw (full bleed for heroes, backgrounds)
- **Content:** max-width: 1280px (desktop reading comfort)
- **Narrow:** max-width: 728px (blog, form content)
- **Safe Margins:** 16px (mobile), 24px (tablet), 32px (desktop)

### Grid System
- **Mobile:** 1 column (full-width content)
- **Tablet:** 2-3 column grid with 16px gaps
- **Desktop:** 12-column grid with 24px gaps, 3-4 major sections per row

### Typography Scale (Rem-based)
```
H1: 2.5rem (desktop), 1.875rem (mobile)
H2: 2rem (desktop), 1.5rem (mobile)
H3: 1.5rem (desktop), 1.25rem (mobile)
Body: 1rem (consistent across breakpoints)
Caption: 0.875rem
```

### Spacing Scale (Tokens)
```
xs:  4px
sm:  8px
md:  16px
lg:  24px
xl:  32px
2xl: 48px
3xl: 64px
```

---

## 7. Shared Conversion Infrastructure

### Lead Capture Points (Priority Order)

**1. Hero CTA (Primary)**
- On every page hero: Prominent button "Get Free Solar Assessment" or "Schedule Consultation"
- Below fold: Secondary CTA "Explore Services" or contextual action
- Mobile sticky header: "Book Now" or "Chat with Expert"

**2. Sticky Contact Strip (Always Visible)**
- Mobile: Fixed bottom sticky bar with phone icon (click-to-call) + WhatsApp icon (WhatsApp intent)
- Desktop: Sidebar widget (right, >= 1024px) with "Let's Talk" CTA + contact info

**3. Contact Page Infrastructure**
- **Primary form:** Multi-step contact form (name, email, phone, property details, preferred contact method)
- **Auto-advance:** After first step (email capture), show remaining steps (no hard exit)
- **Contact options:** Phone, WhatsApp, email, live chat widget (if available)
- **Map:** Service area map with zip code lookup
- **Hours:** Current status (open/closed), hours display, emergency contact

**4. Lead Magnet Routes**
- **Free Solar Assessment Tool:** Step-by-step questionnaire → instant results → email capture
- **ROI Calculator:** Enter zip code + details → see savings estimate → qualify lead
- **Book Consultation:** Calendar link (Calendly integration) for scheduling site surveys

**5. Exit-Intent Modal** (Optional, desktop only)
- Triggered on page exit intention (mouse leaving viewport)
- Content: "Don't miss your solar savings!" + special offer or free assessment CTA
- Cookie: Don't show again for 24 hours per user

### WhatsApp + Phone Integration (All Routes)

**Phone Integration:**
- `<a href="tel:+1-555-766-2576">` for click-to-call on mobile
- Desktop: Display number as plain text + messaging copy ("Call us at...")

**WhatsApp Integration:**
- `<a href="https://wa.me/15557662576?text=Hi%20I%27d%20like%20more%20info%20about%20solar">` opens WhatsApp chat
- Mobile: Green WhatsApp button, desktop: Link with WhatsApp icon
- Pre-filled message: "Hi SunEnergy Pro, I'd like more information about solar installation."

**Button Placement:**
- Header (both): Phone icon + WhatsApp icon, always visible
- Hero CTA band: "Call Us" + "Message on WhatsApp" dual CTAs
- Contact page: Prominent section with all three methods (form, phone, WhatsApp)
- Mobile bottom bar: Phone icon (call), WhatsApp icon (message) in header

---

## 8. Frontend Visual Strategy

### Design System Direction
- **Color Authority:** Warm golden primary (#f59e0b), teal secondary (#0f766e) — solar warmth + environmental trust
- **Motion Temperament:** Measured, confident — smooth entrances, strategic reveals, no jitter
- **Surface Language:** Layered cards, trust badges on dark pills, gradient overlays on media
- **Typography:** Legible, warm serif (brand story) + modern sans-serif (data)
- **Imagery:** Real solar installations, customer homes, team expertise, not stock generic

### Theme Infrastructure (Mandatory)
- **Light Theme:** Bright background (#f8fafc), dark text, golden accents
- **Dark Theme:** Dark background (#04151f), light text, golden/orange accent tones
- **Theme Switcher:** Header-mounted toggle (light/dark icons), localStorage persistence, `prefers-color-scheme` initial fallback
- **CSS Variable Authority:** All token values in `:root` light block and `[data-theme="dark"]` block

### Hero Composition Standards (All Pages)
- **Layout:** Full-bleed (100vw), min-height: 100svh or 80vh (mobile: 60vh)
- **Text Reveal:** Staggered entrance per word, `useReducedMotion()` fallback to instant
- **Trust Chips:** Dark pills (rgba(0,0,0,0.6)) + white text, 4:5.1 WCAG AA contrast minimum
- **Gradient Overlay:** 50%+ coverage behind text, opacity >= 0.55
- **Subtitle Max-Width:** 60ch, never clip
- **CTA Visibility:** Primary button at fold line, secondary below

---

## 9. Route Map

```
URL Path                    Component Tree              Lead Gen Role
────────────────────────────────────────────────────    ──────────────
/                           Home                        PRIMARY
/services                   Services Hub                SECONDARY
/services/[id]              Service Detail              SECONDARY
/portfolio                  Portfolio Gallery           PRIMARY
/case-studies               Case Studies Hub            SECONDARY
/case-studies/[id]          Case Study Detail           SECONDARY
/testimonials               Testimonials Carousel       SECONDARY
/about                      About Company               SECONDARY
/team                       Team Profiles               SECONDARY
/certifications             Certs & Warranties          SECONDARY
/news                       News & Updates              TERTIARY
/blog                       Blog Hub                    SECONDARY
/blog/[slug]                Blog Post                   SECONDARY
/resources                  Resource Library            TERTIARY
/financing                  Financing & ROI             SECONDARY
/faq                        FAQ Accordion               SECONDARY
/free-assessment            Assessment Lead Magnet      PRIMARY
/solar-calculator           ROI Calculator Tool         PRIMARY
/service-area               Service Area Locator        SECONDARY
/contact                    Contact Form + Map          PRIMARY
/schedule                   Consultation Booking        PRIMARY
/privacy                    Privacy Policy              INFRASTRUCTURE
/terms                      Terms of Service           INFRASTRUCTURE
/accessibility              A11y Statement             INFRASTRUCTURE
/cookies                    Cookie Management          INFRASTRUCTURE
/404                        Not Found Page             INFRASTRUCTURE
/500                        Server Error Page          INFRASTRUCTURE
```

---

## 10. Shared Component Catalog

### Global Components (All Routes)
- **Header/Topbar:** Logo, nav, social icons, theme switcher, call/WhatsApp CTAs
- **MobileBottomNav:** Icon tab bar (5 tabs)
- **Footer:** Info columns, social row, copyright, attribution
- **Toast/Notifications:** Form success, lead tracking confirmation
- **Modal Infrastructure:** Gallery lightbox, video modal, lead capture modal
- **Breadcrumb:** For nested routes (blog, case studies)
- **Search Bar:** For blog, resources, service locator

### Recurring Molecules
- **Trust Badge Pill:** Dark background, white text, icon + label (e.g., "NABCEP Certified")
- **Metric Card:** Large number + supporting label (e.g., "15,000+ Installations")
- **Service Card:** Icon + title + description + CTA (used in services hub)
- **Portfolio Card:** Image + before/after slider + overlay CTA
- **Testimonial Card:** Quote + customer name/photo + rating stars
- **FAQ Item:** Question + answer accordion, search-friendly
- **Blog Card:** Featured image + title + excerpt + read time + author
- **Calculator Result Panel:** Prominent result display + lead capture CTA

### Page-Specific Organisms
- **Hero Banner:** Full-bleed, text reveal, trust chips, CTA band
- **Services Showcase:** Grid of service cards, comparison table, ROI explainer
- **Portfolio Gallery:** Masonry or grid layout, before/after sliders, video embeds
- **Contact Form:** Multi-step (email → details → preferred contact → submit)
- **Map + Hours Strip:** Service area map, current status, hours, emergency contact
- **Testimonials Carousel:** Auto-rotating, keyboard-accessible, pause on hover
- **Calculator Interface:** Step-by-step form, animated results display, lead capture
- **Team Grid:** Team member cards, click-to-expand bios, credentials

---

## 11. Shared State Requirements

### Global States
- **Auth:** Not required (no_auth: true)
- **Theme:** Light | Dark (localStorage + `prefers-color-scheme`)
- **Locale:** en-US (initial; extensible)
- **Toast Queue:** Lead form success, error states, tracking confirmation

### Route-Level States
- **Loading:** Skeleton screens for portfolios, case studies, blog posts
- **Error:** Fallback UI for failed data fetches, image load failures
- **Empty:** Empty state when no results match (filtered blog, search with no results)
- **Network Offline:** Cached content fallback, offline indicator, retry mechanism

### Form States (Contact, Calculator, Assessment)
- **Pristine:** Initial empty form
- **Validating:** Checking inputs (email format, phone format)
- **Submitting:** Loading spinner, disable submit button
- **Success:** Confirmation message, lead capture confirmed, CTA to next step
- **Error:** Field-level errors, generic error fallback, retry mechanism

---

## 12. Motion Posture

### Motion Temperament: Measured + Confident
- **Duration Base:** 300ms-500ms for section reveals, 150ms-250ms for micro-interactions
- **Easing:** Ease-in-out for entrances, ease-out for exits (natural motion feel)
- **Choreography:** Staggered reveals per section, not all at once (prevents overwhelming)
- **Reduced Motion Fallback:** All animations disabled, instant state changes
- **Restricted Motion:** No infinite loops, no auto-playing videos on page load

### Macro Animations (Section-Level)
- **Hero Text Reveal:** Per-word or per-line stagger, fade + slide entrance
- **Portfolio Gallery Entrance:** Staggered image reveals, 40ms-60ms stagger between items
- **Testimonials Carousel:** Cross-fade transitions between cards, 300ms duration
- **Form Multi-Step:** Slide entrance for each step (left-to-right), 250ms duration
- **Calculator Results:** Animated number count-up to final result, 800ms total

### Micro-Animations (Component-Level)
- **Button Hover:** Slight scale (1.02-1.05) + color shift, 150ms
- **Card Hover:** Shadow elevation + slight lift, 200ms ease-out
- **Input Focus:** Border color change, underline animation, 150ms
- **Chip/Badge Interaction:** Click feedback (pulse or scale), 100ms
- **Icon Animations:** Rotating arrows, animated checkmarks (for form validation)

---

## 13. Accessibility Posture

### Landmarks & Skip Links
- **Main:** `<main id="content">` wraps all page-specific content
- **Nav:** `<nav aria-label="Primary navigation">` for header
- **Region:** `<section aria-labelledby="heading">` for each major section
- **Skip Link:** "Skip to main content" link at top, keyboard-only visible

### Heading Outline (All Routes)
- **H1:** Page title (one per page)
- **H2:** Section titles (5-7 per page)
- **H3:** Subsection titles (in FAQ, blog, service details)
- **Skipped Levels:** Never skip from H1 → H3

### Keyboard Navigation
- **Tab Order:** Logical flow left-to-right, top-to-bottom
- **Focus Visible:** 3px outline, 4:5.1 contrast against background
- **Link Targets:** `<a href="...">` with descriptive text, no generic "click here"
- **Form Fields:** Label associated via `<label for="id">`, required marked with `aria-required="true"`
- **Modals:** Focus trap, initial focus on primary button, escape key closes

### Motion Accessibility
- **prefers-reduced-motion:** All animations disabled, instant state transitions
- **autoplay:** Carousel pauses on focus or hover, manual controls always available
- **Video:** Captions required, autoplay disabled

### Contrast Standards (WCAG 2.1 AA)
- **Body Text:** >= 4.5:1 against background (black/white, dark/light modes)
- **Large Text:** >= 3:1 against background (headings, CTAs)
- **Trust Chips:** Dark pill (rgba(0,0,0,0.6)) on light background = ~6:1 contrast ✓
- **Icons:** Icons with text don't need independent contrast; text + icon combo >= 4.5:1

### Color & Labeling
- **Color + Icon:** Never rely on color alone for meaning (icons + text always paired)
- **Form Errors:** Red border + error icon + error text message (not red alone)
- **Status Indicators:** Icon + text + aria-live region for dynamic updates

---

## 14. Localization Posture

### Content Strategy
- **Supported Locales:** en-US (primary), es-ES (optional), fr-FR (optional)
- **Content Keys:** All visible strings keyed in `content.<locale>.json`
- **RTL Support:** Not required initially; extensible architecture allows RTL toggle
- **Date/Time Formatting:** Locale-aware date strings, timezone detection for hours/availability
- **Phone Numbers:** E.164 format for WhatsApp links, display-friendly format for UI

### Technical Implementation
- **i18n Library:** next-intl or similar for Next.js
- **Routing:** `/en/...`, `/es/...`, `/fr/...` (or subdomain-based)
- **Default Locale:** en-US, with 302 redirect or automatic detection
- **Namespace Organization:** Pages, components, common (shared across routes)

---

## 15. Implementation Stack

### Frontend Framework
- **Runtime:** Next.js 14+ (App Router)
- **UI Components:** Shadcn/ui (composable, accessible base components)
- **Styling:** Tailwind CSS (utility-first, design tokens layer)
- **Motion:** Framer Motion (orchestration) + CSS transitions (micro-animations)
- **Icons:** Lucide React (consistent iconography)
- **Forms:** React Hook Form + Zod (validation, type-safe)
- **State:** React Context API (theme, locale, lead tracking) + URL search params (filters)
- **Charts/Data:** Recharts (ROI calculator visualization)
- **Map:** Google Maps Embed or Mapbox (service area display)
- **Rich Editor:** Slate or Tiptap (if content team edits blog, resources)
- **CMS Integration:** Contentful or Sanity (blog posts, case studies, team bios)

### Build & Deployment
- **Build Tool:** Next.js built-in (webpack)
- **Package Manager:** pnpm (lockfile consistency)
- **Deployment:** Vercel (Next.js native, automatic staging)
- **CDN:** Vercel Edge (automatic)
- **Image Optimization:** Next.js Image component (automatic srcset, AVIF/WebP)
- **Analytics:** Google Analytics 4 (lead tracking, conversion funnels)

### External Integrations
- **Email Service:** Resend or SendGrid (lead capture email templates)
- **WhatsApp:** Business API or standard link (messaging)
- **Phone:** Twilio (optional, for advanced call routing)
- **Calendar:** Calendly embed (scheduling)
- **Google Business:** Profile integration (reviews, hours, service area)
- **CRM:** HubSpot or Pipedrive (lead routing, nurture workflows)

---

## 16. File Output Inventory

### Planning Output Directory
```
DOC/output/runs/2026-05-11-solar-installer/planning/frontend/
├── README.md                          # Human-first index
├── ai-context.yaml                    # AI navigation guide
├── brief.json                         # Locked project brief
├── master-ui-architecture.md          # THIS FILE
├── site-inventory.md                  # Route classification
├── design-system.md                   # Design tokens & rules
├── design-system.tokens.json          # Machine-readable tokens
├── component-system.md                # Component index
├── components/                        # Component specs
│   ├── Header.md
│   ├── Footer.md
│   ├── MobileBottomNav.md
│   ├── Hero.md
│   ├── ServiceCard.md
│   ├── PortfolioCard.md
│   ├── TestimonialCard.md
│   ├── ContactForm.md
│   ├── ROICalculator.md
│   ├── FAQAccordion.md
│   └── ... (20+ total)
├── motion-system.md                   # Motion spec, timing, reduced-motion
├── content-library.md                 # Content key index
├── content.en-US.json                 # All visible strings
├── interaction-matrix.md              # Hover/click/form behaviors
├── visual-differentiation-map.md      # Route visual deltas
├── pages/                             # Per-route design briefs
│   ├── home.md
│   ├── services.md
│   ├── portfolio.md
│   ├── contact.md
│   ├── about.md
│   ├── testimonials.md
│   ├── financing.md
│   ├── free-assessment.md
│   ├── team.md
│   ├── certifications.md
│   ├── blog.md
│   ├── resources.md
│   ├── faq.md
│   └── ... (19 total)
├── visual-reference-pack.md           # Hero / mobile / asset direction
└── frontend.json                      # Machine-readable summary, lock status

### Implementation Output Directory (after dev execution)
```
<project_root>/
├── app/
│   ├── layout.tsx                     # Root layout (header, footer, nav)
│   ├── page.tsx                       # Home page
│   ├── (marketing)/
│   │   ├── services/page.tsx
│   │   ├── portfolio/page.tsx
│   │   ├── contact/page.tsx
│   │   └── ... (routes)
│   ├── (legal)/
│   │   ├── privacy/page.tsx
│   │   ├── terms/page.tsx
│   │   └── accessibility/page.tsx
│   └── api/
│       ├── contact/route.ts           # Lead form submission
│       ├── assessment/route.ts        # Assessment tool submission
│       └── webhooks/route.ts          # External integrations
├── components/
│   ├── global/
│   │   ├── Header.tsx
│   │   ├── Footer.tsx
│   │   ├── MobileBottomNav.tsx
│   │   └── ThemeSwitcher.tsx
│   ├── sections/
│   │   ├── HeroSection.tsx
│   │   ├── ServicesGrid.tsx
│   │   ├── PortfolioGallery.tsx
│   │   └── ... (20+ sections)
│   └── ui/
│       ├── Button.tsx
│       ├── Card.tsx
│       ├── Modal.tsx
│       └── ... (Shadcn base components)
├── lib/
│   ├── constants.ts                   # Brand colors, URLs, etc.
│   ├── content.ts                     # Content key resolver
│   ├── tracking.ts                    # Analytics events
│   └── utils.ts
├── public/
│   ├── images/                        # Hero images, portfolio photos
│   ├── icons/                         # SVG icon sprite or individual files
│   └── fonts/                         # Typeface files
├── styles/
│   ├── globals.css                    # Tailwind imports, CSS variables
│   ├── variables.css                  # Design tokens (light + dark theme)
│   └── animations.css                 # Motion definitions
├── content/
│   ├── en-US.json                     # Content library (all strings)
│   └── es-ES.json                     # Spanish locale (optional)
├── config/
│   ├── site.config.ts                 # Brand name, social links, URLs
│   ├── navigation.config.ts           # Nav structure, links
│   └── integrations.config.ts         # API keys, endpoints
├── next.config.js
├── tailwind.config.js
├── tsconfig.json
├── package.json
└── README.md
```

---

## 17. Developer Environment Contracts

### Runtime Root Declaration
- **Frontend Root:** `/` (workspace root runs Next.js dev server)
- **Install Command:** `pnpm install` (workspace root)
- **Dev Command:** `pnpm dev` (from workspace root, runs `next dev`)
- **Build Command:** `pnpm build` (from workspace root, runs `next build`)
- **Validation:** Smoke test routes listed in `dev-server-checklist.md`

### Dev Server SOP Contract
**File: `dev-server-checklist.md`** (auto-generated by frontend_developer)

Required sections:
1. **Installation Steps** — prerequisites, package setup
2. **Environment Setup** — .env.local template with required keys (API endpoints, integrations)
3. **Dev Server Startup** — `pnpm dev`, expected port (typically 3000)
4. **Hot Reload Validation** — test HMR by editing a component
5. **Local URL** — `http://localhost:3000`
6. **Smoke Test Routes** (must be accessible):
   - `/` — Home page loads with hero visible
   - `/services` — Services hub loads with cards
   - `/portfolio` — Portfolio gallery loads with images
   - `/contact` — Contact form visible, WhatsApp/phone links functional
   - `/faq` — FAQ accordion expands/collapses
   - `/blog` — Blog post list or first blog post loads
   - `/pricing` or `/financing` — ROI calculator interactive
7. **Theme Toggle** — Theme switcher works, localStorage persists
8. **Mobile Viewport** — DevTools responsive mode shows MobileBottomNav
9. **Form Submission** — Contact form prefill, validation, error states work (no backend required for smoke test)
10. **Analytics** — GA4 events fire (check console or GA dashboard)
11. **Accessibility** — Headings outline valid (H1→H2→H3), keyboard nav works (Tab through links)
12. **Performance** — LCP < 2.5s on home route (lighthouse)

### Export Portability Contract
**File: `export-portability.md`** (auto-generated by frontend_developer)

If the project is copied to a new workspace:
1. **Copy These Files:**
   - `/app` (all Next.js routes + layouts)
   - `/components` (all React components)
   - `/public` (images, fonts, icons)
   - `/styles` (CSS, design tokens)
   - `/content` (i18n strings)
   - `/lib` (utilities, constants)
   - `next.config.js`, `tailwind.config.js`, `tsconfig.json`, `package.json`

2. **Update These Files:**
   - `.env.local` — populate with new API keys, endpoints
   - `config/site.config.ts` — update brand name, URLs, business contact info
   - `content/<locale>.json` — update company-specific copy

3. **Validation Steps:**
   - `pnpm install` (reinstall dependencies)
   - `pnpm dev` (start dev server)
   - Verify homepage loads at `http://localhost:3000`
   - Test contact form (may route to dummy endpoint)
   - Verify theme switcher toggles light/dark
   - Verify MobileBottomNav appears on mobile breakpoint

4. **Known Dependencies:**
   - Node.js >= 18.17
   - pnpm (or npm/yarn as fallback)
   - Vercel deployment (recommended; alternative: Docker containerization)

---

## 18. AI Consumption Guidance

### For Code Generation (frontend_developer)
- Consume all files in this directory in order: brief → site-inventory → master-ui-architecture → design-system → component-system → motion-system → content-library → interaction-matrix → pages/*.md → visual-reference-pack
- For each route, read its corresponding `pages/<route>.md` for full scope before implementation
- All component specs are in `components/*.md`; implement to spec exactly
- Design tokens are non-negotiable; reference `design-system.tokens.json` for every color, spacing, radius, shadow value
- Content keys are in `content.en-US.json`; use keys, never hardcode text
- Motion timings and reduced-motion fallbacks are in `motion-system.md`; implement every animation listed
- Accessibility requirements are distributed across `master-ui-architecture.md` and per-component specs

### For Backend Integration (backend_planner)
- Consume `brief.json` for business context
- Consume page specs (`pages/*.md`) for each route's data needs, form validation rules, API contracts
- Consume `interaction-matrix.md` for form submission flows, validation rules, error states
- Consume component specs for schema shape expectations (e.g., testimonial shape, portfolio item shape)
- Lead capture endpoints: `/api/contact`, `/api/assessment`, `/api/subscribe` (spec to follow from backend_planner)

### For QA / Testing
- Reference `site-inventory.md` for route count and classification
- Reference `frontend.json` for artifact count and constraint pass/fail status
- Reference `per-page-spec` for each route's minimum section density (>= 5 sections, home >= 7)
- Reference `component-system.md` for component state matrix coverage

---

## 19. Lock Status

**Status:** PLANNED  
**Frozen At:** 2026-05-11  
**Ready For:** Phase 2 (Design System)

All dependencies resolved. Ready for:
- Design token materialization (Phase 2)
- Component system spec (Phase 3)
- Per-page briefs (Phase 7)
- Implementation (frontend_developer)

