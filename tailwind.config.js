/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "#050505", // Preto Profundo
        surface: "#121212", // Cinza Cards
        surfaceHover: "#1A1A1A", // Hover
        primary: "#00F0FF", // Cyan Neon
        secondary: "#3A86FF", // Azul Tech
        textMain: "#FFFFFF", // Branco
        textMuted: "#A1A1AA", // Cinza Texto
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      }
    },
  },
  plugins: [],
}
