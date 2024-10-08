import type { Config } from 'tailwindcss'
import defaultTheme from 'tailwindcss/defaultTheme.js'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  // Everything not-defined falls back to:
  // https://github.com/tailwindlabs/tailwindcss/blob/master/stubs/config.full.js
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
        900: '#0a4670',
        950: '#062c4b', // this is our black
      },
    },
  },
}

export default config
