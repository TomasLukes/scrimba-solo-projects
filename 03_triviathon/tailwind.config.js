/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    fontFamily: {
      sans: ['Karla', 'sans-serif'],
    },
    screens: {
      sm: '480px',
      md: '768px',
      lg: '976px',
      xl: '1440px'
    },
    extend: {
      colors: {
        primarydarkBlue: '#293264',
        lightBg: '#F5F7FB',
        btnBg: '#4D5B9E',
        borderBottom: '#DBDEF0',
        selected: '#D6DBF5',
        correct: '#94D7A2',
        incorrect: '#F8BCBC',
        footerBg: '#deebf8'
      },
      minWidth: {
        '100vw': '100vw'
      },
      maxWidth: {
        '100': '100px',
      },
      minHeight: {
        '100vh': '100vh',
      },
      borderWidth: {
        '16': '16px',
      },
    },
  },
  plugins: [],
}