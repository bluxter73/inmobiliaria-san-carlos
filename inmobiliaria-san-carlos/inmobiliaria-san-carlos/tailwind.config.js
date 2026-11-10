/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        forest: {
          DEFAULT: '#1F3D2B',
          dark: '#142A1D',
          light: '#2E5640',
        },
        beige: {
          DEFAULT: '#F4EDE1',
          dark: '#E6D9C3',
        },
        gold: {
          DEFAULT: '#B8943D',
          light: '#D4B46A',
          dark: '#7A5F1E',
        },
      },
      fontFamily: {
        serif: ['Georgia', '"Times New Roman"', 'serif'],
        sans: ['system-ui', '-apple-system', '"Segoe UI"', 'Roboto', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
