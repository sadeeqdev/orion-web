/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    colors: {
      'white': '#fff',
      'black': '#000',
      'sub-white':'#D9D9D9',
      'green': '#06BC5F',
      'activeclass': '#06BC5F',
      'blue': '#25C8EB',
      'yellow': '#F0B90B',
      'greentext': '#0E9E55',
      'grey': '#D9D9D9',
      'liveborder':'#7C7C7C',
      'dark':'#1C1A1A',
      'sub-dark': '#222020',
      'navbar':'#030202',
      'btn-dark':'#121010',
      'footer': '#4E4B4B',
      'greenshadow': 'rgba(182, 250, 215, 0.21);',
      'blueshadow': 'rgba(182, 250, 215, 0.21);',
      'yellowshadow':'rgba(182, 250, 215, 0.21);',
      'dashFooter': '#555555',
      'red': '#990d0d',
      'redHover':'#d40d0d'
    },
    screens: {
      'sm': '640px',
      // => @media (min-width: 640px) { ... }

      'md': '1030px',
      // => @media (min-width: 768px) { ... }

      'lg': '1030px',
      // => @media (min-width: 1024px) { ... }

      'xl': '1400px',
      // => @media (min-width: 1280px) { ... }

      '2xl': '1600px',
      // => @media (min-width: 1536px) { ... }
    },
    extend: {},
  },
  plugins: [],
}
