import type { Config } from 'tailwindcss'
import defaultTheme from 'tailwindcss/defaultTheme.js'

// Everything not-defined below falls back to:
// https://github.com/tailwindlabs/tailwindcss/blob/master/stubs/config.full.js

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  darkMode: 'class',
  theme: {
    // Scales generated with https://uicolors.app
    colors: {
      current: 'currentColor',
      white: '#FFFFFF',
      // Light-mode uses pink
      pink: {
        50: '#fef3ff',
        100: '#fde7ff',
        200: '#fbceff',
        300: '#fca7ff',
        400: '#f957ff', // This is our spot color
        500: '#f13ef7',
        600: '#d81edb',
        700: '#b615b4',
        800: '#951392',
        900: '#791674',
        950: '#51014d', // This is our black
      },
      // Dark mode uses blue
      blue: {
        50: '#f0f8ff',
        100: '#dff1ff',
        200: '#b8e3ff',
        300: '#57c1ff', // This is our spot color
        400: '#33b6fd',
        500: '#099cee',
        600: '#007ccc',
        700: '#0062a5',
        800: '#045488',
        900: '#052338',
        950: '#041c2f', // this is our black
      },
    },
    borderRadius: {
      full: '9999px',
      default: '1.875rem',
    },
    // Typescale h4-small from https://typescale.com (1.333 perfect)
    fontSize: {
      'flovan-lg': ['2.369rem', { lineHeight: '1.2' }],
      'flovan-md': ['1.777rem', { lineHeight: '1.25' }],
      'flovan-base': ['1.333rem', { lineHeight: '1.5' }],
      'flovan-sm': ['1rem', { lineHeight: '1.5' }],
      'flovan-xs': ['0.75rem', { lineHeight: '1.5' }],
    },
    fontWeight: {
      light: '300',
      normal: '400',
      semibold: '500',
      bold: '600',
      extrabold: '700',
      black: '900',
    },
    fontFamily: {
      sans: ['var(--font-sans)', ...defaultTheme.fontFamily.sans],
    },
    boxShadow: {
      sm: '0 1px 2px 0 rgb(0 0 0 / 0.05)',
      DEFAULT: '0 1px 3px 0 rgb(0 0 0 / 0.1), 0 1px 2px -1px rgb(0 0 0 / 0.1)',
      md: '0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1)',
      lg: '0 10px 15px -3px rgb(0 0 0 / 0.03), 0 4px 6px -4px rgb(0 0 0 / 0.05)',
      xl: '0 20px 25px -5px rgb(0 0 0 / 0.03), 0 8px 10px -6px rgb(0 0 0 / 0.05)',
      '2xl': '0 25px 50px -12px rgb(0 0 0 / 0.25)',
      inner: 'inset 0 2px 4px 0 rgb(0 0 0 / 0.05)',
      none: 'none',
    },
    extend: {
      colors: {
        primary: 'var(--primary)',
        'on-primary': 'var(--on-primary)',
        'on-primary-secondary': 'var(--on-primary-secondary)',
        background: 'var(--background)',
        'on-background': 'var(--on-background)',
        highlight: 'var(--highlight)',
      },
      spacing: {
        'flovan-xl': '12rem',
        'flovan-lg': '10rem',
        'flovan-md': '7rem',
        'flovan-base': '4rem',
        'flovan-sm': '1.5rem',
        'flovan-xs': '1rem',
        'flovan-xxs': '.5rem',
        'flovan-stroke': '0.3125rem',
      },
      borderWidth: {
        'flovan-stroke': '0.3125rem',
      },
      scale: {
        115: '1.15',
        130: '1.3',
      },
      screens: {
        xs: '500px',
      },
    },
  },
}

export default config
