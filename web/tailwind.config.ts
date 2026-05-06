import type { Config } from 'tailwindcss'

const config: Config = {
  content: ['./src/**/*.{ts,tsx}'],
  darkMode: ['class', '[data-theme="dark"]'],
  theme: {
    extend: {
      colors: {
        'brand-primary': 'var(--color-brand-primary)',
        'brand-primary-hover': 'var(--color-brand-primary-hover)',
        'brand-accent': 'var(--color-brand-accent)',
        'brand-accent-hover': 'var(--color-brand-accent-hover)',
        'text-strong': 'var(--color-text-strong)',
        'text-default': 'var(--color-text-default)',
        'text-muted': 'var(--color-text-muted)',
        'text-inverse': 'var(--color-text-inverse)',
        'surface-canvas': 'var(--color-surface-canvas)',
        'surface-base': 'var(--color-surface-base)',
        'surface-raised': 'var(--color-surface-raised)',
        'border-subtle': 'var(--color-border-subtle)',
        'border-strong': 'var(--color-border-strong)',
        'state-success': 'var(--color-state-success)',
        'state-warning': 'var(--color-state-warning)',
        'state-danger': 'var(--color-state-danger)',
        'state-info': 'var(--color-state-info)',
        'focus-ring': 'var(--color-focus-ring)',
      },
      fontFamily: {
        display: ['var(--font-display)'],
        body: ['var(--font-body)'],
        mono: ['var(--font-mono)'],
      },
      fontSize: {
        'display-hero': ['var(--text-display-hero)', { lineHeight: '1.05' }],
        'display-section': ['var(--text-display-section)', { lineHeight: '1.15' }],
        'title-fluid': ['var(--text-title)', { lineHeight: '1.3' }],
        'body-fluid': ['var(--text-body)', { lineHeight: '1.65' }],
        'caption-fluid': ['var(--text-caption)', { lineHeight: '1.5' }],
      },
      spacing: {
        'section-xxl': 'var(--space-section-xxl)',
        'section-xl': 'var(--space-section-xl)',
        'section-lg': 'var(--space-section-lg)',
        'section-md': 'var(--space-section-md)',
        'stack-lg': 'var(--space-stack-lg)',
        'stack-md': 'var(--space-stack-md)',
        'stack-sm': 'var(--space-stack-sm)',
        'inline-lg': 'var(--space-inline-lg)',
        'inline-md': 'var(--space-inline-md)',
        'inline-sm': 'var(--space-inline-sm)',
      },
      borderRadius: {
        sm: 'var(--radius-sm)',
        DEFAULT: 'var(--radius-md)',
        md: 'var(--radius-md)',
        lg: 'var(--radius-lg)',
        pill: 'var(--radius-pill)',
      },
      boxShadow: {
        sm: 'var(--shadow-sm)',
        md: 'var(--shadow-md)',
        lg: 'var(--shadow-lg)',
        hover: 'var(--shadow-hover)',
        focus: 'var(--shadow-focus)',
      },
      zIndex: {
        sticky: '40',
        overlay: '50',
        modal: '60',
        toast: '70',
      },
    },
  },
  plugins: [],
}

export default config
