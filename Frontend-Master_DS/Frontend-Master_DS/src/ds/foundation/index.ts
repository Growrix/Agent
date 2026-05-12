export * as a11y from "./a11y";
export * as motion from "./motion";
export * as semantics from "./semantics";
export * as tokens from "./tokens";
export * from "./themes";

// Direct re-exports of the motion preset registry so consumers can pick
// presets by id without resorting to the `motion.MOTION_PRESETS` namespace.
export {
  MOTION_PRESETS,
  MOTION_PRESET_IDS,
  getMotionPreset,
  MOTION_REDUCED_MEDIA_QUERY,
  type MotionPreset,
  type MotionPresetId,
} from "./motion";
