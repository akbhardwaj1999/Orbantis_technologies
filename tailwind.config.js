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
        primary: {
          50: '#f8fbfe',
          100: '#eef6fe',
          200: '#d9ecfe',
          300: '#b8dbfd',
          400: '#8fc2fb',
          500: '#5fa1f8',
          600: '#3a7ff0',
          700: '#2d6bd8',
          800: '#1f4faa',
          900: '#1a3f7a',
        },
        navy: '#1e3a8a',
        aqua: '#0ea5e9',
        white: '#ffffff',
        light: '#f8fafc',
      },
      fontFamily: {
        'poppins': ['Poppins', 'sans-serif'],
        'inter': ['Inter', 'sans-serif'],
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
        'hero-gradient': 'linear-gradient(135deg, #ffffff 0%, #e0f2ff 100%)',
        'card-gradient': 'linear-gradient(145deg, #ffffff 0%, #f0f9ff 100%)',
      },
    },
  },
  plugins: [],
}
