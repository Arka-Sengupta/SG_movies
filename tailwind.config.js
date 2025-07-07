/** @type {import('tailwindcss').Config} */
module.exports = {
  // NOTE: Update this to include the paths to all files that contain Nativewind classes.
  content: [
    "./app/**/*.{js,jsx,ts,tsx}", // include all files in app directory
    "./components/**/*.{js,jsx,ts,tsx}",
    "./app/global.css" // include global.css
  ],
  presets: [require("nativewind/preset")],
  theme: {
    extend: {
      
    },
  },
  plugins: [],
}