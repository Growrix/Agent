# Component Spec: Modal

**Group:** Modal  
**Type:** Organism  
**Route scope:** AuthModal, FormSuccessModal, image lightbox alternative, confirmation dialogs

---

## Purpose

Base modal dialog built on Radix UI Dialog primitive. Handles backdrop, focus trap, dismiss on Escape, and AnimatePresence-based entrance/exit. All other modal-style overlays (Drawer, AuthModal, FormSuccessModal) extend this base.

---

## Variants

| Variant | Description |
|---------|-------------|
| `center` | Centered panel (default) — scales up from center |
| `full-mobile` | On `< md`, panel goes full-screen from bottom |

---

## States

| State | Behavior |
|-------|----------|
| `closed` | Not mounted (Radix unmounts on close) |
| `opening` | AnimatePresence entrance: `opacity 0→1` + `scale 0.95→1` |
| `open` | Static open state |
| `closing` | AnimatePresence exit: `opacity 1→0` + `scale 1→0.95` |

---

## ARIA / Keyboard / Focus

- `Radix Dialog.Root` / `Dialog.Portal` / `Dialog.Overlay` / `Dialog.Content`
- `aria-labelledby` → modal heading ID
- `aria-describedby` → modal description ID
- Focus trap: automatic via Radix
- Escape: closes modal
- Click backdrop: closes modal (dismissable) or locked (non-dismissable variant)

---

## Responsive Declarations

| Breakpoint | Behavior |
|------------|----------|
| `< md` | Full-screen bottom sheet (full-mobile variant) |
| `md+` | Centered panel, max-width 560px |

---

## Motion Declarations

| Trigger | Target | Approach | Duration | Reduced-motion |
|---------|--------|----------|----------|----------------|
| Open | overlay | `opacity 0→0.7` | 200ms | Instant |
| Open | panel | `scale 0.95→1 + opacity 0→1` | 250ms `easeOut` | Instant |
| Close | panel | `scale 1→0.95 + opacity 1→0` | 200ms | Instant |
