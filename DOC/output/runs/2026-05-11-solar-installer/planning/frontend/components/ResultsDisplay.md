# Component Spec: ResultsDisplay

**Group:** Calculator  
**Type:** Molecule  
**Route scope:** ROI Calculator (right panel)

---

## Purpose

Displays all calculated solar savings results in real-time as the user adjusts calculator inputs. Updates within 200ms of any input change.

---

## States

| State | Behavior |
|-------|----------|
| `default` | Shows initial default calculation results |
| `updating` | Numbers transition smoothly (CSS transition) |
| `loan-mode` | Shows monthly payment + "Cash positive from Month 1" |
| `cash-mode` | Shows payback period |
| `ppa-mode` | Shows utility savings % + "$0 upfront" |
| `low-bill-advisory` | Advisory note below results |
| `dark-theme` | Panel `var(--color-secondary-50)` → `var(--color-surface-dark-800)` |

---

## Displayed Metrics

| Metric | Color | Size |
|--------|-------|------|
| Annual Savings | `var(--color-primary-500)` (amber) | 48px |
| 25-Year Savings | `var(--color-secondary-600)` (teal) | 32px |
| System Size (kW) | `var(--color-neutral-700)` | 24px |
| Federal Tax Credit | `var(--color-success-600)` (green) | 24px |
| Monthly Payment (loan) or Payback (cash) | contextual | 22px |
| Cash-positive indicator (loan mode) | green badge | 14px |

---

## ARIA / Keyboard / Focus

- `aria-live="polite"` on the entire panel so screen readers announce significant value changes
- Metric labels: `<dt>` + values: `<dd>` in a `<dl>` for semantic key-value pairing
- No interactive elements within ResultsDisplay itself

---

## Responsive Declarations

| Breakpoint | Behavior |
|------------|----------|
| `< lg` | Inline below inputs; light teal card |
| `lg+` | Sticky right panel; height matches inputs panel |

---

## Motion Declarations

| Trigger | Target | Approach | Duration | Reduced-motion |
|---------|--------|----------|----------|----------------|
| Any input change | all metric numbers | CSS `transition: all 150ms ease-out` | 150ms | Instant update |

---

## Content Keys

- `calculator.results.annual_savings_label`
- `calculator.results.25yr_label`
- `calculator.results.system_size_label`
- `calculator.results.tax_credit_label`
- `calculator.results.monthly_payment_label`
- `calculator.disclaimer`
