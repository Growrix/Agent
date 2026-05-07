# Component System — Roofing MVP

**Status:** PLANNED | **Timestamp:** 2026-05-07 | **Archetype:** local-business-trust

---

## Overview

Complete specification of all shared components (atoms, molecules, organisms) used across the roofing platform. Every component declares its variants, states, accessibility requirements, responsive behavior, motion, and content keys.

---

## Atoms

### Button

**Purpose:** Primary interactive affordance for calls-to-action (inspection request, contact, material info).

**Variants:**
- `primary` — navy background, white text, warm accent on hover
- `accent` — warm accent background, text-primary, darker accent on hover
- `secondary` — bordered navy, navy text, light background on hover
- `tertiary` (text-only) — navy text, subtle background on hover
- `destructive` — red background, white text, darker red on hover

**States:**
- `default` — normal appearance
- `hover` — color shift, shadow-base (desktop only)
- `active` — darker color
- `disabled` — gray background, gray text, cursor not-allowed
- `loading` — spinner overlay, disabled state

**Accessibility:**
- `role="button"` or semantic `<button>` element
- Focusable via Tab; visible focus outline (2–3px, contrast ≥ 3:1)
- `aria-disabled="true"` when disabled
- `aria-label` for icon-only buttons
- Text label visible or accessible (min 10px for mobile, 14px for desktop)
- Minimum 48px height on mobile, 40px on desktop

**Responsive:**
- Mobile: 100% width within containers; 48px height
- Desktop: inline width; 40px height
- Padding: 12px 24px (md × 1.5)

**Motion:**
- Hover: color transition 200ms ease-out
- Reduced motion: instant (no transition)

**Content keys:**
- `button.inspect_now`
- `button.emergency_contact`
- `button.request_quote`
- `button.learn_more`
- `button.contact_us`

### Input / Textarea

**Purpose:** Form field for user text entry.

**Variants:**
- `text` — standard text input
- `email` — email-specific input with type validation
- `tel` — phone input with tel type
- `textarea` — multiline text
- `number` — numeric input

**States:**
- `default` — border-light, white background, text-primary
- `focus` — border-primary-500, shadow-sm, outline-none
- `filled` — border-light, text-primary
- `disabled` — gray background, gray border, gray text
- `error` — red border, red text for error message, error background tint (1–2%)

**Accessibility:**
- Associated `<label>` via `for` attribute (explicit association)
- `aria-required="true"` for required fields
- `aria-describedby` linking to error or hint text
- Minimum 40px height for touch interaction
- Font size ≥ 16px to prevent iOS zoom on focus
- Keyboard navigation: Tab, Shift+Tab
- Enter submits form (for text inputs)

**Responsive:**
- Mobile: 100% width, 40px height, 16px padding
- Desktop: 100% width within container, 40px height, 16px padding

**Motion:**
- Focus: border color 200ms ease-out
- Reduced motion: instant

**Content keys:**
- `form.label.name`
- `form.label.email`
- `form.label.phone`
- `form.label.address`
- `form.placeholder.name`
- `form.hint.required`
- `form.error.required`
- `form.error.invalid_email`

### Badge

**Purpose:** Visual indicator for status, certification, trust signals (licensed, insured, response time).

**Variants:**
- `certification` — navy background, white text, checkmark icon
- `insurance` — green background, white text, shield icon
- `years` — amber background, text-primary, star icon
- `response` — blue background, white text, bolt icon
- `availability` — green background, white text
- `premium` — accent background, text-primary

**States:**
- `default` — full opacity
- `inactive` — 60% opacity, gray text

**Accessibility:**
- `aria-label` describing the badge meaning
- Sufficient contrast on background (tested against both light/dark)

**Responsive:**
- Mobile: 12px font, 8px 12px padding
- Desktop: 12px font, 10px 16px padding

**Motion:** None (static)

**Content keys:**
- `badge.licensed`
- `badge.insured`
- `badge.years_in_business`
- `badge.response_time`
- `badge.same_day`

### Icon

**Purpose:** Visual symbol for affordances, status, navigation.

