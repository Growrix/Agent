# Component Spec: HeroSection

**Group:** Hero & Section  
**Type:** Organism  
**Route scope:** Every public-facing route hero

---

## Purpose

The primary hero organism for all public pages. Implements full-bleed layout, animated text reveal, gradient overlay on media backgrounds, and trust chip placement. Every route uses HeroSection but with different props driving visual variance.

---

## Variants

| Variant | Description |
|---------|-------------|
| `media-background` | Photo/video background with gradient overlay (Home, Services, Portfolio) |
| `dark-surface` | No photo — dark navy surface (Calculator, Certifications, News) |
| `light-surface` | Clean white/light surface (Resources, FAQ alternate) |
| `split` | 2-column: content left + media right (Service Area, About) |
| `compact` | Reduced height (45–55svh) for Tier 3 pages |
| `full` | Min-height 100svh (Home only) |

---

## States

| State | Behavior |
|-------|----------|
| `loading` | Background skeleton at `var(--color-neutral-100)` |
| `loaded` | Full hero renders with entrance animation |
| `reduced-motion` | Text visible immediately; no stagger; static counter values |
| `dark-theme` | Adapts: dark surface + light text (consistent in both modes) |

---

## Required Props (conceptual)

- `variant` — selects layout mode
- `eyebrow` — small label above H1
- `headline` — H1 text
- `subheadline` — supporting copy
- `ctaPrimary` — primary button config
- `ctaSecondary` — secondary button config
- `backgroundSrc` — image/video source (for media-background variant)
- `trustChips[]` — array of TrustChip props
- `overlayOpacity` — ≥ 0.55 (enforced)

---

## ARIA / Keyboard / Focus

- Section: `<section aria-labelledby="hero-heading">`
- H1: `id="hero-heading"`
- Background media: `aria-hidden="true"`
- Gradient overlay: `aria-hidden="true"`

---

## Responsive Declarations

| Breakpoint | Behavior |
|------------|----------|
| `< sm` | H1: 24px; subheadline: 16px; stacked CTAs; trust chips wrap or hide |
| `sm–md` | H1: 28–32px; 2-col chips row; CTA row |
| `lg+` | H1: 44–52px; subheadline: 18–20px; trust chips inline row |
| `full variant` | `min-height: 100svh` all breakpoints |
| `compact variant` | `min-height: 45svh` (sm), `55svh` (lg+) |

---

## Gradient Overlay Contract

- Minimum `opacity: 0.55` — never below this
- Direction: `linear-gradient(to right, rgba(0,0,0,0.75) 40%, rgba(0,0,0,0.25) 100%)` for split-left; `linear-gradient(to bottom, rgba(0,0,0,0.6), rgba(0,0,0,0.4))` for center
- Trust chips on dark backgrounds: `background: rgba(0,0,0,0.6)` with white text (guaranteed contrast)

---

## Motion Declarations

| Trigger | Target | Approach | Duration | Easing | Reduced-motion |
|---------|--------|----------|----------|--------|----------------|
| Mount | Eyebrow | `opacity 0→1 + translateY 12→0` | 300ms | `ease-out` | Instant visible |
| Mount +100ms | H1 (word stagger) | Each word: `opacity 0→1 + translateY 10→0` | 350ms per word | `ease-out` | Instant visible |
| Mount +300ms | Subheadline | `opacity 0→1` | 300ms | `ease-out` | Instant visible |
| Mount +450ms | CTAs | `opacity 0→1 + translateY 8→0` | 250ms | `ease-out` | Instant visible |
| Mount +550ms | Trust chips | Stagger 80ms each | 200ms | `ease-out` | Instant visible |

---

## Content Keys

- `[page].hero.eyebrow`
- `[page].hero.headline`
- `[page].hero.subheadline`
- `[page].hero.cta_primary`
- `[page].hero.cta_secondary`
- `[page].hero.trust_chips[]`
