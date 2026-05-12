# Component Spec: FeedbackBand

**Group:** Calculator  
**Type:** Molecule  
**Route scope:** ROI Calculator (results area), Free Assessment (results step)

---

## Purpose

A contextual feedback strip that appears within the calculator or assessment results to provide personalized qualitative commentary based on the calculated results. Reinforces the value of getting a full assessment.

---

## Variants

| Variant | Description |
|---------|-------------|
| `positive` | Green band — "Excellent solar potential" |
| `moderate` | Amber band — "Good solar potential" |
| `advisory` | Neutral/gray band — edge case advisory (low bill, renter, etc.) |

---

## Trigger Logic

| Condition | Variant | Message |
|-----------|---------|---------|
| Annual savings > $4,000 | `positive` | "Excellent solar potential! Your area and usage profile are ideal for solar." |
| Annual savings $2,000–$4,000 | `moderate` | "Good solar potential. You could offset 60–80% of your bill." |
| Annual savings < $2,000 | `advisory` | "Lower bill — solar may still make sense depending on incentives. A free assessment will confirm." |
| Renter property type | `advisory` | "Solar typically requires ownership — but ask your landlord!" |
| Bill < $75/mo | `advisory` | "Very low electricity costs — your solar ROI may be limited. Let's discuss battery storage options." |

---

## ARIA / Keyboard / Focus

- `role="status"` and `aria-live="polite"` so screen readers announce changes
- Not interactive — display only

---

## Motion Declarations

| Trigger | Target | Approach | Duration | Reduced-motion |
|---------|--------|----------|----------|----------------|
| Variant change | band background + text | Cross-fade | 300ms | Instant |

---

## Content Keys

- `calculator.feedback.positive`
- `calculator.feedback.moderate`
- `calculator.feedback.advisory.*`
