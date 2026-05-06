---
document_type: component-spec
component: Badge
component_class: atom
file_path: src/components/ui/Badge.tsx
build_stage: 3-component-foundation
depends_on:
  - design-system.md
  - motion-system.md
content_keys_consumed: []
---

# Badge

## 1. Purpose
Small status/attribute label used for trust signals (licensed/insured), availability, and category tags.

## 2. Variants
- neutral
- primary
- success
- warning
- info

## 3. Props (zod-style schema)
```ts
{
  variant: 'neutral' | 'primary' | 'success' | 'warning' | 'info',
  size: 'sm' | 'md',
  labelKey?: string,
  labelFromData?: string,
}
```

## 4. States
Required states: `default`.

- default:
  - neutral: surface `--color-inset`, text `--color-text`
  - primary: surface uses `--color-primary`, text `--color-primary-foreground`
  - semantic variants use their matching color tokens

## 5. Accessibility
- Semantic element: `<span>`.
- If used as a status that updates dynamically, wrap in a live region at the section level (not by default).

## 6. Responsive Behavior
- mobile: wraps to multiple lines in tight rows.
- tablet/desktop: inline.

## 7. Motion
- None required.

## 8. Composition examples
- Trust strip: `Badge(success)` for “Licensed” and “Insured”.

## 9. Forbidden uses
- Do not use badges as interactive controls.

## 10. Test plan
- Visual: each semantic variant meets contrast.

## 11. Related
- [HeroSection](HeroSection.md)
- Pages: `pages/home.md`, `pages/services-[slug].md`
