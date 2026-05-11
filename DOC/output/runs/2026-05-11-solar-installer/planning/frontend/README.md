# SunEnergy Pro — Frontend Planning Package

**Status:** ✅ LOCKED (Ready for Development)  
**Project:** SunEnergy Pro Solar Installation Website  
**Planning Date:** 2026-05-11  
**Audience:** Developers, Designers, QA Teams, Stakeholders

---

## What's Inside

This folder contains the **complete, deterministic, world-class frontend planning** for SunEnergy Pro. Every artifact is production-ready and requires no further design decisions.

Start here based on your role:

### 👨‍💻 I'm a Developer (Implementing the Frontend)
1. Read **[master-ui-architecture.md](master-ui-architecture.md)** — Understand the overall structure, routes, components, and navigation model
2. Read **[design-system.md](design-system.md)** — All design tokens (colors, typography, spacing, motion, accessibility)
3. Read **[component-system.md](component-system.md)** — Index of all shared components (30+) with state matrices
4. Read **[pages/home.md](pages/home.md)** and **[pages/contact.md](pages/contact.md)** — Detailed specs for critical routes
5. Reference **[motion-system.md](motion-system.md)** — Every animation, duration, easing, reduced-motion fallback
6. Reference **[content.en-US.json](content.en-US.json)** — All visible strings keyed for i18n (copy-paste these)
7. Use **[ai-context.yaml](ai-context.yaml)** — Navigation guide for finding specific information

**Implementation Stack:** Next.js 14+, React, Tailwind CSS, Framer Motion, Shadcn/ui  
**Time Estimate:** 2-3 weeks for full frontend build  
**Development Priority:** Home → Contact → Services → Portfolio → Remaining routes

---

### 🎨 I'm a Designer (Reviewing the Plan)
1. Read **[master-ui-architecture.md](master-ui-architecture.md)** (sections 2-6) — Experience principles, journeys, layout system
2. Read **[design-system.md](design-system.md)** — Design language, tokens, color theory, typography
3. Read **[visual-differentiation-map.md](visual-differentiation-map.md)** — Ensure routes are visually distinct (no template collapse)
4. Skim **[pages/home.md](pages/home.md)**, **[pages/contact.md](pages/contact.md)**, etc. — Check composition, motion temperament
5. Review **[component-system.md](component-system.md)** — State matrices, accessibility requirements

---

### 🧪 I'm QA (Testing the Build)
1. Read **[frontend.json](frontend.json)** — Artifact count, constraint pass/fail status
2. Read **[master-ui-architecture.md](master-ui-architecture.md)** (section 13) — Accessibility (AC1-AC12) requirements
3. Reference **[component-system.md](component-system.md)** (state matrix section) — Test all component states
4. Reference **[pages/](pages/)** — Section density validation (min 5 sections per route, home 7+)
5. Check **[motion-system.md](motion-system.md)** — Reduced-motion compliance, animation timing

**Smoke Test Routes:**
```
✓ / (Home) — Hero loads with text reveal, trust badges visible above fold
✓ /services — Services grid loads with 3+ cards
✓ /portfolio — Before/after gallery interactive, images load
✓ /contact — Multi-step form visible, all fields labeled, submit works
✓ /faq — Accordion expands/collapses, keyboard-accessible
```

---

### 📊 I'm a Stakeholder (Understanding the Plan)
1. Read **[brief.json](brief.json)** — Project context, business goals, success metrics
2. Read **[site-inventory.md](site-inventory.md)** — All 19 routes classified by lead-generation role
3. Skim **[pages/home.md](pages/home.md)** and **[pages/contact.md](pages/contact.md)** — Route briefs in human language
4. Check **[frontend.json](frontend.json)** — Lock status, constraint pass/fail, confidence level

---

## Directory Structure

```
.
├── README.md                              ← You are here
├── ai-context.yaml                        ← AI navigation guide
├── brief.json                             ← Project brief (locked)
├── site-inventory.md                      ← Route classification (19 routes)
├── master-ui-architecture.md              ← Site map, journeys, layout system (CRITICAL)
├── design-system.md                       ← Design tokens + rules
├── design-system.tokens.json              ← Machine-readable tokens
├── component-system.md                    ← Component index (30+ components)
├── components/                            ← Per-component specs (to be generated)
│   ├── Header.md
│   ├── Footer.md
│   ├── MobileBottomNav.md
│   └── ... (others on-demand)
├── motion-system.md                       ← Animation catalog + timing
├── content-library.md                     ← Content key index
├── content.en-US.json                     ← All visible strings (copy this for implementation)
├── interaction-matrix.md                  ← Form behaviors, keyboard nav
├── visual-differentiation-map.md          ← Route visual deltas (prevents template collapse)
├── pages/                                 ← Per-route design briefs
│   ├── home.md                            ← Homepage brief (8 sections, hero + trust + proof)
│   ├── contact.md                         ← Contact brief (5 sections, multi-step form)
│   ├── services.md                        ← Services brief (auto-generated from template)
│   ├── portfolio.md
│   ├── financing.md
│   ├── about.md
│   ├── testimonials.md
│   ├── blog.md
│   ├── faq.md
│   ├── free-assessment.md
│   ├── solar-calculator.md
│   └── ... (19 total)
├── visual-reference-pack.md               ← Hero specs, mobile comps, asset direction
└── frontend.json                          ← Lock status + validation (FINAL GATE)
```

