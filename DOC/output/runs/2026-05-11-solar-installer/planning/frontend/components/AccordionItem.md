# Component Spec: AccordionItem

**Group:** Content  
**Type:** Molecule  
**Route scope:** FAQAccordion (child), any collapsible content

---

## Purpose

Single accordion item: trigger button (question/heading) + content panel (answer/body). Used as the base unit within FAQAccordion.

---

## States

| State | Behavior |
|-------|----------|
| `closed` | Content hidden; chevron pointing down |
| `open` | Content visible; chevron pointing up |
| `focused` | Trigger button has visible focus ring |
| `hovered` | Trigger background lighten; text → amber |

---

## ARIA / Keyboard / Focus

- Radix Accordion.Item + Accordion.Trigger + Accordion.Content
- Trigger: `role="button"`, `aria-expanded`, `aria-controls`
- Content: `id` matched to trigger `aria-controls`; `role="region"`

---

## Motion Declarations

Inherits from FAQAccordion. No additional component-level animation.

---

## Content Keys

- `question` and `answer` passed from parent FAQAccordion