**Variants:**
- `outline` — stroke-based (1.5–2px)
- `filled` — solid fill
- `service` (toolbox, hardhat, wrench, etc.)
- `status` (checkmark, error, warning, info)
- `navigation` (chevron, arrow, menu, close)
- `social` (Facebook, Instagram, LinkedIn, phone, email)

**Sizes:**
- `sm` — 16px
- `base` — 20px (standard inline)
- `lg` — 24px (UI elements)
- `xl` — 32px (hero badges)
- `2xl` — 40px (prominent display)

**Accessibility:**
- Decorative icons: `aria-hidden="true"`
- Semantic icons: `aria-label` or `title` attribute
- Icon buttons: accompanying text or `aria-label`

**Responsive:** Size scales with context (smaller on mobile when used inline).

**Motion:** Color transition on hover (inherited from parent).

**Content keys:** None (icons are visual-only).

### Text Link

**Purpose:** Inline navigation and hyperlink affordance.

**Variants:**
- `primary` — navy text, underline on hover
- `accent` — warm accent text, underline on hover
- `inline` — inherit color, underline on hover (for body copy)

**States:**
- `default` — navy or accent text
- `hover` — underline, cursor pointer
- `active` (visited) — primary-700 color, underline
- `focus` — visible outline

**Accessibility:**
- Semantic `<a>` element with href
- Visible focus indicator
- Link text descriptive (avoid "click here")
- `aria-current="page"` for active navigation link
- External links may have `target="_blank"` with `rel="noopener noreferrer"` and aria-label indicating external

**Responsive:** No change; inline everywhere.

**Motion:** Color transition 200ms ease-out on hover.

**Content keys:** Determined by link text (e.g., `nav.services`, `footer.privacy`).

### Divider

**Purpose:** Visual separator between sections.

**Variants:**
- `horizontal` — full-width line
- `vertical` — tall line for column separation

**States:** Single appearance; no interaction.

**Accessibility:** `aria-hidden="true"` (decorative).

**Responsive:** Adapts to container width/height.

**Motion:** None.

**Content keys:** None.

---

## Molecules

### Header

**Purpose:** Global navigation, branding, contact utility.

**Composition:**
- Logo + brand name (left)
- Nav menu (center, desktop; hamburger on mobile)
- Utility bar (phone, hours, contact CTA, theme switcher — right)

**States:**
- `transparent` — on hero, no background, semi-opaque on scroll
- `opaque` — full background color, full shadow on scroll
- `mobile-open` — drawer open, menu visible

**Accessibility:**
- `<header>` landmark
- `<nav>` for navigation menu
- Logo links to home; `aria-label` or `title` attribute
- Mobile menu: focus trap, Escape to close
- Skip-to-main link as first focusable element

**Responsive:**
- Desktop (≥ lg): horizontal menu, all utility visible, theme switcher right
- Mobile (< lg): hamburger menu icon, simplified utility, drawer nav
- Sticky: fixed top, z-index 8000

**Motion:**
- Scroll effect: opacity/shadow transition 200ms ease-out
- Mobile menu: slide from left 240ms ease-out, backdrop fade

**Content keys:**
- `header.home` (logo link text if text-only)
- `header.menu.*` (nav items)
- `header.contact_us` (CTA button)
- `header.hours` (business hours display)

### Footer

**Purpose:** Company info, legal links, secondary navigation, social.

**Composition (5 columns + bottom bar):**
- Column 1: Brand, phone, hours, address
- Column 2: Services (list of links)
- Column 3: Company (About, Blog, FAQ, Careers)
- Column 4: Legal (Privacy, Terms, Contact)
- Column 5: Social (icons, optional)
- Bottom bar: License number, areas served, © year, Footer Attribution link

**States:**
- `light` — white background on light theme
- `dark` — dark slate on dark theme

**Accessibility:**
- `<footer>` landmark
- All links have descriptive text
- Social icon links have `aria-label`
- Dense IA requires clear heading structure

**Responsive:**
- Desktop (≥ lg): 5-column grid, 24px column gap
- Tablet (md): 3-column grid
- Mobile (< sm): single column stack, 16px gaps

**Motion:** None (static section).

