import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    colors: {
      surface: {
        DEFAULT: '#f8f8f7',
        container: '#f0f0ee',
      },
    },
  },
  plugins: [],
};
export default config;
