# Component Spec: Lightbox

**Group:** Content  
**Type:** Organism  
**Route scope:** Portfolio page, ImageGallery anywhere

---

## Purpose

Full-screen image viewer overlay triggered from gallery items. Supports keyboard navigation, swipe (mobile), and caption display.

---

## States

| State | Behavior |
|-------|----------|
| `closed` | Not mounted (AnimatePresence) |
| `open` | Full-screen overlay with current image |
| `loading` | Spinner while image loads |
| `navigating` | Prev/next transition |

---

## ARIA / Keyboard / Focus

- `role="dialog"`, `aria-modal="true"`, `aria-label="Image viewer"`
- Focus trap within lightbox
- Keyboard: Arrow Left/Right navigate; Escape closes; Tab cycles between Prev/Next/Close buttons
- Image: `alt` text shown as caption below

---

## Navigation

- Previous/Next buttons (arrow icons, 48px touch target)
- Close button (X, top-right)
- Slide position indicator: "3 / 12"
- Swipe gesture (mobile): TouchStart + TouchMove + TouchEnd tracking

---

## Responsive Declarations

| Breakpoint | Behavior |
|------------|----------|
| `< sm` | Full screen; swipe navigation; no button labels (icon only) |
| `sm+` | Centered with dark backdrop; max 90vw × 90vh image |

---

## Motion Declarations

| Trigger | Target | Approach | Duration | Reduced-motion |
|---------|--------|----------|----------|----------------|
| Open | overlay | `opacity 0→1` | 200ms | Instant |
| Open | image | `scale 0.95→1` | 250ms | Instant |
| Navigate | image swap | `translateX ±20px + opacity 0→1` | 200ms | Instant swap |
| Close | overlay | `opacity 1→0` | 150ms | Instant |
