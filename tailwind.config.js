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
        'ottoman-gold': '#C9A961',
        'warm-brown': '#3E2723',
        'charcoal': '#1A1A1A',
        'muted-red': '#8B4513',
        'turkish-red': '#E30A17',
        'deep-burgundy': '#6B1E28',
        'cream': '#F5E6D3',
      },
      fontFamily: {
        'serif': ['Cinzel', 'Playfair Display', 'serif'],
        'sans': ['Inter', 'sans-serif'],
      },
      backgroundImage: {
        'turkish-pattern': "repeating-linear-gradient(45deg, transparent, transparent 10px, rgba(212, 175, 55, 0.03) 10px, rgba(212, 175, 55, 0.03) 20px)",
      },
    },
  },
  plugins: [],
}