**Content keys:**
- `footer.hours`
- `footer.address`
- `footer.phone`
- `footer.license`
- `footer.areas_served`
- `footer.attribution` (from brief)
- All link texts (services, company, legal, social)

### Nav Menu (Mobile Drawer)

**Purpose:** Mobile navigation drawer triggered from header hamburger.

**Composition:**
- Close button (top-right)
- Nav menu (vertical stack)
- Secondary actions (contact CTA, theme switcher)

**States:**
- `closed` — hidden off-screen (transform: translateX(-100%))
- `open` — visible, backdrop overlay

**Accessibility:**
- Focus trap: Tab stays within drawer
- Escape key closes drawer
- Close button prominent
- Backdrop may be dismissed via Escape or click outside
- `aria-hidden="true"` on non-modal content when drawer open

**Responsive:** Mobile only (< lg); slides from left.

**Motion:** Slide-in 240ms ease-out, backdrop fade 240ms ease-out.

**Content keys:** Same as header nav items.

### Hero

**Purpose:** Full-bleed entrance section with inspection CTA, trust signals, urgency messaging.

**Composition:**
- Background image (full-bleed, responsive)
- Gradient overlay (50%+ opacity, ensures text contrast)
- Headline (display 1–2)
- Subheading (body large)
- Trust badge strip (certifications, insurance, years, response time)
- Primary CTA button
- Optional secondary CTA or link

**States:**
- `default` — calm hero on home page
- `urgent` — red/warm tint, fast-contact CTA, storm-specific copy (on /storm-damage)

**Accessibility:**
- `<h1>` for headline (only one per page)
- `aria-label` on background image
- Text contrast ≥ 4.5:1 (AAA) against rendered background
- Trust badges have `aria-label` explaining their meaning
- CTA button clearly visible and focusable

**Responsive:**
- Desktop: min-height 100svh, 80px padding, 2–3 lines of headline
- Tablet: min-height 80svh, 56px padding
- Mobile: min-height 60svh, 40px padding, 1–2 lines of headline (may break)

**Motion:**
- Text reveal: staggered per-word or per-line, 200ms per element, ease-out
- Badge entrance: slide-up + fade, 240ms ease-out (staggered)
- Reduced motion: instant text, instant badges

**Content keys:**
- `hero.home.headline`
- `hero.home.subheading`
- `hero.storm.headline`
- `hero.storm.urgency_message`
- `hero.cta_inspection`
- `hero.cta_emergency`
- `badge.licensed`, `badge.insured`, etc.

### Service Card

**Purpose:** List item for service overview grid (inspection, replacement, repair, maintenance).

**Composition:**
- Icon (24×24, service-specific)
- Title (h4, 20px)
- Description (body small, 14px)
- CTA link (accent text, chevron icon)

**States:**
- `default` — white card, gray text
- `hover` (desktop) — slight shadow lift (shadow-md), accent text highlight
- `active` — accent background tint

**Accessibility:**
- Card is a semantic link or button with visible CTA
- Icon has `aria-hidden="true"` (decorative)
- Title is descriptive
- Link text (CTA) is clear

**Responsive:**
- Desktop: 3-column grid, 24px gap, 300px card width
- Tablet: 2-column grid
- Mobile: full-width, 1-column stack

**Motion:** Hover effect 200ms ease-out (shadow, text color).

**Content keys:**
- `service.inspection.title`
- `service.inspection.description`
- `service.inspection.cta` (e.g., "Learn more")
- Similar for replacement, repair, maintenance

### Project Card (Before/After)

**Purpose:** Gallery item showing completed roofing work with before/after imagery.

**Composition:**
- Image carousel or toggle (before/after slider or toggle button)
- Job type badge
- Location / area tag
- Warranty badge (if applicable)
- Optional: customer quote or testimonial
- CTA: "View details" or "Request similar"

**States:**
- `default` — before image shown, toggle button visible
- `viewing_after` — after image shown
- `hover` (desktop) — subtle overlay, CTA visible

**Accessibility:**
- Images have descriptive `alt` text (e.g., "Before photo of roof damage")
- Toggle button has `aria-pressed` state
- Warranty badge has `aria-label`
- Text overlay readable with sufficient contrast

