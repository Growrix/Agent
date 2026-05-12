# Component Spec: FormStepIndicator

**Group:** Forms  
**Type:** Molecule  
**Route scope:** Free Assessment multi-step form

---

## Purpose

Visual progress indicator for multi-step forms. Shows current step, completed steps, and total step count. Used in Free Assessment questionnaire.

---

## Variants

| Variant | Description |
|---------|-------------|
| `numbered-dots` | Default — numbered circles connected by line |
| `progress-bar` | Thin progress bar at top of form (for compact use) |

---

## States

| State | Behavior |
|-------|----------|
| `step-1-active` | Step 1 circle amber + filled; steps 2–N: gray unfilled |
| `step-n-complete` | Checkmark icon in circle; amber fill |
| `step-n-active` | Amber circle + step number |
| `step-n-pending` | Gray circle + step number |

---

## ARIA / Keyboard / Focus

- `<nav aria-label="Form progress">` or `<ol role="list">`
- Each step: `aria-current="step"` for active; `aria-label="Step [n] of [total]: [step name] — [complete|active|pending]"`

---

## Responsive Declarations

| Breakpoint | Behavior |
|------------|----------|
| `< sm` | Abbreviated: "Step 2 of 5" text only (no circles) |
| `sm+` | Full numbered dots |

---

## Motion Declarations

| Trigger | Target | Approach | Duration | Reduced-motion |
|---------|--------|----------|----------|----------------|
| Step advance | checkmark | Scale `0→1` in completing circle | 250ms | Instant |
| Progress line | fill | `scaleX 0→1` left-to-right | 400ms | Instant |

---

## Content Keys

- Step labels: `assessment.steps.[n].label`
