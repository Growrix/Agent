# Component Spec: TrustChip

**Group:** Hero & Section  
**Type:** Atom  
**Route scope:** HeroSection, CTABand, any trust reinforcement context

---

## Purpose

Small pill/badge displaying a single trust signal (e.g., "NABCEP Certified", "4.9★ Rating", "Free Assessment"). Designed for placement on dark or media backgrounds — must always guarantee contrast.

---

## Variants

| Variant | Description |
|---------|-------------|
| `dark-pill` | Default for hero use — `background: rgba(0,0,0,0.6)`, white text |
| `light-pill` | For light sections — white background, dark text, subtle border |
| `amber-accent` | For CTA bands — amber background, dark text |
| `icon-text` | With leading icon (lucide-react, 14px) + text |

---

## States

| State | Behavior |
|-------|----------|
| `default` | Static pill, no interaction |
| `interactive` | Optional hover (scale 1.02, slight opacity lift) for clickable chips |
| `dark-theme` | Adapts contrast tokens — same visual weight |

---

## Contrast Contract

- **Dark pill on dark/media backgrounds:** `background: rgba(0,0,0,0.6)`, `color: white` → guaranteed 4.5:1 contrast
- **Light pill on light surfaces:** `background: white`, `color: var(--color-neutral-900)`, `border: 1px solid var(--color-neutral-200)` → guaranteed contrast
- **Amber accent:** `background: var(--color-primary-500)`, `color: var(--color-neutral-900)` → meets 4.5:1

---

## ARIA / Keyboard / Focus

- Non-interactive: rendered as `<span>` — decorative
- Interactive: `<button>` or `<a>` with appropriate aria-label

---

## Responsive Declarations

| Breakpoint | Behavior |
|------------|----------|
| `< sm` | Font size: 10px; padding: 4px 8px |
| `sm+` | Font size: 12px; padding: 6px 12px |

---

## Motion Declarations

| Trigger | Target | Approach | Duration | Easing | Reduced-motion |
|---------|--------|----------|----------|--------|----------------|
| Mount (in hero) | chip | Stagger entrance from HeroSection orchestration | 200ms | `ease-out` | Instant |
| Hover (interactive) | chip | `scale(1.02)` | 100ms | `ease-out` | No scale |

---

## Content Keys

- Chips receive text directly from parent component (no standalone content key — content varies per page context)
