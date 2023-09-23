/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    fontFamily: {
      logo: ["Raleway"],
      header: ["Oswald"],
      content: ["DM Sans"],
    },
    extend: {
      colors: {
        primary: '#495057',
        secondary: '#CED4DA',
        background: '#DEE2E6',
        accent: '#343A40',
      },
    },
  },
  plugins: [],
}
