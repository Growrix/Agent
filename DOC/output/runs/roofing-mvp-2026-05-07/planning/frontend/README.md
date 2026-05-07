# Frontend Planning Bundle — Roofing MVP

**Status:** ✅ PLANNED | **Quality Bar:** World-class (Stripe/Linear-grade) | **Timestamp:** 2026-05-07

---

## Quick Start

**You are here:** Complete frontend planning specification for a roofing company platform (marketing site + lead-generation MVP). This folder contains every design and UX decision required for frontend implementation.

**Next step:** Read [master-ui-architecture.md](./master-ui-architecture.md) to understand the overall design system and site structure, then proceed to implementation using [design-system.md](./design-system.md) and [component-system.md](./component-system.md) as your core references.

---

## What's in This Bundle

### Core Planning Artifacts

1. **[brief.json](./brief.json)** — Intake brief (LOCKED). Machine-readable project scope, brand direction, features, integrations, constraints, success metrics. Start here if you need to understand project requirements.

2. **[master-ui-architecture.md](./master-ui-architecture.md)** — Complete UX strategy. Site map (12 routes), user journeys (5 core paths), navigation model, conversion infrastructure, layout system, implementation stack, component index. **Read this first.**

3. **[design-system.md](./design-system.md)** — Design system specification. Color (light + dark themes), typography, spacing, motion, radius, shadows, z-index, accessibility guidelines. All token values defined; nothing is hardcoded.

4. **[design-system.tokens.json](./design-system.tokens.json)** — Machine-readable design tokens. Import this into your Tailwind config to auto-generate CSS variables and utility classes.

5. **[component-system.md](./component-system.md)** — All shared components (atoms to organisms). Button, Input, Badge, Card, Header, Footer, Hero, Form, Modal, MobileBottomNav, ThemeSwitcher, etc. Every component includes variants, states, accessibility specs, motion declarations.

6. **[motion-system.md](./motion-system.md)** — Animation catalog. Duration band (220–280ms calm-precise), macro animations (page reveal, modal, sticky header), micro animations (hover, form validation, success), reduced-motion fallback for every animation.

7. **[content-library.md](./content-library.md)** — All visible strings keyed for i18n. Hero copy, CTAs, form labels, error messages, trust signals, navigation, footer — 100+ keys, zero hardcoded copy. Use [content.en-US.json](./content.en-US.json) in your app.

8. **[interaction-matrix.md](./interaction-matrix.md)** — Interaction specifications. Hover/click/form/keyboard/scroll behaviors, mobile parity, accessibility interactions, no hover-only affordances.

9. **[visual-differentiation-map.md](./visual-differentiation-map.md)** — Per-route design signatures. Prevents template collapse; ensures each page (Home, Storm, Projects, etc.) has unique composition, hero style, and motion tempo.

10. **[pages-briefs.md](./pages-briefs.md)** — Per-page design briefs. Outcomes-based specifications (not DOM templates) for Home, Storm Damage, Materials, Projects, etc. Includes conversions goals, content requirements, forbidden patterns, visual differentiation notes.

11. **[visual-reference-pack.md](./visual-reference-pack.md)** — Hero compositions, mobile adaptations, photography requirements. Real-photo-only direction, asset aspect ratios, contrast verification, fallback behavior for broken images.

### Machine-Readable Exports

- **[content.en-US.json](./content.en-US.json)** — All content keys + English text. Ready to import into your app and use with next-intl or similar i18n library.

### Validation & Metadata

- **[frontend.json](./frontend.json)** — Validation report + summary. All constraints (F1–F12) and accessibility (AC1–AC12) marked passed; quality gates verified; deployment checklist; open questions flagged.

---

## How to Use This Bundle

### For Frontend Developers

1. **Clone the Tailwind config:** Import [design-system.tokens.json](./design-system.tokens.json) into your `tailwind.config.js`:
   ```js
   import tokens from '../planning/frontend/design-system.tokens.json'
   export default {
     theme: {
       extend: {
         colors: tokens.colors.light,
         // ... (add all token categories)
       }
     }
   }
   ```

