/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.js", "./src/**/*/*.js", "./index.html"],
  prefix: "tw-",
  theme: {
    extend: {},
    fontFamily: {
      operatorMono: "OperatorMono-Italic",
      poppins: ["Poppins", "sans-serif"],
    },
  },
  plugins: [],
};
