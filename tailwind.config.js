/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      backgroundImage: {
        pattern:
          "url('/src/shared/assets/pattern_hexagon-1_0.5_2_0-0_0_1__ffffff_009485.png')",
        dots: "url('/src/shared/assets/download.png')",
      },
      backgroundSize: {
        100: '100px',
      },
    },
  },
  plugins: [],
};
