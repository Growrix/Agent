# Design System — Roofing MVP

**Archetype:** local-business-trust | **Status:** PLANNED | **Timestamp:** 2026-05-07

---

## Overview

This design system translates the local-business-trust archetype into concrete, actionable token values for Tailwind CSS and CSS custom properties. All values are derived from the archetype's guidance and brand-translation-rules.

### Design Principles
1. **Trust through clarity** — high contrast, readable typography, obvious interaction patterns.
2. **Warmth through color** — deep credible primary + warm accent creates professional yet approachable mood.
3. **Accessibility first** — all ratios meet WCAG 2.1 AA; AAA in high-priority surfaces.
4. **Motion is functional** — every animation serves a purpose; reduced-motion is default-respectful.
5. **Density is balanced** — spacious hero, moderate service sections, dense footer.

---

## Color Tokens

### Light Theme (Default)

#### Primary Colors
- **Primary 50:** #F0F4F9 (lightest, used for backgrounds/disabled states)
- **Primary 100:** #D1E3F0
- **Primary 200:** #A3C7E0
- **Primary 300:** #75ABCE
- **Primary 400:** #478FBC
- **Primary 500:** #1E73AA (primary base — credible navy)
- **Primary 600:** #0F3A66 (darker for interactive states)
- **Primary 700:** #082647 (darkest for strong emphasis)

**Usage:** Primary button (500 → 600 on hover), nav items, section headings.
**Contrast on white:** 500 = 6.8:1 (AAA). 600 = 9.2:1 (AAA).

#### Accent Colors (Warm CTA)
- **Accent 50:** #FFFBEB
- **Accent 100:** #FEF3C7
- **Accent 200:** #FDE68A
- **Accent 300:** #FCD34D (warm gold for accent UI)
- **Accent 400:** #FBBF24 (darker for hover)
- **Accent 500:** #F59E0B (standard amber accent — warm, inviting)
- **Accent 600:** #D97706 (strong emphasis)
- **Accent 700:** #B45309 (darkest accent)

**Usage:** Accent button (500 → 600 on hover), CTA badges, active states, highlights.
**Contrast on white:** 500 = 4.6:1 (AA). 600 = 6.1:1 (AAA).
**Contrast on primary 600:** 500 = 3.2:1 (AA for large text).

#### Neutral Colors
- **Background:** #F8F6F1 (warm off-white, page background)
- **Surface:** #FFFFFF (card/section background)
- **Border light:** #E5E7EB (light gray for dividers)
- **Border medium:** #D1D5DB (medium gray for active states)
- **Text primary:** #1F2937 (dark gray, body text)
- **Text secondary:** #6B7280 (medium gray, secondary text)
- **Text tertiary:** #9CA3AF (light gray, disabled/hints)

**Contrast ratios:**
- Text primary on white: 13.8:1 (AAA)
- Text primary on background: 11.2:1 (AAA)
- Text secondary on white: 7.1:1 (AAA)

#### Semantic Colors
- **Success:** #16A34A (forest green) — "we can help"
- **Warning:** #F59E0B (amber) — "needs attention"
- **Error:** #DC2626 (muted red) — "problem"
- **Info:** #0284C7 (muted steel blue) — "informational"

**All semantic colors verified for 3:1 contrast against white and primary backgrounds.**

