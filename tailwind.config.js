/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        xs: '380px',
      },
      colors: {
        brand: {
          DEFAULT: '#2C5670',
          dark: '#17303F',
          light: '#3D6A82',
        },
        gold: {
          DEFAULT: '#D4A017',
          dark: '#B8860B',
          light: '#F0C64C',
        },
        cream: '#F3F8FB',
        page: '#E9F1F5',
        ink: {
          DEFAULT: '#1A1A2E',
          2: '#3D3D5C',
        },
        muted: '#9FB6C2',
        line: '#D9E6ED',
        track: '#E1EAF0',
        tint: '#E7F2F8',
        hsk: {
          1: '#A9780B',
          2: '#DE6E1C',
          3: '#D8402F',
          4: '#0E6E58',
          5: '#2B5AA6',
          6: '#63409C',
          '79': '#141A38',
        }
      },
      fontFamily: {
        ui: ['"Be Vietnam Pro"', 'system-ui', 'sans-serif'],
        hanzi: ['"Noto Sans SC"', 'sans-serif'],
        display: ['"Noto Serif SC"', 'serif'],
      },
      boxShadow: {
        card: '0 4px 20px -2px rgba(44, 86, 112, 0.08), 0 2px 6px -1px rgba(0, 0, 0, 0.04)',
        elevated: '0 10px 30px -5px rgba(44, 86, 112, 0.15)',
      },
      spacing: {
        '0.75': '0.1875rem',
        '1.25': '0.3125rem',
        '1.75': '0.4375rem',
        '2.25': '0.5625rem',
        '2.75': '0.6875rem',
        '3.25': '0.8125rem',
        '4.5': '1.125rem',
        '5.5': '1.375rem',
        '6.5': '1.625rem',
        '7.5': '1.875rem',
        '8.5': '2.125rem',
        '9.5': '2.375rem',
        '11.5': '2.875rem',
        '13': '3.25rem',
        '55': '13.75rem',
        '76': '19rem',
        '77': '19.25rem',
        '90': '22.5rem',
        '105': '26.25rem',
        '115': '28.75rem',
        '135': '33.75rem',
        '295': '73.75rem',
      }
    },
  },
  plugins: [],
}