2. **Set up content library:** Import [content.en-US.json](./content.en-US.json) into your app:
   ```ts
   import content from '@/lib/content.en-US.json'
   // Usage: {content['hero.home.headline']}
   ```

3. **Implement components:** Reference [component-system.md](./component-system.md) for each component's states, variants, motion, and accessibility. Every component includes Framer Motion pseudo-code and ARIA requirements.

4. **Verify pages match briefs:** Read [pages-briefs.md](./pages-briefs.md) for each route's outcomes and content requirements. Validate your implementation against the brief's KPIs and required sections.

5. **Animate per motion spec:** Use [motion-system.md](./motion-system.md) to implement durations, easing, and reduced-motion fallbacks. No freestyle animations; all must reference the motion spec.

6. **Validate accessibility:** Cross-check against [interaction-matrix.md](./interaction-matrix.md) and [component-system.md](./component-system.md) ARIA sections. Run axe DevTools to confirm WCAG 2.1 AA compliance.

### For Designers

1. **Visual tokens reference:** [design-system.md](./design-system.md) is your design system narrative. All colors, typography, spacing, motion are defined here.

2. **Component visuals:** [component-system.md](./component-system.md) specifies every component's appearance, states, and responsive behavior. Use as basis for design tokens, Figma components, or design system documentation.

3. **Per-page layouts:** [pages-briefs.md](./pages-briefs.md) describes what each page should communicate (not how to build it). Outcomes-based briefs give you creative latitude while ensuring goal alignment.

4. **Photography direction:** [visual-reference-pack.md](./visual-reference-pack.md) specifies hero compositions, mobile adaptations, and imagery requirements. Real photos only; no stock or AI renders.

5. **Differentiation checklist:** [visual-differentiation-map.md](./visual-differentiation-map.md) ensures each route looks distinct. Verify your designs per this map to avoid template mediocrity.

### For Product / QA

1. **Validation checklist:** [frontend.json](./frontend.json) lists all passed quality gates (F1–F12 constraints, AC1–AC12 accessibility, 12 quality gates). Use as acceptance criteria.

2. **Component state testing:** [component-system.md](./component-system.md) matrix defines every component state (default, hover, active, disabled, loading, error, success). Test each per the spec.

3. **Accessibility testing:** [interaction-matrix.md](./interaction-matrix.md) specifies keyboard nav (Tab, Shift+Tab, Escape, Enter), focus management, and aria-live announcements. Verify with screen reader (NVDA, JAWS, VoiceOver).

4. **Mobile testing:** [visual-reference-pack.md](./visual-reference-pack.md) mobile compositions show expected layouts. Verify responsive breakpoints match [design-system.md](./design-system.md) breakpoint scale.

5. **Performance targets:** [frontend.json](./frontend.json) success criteria include LCP ≤ 2.5s (home page), 99.5% uptime. Monitor via Vercel Analytics or similar.

### For Project Managers

- **Project scope:** [brief.json](./brief.json) contains all requirements, features, integrations, constraints, assumptions.
- **Timeline reference:** Estimated implementation effort based on artifact completeness (11 complete planning artifacts → ~80 development hours for MVP + QA).
- **Handoff checklist:** [frontend.json](./frontend.json) deployment_checklist shows 32 items to finalize before launch (photos, assets, partner info, API setup, staging, etc.).
- **Open questions:** [frontend.json](./frontend.json) lists 12 open questions that need stakeholder input (business name, team photos, financials, insurance details, etc.).

---

## Architecture Overview

### Technology Stack
- **Framework:** Next.js 15+ (App Router, Server Components)
- **Styling:** Tailwind CSS (custom config via design-system.tokens.json)
- **Components:** Radix UI (headless, a11y-first)
- **Motion:** Framer Motion (220–280ms durations, prefers-reduced-motion aware)
- **Forms:** React Hook Form + Zod (validation, error recovery)
- **CMS:** Sanity.io (services, projects, materials, team, testimonials)
- **Analytics:** PostHog or Vercel Analytics (event tracking)
- **Deployment:** Vercel (Next.js native, automatic deploys from GitHub)