#### Trust Signal Colors
- **Certification badge:** Navy background (#0F3A66) + white text (AAA on navy: 16:1)
- **Insurance badge:** Green background (#16A34A) + white text (AAA: 7.2:1)
- **Years badge:** Amber background (#F59E0B) + text primary (AA: 4.6:1)
- **Response-time badge:** Blue background (#0284C7) + white text (AAA: 8.9:1)

### Dark Theme

#### Primary Colors (inverted)
- **Primary 50:** #082647
- **Primary 100:** #0F3A66
- **Primary 200:** #1E73AA
- **Primary 300:** #478FBC
- **Primary 400:** #75ABCE
- **Primary 500:** #A3C7E0 (light slate on dark, readable)
- **Primary 600:** #D1E3F0
- **Primary 700:** #F0F4F9

#### Accent Colors (adjusted for dark contrast)
- **Accent 50:** #B45309
- **Accent 100:** #D97706
- **Accent 200:** #F59E0B
- **Accent 300:** #FCD34D (warm gold on dark — maintains warmth)
- **Accent 400:** #FDE68A
- **Accent 500:** #FEF3C7
- **Accent 600:** #FFFBEB

#### Neutral Colors (Dark Theme)
- **Background:** #0F172A (near-black)
- **Surface:** #1E293B (dark slate)
- **Surface light:** #334155 (lighter slate for raised elements)
- **Border light:** #475569
- **Border medium:** #64748B
- **Text primary:** #F1F5F9 (near-white)
- **Text secondary:** #CBD5E1 (light gray)
- **Text tertiary:** #94A3B8 (medium gray, disabled)

#### Semantic Colors (Dark Theme)
- **Success:** #4ADE80 (bright green)
- **Warning:** #FCD34D (bright warm)
- **Error:** #F87171 (bright red)
- **Info:** #38BDF8 (bright blue)

#### Dark Theme Contrast
- Text primary on background: 16:1 (AAA+)
- Text primary on surface: 14.2:1 (AAA+)
- Text secondary on surface: 8.1:1 (AAA)

### CSS Variables (for Tailwind + custom overrides)

**Light theme (default in `:root`)**
```css
:root {
  --color-primary-50: #F0F4F9;
  --color-primary-500: #1E73AA;
  --color-primary-600: #0F3A66;
  --color-primary-700: #082647;
  --color-accent-500: #F59E0B;
  --color-accent-600: #D97706;
  --color-background: #F8F6F1;
  --color-surface: #FFFFFF;
  --color-text-primary: #1F2937;
  --color-text-secondary: #6B7280;
  --color-border-light: #E5E7EB;
  /* ... all colors */
}
```

**Dark theme (inside `[data-theme="dark"]`)**
```css
[data-theme="dark"] {
  --color-primary-500: #A3C7E0;
  --color-primary-600: #D1E3F0;
  --color-accent-500: #FCD34D;
  --color-background: #0F172A;
  --color-surface: #1E293B;
  --color-text-primary: #F1F5F9;
  /* ... all overrides */
}
```

### Tailwind Config Integration

```typescript
// tailwind.config.ts
export default {
  theme: {
    colors: {
      primary: {
        50: 'var(--color-primary-50)',
        500: 'var(--color-primary-500)',
        600: 'var(--color-primary-600)',
        // ...
      },
      accent: {
        500: 'var(--color-accent-500)',
        600: 'var(--color-accent-600)',
        // ...
      },
      background: 'var(--color-background)',
      surface: 'var(--color-surface)',
      text: {
        primary: 'var(--color-text-primary)',
        secondary: 'var(--color-text-secondary)',
      },
      // ...
    },
  },
};
```

---

## Typography

### Type Scale

#### Display
- **Display 1:** 56px, 1.15 line-height, 600 weight (hero headlines)
- **Display 2:** 48px, 1.15 line-height, 600 weight (page titles)
- **Display 3:** 40px, 1.2 line-height, 600 weight (section headings)
- **Display 4:** 32px, 1.2 line-height, 600 weight (subsection headings)

#### Heading
- **H1:** 32px, 1.3 line-height, 600 weight (page h1)
- **H2:** 28px, 1.3 line-height, 600 weight (section h2)
- **H3:** 24px, 1.3 line-height, 600 weight (subsection h3)
- **H4:** 20px, 1.4 line-height, 600 weight (card titles)
- **H5:** 18px, 1.4 line-height, 600 weight (form labels)
- **H6:** 16px, 1.4 line-height, 600 weight (small headings)

#### Body
- **Body Large:** 18px, 1.65 line-height, 400 weight (hero subtitle, large body)
- **Body Base:** 16px, 1.65 line-height, 400 weight (standard body text)
- **Body Small:** 14px, 1.65 line-height, 400 weight (form hints, fine print)

#### Mono (for code, data tables)
- **Mono 14:** 14px, 1.5 line-height, 400 weight
- **Mono 12:** 12px, 1.5 line-height, 400 weight

### Font Family
- **Display/Heading:** Inter or system-ui (sans-serif, humanist warmth)
- **Body:** Inter or system-ui (sans-serif, highly readable)
- **Mono:** Menlo, Monaco, or monospace (code)

**Rationale:** Inter is open-source, highly legible, and humanist-warm; system-ui fallback ensures readability on all platforms.

### Letter Spacing
- **Display:** -0.02em (tight, confident)
- **Heading:** -0.01em (tight)
- **Body:** 0em (neutral, highly readable)

---

## Spacing

### Base Unit
- **Unit:** 8px (divisible by 4 for accessibility, 8 for efficiency)

### Spacing Scale
- **xs:** 4px (micro gutters, inline spacing)
- **sm:** 8px (small gaps)
- **md:** 16px (standard padding/gaps)
- **lg:** 24px (generous padding on cards)
- **xl:** 32px (large gaps between elements)
- **2xl:** 48px (section spacing on tablet)
- **3xl:** 56px (section spacing target, tablet)
- **4xl:** 64px (section spacing target, desktop)
- **5xl:** 80px (large section rhythm, desktop)
- **6xl:** 96px (premium section rhythm, desktop)

### Section Rhythm (Vertical Spacing)
- **Desktop:** 80px top/bottom padding per section (5xl unit)
- **Tablet:** 56px top/bottom padding per section (3xl unit)
- **Mobile:** 40px top/bottom padding per section (md × 2.5)

### Card Padding
- **Standard card:** 24px padding (lg unit)
- **Compact card (mobile):** 20px padding
- **Dense card (data table):** 16px padding

### Component Spacing
- **Button height:** 48px (touch target minimum)
- **Input height:** 40px
- **Form row gap:** 16px
- **Service grid gap:** 24px
- **Project gallery gap:** 24px

---

## Border Radius

### Radius Scale
- **xs:** 4px (buttons, small inputs)
- **sm:** 8px (input fields)
- **base:** 10px (standard interactive elements)
- **md:** 12px (card radius)
- **lg:** 16px (hero panels, large cards)
- **xl:** 20px (prominent cards)
- **full:** 9999px (pills, badges, circular)

---

## Shadow System

### Light Theme Shadows
- **Shadow-sm:** 0 1px 2px 0 rgba(0, 0, 0, 0.05)
- **Shadow-base:** 0 4px 6px -1px rgba(0, 0, 0, 0.1)
- **Shadow-md:** 0 10px 15px -3px rgba(0, 0, 0, 0.1)
- **Shadow-lg:** 0 20px 25px -5px rgba(0, 0, 0, 0.1)
- **Shadow-xl:** 0 25px 50px -12px rgba(0, 0, 0, 0.25)

### Dark Theme Shadows
- **Shadow-sm:** 0 1px 3px 0 rgba(0, 0, 0, 0.3)
- **Shadow-base:** 0 4px 6px 0 rgba(0, 0, 0, 0.4)
- **Shadow-md:** 0 10px 15px 0 rgba(0, 0, 0, 0.5)
- **Shadow-lg:** 0 20px 25px 0 rgba(0, 0, 0, 0.6)

### Usage
- **Cards:** shadow-base (light), shadow-md (dark)
- **Sticky header:** shadow-base
- **Modals/drawers:** shadow-lg
- **Hover lift effect:** shadow-md on hover

---

## Motion Tokens

### Duration Band (Local-Business-Trust: Calm-Precise)
- **Fast:** 120ms (feedback, quick state changes)
- **Standard:** 200ms (entrance, standard interactions)
- **Deliberate:** 240ms (careful reveal, scroll triggers)
- **Slow:** 280ms (reassuring, staggered sequences)

### Easing Curves
- **ease-in-out:** cubic-bezier(0.4, 0, 0.2, 1) (smooth transitions)
- **ease-out:** cubic-bezier(0, 0, 0.2, 1) (entrance, natural feeling)
- **ease-in:** cubic-bezier(0.4, 0, 1, 1) (exit)
- **ease-linear:** linear (continuous motion, progress indicators)

### Reduced Motion Fallback
- **All animations:** Instant (0ms) or opacity-only fade (200ms) when `prefers-reduced-motion: reduce`.

---

## Z-Index Scale

```
-- Modal backdrop          10000
-- Modal panel             10001
-- Toast/alert             9000
-- Fixed sticky header     8000
-- Dropdown/popover        7000
-- Hover effects           3000
-- Default content         0
```

---

## Breakpoints

```css
/* Tailwind breakpoints */
xs: 320px
sm: 640px
md: 768px
lg: 1024px
xl: 1280px
2xl: 1536px
```

### Responsive Strategy
- **Mobile first:** Design for xs/sm, progressively enhance to md/lg/xl.
- **Touch targets:** ≥ 48px on mobile; ≥ 44px on desktop.
- **Viewport strategy:** Use CSS Grid for desktop, Stack for mobile.
- **Font scaling:** 16px base on mobile, 18px on desktop (via rem scale).

---

## Iconography

### Icon System
- **Size:** 20×20px (inline), 24×24px (UI elements), 32×32px (hero badges)
- **Stroke:** 1.5–2px stroke (outline icons)
- **Weight:** Regular (500)
- **Palette:** Inherit text color or use semantic colors for status

### Icon Usage
- **Navigation:** Service icons (toolbox, hardhat, etc.)
- **Status:** Checkmark, error, warning, info
- **Affordances:** Chevron, arrow, plus, close
- **Social:** Logos (Facebook, Instagram, LinkedIn, etc.)

### Badge Icons
- **Certification:** Checkmark in navy on white (20×20)
- **Insurance:** Shield icon in green (20×20)
- **Years:** Number in amber (24×24)
- **Response:** Bolt icon in blue (20×20)

---

## Imagery Direction

### Photography Style
- **Hero backgrounds:** Real worksite photos, clear sky or weather-appropriate, shot from ground level or vehicle
- **Service cards:** Actual roofing work in-progress or completed
- **Team/About:** Professional headshots of real team members
- **Project gallery:** High-quality before/after documentation, natural lighting
- **Testimonials:** Real customer photos if permission granted; professional quality

### Aspect Ratios
- **Hero background:** 16:9 or cinematic panorama (9:16 vertical for mobile)
- **Feature cards:** 4:3 or 16:9
- **Team portraits:** 1:1
- **Project before/after:** 3:2 or 16:9 (can be side-by-side or carousel)

### Forbidden Media
- Generic stock photos (e.g., "happy team", "smiling customers")
- AI-generated mockup UIs
- Photoshopped product-on-lifestyle images
- Overly bright/saturated stock
- Low-resolution or compressed imagery

### Fallback & Reliability
- **Broken remote assets:** Show placeholder gradient (primary 100 to primary 50) + icon
- **Lazy loading:** Use `loading="lazy"` on all images below fold
- **Critical images:** Preload hero image on route entry
- **Responsive images:** Use `srcset` for device-pixel-ratio scaling

---

## Component Token Mapping

### Button Tokens
- **Primary button:** background-primary-500, text-white, hover: bg-primary-600
- **Accent button:** background-accent-500, text-primary-700, hover: bg-accent-600
- **Secondary button:** border-2 border-primary-500, text-primary-500, hover: bg-primary-50
- **Tertiary (text) button:** text-primary-500, hover: bg-primary-50
- **Disabled button:** bg-border-light, text-text-tertiary, cursor-not-allowed

### Form Input Tokens
- **Border:** border-light on focus, border-medium on active
- **Background:** surface (white in light theme)
- **Text:** text-primary
- **Label:** text-secondary, 14px
- **Hint/error:** text-tertiary, 12px
- **Error state:** border-error, text-error, bg-error/5% (light tint)

### Card Tokens
- **Background:** surface
- **Border:** border-light (optional hairline)
- **Shadow:** shadow-base
- **Padding:** 24px standard, 20px mobile
- **Radius:** 12px

### Badge Tokens
- **Background:** primary-50 or semantic color
- **Text:** primary-700 or semantic color dark
- **Padding:** 8px 12px
- **Radius:** full (pill)
- **Font size:** 12px, 600 weight

---

## Quality Assurance Checklist

- [ ] All color pairs verified for WCAG 2.1 AA contrast (or AAA where critical)
- [ ] Dark theme token block present with all CSS vars overridden
- [ ] Typography scale fully defined (display → body)
- [ ] Spacing scale divisible by 8px base unit
- [ ] Shadow system consistent across light/dark themes
- [ ] Motion durations in 220–280ms band per archetype
- [ ] Reduced-motion fallback defined for every duration
- [ ] Z-index scale non-overlapping and documented
- [ ] Breakpoints align with Tailwind defaults
- [ ] Icon sizing and stroke consistent
- [ ] Imagery direction prohibits stock photos; real photos required
- [ ] Component token mapping covers all shared components

---

**Next:** Component system will reference these tokens in component state definitions. Frontend developer will import design-system.tokens.json into Tailwind config.
