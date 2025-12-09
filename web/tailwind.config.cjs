module.exports = {
  content: [
    './pages/**/*.{js,jsx,ts,tsx}',
    './components/**/*.{js,jsx,ts,tsx}'
  ],
  theme: {
    extend: {
      colors: {
        clinic: {
          primary: '#0f766e',
          'primary-600': '#0ea5a4',
          accent: '#06b6d4',
          success: '#10b981',
          danger: '#ef4444',
          bg: '#f8fafc',
          surface: '#ffffff',
          muted: '#6b7280',
          text: '#0f172a'
        }
      }
    },
  },
  plugins: [],
}
