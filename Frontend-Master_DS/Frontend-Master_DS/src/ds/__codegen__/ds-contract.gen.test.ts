/**
 * @jest-environment node
 *
 * ds-contract.gen.test.ts
 *
 * Code-generation "test" that emits `generated/ds.contract.json`
 * by importing the section registry, archetype registry, motion preset
 * registry, theme registry, and site preset registry.
 *
 * Implemented as a Jest test because the project already has full TS pipeline
 * support inside Jest (next/jest + babel). No extra runtime dependency required.
 *
 * Failure modes (test fails when):
 *   - a registered variant declares a visual effect that its archetype does not permit
 *   - the contract cannot be written to disk
 *
 * Run via:  npm run ds:contract     (only this test)
 * Also runs as part of `npm test` so the contract stays in sync with sources.
 */

import { mkdirSync, writeFileSync } from "node:fs";
import path from "node:path";

import { ARCHETYPES } from "@/ds/foundation/themes/archetypeRegistry";
import { MOTION_PRESETS, type MotionPreset } from "@/ds/foundation/motion/presets";
import { THEMES } from "@/ds/foundation/themes/registry";
import { SECTION_VARIANT_META_LIST } from "@/ds/composition/sections/_registry";
import { SITE_PRESETS } from "@/site/index";

describe("ds.contract codegen", () => {
  test("emits generated/ds.contract.json", () => {
    const variants = SECTION_VARIANT_META_LIST.map((m) => ({
      id: m.id,
      kind: m.kind,
      archetype: m.archetype,
      label: m.label,
      description: m.description,
      supportsThemes: m.supportsThemes,
      motionPresets: m.motionPresets,
      effects: m.effects,
      density: m.density,
      complexity: m.complexity,
      isDefault: m.isDefault ?? false,
    }));

    const archetypes = Object.values(ARCHETYPES).map((a) => ({
      id: a.id,
      label: a.label,
      description: a.description,
      mood: a.mood,
      preferredScheme: a.preferredScheme,
      density: a.density,
      permissions: a.permissions,
      motionTemperament: a.motionTemperament,
      variantIdPrefixes: a.variantIdPrefixes,
    }));

    const motionPresets = (Object.values(MOTION_PRESETS) as MotionPreset[]).map((p) => ({
      id: p.id,
      description: p.description,
      category: p.category,
      duration: p.duration,
      ease: p.ease,
      staggerMs: p.staggerMs ?? null,
      transform: p.transform,
      repeat: p.repeat,
      yoyo: p.yoyo ?? false,
      reducedMotionFallback: p.reducedMotionFallback,
      className: p.className,
    }));

    const themes = THEMES.map((t) => ({
      name: t.name,
      label: t.label,
      colorScheme: t.colorScheme,
    }));

    const presets = Object.values(SITE_PRESETS).map((p) => ({
      id: p.id,
      label: p.label,
      archetype: p.archetype ?? null,
      pageIds: Object.keys(p.pages),
      pageSectionCounts: Object.fromEntries(
        Object.entries(p.pages).map(([pageId, page]) => [pageId, page.sections.length]),
      ),
    }));

    // Validate every variant's declared effects against its archetype permissions.
    type Violation = { variantId: string; effect?: string; archetype?: string; reason: string };
    const permissionViolations: Violation[] = [];
    for (const v of variants) {
      const arch = archetypes.find((a) => a.id === v.archetype);
      if (!arch) {
        permissionViolations.push({
          variantId: v.id,
          reason: `archetype "${v.archetype}" not found in registry`,
        });
        continue;
      }
      for (const [effect, used] of Object.entries(v.effects ?? {})) {
        if (used === true && (arch.permissions as Record<string, boolean>)[effect] !== true) {
          permissionViolations.push({
            variantId: v.id,
            effect,
            archetype: v.archetype,
            reason: `variant declares effect "${effect}" but archetype "${v.archetype}" does not permit it`,
          });
        }
      }
    }

    const contract = {
      version: "1.0",
      // generatedAt omitted to keep emitted file deterministic across test runs.
      counts: {
        variants: variants.length,
        archetypes: archetypes.length,
        motionPresets: motionPresets.length,
        themes: themes.length,
        presets: presets.length,
      },
      themes,
      archetypes,
      motionPresets,
      sectionVariants: variants,
      sitePresets: presets,
      validation: {
        permissionViolations,
        ok: permissionViolations.length === 0,
      },
    };

    const outDir = path.join(process.cwd(), "generated");
    mkdirSync(outDir, { recursive: true });
    const outPath = path.join(outDir, "ds.contract.json");
    writeFileSync(outPath, JSON.stringify(contract, null, 2) + "\n", "utf8");

    if (permissionViolations.length > 0) {
      console.error("ds.contract permission violations:");
      for (const v of permissionViolations) {
        console.error(`  - ${v.variantId}: ${v.reason}`);
      }
    }

    expect(permissionViolations).toEqual([]);
    expect(variants.length).toBeGreaterThan(0);
    expect(archetypes.length).toBeGreaterThan(0);
    expect(motionPresets.length).toBeGreaterThan(0);
    expect(themes.length).toBe(2); // dark + light, per project decision
  });
});
