/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        background: "url('/background.png')",
      },
      colors: {
        darkgreen: "#128c7e",
        green: "#25d366",
        lightgreen: "#dcf8c6",
        gray: "#ece5dd",
        darkgray: "#808080",
        blue: "#34b7f1",
      },
    },
  },
  plugins: [],
};
