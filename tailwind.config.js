/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#4A2C5F',
          light: '#6B4A7F',
          dark: '#2E1A3B',
        },
        secondary: {
          DEFAULT: '#D4AF37',
          light: '#E3C76A',
          dark: '#B38F2A',
        },
        accent: {
          DEFAULT: '#5F9EA0',
          light: '#7FB1B3',
          dark: '#3F7A7C',
        },
        cream: '#FAF7F2',
        dark: '#333333',
      },
      fontFamily: {
        serif: ['Playfair Display', 'Georgia', 'serif'],
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
}