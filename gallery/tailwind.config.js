// tailwind.config.js
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}"
  ],
  theme: {
    extend: {
      fontFamily: {
        'Shizuru': ['Shizuru', 'sans-serif'],
        'delagothicone': ['Dela Gothic One'],
        'poppins': ['Poppins'],
        'lato': ['Lato', 'sans-serif'] 
      },
      backgroundColor: {
        'f7e1b7': '#f7e1b7',
        'fae0af': '#fae0af',
      },
      borderColor: {
        'dark-brown': '#3E2723', // Dark brown color
      },
      borderWidth: {
        '1.5': '1.5px',
      },
      textColor: {
        'dark-brown': '#3E2723', // Dark brown color for text
      },
    },
  },
  plugins: [],
};
