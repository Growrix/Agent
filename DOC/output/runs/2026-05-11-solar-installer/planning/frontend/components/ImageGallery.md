# Component Spec: ImageGallery

**Group:** Content  
**Type:** Organism  
**Route scope:** Portfolio page, About page, Services detail

---

## Purpose

Masonry or grid image gallery with filter support, lazy loading, and Lightbox integration. Supports filtering by tag/category.

---

## Variants

| Variant | Description |
|---------|-------------|
| `masonry` | Variable-height Pinterest-style layout — Portfolio default |
| `uniform-grid` | Equal-size thumbnails — Services, About |
| `carousel` | Horizontal scroll (wraps Carousel component) |

---

## States

| State | Behavior |
|-------|----------|
| `loading` | Skeleton rectangles at expected positions |
| `loaded` | All images rendered; filter bar visible |
| `filtered` | Non-matching images fade out + collapse |
| `empty-filter` | EmptyState shown |
| `dark-theme` | Background adapts; image outlines |

---

## ARIA / Keyboard / Focus

- `<ul role="list">` of `<li>` items
- Each item: `<button aria-label="View [alt text] — opens image viewer">` (triggers Lightbox)
- Keyboard: Tab through items; Enter opens Lightbox

---

## Responsive Declarations

| Breakpoint | Behavior |
|------------|----------|
| `< sm` | 1-column |
| `sm–lg` | 2-column masonry |
| `lg+` | 3–4 column masonry |

---

## Motion Declarations

| Trigger | Target | Approach | Duration | Reduced-motion |
|---------|--------|----------|----------|----------------|
| Filter | non-matching items | `opacity 1→0 + scale 1→0.95` | 300ms | Instant hide |
| Filter | matching items | `opacity 0→1 + scale 0.95→1` | 300ms | Instant show |
| Image hover | thumbnail | `scale(1.03)` inside overflow | 350ms | No scale |
