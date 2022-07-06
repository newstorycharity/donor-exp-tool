/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './public/index.html',
    './tailwind.config.js/',
    './tailwind-default.config.js',
    './public/all-events.html',
    './public/vision-trip.html',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#00bae0',
        hover: '#3993B0',
        dark: '#2f2f2f',
        builders: '#003E50',
        sage: '#B5C6B5',
        cream: '#F7F0EA',
        yam: '#CC4E2B',
        footer: '#6c6c6c',
      },
      fontFamily: {
        sans: ['Barlow', 'sans-serif'],
        heading:['Barlow', 'sans-serif'],
      }
    },
  },
  plugins: [],
}
