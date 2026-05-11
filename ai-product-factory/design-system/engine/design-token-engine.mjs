function clone(value) {
  return JSON.parse(JSON.stringify(value));
}

function selectPreset(themePresets, requestedPresetId) {
  const presets = themePresets?.presets ?? [];
  return presets.find((preset) => preset.id === requestedPresetId) ?? presets[0] ?? {
    id: 'modern-saas',
    personality: 'precise',
    density: 'balanced',
    motion: 'restrained',
    radius: 'rounded'
  };
}

export function composeDesignTokens(brief, baseTokens, themePresets) {
  const preset = selectPreset(themePresets, brief?.brandPersonality?.style);
  const tokens = clone(baseTokens);
  const brandPalette = brief?.brandPalette ?? {
    secondary: '#0f766e',
    accent: '#f97316',
    surface: '#f8fafc',
    darkSurface: '#04151f'
  };

  tokens.theme.light.color.secondary = brandPalette.secondary;
  tokens.theme.light.color.accent = brandPalette.accent;
  tokens.theme.light.color.surface = brandPalette.surface;
  tokens.theme.dark.color.secondary = '#34d399';
  tokens.theme.dark.color.accent = '#fb923c';
  tokens.theme.dark.color.surface = brandPalette.darkSurface;
  tokens.typography.fontFamilies.display = preset.id === 'editorial-premium' ? 'Sora' : baseTokens.typography.fontFamilies.display;
  tokens.typography.fontFamilies.body = 'Manrope';
  tokens.radii.lg = preset.radius === 'soft' ? '1.5rem' : baseTokens.radii.lg;
  tokens.motion.personality = preset.motion;
  tokens.motion.reducedMotionBehavior = 'Disable transform-heavy transitions and keep opacity-only feedback.';

  return {
    selectedPreset: preset,
    brand: {
      name: brief?.projectName ?? 'AI Product Factory Demo',
      tone: brief?.brandPersonality?.tone ?? 'confident',
      density: brief?.brandPersonality?.density ?? preset.density,
      palette: brandPalette
    },
    narrative: {
      direction: 'Editorial premium SaaS system with measured contrast, structured spacing, and clear conversion surfaces.',
      interactionEnergy: brief?.brandPersonality?.motion ?? preset.motion,
      visualIdentity: preset.id
    },
    theme: tokens.theme,
    typography: tokens.typography,
    spacing: tokens.spacing,
    radii: tokens.radii,
    shadows: tokens.shadows,
    motion: tokens.motion
  };
}
