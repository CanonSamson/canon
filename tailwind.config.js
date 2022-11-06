/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        Bblue: "#090E16",
        Lblue: '#7B4AE2',
      },
      screens: {
        'tablet': '800px',
        // => @media (min-width: 500px) { ... }
        'Btablet': '1000px',
        // => @media (min-width: 600px) { ... }
        'Stablet': '700px',
        // => @media (min-width: 600px) { ... }
        'laptop': '1024px',
        // => @media (min-width: 1024px) { ... }

        'desktop': '1280px',
        // => @media (min-width: 1280px) { ... }
      },
    },
  },
  plugins: [],
}
