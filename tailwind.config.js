/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{ts,tsx}",
    "./node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}",
    "./node_modules/flowbite/**/*.{js,jsx,ts,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        // Paleta Viva Smart (extraída do logo)
        brand: {
          DEFAULT: "#478158", // verde principal
          600: "#478158",
          700: "#386746",    // hover
          800: "#2a4d34"     // mais escuro / contornos
        },
        sand: "#f3efe3" // bege de fundo
      },
      fontFamily: {
        sans: ["Inter", "system-ui", "Avenir", "Helvetica", "Arial", "sans-serif"]
      }
    },
  },
  plugins: [
    require('flowbite/plugin')
  ],
}
