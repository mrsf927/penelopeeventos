/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        wine: {
          DEFAULT: '#722F37',
          dark: '#5a2229',
          light: '#8B3A43',
        },
        gold: {
          DEFAULT: '#C9A84C',
          light: '#D9BC72',
          dark: '#A8893A',
        },
        cream: {
          DEFAULT: '#F8F5F0',
          dark: '#EDE8E0',
        },
        charcoal: {
          DEFAULT: '#1A1A1A',
          light: '#2A2A2A',
          mid: '#3A3A3A',
        },
      },
      fontFamily: {
        serif: ['"Noto Serif"', 'Georgia', 'serif'],
        sans: ['"Noto Sans"', 'system-ui', 'sans-serif'],
      },
      backgroundImage: {
        'gradient-gold': 'linear-gradient(135deg, #C9A84C 0%, #D9BC72 50%, #C9A84C 100%)',
      },
    },
  },
  plugins: [],
}
