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
          100: '#E2FCD9CC',
          200: '#C0FAB4',
          300: '#94F08B',
          400: '#6BE26B',
          500: '#3ECF4C'
        },
        secondary: {
          100: '#FFF7D7CC',
          200: '#FFECB0',
          300: '#FFDF88',
          400: '#FFD26B',
          500: '#FFBD3A'
        },
        tertiary: {
          100: '#FEE8D2CC',
          200: '#FECAA5',
          300: '#FECAA5',
          400: '#F98256',
          500: '#F64920'
        }
      },
      fontFamily: {
        'sans': ['DM Sans', 'sans-serif'],
        'pop': ['Poppins', 'sans-serif'],
        // 'serif': ['DM Sans', 'serif'],
      },
      width: {
        '6/13': '46.112%',
      }
    },
    plugins: [],
  }
}
