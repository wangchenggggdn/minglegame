/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html','./sitemap.xml', './js/**/*.js', './src/*.html', 'node_modules/preline/dist/*.js', './images/*.png', './images/*.jpg'],
  theme: {
    extend: {
      fontFamily: {
        handwriting: ['"Great Vibes"', 'cursive'],
        sans: [
          '-apple-system',
          'BlinkMacSystemFont',
          'Segoe UI',
          'Roboto',
          'Helvetica Neue',
          'Arial',
          'sans-serif',
        ],
      },
    },
  },
  plugins: [],
};