**Responsive:**
- Desktop: 4:3 aspect ratio, 280×210px
- Tablet: 4:3 aspect ratio, 240×180px
- Mobile: full-width, 16:9 aspect ratio (portrait-friendly)

**Motion:**
- Before/after toggle: crossfade 200ms ease-out
- Hover: overlay fade 200ms ease-out

**Content keys:**
- `gallery.job_type.*`
- `gallery.location.*`
- `gallery.warranty`
- `gallery.cta_similar`

### Financing Card

**Purpose:** Display financing option (payment plan, partner name, terms).

**Composition:**
- Partner logo or payment icon
- Option name (e.g., "12-Month Financing", "0% APR")
- Brief description or terms
- CTA link or button

**States:**
- `default` — white card, gray text
- `hover` — shadow lift, accent highlight
- `recommended` — accent border or badge

**Accessibility:**
- Logo has `aria-label` if text-only
- Description links have clear text
- CTA button or link clearly visible

**Responsive:**
- Desktop: 3-column grid, 24px gap
- Tablet: 2-column grid
- Mobile: full-width stack

**Motion:** Hover 200ms ease-out.

**Content keys:**
- `financing.option_name.*`
- `financing.description.*`
- `financing.cta`

### Testimonial Card

**Purpose:** Display customer quote with name, photo, rating.

**Composition:**
- Star rating (5-star, visual)
- Quote text (body, 16px)
- Customer name (bold, 14px)
- Optional: customer photo (32×32, circular)
- Optional: business relationship (e.g., "Homeowner, 2024")

**States:**
- `default` — white background
- `carousel_active` — highlighted (on carousel)
- `carousel_inactive` — slightly dimmed

**Accessibility:**
- Quote is in `<blockquote>` or `<q>` element
- Citation: `<cite>` for customer name
- Star rating has `aria-label` (e.g., "5 out of 5 stars")
- Photo has `alt` text (e.g., "Customer photo")

**Responsive:**
- Desktop: width 300–350px, photo 32×32
- Mobile: full-width, photo 24×24 or hidden

**Motion:** Carousel slide (if applicable) 240ms ease-out.

**Content keys:**
- `testimonial.quote.*`
- `testimonial.author.*`
- `testimonial.relationship.*`

### Material Comparison Card

**Purpose:** Single roofing material option (asphalt, metal, tile) with attributes and use-case guidance.

**Composition:**
- Material name (h3)
- Icon or image representative of material
- Attribute list (cost range, durability years, aesthetic, maintenance, warranty)
- Use-case copy (when to choose this material)
- CTA button ("Learn more" or "Request inspection")

**States:**
- `default` — white card
- `hover` — shadow lift, CTA highlight
- `selected` — accent border (if interactive comparison)

**Accessibility:**
- Heading hierarchy correct
- Attribute list is readable (not table, can be list or description list)
- CTA button clear
- Icon/image has descriptive `alt` text

**Responsive:**
- Desktop: 3-column grid, 24px gap
- Tablet: 2-column grid
- Mobile: full-width stack

**Motion:** Hover 200ms ease-out.

**Content keys:**
- `material.asphalt.name`, `.durability`, `.cost`, etc.
- `material.metal.name`, etc.
- `material.tile.name`, etc.
- `material.cta`

### Contact Info Strip

**Purpose:** Summarize contact details (phone, hours, address).

**Composition:**
- Phone number (clickable tel link)
- Business hours (text or expandable)
- Address (may link to Google Maps)
- Optional: directions link

**States:**
- `default` — white background, navy text
- `hover` — phone/address links underline

**Accessibility:**
- Phone: semantic `<a href="tel:">` link
- Address: semantic `<address>` element
- Hours: may be in `<dl>` (description list) for semantics
- Links have `aria-label` if icon-only

**Responsive:**
- Desktop: horizontal flex layout
- Mobile: vertical stack

**Motion:** Link hover 200ms ease-out.

**Content keys:**
- `contact.phone`
- `contact.hours`
- `contact.address`
- `contact.directions`

### Trust Badge Bar

**Purpose:** Display certifications, insurance, years, response-time promises in a single horizontal strip.

