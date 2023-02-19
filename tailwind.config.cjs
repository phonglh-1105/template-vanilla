/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.js", "./src/**/*/*.js", "./index.html"],
  prefix: "tw-",
  theme: {
    extend: {},
    fontFamily: {
      sfPro: ["SF Pro Display", "sans-serif"],
    },
  },
  plugins: [],
};
