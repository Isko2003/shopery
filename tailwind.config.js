/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        soft_primary: "#84D187",
        primary: "#00B207",
        hard_primary: "#2C742F",
        warning: "#FF8A00",
        danger: "#EA4B48",
        white: "#FFFFFF",
      },
      screens: {
        'custom': '1500px',
        'xs': '375px',
        'sm': '640px',
        'md': '768px',
        'lg': '1024px',
        'xl': '1280px',
      }
    },
  },
  plugins: [],
}