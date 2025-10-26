/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'umana': {
          50: '#E8F4F8',   // Very light blue
          100: '#D1E9F1',  // Light blue
          500: '#2B7FB8',  // Primary blue (from logo)
          600: '#236B9E',  // Darker blue
          700: '#1B5784',  // Deep blue
          900: '#13436A',  // Darkest blue
        },
        'umana-navy': '#3F4E5F',  // Background navy from logo
        'umana-orange': '#FF8C42', // Orange accent from logo
        'slate': {
          50: '#F8FAFC',
          100: '#F1F5F9',
          200: '#E2E8F0',
          300: '#CBD5E1',
          600: '#475569',
          700: '#334155',
          800: '#1E293B',
          900: '#0F172A',
        },
      },
      fontFamily: {
        sans: ['Inter', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'sans-serif'],
        display: ['Inter', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
