# Component Spec: IconButton

**Group:** Buttons  
**Type:** Atom  
**Route scope:** Header (ThemeSwitcher, social icons), Carousel, Lightbox, MobileMenu close

---

## Purpose

Square or circular button with icon only. No text label. Requires `aria-label` for accessibility. Used for icon-only actions throughout the UI.

---

## Variants

| Variant | Description |
|---------|-------------|
| `ghost` | Transparent fill; icon changes color on hover |
| `outline` | Thin border + icon |
| `filled` | Solid fill (small variant of PrimaryButton/SecondaryButton) |

---

## States

| State | Behavior |
|-------|----------|
| `default` | Icon at rest |
| `hover` | Icon color shift to primary; slight scale 1.05 |
| `active` | Scale 0.95 |
| `focused` | Visible focus ring |
| `disabled` | Opacity 0.4 |

---

## Sizing

| Size | Dimensions | Icon size |
|------|------------|-----------|
| `sm` | 28×28px | 14px |
| `md` | 36×36px | 18px |
| `lg` | 44×44px | 20px |

---

## ARIA / Keyboard / Focus

- REQUIRED: `aria-label` on every IconButton
- `<button>` element
- Minimum touch target: 44×44px (visual size may be smaller with invisible padding)

---

## Motion Declarations

| Trigger | Target | Approach | Duration | Reduced-motion |
|---------|--------|----------|----------|----------------|
| Hover | icon | `scale(1.05)` | 100ms | No scale |