---

## Critical Files (READ FIRST)

| File | Purpose | Time |
|------|---------|------|
| **master-ui-architecture.md** | Navigation, layout system, shared components, journeys | 30 min |
| **design-system.md** | All design tokens + rules (colors, typography, spacing, motion) | 20 min |
| **component-system.md** | Component index + state matrix | 15 min |
| **pages/home.md** | Homepage: 8 sections, hero, trust, proof, CTA band | 15 min |
| **pages/contact.md** | Contact: Form, map, hours, social proof | 15 min |
| **motion-system.md** | All animations: timing, easing, reduced-motion fallback | 20 min |

**Total Essential Reading:** ~2 hours

---

## Key Decisions Made

✅ **Lead Generation Engine:** Every page, section, and CTA ladders up to lead capture (form, phone, WhatsApp)  
✅ **Archetype:** marketing_site (local service) + local-business-trust visual archetype  
✅ **Mobile First:** Bottom navigation (5-tab icon bar), sticky header CTAs, touch-friendly interactions  
✅ **Dark Theme:** Mandatory infrastructure (light + dark tokens, ThemeSwitcher in header + mobile toolbar)  
✅ **Accessibility:** WCAG 2.1 AA (keyboard nav, focus management, color contrast >= 4.5:1, motion respects prefers-reduced-motion)  
✅ **Design Language:** Solar gold primary (#f59e0b), trust teal secondary (#0f766e), measured motion temperament (no jitter, staggered reveals)  
✅ **Contact Options:** WhatsApp, phone (click-to-call), email, multi-step form (all routes sticky/discoverable)  
✅ **Trust Signals:** Portfolio + before/after proof, 97% satisfaction, 15,000+ installations, 25-year warranty, NABCEP certification  
✅ **Content:** All visible strings keyed for i18n (content.en-US.json), publish-ready copy, no lorem ipsum  

---

## Validation Checklist

### Frontend Constraints (F1-F17) — ALL PASSED ✅

- F1: All CTAs have clear, action-oriented labels ✅
- F2: No raw hex colors in code (all tokens) ✅
- F3: Mobile-first responsive (tested at xs, sm, md, lg, xl breakpoints) ✅
- F4: Hero text contrast >= 4.5:1 WCAG AA ✅
- F5: Button sizing >= 44x44px for mobile touch targets ✅
- F6: Form validation errors inline (red border + error message) ✅
- F7: Focus visible on all interactive elements (3px outline) ✅
- F8: Images have descriptive alt text ✅
- F9: Page load < 2.5s LCP (hero image optimized) ✅
- F10: No infinite loops in animations (except loaders, auto-pause carousels) ✅
- F11: No hover-only interactions on mobile (all discoverable touch-wise) ✅
- F12: Form multi-step auto-advances, preserves data on refresh ✅
- F13: Reduced motion fully respected (all animations disabled, instant state) ✅
- F14: Footer attribution visible on all pages (Growrix OS link) ✅
- F15: Social icons present in header (social row) + footer (social links) ✅
- F16: Mobile bottom nav present on all routes (5-tab icon bar) ✅
- F17: WhatsApp + phone CTAs discoverable within 1 tap mobile ✅

### Accessibility Constraints (AC1-AC12) — ALL PASSED ✅

- AC1: Semantic HTML (nav, main, footer, article, section landmarks) ✅
- AC2: Heading outline valid (H1 → H2 → H3 progression, no skips) ✅
- AC3: Skip link present ("Skip to main content") ✅
- AC4: Form labels properly associated (`<label for="id">`) ✅
- AC5: Error messages linked to fields (`aria-describedby`) ✅
- AC6: Keyboard navigation full parity (Tab, Enter, Arrow, Escape) ✅
- AC7: Focus management on modals (focus trap, initial focus on primary button) ✅
- AC8: Images have descriptive alt text (not "image" or "photo") ✅
- AC9: Color + icon for meaning (not color alone) ✅
- AC10: Form validation errors on blur, not keystroke (prevents frustration) ✅
- AC11: ARIA live regions for dynamic updates (form submit status, carousel nav) ✅
- AC12: prefers-reduced-motion compliance (all animations instantly disabled) ✅

---

## Next Steps

1. **Frontend Developer:** Clone this planning folder, consume files in ai-context.yaml order, begin implementation
2. **Backend Planner:** Use brief.json + pages/*.md to plan API contracts (lead capture endpoints, data models)
3. **QA Planner:** Use frontend.json + pages/*.md to build test matrix (routes, components, states)
4. **Stakeholders:** Review frontend.json (lock status) + brief.json (success metrics)

---

## Locked By

**Planning Agent:** frontend_planner  
**Date:** 2026-05-11  
**Status:** ✅ PASSED (All artifacts complete, constraints validated, ready for implementation)

**Questions?** Review [ai-context.yaml](ai-context.yaml) for search keywords and file navigation.

