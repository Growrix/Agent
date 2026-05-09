# Component System — Apex Roofing Co.

**Run:** 20260509T1200-roofing

---

## Part 1 — Primitive Kit Declaration

This project uses the following layout and behaviour primitives from the standard primitive kit. Each is configured with project-specific token defaults.

### Layout Primitives

| Primitive | Project config | Default token override |
|-----------|---------------|----------------------|
| `Stack` | Vertical rhythm; default gap `--space-6` | Section-level gap: `--space-section-y-mobile` |
| `Cluster` | Horizontal grouping; default gap `--space-3` | Badge clusters: `--space-2` |
| `Frame` | Bounded surface; default radius `--radius-card`, padding `--space-card-padding`, shadow `--shadow-md` | Hero inner panels: `--radius-hero` |
| `Surface` | Layered background; supports `light`, `dark`, `inset`, `overlay` variants | Dark variant: `--color-dark-bg` |
| `Grid` | Multi-column; 1 → 2 → 3 → 4 columns across breakpoints; supports 60/40 asymmetry | Service grid default: 3 cols at `lg` |
| `MediaFrame` | Aspect-ratio-locked image; `sizes` required; `loading="lazy"` except LCP hero | Hero: `loading="eager"`, `priority={true}` |
| `Trail` | Step indicator for quote form progress; horizontal on desktop, vertical on mobile | — |
| `Reveal` | Scroll-triggered visibility via `IntersectionObserver`; pairs with Framer Motion `useInView` | threshold: 0.15, once: true |

### Behaviour Primitives

| Primitive | Project usage |
|-----------|--------------|
| `Pressable` | Wraps every button, CTA, icon button; owns hover / focus-visible / active / disabled / loading states |
| `Disclosure` | FAQ accordion, nav dropdown, mobile nav sheet, filter panels |
| `Selection` | Service type selection in quote form, area chips |
| `TextField` | All form inputs: name, phone, email, postcode, textarea |
| `Surface (modal)` | Mobile nav sheet, ThemeSwitcher dropdown, image lightbox |

---

## Part 2 — Composition Rules

### Hero Composition Rules

Heroes are the highest-latitude surfaces. Every hero must differ in layering, text placement, and motion key moment. Three composition patterns are used — no route reuses the same one:

**Pattern A — Full-Bleed Cinematic (used: Home, Roof Replacement):**
- `Surface(overlay)` over `MediaFrame(hero)` with gradient `linear-gradient(to bottom, rgba(15,25,35,0.15) 0%, rgba(15,25,35,0.70) 60%, rgba(15,25,35,0.90) 100%)`
- Content: `Stack(overline + display headline [word-by-word reveal] + lead subhead + Cluster(CTAs) + Cluster(TrustBadges))`
- Text anchored: left-bottom-third on desktop, left-centered on mobile
- Min-height: `100svh`

**Pattern B — Editorial Split (used: Roof Installation, About):**
- `Grid(60/40)`: left panel = `Stack(overline + h1 + lead + CTAs + TrustBadgeCluster)`, right panel = `MediaFrame` with `--radius-hero` clipping
- Background: `--color-primary` (dark) or `--color-background` (light) per route
- No gradient overlay — direct content side
- Min-height: `80vh`

**Pattern C — Utility Dark (used: Services overview, Emergency Repair, Areas, Contact):**
- Full-width dark `Surface` section
- Content: `Stack(overline + h1 + lead + CTAs)` centered or left-aligned per route
- Optional: floating `Frame` stats cluster bottom-right
- No full-bleed media — relies on texture or abstract background pattern

### Service Card Composition

Used on `/services` overview and home "capability map" section:

```
Frame(
  MediaFrame(4/3 worksite photo)
  Stack(
    overline-label (service category)
    h3 (service name)
    body-sm (1-line value prop)
    Cluster(
      AreaCoverageChip (optional)
      Pressable → arrow-right CTA
    )
  )
)
```

Hover state: `--shadow-lg`, translate `0 -4px`, `--motion-duration-base` ease-out.

### Testimonial Card Composition

Used on `/reviews`, Home social proof section:

```
Frame(
  Cluster(star-icons [5 filled] + source badge)
  blockquote (body-lg, italic, --color-text)
  Cluster(
    MediaFrame(portrait, 1/1, --radius-full)
    Stack(
      span (customer name, --font-weight-semibold)
      span (area + service type, --color-text-muted, body-sm)
    )
  )
)
```

### Quote Form Composition

Short variant (inline, 5 fields):
```
Frame(--radius-xl, --shadow-xl, --color-surface)
  Stack(
    h3 (form headline)
    Grid(2-col)
      TextField (first name)
      TextField (phone)
    Selection (service type — chips)
    TextField (postcode)
    TextField (textarea — brief description)
    Pressable (submit CTA, full width, accent)
  )
```

Long variant (`/quote` page): Same but with Trail (step progress) and expanded validation feedback.

### Counter Cluster Composition

Used as trust strip below hero and on dark CTA band:
```
Grid(4-col desktop, 2-col mobile)
  Frame(inset, centered)
    span (number, font-mono, font-weight-display, --font-size-display-2)
    span (label, overline, --color-text-muted or --color-dark-text-muted)
```

Counters animate count-up on `Reveal` trigger, once. Reduced-motion: show final value instantly.

---

## Part 3 — Project Component List

All components live under `web/src/components/`. File paths below are implementation targets for `frontend_developer`.

### Global / Shared

