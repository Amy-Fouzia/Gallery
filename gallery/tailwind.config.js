/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}"
  ],
  theme: {
    extend: {
      fontFamily: {
        'Shizuru': ['Shizuru', 'sans-serif'],
        'delagothicone': ['Dela Gothic One'],
        'poppins': ['Poppins']
      },
    },
  },
  plugins: [],
}