**Composition:**
- Badge 1: Licensed/Certified (checkmark icon)
- Badge 2: Insured (shield icon)
- Badge 3: Years in Business (number)
- Badge 4: Response Time (bolt icon)

**States:**
- `default` — visible on all pages
- `hero_context` — may use larger badges (32px icon)
- `footer_context` — may use smaller badges

**Accessibility:**
- Each badge has `aria-label` describing the trust signal
- Icons have `aria-hidden="true"` (text provides meaning)

**Responsive:**
- Desktop: horizontal flex, 12px gap
- Tablet: horizontal flex with wrapping allowed
- Mobile: may wrap to 2 rows; smaller font/badge size

**Motion:** None (static).

**Content keys:**
- `badge.licensed`
- `badge.insured`
- `badge.years_in_business`
- `badge.response_time`

### CTA Band

**Purpose:** High-contrast call-to-action section repeating primary conversion action (inspection request).

**Composition:**
- Headline (h2, e.g., "Ready to inspect your roof?")
- Subheading or benefit copy
- Primary CTA button
- Optional: secondary CTA link

**States:**
- `default` — accent background (warm color), text primary
- `hover` — darker accent, shadow lift

**Accessibility:**
- Heading hierarchy correct
- Button clearly focusable and labeled
- Sufficient contrast on background

**Responsive:**
- Desktop: 80px padding, centered
- Tablet: 56px padding
- Mobile: 40px padding, full-width button

**Motion:** Button hover 200ms ease-out; optional subtle entrance animation on scroll (fade-in 280ms).

**Content keys:**
- `cta_band.headline`
- `cta_band.subheading`
- `button.inspect_now` (or similar)

### Review Aggregate Strip

**Purpose:** Display overall customer reviews metric (rating + count + source).

**Composition:**
- Star rating (visual, 1–5)
- Rating number (e.g., "4.8")
- Count of reviews (e.g., "247 reviews")
- Source badge (Google, Yelp, etc.)

**States:**
- `default` — white background, navy text

**Accessibility:**
- Star rating: `aria-label` (e.g., "4.8 out of 5 stars")
- Rating number: descriptive
- Source badge: may have `aria-label`

**Responsive:**
- Desktop: horizontal layout
- Mobile: may stack or reduce text size (14px → 12px)

**Motion:** None.

**Content keys:**
- `review.aggregate_rating`
- `review.review_count`
- `review.source`

### Accordion (FAQ)

**Purpose:** Expandable question/answer pairs for FAQ page.

**Composition:**
- Question heading (h3, clickable)
- Toggle icon (chevron, rotates on expand)
- Answer panel (hidden/visible)

**States:**
- `collapsed` — question visible, answer hidden, chevron down
- `expanded` — answer visible, chevron up
- `hover` — background tint, cursor pointer

**Accessibility:**
- Heading is a button with `aria-expanded` state
- Panel has `aria-hidden="true"` when collapsed
- Focus visible on question button
- Keyboard: Enter/Space to toggle

**Responsive:**
- Desktop: 100% width, 24px padding, max-width 800px
- Mobile: full-width, 20px padding

**Motion:**
- Expand/collapse: height animation 240ms ease-out
- Chevron rotation: 200ms ease-out
- Reduced motion: instant or opacity-only

**Content keys:**
- `faq.question.*`
- `faq.answer.*`

---

## Organisms (Full-Page Sections)

### Service Grid Section

**Purpose:** Overview of roofing service types (inspection, replacement, repair, maintenance).

**Composition:**
- Section heading (h2)
- Optional: introductory text
- 3-column grid of service cards
- Optional: "View all services" link

**States:** Standard grid display.

**Accessibility:**
- Section landmark (`<section>` with `aria-label`)
- Heading hierarchy correct
- All interactive elements keyboard-accessible

**Responsive:**
- Desktop: 3-column grid, 24px gap
- Tablet: 2-column grid
- Mobile: 1-column stack

**Motion:** Staggered card entrance on page load (fade-in + slide-up, 240ms per card).

**Content keys:**
- `section.services.heading`
- `section.services.intro` (optional)

### Project Gallery Section