| Component | Path | Spec |
|-----------|------|------|
| `SiteHeader` | `global/SiteHeader.tsx` | [SiteHeader.md](components/SiteHeader.md) |
| `SiteFooter` | `global/SiteFooter.tsx` | [SiteFooter.md](components/SiteFooter.md) |
| `MobileBottomNav` | `global/MobileBottomNav.tsx` | [MobileBottomNav.md](components/MobileBottomNav.md) |
| `StickyCallPill` | `global/StickyCallPill.tsx` | [StickyCallPill.md](components/StickyCallPill.md) |
| `ThemeSwitcher` | `global/ThemeSwitcher.tsx` | [ThemeSwitcher.md](components/ThemeSwitcher.md) |
| `SkipToContent` | `global/SkipToContent.tsx` | Inline spec (visually hidden, shown on focus) |

### Primitives

| Primitive | Path |
|-----------|------|
| `Stack` | `primitives/Stack.tsx` |
| `Cluster` | `primitives/Cluster.tsx` |
| `Frame` | `primitives/Frame.tsx` |
| `Surface` | `primitives/Surface.tsx` |
| `Grid` | `primitives/Grid.tsx` |
| `MediaFrame` | `primitives/MediaFrame.tsx` |
| `Trail` | `primitives/Trail.tsx` |
| `Reveal` | `primitives/Reveal.tsx` |
| `Pressable` | `primitives/Pressable.tsx` |
| `Disclosure` | `primitives/Disclosure.tsx` |
| `Selection` | `primitives/Selection.tsx` |
| `TextField` | `primitives/TextField.tsx` |

### Trust + Proof

| Component | Path | Spec |
|-----------|------|------|
| `TrustBadgeCluster` | `trust/TrustBadgeCluster.tsx` | [TrustBadgeCluster.md](components/TrustBadgeCluster.md) |
| `ReviewAggregateBar` | `trust/ReviewAggregateBar.tsx` | [ReviewAggregateBar.md](components/ReviewAggregateBar.md) |
| `TestimonialCard` | `trust/TestimonialCard.tsx` | [TestimonialCard.md](components/TestimonialCard.md) |
| `CounterCluster` | `trust/CounterCluster.tsx` | [CounterCluster.md](components/CounterCluster.md) |
| `BeforeAfterSlider` | `trust/BeforeAfterSlider.tsx` | [BeforeAfterSlider.md](components/BeforeAfterSlider.md) |
| `CertBadge` | `trust/CertBadge.tsx` | Inline: SVG badge + label chip |

### Services

| Component | Path | Spec |
|-----------|------|------|
| `ServiceCard` | `services/ServiceCard.tsx` | [ServiceCard.md](components/ServiceCard.md) |
| `ServiceHeroSplit` | `services/ServiceHeroSplit.tsx` | [ServiceHeroSplit.md](components/ServiceHeroSplit.md) |
| `ProcessStep` | `services/ProcessStep.tsx` | Numbered step: icon + title + body |
| `PricingPosture` | `services/PricingPosture.tsx` | Starts-at pricing or "contact for quote" |

### Conversion

| Component | Path | Spec |
|-----------|------|------|
| `QuoteFormWidget` | `conversion/QuoteFormWidget.tsx` | [QuoteFormWidget.md](components/QuoteFormWidget.md) |
| `AreaCoverageChip` | `conversion/AreaCoverageChip.tsx` | Inline: chip with location pin + area name |
| `EmergencyCTABand` | `conversion/EmergencyCTABand.tsx` | Dark red band: urgency copy + phone CTA |

### Navigation + Areas

| Component | Path | Spec |
|-----------|------|------|
| `ServiceDropdown` | `nav/ServiceDropdown.tsx` | Hover/click dropdown from Services nav link |
| `AreaGrid` | `areas/AreaGrid.tsx` | Grid of area chips + search |
| `AreaCard` | `areas/AreaCard.tsx` | Area name + count of jobs + CTA |

### Blog

| Component | Path |
|-----------|------|
| `BlogCard` | `blog/BlogCard.tsx` |
| `BlogGrid` | `blog/BlogGrid.tsx` |

---

## Part 4 — State Matrix (per interactive class)

Every interactive component must implement all applicable states below. States marked * are mandatory for all interactive components.

| State | Trigger | Visual treatment |
|-------|---------|-----------------|
| `default` * | No interaction | Base token values |
| `hover` * | Mouse over (desktop) | Translate + shadow upgrade, color shift per token |
| `focus-visible` * | Keyboard Tab / click | `--color-focus-ring` 3px outline, 2px offset |
| `active` / `pressed` * | Mouse down / touch | Scale down 0.97, brightness 0.95 |
| `disabled` * | `disabled` prop | Opacity 0.45, cursor not-allowed, no interaction |
| `loading` * | Async action pending | Spinner replaces label/icon, same size, not-allowed cursor |
| `error` | Form validation fail | `--color-destructive` border + helper text |
| `success` | Form submit success | `--color-success` border + helper text or toast |
| `empty` | No data to display | Empty state component (illustration + CTA) |
| `skeleton` | Data loading | Shimmer skeleton matching content shape |

### CTA Button states

Primary accent button (`Pressable` + accent styling):
- default: `--color-accent` bg, `--color-accent-foreground` text
- hover: `--color-accent-hover` bg, `--shadow-accent` glow, translate `0 -2px`
- active: translate `0 0`, shadow removed
- focus-visible: `--color-focus-ring` 3px ring
- disabled: opacity 0.45
- loading: spinner left-padded, label hidden

### Form field states

`TextField` primitive:
- default: `--color-input` bg, `--color-border` border
- focus: `--color-ring` border (2px), `--shadow-sm`
- error: `--color-destructive` border, error message below
- disabled: `--color-inset` bg, text-muted, no interaction
- filled (has value): label floats up (floating label pattern)