### Visual Language
- **Primary color:** Navy #0F3A66 (trustworthy, professional)
- **Accent color:** Amber #F59E0B (warmth, urgency on storm page)
- **Background:** Warm off-white #F8F6F1 (approachable)
- **Dark theme:** Inverted palette with CSS vars for `[data-theme="dark"]`
- **Motion temperament:** Calm-precise (reassuring, 220–240ms standard durations)

### Route Map (12 primary routes)
- `/` — Home (flagship, calm hero, trust strip, service grid, featured projects)
- `/services` — Services directory (service cards, detail link to service/:id)
- `/services/:id` — Service detail (full description, related projects, CTA)
- `/storm-damage` — Storm emergency path (urgent, fast contact, insurance explainer)
- `/materials` — Materials comparison (3 materials, attributes table, use cases)
- `/projects` — Project gallery (before/after filter, job-type + area filters)
- `/financing` — Financing options (partner logos, terms, benefit copy)
- `/contact` — Contact form + info (form, hours, address, map)
- `/faq` — FAQ (general + storm-specific, accordion, search)
- `/about` — Company story (team section, credentials, values)
- `/areas` — Service areas (map or list of cities/zip codes)
- `/areas/:id` — Area detail (area-specific projects, local reviews, contact)

**Legal routes (not public in nav):**
- `/privacy` — Privacy policy
- `/terms` — Terms of service
- `/404` — Custom 404 page

---

## Key Design Decisions

### 1. Local-Business-Trust Archetype
All visual, interaction, and content decisions follow the local-business-trust archetype (per brand-translation-rules). This drives:
- Trust signal prominence (license, insurance, years, response-time visible above fold)
- Professional color palette (navy + amber, not trendy neons)
- Reassuring motion temperament (calm-precise, not playful)
- Urgency awareness (storm damage path with warm accent + faster interaction)

### 2. Mobile-First + Dark Theme Mandatory
- Responsive strategy: xs baseline (320px), enhance to lg/xl
- Dark theme: not optional; full light + dark token sets; ThemeSwitcher in header + mobile toolbar
- Icon-based mobile nav: MobileBottomNav with 5 tabs (home, services, materials, projects, contact)

### 3. Content Library Keying (Zero Hardcoded Copy)
- All visible strings in content-library.md + content.en-US.json
- Developers import content keys, not inline copy
- Enables i18n later (next-intl ready)

### 4. Reduced-Motion Compliance (Every Animation Documented)
- Motion-system.md declares every animation (20+) with fallback
- Fallback: instant or opacity-only when prefers-reduced-motion active
- No decorative motion; all animations serve clarity or feedback purpose

### 5. Visual Differentiation (No Template Collapse)
- visual-differentiation-map.md ensures Home ≠ Storm ≠ Projects ≠ Materials
- Each HIGH-latitude route has unique hero style, primary section composition, motion tempo
- Prevents mediocre "same template, different text" frontend collapse

### 6. Accessibility-First (WCAG 2.1 AA+)
- All color pairs ≥ 4.5:1 (AAA body text), ≥ 3:1 (large text)
- Landmarks, heading outline, ARIA labels, focus management
- Keyboard navigation (Tab, Shift+Tab, Escape, Enter) fully specified
- Mobile parity: no hover-only affordances; all interactions have touch equivalents

### 7. Trust-Data Contracts
- License number, insurance provider, years in business, service areas: all required for footer + hero badges
- Response-time promise: required for emergency contact CTA ("We respond within 10 minutes")
- Review aggregate: required below hero (rating + count + source link)
- Financing partner info: required if financing page enabled

---

## Quality Bar

**Target:** Stripe / Linear / Notion-class frontend quality (world-class band).

**Validation results:**
- ✅ All 12 frontend-constraints (F1–F12) passed
- ✅ All 12 accessibility-constraints (AC1–AC12) passed
- ✅ All 12 quality gates passed
- ✅ Zero hardcoded strings, colors, spacing values
- ✅ Every animation documented with reduced-motion fallback
- ✅ Every component state matrix enumerated
- ✅ Mobile parity verified (no hover-only patterns)
- ✅ Dark theme + ThemeSwitcher mandatory infrastructure ready

---

## Deployment Readiness

