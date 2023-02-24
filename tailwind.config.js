/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**/*.{html,js}"],
  theme: {
    extend:
    {
      fontFamily: {
        'monospace': ['Space Mono', 'sans-serif']
      },
    },
  },
  plugins: [require('@tailwindcss/aspect-ratio')],
}