**Purpose:** Before/after project showcase with filtering by job type and area.

**Composition:**
- Section heading (h2)
- Filter bar (job type buttons, area buttons)
- Grid of project cards (4 columns desktop, 2 tablet, 1 mobile)
- Optional: pagination or "load more" button

**States:**
- `default` — all projects shown
- `filtered` — filtered by selected criteria

**Accessibility:**
- Filter buttons have `aria-pressed` state
- Gallery has `role="grid"` or semantic structure
- Image alt text on all before/after photos

**Responsive:**
- Desktop: 4-column grid, 24px gap
- Tablet: 2-column grid
- Mobile: 1-column stack

**Motion:** Filter transition (fade + slide) 200ms ease-out; project card entrance staggered.

**Content keys:**
- `section.projects.heading`
- `filter.job_type.*`
- `filter.area.*`

### Material Comparison Section

**Purpose:** Compare roofing materials (asphalt, metal, tile) with attributes and use-case guidance.

**Composition:**
- Section heading (h2)
- Intro copy explaining material comparison
- 3-column grid of material cards
- Optional: side-by-side attribute matrix table

**States:**
- `grid_view` — card layout
- `table_view` — comparison table (optional, desktop only)

**Accessibility:**
- Heading hierarchy correct
- If table view: proper `<table>` structure with headers and data cells
- All interactive elements keyboard-accessible

**Responsive:**
- Desktop: 3-column grid OR table layout
- Tablet: 2-column grid
- Mobile: 1-column stack

**Motion:** Card entrance staggered 240ms per element.

**Content keys:**
- `section.materials.heading`
- `section.materials.intro`

### Financing Section

**Purpose:** Display financing options and warranty information.

**Composition:**
- Section heading (h2)
- Intro copy on financing confidence
- 3-column grid of financing cards
- Warranty partner logos showcase
- Optional: FAQ or explainer link

**States:** Standard grid display.

**Accessibility:**
- Heading hierarchy correct
- Partner logos have `aria-label`
- All CTAs clearly labeled

**Responsive:**
- Desktop: 3-column grid
- Tablet: 2-column grid
- Mobile: 1-column stack

**Motion:** Card entrance staggered 240ms per element.

**Content keys:**
- `section.financing.heading`
- `section.financing.intro`
- `warranty.partner.*` (for logos)

### Form Section (Inspection Request)

**Purpose:** Primary conversion form for inspection requests.

**Composition:**
- Section heading (h2)
- Intro/benefit copy
- Form fields (name, email, phone, service type, address, description)
- Submit button
- Privacy/terms note (small text, link to policy)

**States:**
- `default` — form ready for input
- `loading` — submit button shows spinner, form disabled
- `success` — form hidden, success message displayed
- `error` — form fields preserve values, error messages displayed

**Accessibility:**
- Form landmark (`<form>`)
- Labels associated with inputs via `for` attribute
- Required fields marked with `aria-required="true"` and visual indicator
- Error messages associated via `aria-describedby`
- Submit button clearly labeled
- Success/error messages in `aria-live="polite"` region

**Responsive:**
- Desktop: 2-column layout (name/email on left, phone/service on right, full-width description)
- Mobile: single column stack

**Motion:**
- Field focus: border color 200ms ease-out
- Submit: loading spinner (continuous rotation, 1500ms)
- Success: fade-in of success message 240ms ease-out

**Content keys:**
- `form.label.*` (all field labels)
- `form.placeholder.*` (input hints)
- `form.error.*` (validation messages)
- `form.success_message`
- `form.privacy_note`

### FAQ Section

**Purpose:** Answer common customer questions (warranty, financing, process, timeline).

**Composition:**
- Section heading (h2)
- Category buttons (warranty, financing, process, timeline)
- Accordion questions/answers per category
- Optional: "Still have questions?" CTA to contact

**States:**
- `category_default` — all questions from default category shown
- `category_selected` — questions filtered by selected category

**Accessibility:**
- Heading hierarchy correct
- Accordion items properly labeled and focused
- Category buttons have `aria-pressed` state

**Responsive:**
- Desktop: 2-column layout (left: categories, right: FAQ accordion)
- Mobile: stacked (categories above FAQ)

