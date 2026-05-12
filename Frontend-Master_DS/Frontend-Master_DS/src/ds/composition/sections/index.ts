// Public re-exports for the section registry layer.
// Variant files themselves stay internal — consumers import via `SECTION_REGISTRY`.

export * from "./_schema";
export * from "./_registry";
export { toHeader } from "./_helpers";
