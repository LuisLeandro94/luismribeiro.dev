/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      backgroundImage: {
        pattern:
          "url('/src/shared/assets/pattern_geometric-5_1_7_0-0_100_1__fdfffc_363636.webp')",
        dots: "url('/src/shared/assets/download.webp')",
      },
      backgroundSize: {
        100: '100px',
      },
    },
  },
  plugins: [],
};