**Motion:**
- Category switch: fade 200ms ease-out
- Accordion expand: height 240ms ease-out

**Content keys:**
- `faq.category.*`
- `faq.question.*`
- `faq.answer.*`

### Team Section (About Page)

**Purpose:** Introduce team members with photos and credentials.

**Composition:**
- Section heading (h2)
- Team member cards (photo, name, title, bio, optional social links)
- Arranged in grid

**States:** Standard display.

**Accessibility:**
- Heading hierarchy correct
- Photos have `alt` text (e.g., "John Smith, Lead Roofer")
- Social links have `aria-label`

**Responsive:**
- Desktop: 3-column grid
- Tablet: 2-column grid
- Mobile: 1-column stack

**Motion:** Card entrance staggered 240ms per element.

**Content keys:**
- `team.member.name.*`
- `team.member.title.*`
- `team.member.bio.*`

### Testimonial Carousel

**Purpose:** Rotating customer testimonials.

**Composition:**
- Testimonial cards (quote, author, rating, optional photo)
- Previous/next navigation buttons or auto-rotate
- Dot indicators (optional)

**States:**
- `auto_playing` — cycles through testimonials every 5s
- `paused` — user has interacted (optional)
- `slide_active` — current slide highlighted

**Accessibility:**
- Carousel has `aria-label` or `aria-live="polite"`
- Nav buttons have `aria-label` ("Previous testimonial", "Next testimonial")
- Dot indicators have `aria-label` (e.g., "Slide 1 of 5")
- Auto-rotation stops on focus or user interaction

**Responsive:**
- Desktop: single card or 3-card visible carousel
- Mobile: single card

**Motion:**
- Slide transition: 240ms ease-out (fade or slide)
- Auto-advance: 5000ms interval
- Reduced motion: pause auto-advance

**Content keys:**
- `testimonial.quote.*`
- `testimonial.author.*`

### Newsletter Signup (optional, Footer)

**Purpose:** Collect email for marketing communications.

**Composition:**
- Label: "Subscribe to updates"
- Email input
- Subscribe button

**States:**
- `default` — ready for input
- `loading` — button shows spinner
- `success` — form replaced with confirmation message

**Accessibility:**
- Label associated with input
- Button clearly labeled
- Success message in `aria-live="polite"`

**Responsive:**
- Desktop: horizontal (input + button on one line)
- Mobile: vertical stack

**Motion:** Submit spinner, success message fade-in 240ms.

**Content keys:**
- `newsletter.label`
- `newsletter.placeholder`
- `button.subscribe`
- `newsletter.success_message`

---

## Mandatory Global Components

### ThemeSwitcher

**Purpose:** Toggle between light and dark themes.

**Composition:**
- Icon button (sun/moon toggle)
- Optional: label ("Light / Dark")

**States:**
- `light` — sun icon visible, dark theme disabled
- `dark` — moon icon visible, dark theme enabled

**Behavior:**
- Clicking toggles theme
- Theme persisted to localStorage as `theme` key
- Initial state: check localStorage, fall back to `prefers-color-scheme`, default to light
- On change: set `data-theme="dark"` or remove from `<html>` element

**Accessibility:**
- Button has `aria-label` (e.g., "Toggle dark mode")
- Button has `aria-pressed` state reflecting current theme
- Keyboard accessible (Tab, Enter/Space to toggle)

**Responsive:**
- Desktop: positioned in header right, after utility
- Mobile: positioned in mobile header (top-right)

**Motion:** Color transition 200ms ease-out when toggled.

**Content keys:**
- `button.toggle_theme`
- `aria_label.toggle_theme`

### MobileBottomNav

**Purpose:** Primary navigation for mobile devices (< lg breakpoint).

**Composition (5 tabs):**
- Home (house icon + "Home")
- Services (toolbox icon + "Services")
- Materials (layers icon + "Materials")
- Projects (image icon + "Projects")
- Contact (phone icon + "Contact")

**Behavior:**
- Fixed at bottom of viewport
- Visible only on `< lg` breakpoints
- Active tab highlighted (color + scale)
- Each tab links to corresponding route
- Respects safe-area-inset-bottom for notched devices

