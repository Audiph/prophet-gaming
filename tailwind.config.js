/** @type {import('tailwindcss').Config} */

const { fontFamily } = require('tailwindcss/defaultTheme');

module.exports = {
  content: [
    // Or if using `src` directory:
    './src/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        mont: ['var(--font-mont)', ...fontFamily.sans],
      },
      colors: {
        dark: '#1b1b1b',
        light: '#f5f5f5',
        primary: '#b63e96',
        primaryDark: '#58e6d9',
      },
      backgroundImage: {
        circularLight:
          'repeating-radial-gradient(rgb(0, 0, 0, 0.4) 2px, #f5f5f5f5 5px, #f5f5f5 100px);',
      },
    },
  },
  plugins: [],
};