**Before launch:**
1. [ ] Stakeholder approves brief.json and answers all open questions
2. [ ] All hero images sourced + optimized (WebP + JPEG, responsive srcset)
3. [ ] Project before/after gallery populated (minimum 10 pairs)
4. [ ] Team member photos obtained with permissions
5. [ ] Financing + warranty partner details confirmed
6. [ ] Google Business Profile + review source configured
7. [ ] Sanity CMS schema deployed; content models ready
8. [ ] Form backend (Resend email service) configured
9. [ ] Analytics (PostHog or Vercel Analytics) instrumented
10. [ ] i18n setup complete (next-intl with en-US)
11. [ ] Vercel project + domain configured
12. [ ] Staging environment deployed + QA pass sign-off
13. [ ] All 32 deployment checklist items from frontend.json verified

**Performance targets:**
- LCP ≤ 2.5s (home page)
- WCAG 2.1 AA score 100% (axe DevTools)
- Mobile Friendly Test pass
- 99.5% uptime (Vercel SLA)

---

## File Structure

```
DOC/output/runs/roofing-mvp-2026-05-07/planning/frontend/
├── README.md                    ← You are here
├── ai-context.yaml              ← AI navigation (see below)
├── brief.json                   ← Intake brief (LOCKED)
├── frontend.json                ← Validation + summary
├── master-ui-architecture.md    ← UX strategy (read first)
├── design-system.md             ← Design tokens + system
├── design-system.tokens.json    ← Machine-readable tokens
├── component-system.md          ← All shared components
├── motion-system.md             ← Animation catalog
├── content-library.md           ← All visible strings keyed
├── content.en-US.json           ← Content export (i18n ready)
├── interaction-matrix.md        ← Interaction specs
├── visual-differentiation-map.md ← Per-route visual signatures
├── pages-briefs.md              ← Per-page design briefs
└── visual-reference-pack.md     ← Photography + composition
```

---

## Navigation for AI Agents

**See [ai-context.yaml](./ai-context.yaml) for machine-readable navigation** — useful for agents consuming this planning bundle.

---

## Support & Troubleshooting

**Q: Where do I find the dark theme tokens?**
A: [design-system.md](./design-system.md#dark-theme) — look for the `[data-theme="dark"]` CSS var block. Import all vars into your global CSS.

**Q: How do I implement the form validation with error recovery?**
A: See [component-system.md](./component-system.md#form) Form component spec + [interaction-matrix.md](./interaction-matrix.md#form-field-flow) form field flow. Use React Hook Form + Zod.

**Q: Can I change the hero composition for Service Detail page?**
A: Only if your change is documented in [visual-differentiation-map.md](./visual-differentiation-map.md) and improves the visual signature. High-latitude routes have creative freedom; low-latitude routes (Contact, FAQ) are fixed.

**Q: What's the motion temperament for this project?**
A: Calm-precise (220–280ms durations, ease-out curves, reassuring tone). See [motion-system.md](./motion-system.md#motion-temperament).

**Q: How do I handle reduced-motion users?**
A: Every animation in [motion-system.md](./motion-system.md) declares a reduced-motion fallback (instant or opacity-only). Example:
```css
@media (prefers-reduced-motion: reduce) {
  .hero-text { animation: none; opacity: 1; }
}
```

**Q: Are there any hardcoded values I should replace?**
A: No. All colors, spacing, durations, shadows reference design-system tokens. If you find a raw hex/px/ms value in a spec, it's an error — report it.

---

## Document Versions & Updates

- **Version 1.0.0** — Initial planning bundle (2026-05-07)
- **Status:** PLANNED (ready for frontend development)
- **Lock Status:** LOCKED (brief is final; design decisions are final)

For updates post-implementation, create a new run timestamp folder and re-execute planning phases with updated inputs.

---

**Questions?** Review the relevant spec file (e.g., design-system.md for colors, motion-system.md for animations, pages-briefs.md for page-specific questions). If still unclear, check [frontend.json](./frontend.json) open_questions section to see if it's a stakeholder-input item.

**Ready to build?** Start with [master-ui-architecture.md](./master-ui-architecture.md), then implement per [component-system.md](./component-system.md) and [design-system.md](./design-system.md).

🚀 Happy building!
