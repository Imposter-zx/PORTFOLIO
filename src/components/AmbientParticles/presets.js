/**
 * Ambient Particles — Configuration Presets
 * 
 * Pre-tuned configurations for common portfolio section types.
 * Use as a starting point, then customize for your specific aesthetic.
 */

export const PRESETS = {
  /**
   * Hero / Headline Sections
   */
  hero: {
    density: 0.10,
    enableParallax: true,
    description: 'Rich presence for hero sections. Full parallax engagement.',
  },

  /**
   * Text-Heavy Sections
   */
  textHeavy: {
    density: 0.04,
    enableParallax: false,
    description: 'Subtle presence for articles, case studies, about sections.',
  },

  /**
   * Gallery / Portfolio Grid
   */
  portfolio: {
    density: 0.07,
    enableParallax: true,
    description: 'Balanced presence for portfolio and gallery grids.',
  },

  /**
   * Contact / Call-to-Action Sections
   */
  cta: {
    density: 0.09,
    enableParallax: true,
    description: 'Engaging presence for contact or conversion sections.',
  },

  /**
   * Minimal / Zen Mode
   */
  minimal: {
    density: 0.03,
    enableParallax: false,
    description: 'Nearly invisible. For zen, minimalist aesthetics.',
  },

  /**
   * Mobile Optimized
   */
  mobile: {
    density: 0.05,
    enableParallax: false,
    description: 'Performance-optimized for mobile devices.',
  },
};

/**
 * Hook for React: useAmbientParticlesPreset
 */
export function useAmbientParticlesPreset(presetName) {
  const preset = PRESETS[presetName];
  if (!preset) {
    console.warn(`Unknown preset: ${presetName}. Falling back to 'portfolio'.`);
    return PRESETS.portfolio;
  }
  return preset;
}

/**
 * Responsive Preset Selector
 */
export function getResponsivePreset(basePreset) {
  const base = PRESETS[basePreset];

  // Mobile
  if (typeof window !== 'undefined' && window.innerWidth < 768) {
    return {
      ...base,
      density: Math.max(base.density * 0.6, 0.03),
      enableParallax: false,
    };
  }

  // Desktop
  return base;
}

/**
 * Custom Configuration Builder
 */
export function createCustomConfig(options) {
  const base = options.basePreset
    ? PRESETS[options.basePreset]
    : PRESETS.portfolio;

  // Validate density range
  const density = options.density ?? base.density;

  return {
    density: Math.max(0.01, Math.min(0.3, density)),
    enableParallax: options.enableParallax ?? base.enableParallax,
  };
}
