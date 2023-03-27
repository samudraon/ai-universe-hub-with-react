/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  daisyui: {
    themes: [
      {
        mytheme: {

          "primary": "#9aef62",

          "secondary": "#ad265e",

          "accent": "#94aef7",

          "neutral": "#2C2D3A",

          "base-100": "#E1E0F1",

          "info": "#6689DB",

          "success": "#0C6E44",

          "warning": "#F98715",

          "error": "#EA2A2D",
        },
      },
    ],
  },
  plugins: [require("daisyui")],
}
