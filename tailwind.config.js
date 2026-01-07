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
        // Light theme colors
        'light-100': '#ffffff',
        'light-200': '#f8fafc',
        'light-300': '#f1f5f9',
        'light-400': '#e2e8f0',
        accent: {
          // Blue accents (from video)
          blue: '#0066cc',
          'blue-bright': '#0080ff',
          'blue-light': '#4da6ff',
          cyan: '#00bfff',
          // Magenta accents (from video)
          magenta: '#cc0066',
          'magenta-bright': '#ff0080',
          'magenta-light': '#ff4da6',
        },
        primary: {
          50: '#f0f9ff',
          100: '#e0f2fe',
          200: '#bae6fd',
          300: '#7dd3fc',
          400: '#38bdf8',
          500: '#0ea5e9',
          600: '#0284c7',
          700: '#0369a1',
          800: '#075985',
          900: '#0c4a6e',
        },
        gray: {
          50: '#f9fafb',
          100: '#f3f4f6',
          200: '#e5e7eb',
          300: '#d1d5db',
          400: '#9ca3af',
          500: '#6b7280',
          600: '#4b5563',
          700: '#374151',
          800: '#1f2937',
          900: '#111827',
        },
      },
      fontFamily: {
        'sans': ['Poppins', 'sans-serif'],
        'poppins': ['Poppins', 'sans-serif'],
        'inter': ['Inter', 'sans-serif'],
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
        'hero-gradient': 'linear-gradient(135deg, #ffffff 0%, #f0f9ff 100%)',
      },
      boxShadow: {
        'glow-blue': '0 0 20px rgba(0,102,204,0.3), 0 0 40px rgba(0,102,204,0.2)',
        'glow-magenta': '0 0 20px rgba(204,0,102,0.3), 0 0 40px rgba(204,0,102,0.2)',
        'glow-cyan': '0 0 20px rgba(0,191,255,0.3), 0 0 40px rgba(0,191,255,0.2)',
      },
    },
  },
  plugins: [],
}
