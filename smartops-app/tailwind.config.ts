import type { Config } from 'tailwindcss';
import tailwindcssAnimate from 'tailwindcss-animate';
import { fontFamily } from 'tailwindcss/defaultTheme';

const config = {
  darkMode: ['class'],
  content: [
    './pages/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './app/**/*.{ts,tsx}',
    './src/**/*.{ts,tsx}',
  ],
  theme: {
    colors: {
      transparent: 'transparent',
      primary: {
        DEFAULT: 'hsl(var(--color-primary-h) var(--color-primary-s) 40%)',
        container: 'hsl(var(--color-primary-h) var(--color-primary-s) 90%)',
      },
      secondary: {
        DEFAULT: 'hsl(var(--color-secondary-h) var(--color-secondary-s) 40%)',
        container: 'hsl(var(--color-secondary-h) var(--color-secondary-s) 90%)',
      },
      tertiary: {
        DEFAULT: 'hsl(var(--color-tertiary-h) var(--color-tertiary-s) 40%)',
        container: 'hsl(var(--color-tertiary-h) var(--color-tertiary-s) 90%)',
      },
      error: {
        DEFAULT: 'hsl(var(--color-error-h) var(--color-error-s) 40%)',
        container: 'hsl(var(--color-error-h) var(--color-error-s) 90%)',
      },
      surface: {
        DEFAULT: 'hsl(var(--color-neutral-h) var(--color-neutral-s) 98%)',
        variant:
          'hsl(var(--color-neutral-variant-h) var(--color-neutral-variant-s) 90%)',
      },
      container: {
        highest: 'hsl(var(--color-neutral-h) var(--color-neutral-s) 90%)',
        high: 'hsl(var(--color-neutral-h) var(--color-neutral-s) 92%)',
        DEFAULT: 'hsl(var(--color-neutral-h) var(--color-neutral-s) 94%)',
        low: 'hsl(var(--color-neutral-h) var(--color-neutral-s) 96%)',
        lowest: 'hsl(var(--color-neutral-h) var(--color-neutral-s) 100%)',
      },
      inverse: {
        surface: 'hsl(var(--color-neutral-h) var(--color-neutral-s) 20%)',
        primary: 'hsl(var(--color-primary-h) var(--color-primary-s) 40%)',
      },
      outline: {
        DEFAULT:
          'hsl(var(--color-neutral-variant-h) var(--color-neutral-variant-s) 50%)',
        variant:
          'hsl(var(--color-neutral-variant-h) var(--color-neutral-variant-s) 80%)',
      },
      on: {
        primary: 'hsl(var(--color-primary-h) var(--color-primary-s) 100%)',
        'primary-container':
          'hsl(var(--color-primary-h) var(--color-primary-s) 10%)',

        secondary:
          'hsl(var(--color-secondary-h) var(--color-secondary-s) 100%)',
        'secondary-container':
          'hsl(var(--color-secondary-h) var(--color-secondary-s) 10%)',

        tertiary: 'hsl(var(--color-tertiary-h) var(--color-tertiary-s) 100%)',
        'tertiary-container':
          'hsl(var(--color-tertiary-h) var(--color-tertiary-s) 10%)',

        error: 'hsl(var(--color-error-h) var(--color-error-s) 100%)',
        'error-container': 'hsl(var(--color-error-h) var(--color-error-s) 10%)',

        surface: 'hsl(var(--color-neutral-h) var(--color-neutral-s) 10%)',
        'surface-variant':
          'hsl(var(--color-neutral-variant-h) var(--color-neutral-variant-s) 30%)',

        'inverse-surface':
          'hsl(var(--color-neutral-h) var(--color-neutral-s) 95%)',
        'inverse-primary':
          'hsl(var(--color-primary-h) var(--color-primary-s) 40%)',
      },
    },
    fontFamily: {
      sans: ['var(--font-sans)', ...fontFamily.sans],
    },
    extend: {},
  },
  plugins: [tailwindcssAnimate],
} satisfies Config;

export default config;
