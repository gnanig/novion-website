/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        n: {
          dark: '#13243A',
          navy: '#183B56',
          blue: '#00A1F0',
          slate: '#52667A',
          light: '#F6FAFD',
          soft: '#EAF7FE',
          mint: '#2DBF9F',
          border: '#D7E8F2',
        },
      },
      fontFamily: {
        display: ['Manrope', 'system-ui', 'sans-serif'],
        body: ['Manrope', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
