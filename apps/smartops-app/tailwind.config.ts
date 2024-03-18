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
      surface: {
        DEFAULT: 'hsl(var(--color-neutral-98))',
        'container-lowest': 'hsl(var(--color-neutral-100))',
        'container-low': 'hsl(var(--color-neutral-96))',
        container: 'hsl(var(--color-neutral-94))',
        'container-high': 'hsl(var(--color-neutral-92))',
        'container-highest': 'hsl(var(--color-neutral-90))',
        inverse: 'hsl(var(--color-neutral-20))',
        variant: 'hsl(var(--color-neutral-variant-90))',
      },
      'on-surface': {
        DEFAULT: 'hsl(var(--color-neutral-10))',
        inverse: 'hsl(var(--color-neutral-95))',
        variant: 'hsl(var(--color-neutral-variant-30))',
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
