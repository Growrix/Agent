---
document_type: design-system
scope: site-wide
build_stage: 2-design-foundation
depends_on:
  - 00-master-ui-architecture.md
recommended_next_reads:
  - 02-component-system.md
---

# Design System

## Visual Direction
- Brand feel: modern local-trade premium.
- Tone: clean, confident, practical, and easy to trust.
- Default theme: light-first with crisp surfaces and strong contrast.
- Accent strategy: use one primary action color, one warm urgency accent, and one calm technical accent.

## Color Tokens
- Primary: `#0F766E` for core actions and trust.
- Primary hover: `#0B5E58`.
- Secondary: `#D97706` for urgency, highlights, and service callouts.
- Accent: `#1D4ED8` for technical notes and maps.
- Emergency: `#DC2626` for burst-pipe or after-hours warnings.
- Background: `#F7F8FA`.
- Surface: `#FFFFFF`.
- Inset surface: `#EAF0F3`.
- Border: `#D7DEE6`.
- Text primary: `#0F172A`.
- Text muted: `#556270`.
- Success: `#15803D`.
- Warning: `#B45309`.

## Typography
- Display and headings: Space Grotesk.
- Body and UI copy: Manrope.
- Numeric, timing, and diagnostic text: JetBrains Mono.
- Display scale: 72, 64, 56, 48.
- Heading scale: 40, 32, 28, 24, 20, 18.
- Body scale: 18, 16, 14.
- Label scale: 13 with semi-bold weight.

## Surface System
- Page base: bright neutral with subtle texture or a very light grid.
- Elevated surface: white card with hairline border and soft shadow.
- Inset surface: slightly cool neutral for filters, postcode lookup, and quote flows.
- Overlay surface: blurred dark sheet for mobile menus, booking, and chat.

## Spacing and Layout
- Base unit: 8px.
- Allowed scale: 4, 8, 12, 16, 24, 32, 48, 64, 96.
- Desktop rhythm: 88px to 96px between major sections.
- Mobile rhythm: 40px to 48px between major sections.
- Maximum content width: 1200px for dense content, 1440px for hero-led layouts.

## Motion Tokens
- Fast: 140ms.
- Standard: 200ms.
- Slow: 260ms.
- Easing: `cubic-bezier(0.22, 1, 0.36, 1)`.
- Motion usage: floating action cluster, chat entry, sheet opens, and card hover only.
- Reduced motion must collapse to instant or opacity-only transitions.

## Imagery and Media
- Use real plumbers, service vehicles, tools, fixtures, and before/after imagery.
- Prefer authentic photography and genuine suburb / map visuals.
- Avoid synthetic product mockups or generic stock photography that feels unrelated to the trade.
- Keep image treatments clean and editorial rather than overly glossy.

## Iconography
- Style: outline-first, easy to scan, consistent stroke weight.
- Core icons: phone, WhatsApp, chat, map pin, clock, shield, star, pipe, wrench, water drop.

## Mobile App-Like Rules
- Use the bottom-right floating action cluster as the primary utility launcher.
- Keep tap targets at least 44px.
- Avoid hover-only discovery paths.
- Keep the primary urgent action visually dominant, but not overwhelming.

## Accessibility Rules
- WCAG 2.1 AA contrast minimum.
- Visible focus rings for all interactive elements.
- Form labels must stay visible at all times.
- Status updates for quote, booking, and chat handoff must be announced to assistive tech.

## Content Density Rules
- Home and about pages should feel spacious and reassuring.
- Services, reviews, and FAQ can be moderately dense.
- Quote, book, and areas pages should be efficient and task-focused.

## Testability Guidance
- Centralise tokens in CSS variables or Tailwind config.
- Snapshot key states for the floating actions, quote form, postcode lookup, and chat launcher.
- Include light, mobile, and reduced-motion checks in visual QA.
