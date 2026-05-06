---
document_type: component-spec
component: StepIndicator
component_class: molecule
file_path: src/components/shared/StepIndicator.tsx
build_stage: 3-component-foundation
depends_on:
  - design-system.md
  - motion-system.md
content_keys_consumed: []
---

# StepIndicator

## 1. Purpose
Displays a short, scannable process (e.g., “Call → Assess → Repair → Follow-up”) on service detail pages.

## 2. Variants
- horizontal
- vertical

## 3. Props (zod-style schema)
```ts
{
  variant: 'horizontal' | 'vertical',
  steps: Array<{
    id: string,
    titleKey?: string,
    titleFromData?: string,
    state: 'pending' | 'current' | 'complete' | 'error',
  }>,
}
```

## 4. States
Required per step: `pending`, `current`, `complete`, `error`.

- pending: muted
- current: primary emphasis
- complete: success emphasis
- error: destructive emphasis

## 5. Accessibility
- Semantic list; current step announced.

## 6. Responsive Behavior
- mobile: vertical or horizontally scrollable rail.
- desktop: horizontal.

## 7. Motion
- Micro: step state change highlight (purpose: clarity).
- Reduced-motion: instant.

## 8. Composition examples
- Service detail “How it works” section.

## 9. Forbidden uses
- Do not exceed 6 steps.

## 10. Test plan
- Visual: states present.

## 11. Related
- Pages: `pages/services-[slug].md`
