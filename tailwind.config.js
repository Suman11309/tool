/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'ghibli-blue': '#4A90E2',
        'ghibli-green': '#7CB342',
        'ghibli-yellow': '#FFD54F',
        'ghibli-pink': '#F48FB1',
        'ghibli-brown': '#8D6E63',
      },
      fontFamily: {
        'ghibli': ['"M PLUS Rounded 1c"', 'sans-serif'],
      },
      backgroundImage: {
        'ghibli-pattern': "url('/src/assets/ghibli-pattern.png')",
      },
    },
  },
  plugins: [],
} 