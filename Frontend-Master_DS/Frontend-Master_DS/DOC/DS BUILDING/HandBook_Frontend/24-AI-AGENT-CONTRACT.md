# Ch 24 — AI Agent Contract

## Purpose

This chapter mirrors the runtime contracts at the repo root:

- [`/AI-AGENT-CONTRACT.md`](../../../../AI-AGENT-CONTRACT.md) — human-readable rules
- [`/.ai-scope.json`](../../../../.ai-scope.json) — machine-readable scope
- [`/generated/ds.contract.json`](../../../../generated/ds.contract.json) — emitted runtime contract

It explains *why* the lockdown exists and *how* AI agents are expected to operate against this DS.

---

## §1 Why a lockdown contract exists

Without explicit scope, every AI agent (Copilot, Replit, Claude Code, custom orchestrators) reliably:

- edits token files mid-project, silently shifting every other project's palette
- duplicates existing primitives in random locations
- smuggles Tailwind / framer-motion / shadcn into a system that deliberately avoids them
- renames or removes variants other projects depend on
- introduces inline `style={{ color: "#abc123" }}` after the audit told them not to
- "refactors" the registry and breaks dispatch system-wide

The DS exists to make 10 different client projects all look intentional. An AI agent without scope discipline destroys that guarantee within one project.

---

## §2 The three discovery files

| File | Audience | Purpose |
|---|---|---|
| `AI-AGENT-CONTRACT.md` | human reviewers + agents that read markdown | Rules, allowed/forbidden actions, verification gate |
| `.ai-scope.json` | machine agents that prefer structured data | Glob lists for locked / extensible / consumable / project-content scopes |
| `generated/ds.contract.json` | agents picking variants for a brief | Live registry snapshot: variants, archetypes, motion presets, themes, presets |

Agents MUST read `AI-AGENT-CONTRACT.md` before doing anything in the repo. The other two files are referenced as needed.

---

## §3 The four scope classes

### Locked
DS core. Agents must not edit existing files. (Adding files in `composition/sections/variants/` and `src/site/presets/` is explicitly allowed per §4 even though they live under locked paths — those are the **extension surfaces**.)

### Extensible
- `src/ds/composition/sections/variants/**/*.tsx` — new section variants
- `src/site/presets/*.ts` — new industry presets

Agents may CREATE new files here following the documented convention. They must not EDIT existing files except for the single allowed surgical edit (the registry import + entry).

### Consumable
- `generated/ds.contract.json` — primary retrieval index
- `_registry.ts`, `_schema.ts` — registry types
- `archetypeRegistry.ts`, `motion/presets.ts`, `themes/registry.ts`, `publicSitePreset.ts` — type sources

Read freely. Do not edit.

### Project content
- `src/app/**`, `src/features/**`, `src/flows/**` — per-project routes + features + flows

Agents may freely edit these for a given project. The DS itself remains unaffected.

---

## §4 Workflow for AI agents

When given a brief that asks for a new section variant:

1. Read this chapter + `AI-AGENT-CONTRACT.md`.
2. Read `generated/ds.contract.json` to see what already exists. **If a variant matches, USE IT instead of building a new one.**
3. If a new variant is genuinely needed:
   - Pick a `kind` from the existing union.
   - Pick an `archetype` whose permission window covers the effects you'll use.
   - Create `src/ds/composition/sections/variants/<kind>/<variant-id>.tsx` per Ch 21 §3.
   - Add CSS at the bottom of `ds.section-variants.css`.
   - Add ONE import + ONE entry to `_registry.ts`.
   - Run `npm run ds:contract`. If permission violations fire, fix the variant or escalate to a human.
   - Run `npm run verify`. Any non-zero exit fails the extension.
4. If a new ARCHETYPE is genuinely needed (rare): escalate to a human first. Archetypes are project-wide commitments; agents do not create them autonomously.

---

## §5 Failure modes the contract catches

| Failure | Detected by | Outcome |
|---|---|---|
| Raw hex / rgb / px in non-token CSS | `ds:audit` | Build fails |
| Variant declares effect outside archetype permissions | `ds:contract` | Build fails |
| Type breakage in registry or variant | `typecheck` | Build fails |
| A11y regression in keyboard tests | `ds:a11y` | Build fails |
| Lint warning (any) | `lint --max-warnings 0` | Build fails |
| Missing reduced-motion fallback | (manual review against this chapter) | Code review fail |

---

## §6 Compatibility promise

Variant ids are a **public contract**. Once a variant ships:

- Its `id` MUST NOT change.
- Its content-shape contract (the section model fields it consumes) MUST NOT shrink.
- New optional fields MAY be added.
- Visual implementation MAY be refined.
- The variant MAY be flagged `deprecated: true`, but it MUST keep rendering until the next major DS version.

Breaking this promise breaks every site that consumes the DS.
