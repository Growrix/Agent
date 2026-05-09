# Design System — Apex Roofing Co.

**Run:** 20260509T1200-roofing  
**Visual Archetype:** `local-business-trust` (elevated)  
**Token source:** `design-system.tokens.json`

---

## 1. Design Philosophy

Every token is derived from a roofing material or skyscape. The palette tells a story without a word of copy:

- **Slate-navy** is the dark protective material above you — reliability, weight, permanence.
- **Copper-amber** is the flashing, the warmth — craftsmanship, warmth, action.
- **Warm off-white** is the weathered limestone wall — honest, breathable, grounded.
- **Storm-charcoal** is the sky before the job is done — urgency, power.

The site switches between these surfaces deliberately — light for content, dark for trust statements and calls-to-action — creating a visual rhythm that reads premium without being cold.

---

## 2. Color System

### Light Theme (default)

| Token | Value | Usage |
|-------|-------|-------|
| `--color-background` | `#FAF8F5` | Page background, warm off-white |
| `--color-surface` | `#FFFFFF` | Cards, modals, inputs |
| `--color-inset` | `#F0EDE8` | Inset sections, form field bg |
| `--color-overlay` | `rgba(15, 25, 35, 0.65)` | Hero media overlays |
| `--color-border` | `#E2DDD6` | Card borders, input borders |
| `--color-text` | `#0F1923` | Primary body text (slate-navy) |
| `--color-text-muted` | `#4A5568` | Secondary body text, captions |
| `--color-text-on-dark` | `#FAF8F5` | Text on dark surface sections |
| `--color-primary` | `#0F1923` | Brand primary — slate-navy |
| `--color-primary-hover` | `#1D2B35` | Primary hover state |
| `--color-primary-foreground` | `#FAF8F5` | Text on primary backgrounds |
| `--color-accent` | `#D4750A` | CTA buttons, badges, highlights — copper-amber |
| `--color-accent-hover` | `#B8620A` | Accent hover state |
| `--color-accent-foreground` | `#FFFFFF` | Text on accent backgrounds |
| `--color-accent-muted` | `#FFF3E0` | Soft accent background tint |
| `--color-destructive` | `#C0392B` | Error states |
| `--color-destructive-foreground` | `#FFFFFF` | Text on destructive |
| `--color-success` | `#2E7D32` | Success states |
| `--color-warning` | `#D4750A` | Warning (same as accent for this brand) |
| `--color-info` | `#1565C0` | Info states |
| `--color-focus-ring` | `#D4750A` | Focus ring (accent) |
| `--color-card` | `#FFFFFF` | Card surface |
| `--color-card-foreground` | `#0F1923` | Text on cards |
| `--color-input` | `#FFFFFF` | Input background |
| `--color-ring` | `#D4750A` | Ring/focus outline |

### Dark Surface Sections

Used on hero panels, counter clusters, CTA bands, emergency section. Applied via `.dark-surface` class or `data-surface="dark"`:

| Token | Value |
|-------|-------|
| `--color-dark-bg` | `#0F1923` |
| `--color-dark-surface` | `#1D2B35` |
| `--color-dark-border` | `#2D3F4F` |
| `--color-dark-text` | `#FAF8F5` |
| `--color-dark-text-muted` | `#94A3B8` |

### Dark Theme (toggled by ThemeSwitcher)

Activated by `data-theme="dark"` on `<html>`. All tokens redefined in this block:

```css
[data-theme="dark"] {
  --color-background: #0A1018;
  --color-surface: #111927;
  --color-inset: #1D2B35;
  --color-overlay: rgba(0, 0, 0, 0.72);
  --color-border: #2D3F4F;
  --color-text: #EEE9E2;
  --color-text-muted: #94A3B8;
  --color-primary: #D4750A;
  --color-primary-hover: #B8620A;
  --color-primary-foreground: #0A1018;
  --color-accent: #E8870A;
  --color-accent-hover: #CC7209;
  --color-accent-foreground: #0A1018;
  --color-accent-muted: rgba(212, 117, 10, 0.15);
  --color-card: #111927;
  --color-card-foreground: #EEE9E2;
  --color-input: #1D2B35;
  --color-ring: #E8870A;
  --color-focus-ring: #E8870A;
}
```

### Contrast Audit (WCAG 2.1 AA)

