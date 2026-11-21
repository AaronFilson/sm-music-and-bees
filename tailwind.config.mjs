/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      fontFamily: {
        heading: ['"Black Rock"', 'Georgia', 'serif'],
        serif: ['"PT Serif"', 'Georgia', 'serif'],
        sans: ['Inter', 'system-ui', '-apple-system', 'sans-serif'],
      },
      colors: {
        amber: {
          50: '#fdfbf7',
          100: '#f9f3e9',
          200: '#f2e4cf',
          500: '#d9822b',
          600: '#c67c26',
          700: '#a35f18',
        },
        slate: {
          850: '#151c28',
          950: '#0c111a',
        }
      }
    },
  },
  plugins: [],
};
