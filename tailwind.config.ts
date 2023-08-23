import type { Config } from 'tailwindcss'

const config: Config = {
  darkMode: 'class',
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}'
  ],
  theme: {
    fontFamily: {
      sans: ['var(--font-ubuntu)'],
      'extra-bold': ['var(--font-lato)']
    },
    colors: {
      white: '#ffffff',
      black: '#000000',
      'dark-primary': {
        100: '#312B5B',
        300: '#26244B',
        500: '#1A1E3A',
        700: '#0F172A'
      },
      gray: {
        100: '#f3f4f6',
        200: '#e5e7eb',
        300: '#d1d5db',
        400: '#9ca3af',
        500: '#6b7280',
        600: '#4b5563',
        700: '#374151',
        800: '#1f2937',
        900: '#111827'
      },
      yellow: {
        100: '#fffae5',
        200: '#fff6cc',
        300: '#fff2b2',
        400: '#ffee99',
        500: '#ffe97f',
        600: '#ffe566',
        700: '#ffe14c',
        800: '#ffdd32',
        900: '#ffd819',
        950: '#ffd400'
      },
      blue: {
        100: '#caf0f8',
        200: '#ade8f4',
        300: '#90e0ef',
        500: '#00b4d8',
        600: '#0096c7',
        700: '#0077b6',
        400: '#48cae4',
        800: '#023e8a',
        900: '#03045e'
      }
    },
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))'
      }
    }
  },
  plugins: []
}
export default config
