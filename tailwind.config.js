/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#343A40',
        secondary: '#CED4DA',
        background: '#DEE2E6',
        accent: '#495057',
      },
    },
  },
  plugins: [],
}
