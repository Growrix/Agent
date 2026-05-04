---
document_type: component-spec
component: StatCard
component_class: molecule
file_path: src/components/marketing/shared/stat-card.tsx
build_stage: 3-component-foundation
depends_on:
  - ../design-system.md
  - ../motion-system.md
content_keys_consumed:
  - component.stats.response_time_label
  - component.stats.jobs_completed_label
  - component.stats.satisfaction_label
---

# StatCard

## 1. Purpose
Highlight compact operational proof metrics in testimonial and trust strips.

## 2. Variants
- dark-strip
- white-card

## 3. Props (zod-style schema)
```ts
{
  value: string,
  labelKey: string,
  variant: 'dark-strip' | 'white-card'
}
```

## 4. States
- default
- reveal-count-up

## 5. Accessibility
- Value and label rendered as text, not images.

## 6. Responsive Behavior
- mobile: one per row in narrow strips.
- tablet and desktop: multi-column row.

## 7. Motion
- count-up on first reveal.
- reduced-motion fallback: static value.

## 8. Composition examples
- Home proof strip.
- Reviews metrics row.

## 9. Forbidden uses
- No looping counters.

## 10. Test plan
- Static fallback.
- Label rendering.

## 11. Related
- ../components/TestimonialCard.md