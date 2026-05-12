# Component Spec: ROICalculator

**Group:** Calculator  
**Type:** Organism  
**Route scope:** Solar Calculator page, Financing page (embedded simplified variant)

---

## Purpose

The primary calculator organism. Manages state for all inputs (sliders, dropdowns, toggles) and orchestrates the ResultsDisplay. Performs savings calculation as a pure client-side function with no network calls on input change.

---

## Variants

| Variant | Description |
|---------|-------------|
| `full` | 2-panel layout (inputs left, results right) — Solar Calculator page |
| `embedded` | Single-column compact — Financing page sidebar |

---

## States

| State | Behavior |
|-------|----------|
| `initial` | Default values loaded (CA, $175/mo, Residential, Loan) |
| `user-adjusted` | Any input changed; results update within 200ms |
| `email-idle` | Email estimate form untouched |
| `email-sending` | POST in progress; button disabled + spinner |
| `email-sent` | Inline success message |
| `email-error` | Error message |
| `low-bill-edge` | Monthly bill < $75 → advisory note shown |
| `dark-theme` | Adapts all sub-components |

---

## Calculation Logic (Conceptual)

```
annualKWh = (monthlyBill / stateAvgRate) × 12
systemSizeKW = annualKWh / 1,400 (avg CA sun hours)
systemCostEstimate = systemSizeKW × $2,800 (avg $/W)
federalCredit = systemCostEstimate × 0.30
annualSavings = annualKWh × stateAvgRate × 0.85 (solar offset factor)
payback = (systemCostEstimate - federalCredit) / annualSavings
monthlyLoanPayment = PMT(5.99%/12, 240, systemCostEstimate - federalCredit)
```

State avg rates and incentives stored in static `data/state-solar-data.json`.

---

## ARIA / Keyboard / Focus

- Calculator region: `<section aria-label="Solar savings calculator">`
- Results panel: `aria-live="polite"` — announces result updates to screen readers
- All sub-components follow their own ARIA specs

---

## Sub-components Consumed

- `RangeSlider` — monthly bill input
- `SelectDropdown` — state selector
- `RadioGroup` — property type, financing preference
- `ResultsDisplay` — real-time results panel
- `TextInput` — email estimate field
- `PrimaryButton` — submit CTA

---

## Responsive Declarations

| Breakpoint | Behavior |
|------------|----------|
| `< lg` | Single-column (inputs above results) |
| `lg+` | 2-panel side-by-side (`full` variant) |

---

## Motion Declarations

Results update: no spinner — numbers transition via CSS `transition: all 150ms ease-out` on the number values inside `ResultsDisplay`.

---

## Content Keys

- `calculator.inputs.*`
- `calculator.results.*`
- `calculator.disclaimer`
- `calculator.email.*`