**Accessibility:**
- `role="navigation"` or `<nav>`
- Tab buttons have `aria-current="page"` when active
- Icons + labels for clarity (no icon-only buttons)
- Tab order left-to-right

**Responsive:**
- Fixed bottom, 100% width, 64px height
- Visible on xs/sm breakpoints only

**Motion:**
- Active tab: color transition 200ms ease-out, subtle scale up (1.05)
- Navigation: no transition (instant route change)

**Content keys:**
- `nav.home`, `nav.services`, `nav.materials`, `nav.projects`, `nav.contact`

### AuthModal

**Purpose:** Overlay modal for authentication (future expansion; not active in MVP).

**Composition:**
- Backdrop overlay with blur
- Centered modal panel (600px desktop, 90vw mobile)
- Modal header with close button
- Form content (sign-in or sign-up)
- Optional: "Switch mode" link (sign-in ↔ sign-up)

**Behavior:**
- Triggered from header "Sign In" CTA (when auth becomes active)
- Modal takes focus; focus trap enforced
- Escape key closes modal
- Click outside dismisses (optional)

**Accessibility:**
- `role="dialog"` with `aria-modal="true"`
- `aria-labelledby` pointing to modal heading
- Focus trap: Tab keeps focus within modal
- Escape key closes
- Close button prominent

**Responsive:**
- Desktop: 600px width, centered
- Mobile: 90vw width, full height

**Motion:**
- Entrance: backdrop fade + panel scale/slide 240ms ease-out
- Exit: same animation reversed

**Content keys:**
- `modal.sign_in.title`
- `modal.sign_up.title`
- `button.close` (modal close button)

---

## Component State Matrix (Cross-Reference)

| Component | Variants | Interactive States | Responsive Scales | Animation |
|---|---|---|---|---|
| Button | primary, accent, secondary, tertiary, destructive | default, hover, active, disabled, loading | 2 (mobile/desktop button sizing) | hover 200ms, loading spin |
| Input | text, email, tel, textarea, number | default, focus, filled, disabled, error | 2 (height/padding) | focus border 200ms |
| Badge | certification, insurance, years, response | default, inactive | 1 (consistent across breakpoints) | none |
| Icon | outline, filled, service, status, social | none (inherit parent) | 5 sizes (16–40px) | none |
| Link | primary, accent, inline | default, hover, visited, focus | 1 (responsive to parent) | hover 200ms |
| Header | transparent, opaque, mobile-open | sticky scroll effect, mobile drawer | 2 (desktop/mobile layout) | scroll 200ms, drawer 240ms |
| Footer | light, dark | none | 3 (desktop 5-col, tablet 3-col, mobile stack) | none |
| Hero | default, urgent | entrance animations | 3 (desktop/tablet/mobile sizing) | text 200ms stagger, badge 240ms |
| Service Card | default | hover, active | 3 (3-col, 2-col, 1-col) | hover 200ms |
| Project Card | default | carousel toggle, hover | 3 (varied aspect ratios) | toggle fade 200ms |
| Material Card | default | hover, selected | 3 (3-col, 2-col, 1-col) | hover 200ms |
| Form | default, loading, success, error | field focus, submit, reset | 2 (2-col desktop, 1-col mobile) | submit spin, success fade 240ms |
| Accordion | collapsed, expanded | hover, keyboard | 1 (responsive width) | expand height 240ms, chevron 200ms |
| Carousel | auto_playing, paused | nav buttons, dot indicators | 2 (single/multi card visible) | slide 240ms, auto 5s interval |
| ThemeSwitcher | light, dark | toggle | 1 (icon button) | color 200ms |
| MobileBottomNav | default | active tab, press | 1 (fixed bottom) | tab 200ms, scale 1.05 |
| AuthModal | sign-in, sign-up | focus trap, close | 2 (600px desktop, 90vw mobile) | entrance/exit 240ms |

---

**Next Steps:**
- Frontend developer implements each component per spec.
- QA validates all states (especially error, disabled, loading).
- Motion animator reviews animation specs and builds Framer Motion variants.
