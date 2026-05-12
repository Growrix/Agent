# Component Spec: Carousel

**Group:** Content  
**Type:** Organism  
**Route scope:** Testimonials page (featured cards), Home (testimonial section), Blog (mobile)

---

## Purpose

Horizontal card carousel with prev/next navigation, dot indicators, auto-play option, and touch/swipe support. Wraps CarouselNav.

---

## Variants

| Variant | Description |
|---------|-------------|
| `default` | Shows 1 card (mobile) or 3 cards (desktop) |
| `single-focus` | 1 card at a time, centered with blurred adjacent cards |
| `overflow-peek` | Shows partial next card to hint scrollability |

---

## States

| State | Behavior |
|-------|----------|
| `playing` | Auto-advances every 5s (stops on hover/focus) |
| `paused` | User has interacted; auto-play suspended |
| `at-start` | Prev button disabled |
| `at-end` | Next button disabled (or loops) |
| `loading` | Skeleton cards |

---

## ARIA / Keyboard / Focus

- `role="region"`, `aria-label="[content type] carousel"`
- `aria-live="off"` while auto-playing; `"polite"` when user navigates
- Prev/Next buttons: `aria-label="Previous [item type]"` / `"Next [item type]"`
- Pause button (if auto-play): `aria-label="Pause carousel"`
- Dot indicators: `role="tablist"` with `role="tab"`, `aria-selected`

---

## Responsive Declarations

| Breakpoint | Behavior |
|------------|----------|
| `< sm` | 1 card; swipe enabled; dots below |
| `sm–lg` | 2 cards; prev/next buttons |
| `lg+` | 3 cards; both buttons + dots |

---

## Motion Declarations

| Trigger | Target | Approach | Duration | Reduced-motion |
|---------|--------|----------|----------|----------------|
| Advance | card track | `translateX` slide | 350ms | Instant |
| Swipe | card track | Spring follow-finger | Real-time | N/A (no auto-advance) |
