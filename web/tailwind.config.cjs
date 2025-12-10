/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,jsx,ts,tsx}',
    './src/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        clinic: {
          primary: '#0891b2',
          'primary-light': '#06b6d4',
          'primary-dark': '#0e7490',
          accent: '#14b8a6',
          'accent-light': '#5eead4',
          success: '#14b8a6',
          danger: '#ef4444',
          bg: '#f0f9fa',
          surface: '#ffffff',
          muted: '#7dd3fc',
          text: '#164e63'
        }
      }
    },
  },
}