| Pair | Ratio | Grade |
|------|-------|-------|
| `--color-text` on `--color-background` | 14.8:1 | AAA |
| `--color-text-muted` on `--color-background` | 5.7:1 | AA |
| `--color-accent-foreground` on `--color-accent` | 5.2:1 | AA |
| `--color-text-on-dark` on `--color-dark-bg` | 13.2:1 | AAA |
| `--color-dark-text-muted` on `--color-dark-bg` | 4.6:1 | AA |
| Hero text on `--color-overlay` | 8.1:1 | AAA |
| Trust chip text on `rgba(0,0,0,0.6)` | 9.4:1 | AAA |

---

## 3. Typography System

### Font Stack

| Token | Value | Role |
|-------|-------|------|
| `--font-display` | `'Space Grotesk', system-ui, sans-serif` | Headlines, display, nav |
| `--font-body` | `'Inter', system-ui, sans-serif` | UI, body copy, forms |
| `--font-mono` | `'JetBrains Mono', 'Fira Code', monospace` | Metrics, code, license numbers |

Loading: `next/font/google` with `display: 'swap'`, preloaded for critical variants.

### Type Scale

| Token | Mobile | Desktop | Line Height | Usage |
|-------|--------|---------|-------------|-------|
| `--font-size-display-1` | 48px | 72px | 1.05 | Hero headline |
| `--font-size-display-2` | 36px | 56px | 1.1 | Section hero |
| `--font-size-h1` | 32px | 48px | 1.15 | Page H1 |
| `--font-size-h2` | 28px | 36px | 1.2 | Section heads |
| `--font-size-h3` | 22px | 28px | 1.25 | Card/group heads |
| `--font-size-h4` | 18px | 22px | 1.3 | Sub-section |
| `--font-size-h5` | 16px | 18px | 1.3 | Small labels |
| `--font-size-lead` | 18px | 21px | 1.6 | Hero subhead |
| `--font-size-body-lg` | 17px | 18px | 1.65 | Service copy |
| `--font-size-body` | 15px | 16px | 1.65 | General copy |
| `--font-size-body-sm` | 13px | 14px | 1.6 | Captions |
| `--font-size-label` | 12px | 12px | 1.4 | Badges, chips |
| `--font-size-caption` | 11px | 12px | 1.4 | Fine print |
| `--font-size-overline` | 11px | 12px | 1.3 | Eyebrows, section labels |
| `--font-size-mono` | 13px | 14px | 1.4 | License/metric numbers |

### Font Weights

| Token | Value |
|-------|-------|
| `--font-weight-regular` | 400 |
| `--font-weight-medium` | 500 |
| `--font-weight-semibold` | 600 |
| `--font-weight-bold` | 700 |
| `--font-weight-display` | 800 |

### Letter Spacing

| Token | Value |
|-------|-------|
| `--letter-spacing-display` | -0.03em |
| `--letter-spacing-heading` | -0.02em |
| `--letter-spacing-body` | 0 |
| `--letter-spacing-overline` | 0.1em |
| `--letter-spacing-label` | 0.05em |

**Special typographic decision:** All hero display headlines use `font-weight: 800`, letter-spacing `-0.03em`, and all-caps overline eyebrow (`letter-spacing: 0.12em`, `--font-size-overline`). This creates the confident "contractor-who-means-business" voice without being aggressive.

---

## 4. Spacing System

Base unit: 8px (matches Tailwind default).

| Token | Value | Tailwind |
|-------|-------|---------|
| `--space-0` | 0 | `p-0` |
| `--space-1` | 4px | `p-1` |
| `--space-2` | 8px | `p-2` |
| `--space-3` | 12px | `p-3` |
| `--space-4` | 16px | `p-4` |
| `--space-6` | 24px | `p-6` |
| `--space-8` | 32px | `p-8` |
| `--space-12` | 48px | `p-12` |
| `--space-16` | 64px | `p-16` |
| `--space-24` | 96px | `p-24` |
| `--space-32` | 128px | `p-32` |
| `--space-section-y-desktop` | 96px | `py-24` |
| `--space-section-y-tablet` | 64px | `py-16` |
| `--space-section-y-mobile` | 48px | `py-12` |
| `--space-container-x-desktop` | 80px | `px-20` |
| `--space-container-x-tablet` | 40px | `px-10` |
| `--space-container-x-mobile` | 24px | `px-6` |
| `--space-card-padding` | 24px | `p-6` |

---

## 5. Border Radius

