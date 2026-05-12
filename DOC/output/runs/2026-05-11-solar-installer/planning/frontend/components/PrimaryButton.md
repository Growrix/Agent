# Component Spec: PrimaryButton

**Group:** Buttons  
**Type:** Atom  
**Route scope:** All pages — primary conversion action

---

## Purpose

The site's primary CTA button. Used for "Get Free Assessment", "Download Guide", "Submit Form", etc. Highest visual weight button.

---

## Variants

| Variant | Description |
|---------|-------------|
| `default` | Amber fill, dark text, full border-radius |
| `dark-bg` | Same amber but with enhanced shadow for dark backgrounds |
| `loading` | Spinner replaces label (form submit) |

---

## States

| State | Behavior |
|-------|----------|
| `default` | Amber fill `var(--color-primary-500)` |
| `hover` | `var(--color-primary-600)` + `translateY(-1px)` + shadow deepen |
| `active/pressed` | `var(--color-primary-700)` + `translateY(0)` |
| `focused` | 2px amber outline, 2px offset |
| `disabled` | `opacity: 0.5`; `cursor: not-allowed` |
| `loading` | Disabled + spinner icon replaces label |
| `dark-theme` | Same amber — invariant in both themes |

---

## Sizing

| Size | Height | Padding | Font |
|------|--------|---------|------|
| `sm` | 36px | 8px 16px | 14px |
| `md` (default) | 44px | 12px 24px | 16px |
| `lg` | 52px | 16px 32px | 18px |

---

## ARIA / Keyboard / Focus

- `<button type="button">` or `<button type="submit">`
- `aria-busy="true"` when loading
- `aria-disabled="true"` when disabled (not native `disabled` attr, preserves keyboard focus)
- `<a>` variant for navigation CTAs with `href`

---

## Motion Declarations

| Trigger | Target | Approach | Duration | Reduced-motion |
|---------|--------|----------|----------|----------------|
| Hover | button | `translateY(-1px)` + shadow | 150ms | Shadow only |
| Press | button | `translateY(0)` | 80ms | Instant |

---

## Content Keys

- Label text passed via `children` or `label` prop
