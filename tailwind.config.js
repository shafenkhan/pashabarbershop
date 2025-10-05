import { theme } from '@tailwindcss/postcss';

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'royal-gold': '#D4AF37',
        'deep-gold': '#B8860B',
        'warm-brown': '#3E2723',
        'charcoal': '#1A1A1A',
        'muted-red': '#8B4513',
      },
      fontFamily: {
        'serif': ['Playfair Display', 'serif'],
        'sans': ['Inter', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