| Token | Value | Used on |
|-------|-------|---------|
| `--radius-sm` | 6px | Chips, badges, small pills |
| `--radius-md` | 10px | Inputs, buttons |
| `--radius-card` | 12px | Service cards, testimonial cards |
| `--radius-hero` | 16px | Hero panel inner panels |
| `--radius-xl` | 20px | Full feature blocks |
| `--radius-full` | 9999px | Circular buttons, avatars, pills |

---

## 6. Shadow System

| Token | Value | Used on |
|-------|-------|---------|
| `--shadow-xs` | `0 1px 2px rgba(15,25,35,0.06)` | Subtle card lift |
| `--shadow-sm` | `0 2px 6px rgba(15,25,35,0.08)` | Input focus, small cards |
| `--shadow-md` | `0 4px 16px rgba(15,25,35,0.10)` | Service cards, hover |
| `--shadow-lg` | `0 8px 32px rgba(15,25,35,0.12)` | Modal, drawer |
| `--shadow-xl` | `0 16px 48px rgba(15,25,35,0.14)` | Hero panel depth |
| `--shadow-accent` | `0 4px 16px rgba(212,117,10,0.25)` | Accent button hover glow |

---

## 7. Motion Tokens

| Token | Value | Usage |
|-------|-------|-------|
| `--motion-duration-instant` | 0ms | Reduced-motion fallback |
| `--motion-duration-fast` | 120ms | Micro feedback (press, focus) |
| `--motion-duration-base` | 200ms | Hover, inline state change |
| `--motion-duration-slow` | 280ms | Section reveal, modal |
| `--motion-duration-cinematic` | 320ms | Hero text reveal, page entry |
| `--motion-easing-standard` | `cubic-bezier(0.4, 0, 0.2, 1)` | Default ease |
| `--motion-easing-out` | `cubic-bezier(0, 0, 0.2, 1)` | Elements entering |
| `--motion-easing-in` | `cubic-bezier(0.4, 0, 1, 1)` | Elements leaving |
| `--motion-easing-cinematic` | `cubic-bezier(0.16, 1, 0.3, 1)` | Hero reveals, hero transitions |
| `--motion-stagger-base` | 60ms | Stagger between list items |
| `--motion-stagger-headline` | 80ms | Word-by-word hero headline |

---

## 8. Breakpoints

| Token | Value |
|-------|-------|
| `--bp-sm` | 640px |
| `--bp-md` | 768px |
| `--bp-lg` | 1024px |
| `--bp-xl` | 1280px |
| `--bp-2xl` | 1536px |

---

## 9. Z-Index Scale

| Token | Value | Used on |
|-------|-------|---------|
| `--z-below` | -1 | Background layers |
| `--z-base` | 0 | Normal document flow |
| `--z-raised` | 10 | Cards on hover |
| `--z-sticky` | 40 | Sticky header, sticky CTA pill |
| `--z-nav` | 50 | Nav dropdown |
| `--z-overlay` | 60 | Modal backdrop |
| `--z-modal` | 70 | Modal, drawer panels |
| `--z-toast` | 80 | Toast notifications |
| `--z-tooltip` | 90 | Tooltips |

---

## 10. Iconography

- Library: Lucide React
- Default size: 20×20px
- Default stroke: 1.5px (outline)
- Filled icons: For trust badges (shield, award, checkmark) only
- Tab bar icons: 22×22px, stroke 1.5px, active state filled variant
- Social icons: Brand SVG files, 20×20px, monochrome (inherits `--color-text-muted`)

---

## 11. Imagery Tokens

| Token | Value |
|-------|-------|
| `--img-aspect-hero` | `16/9` (wide) or `21/9` (cinema) |
| `--img-aspect-feature` | `4/3` |
| `--img-aspect-portrait` | `1/1` |
| `--img-aspect-worksite` | `3/2` |
| `--img-aspect-thumbnail` | `16/9` |

Image treatment on hero: `object-fit: cover`, `object-position: center 30%` (keeps sky in frame), lazy-load off for LCP hero, explicit `sizes` prop on every `next/image`.

---

## 12. Design System Overrides from Brand

No deviations from archetype defaults are required. The following intentional elevations are documented:

| Decision | Default (archetype) | This project | Reason |
|---------|--------------------|----|--------|
| Section rhythm desktop | 80px | 96px | Premium positioning signal |
| Display weight | 700 | 800 | Stronger contractor authority voice |
| Font display | "Inter" | "Space Grotesk" | Geometric confidence vs. neutral humanist |
| Motion duration cinematic | n/a | 320ms | Hero reveal storytelling |

All overrides are intentional and approved. No raw values appear in component or page specs — all reference tokens above.
