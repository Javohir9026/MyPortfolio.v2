/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        sans: ['Syne', 'sans-serif'],
        mono: ['DM Mono', 'monospace'],
      },
      colors: {
        cream: {
          50: '#fdfcf8',
          100: '#f9f6ef',
          200: '#f0ebe0',
        },
        ink: {
          900: '#0e0e0e',
          800: '#1a1a1a',
          700: '#2d2d2d',
          600: '#444444',
          500: '#666666',
        },
        accent: {
          DEFAULT: '#c8a96e',
          light: '#dfc08a',
          dark: '#a8893e',
        },
      },
      animation: {
        'fade-up': 'fadeUp 0.6s ease forwards',
        'fade-in': 'fadeIn 0.4s ease forwards',
      },
      keyframes: {
        fadeUp: {
          '0%': { opacity: '0', transform: 'translateY(24px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
      },
    },
  },
  plugins: [],
}
