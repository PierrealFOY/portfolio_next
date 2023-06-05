/** @type {import('tailwindcss').Config} */


module.exports = {
  darkMode: "class",
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      animation: {
        bounce: 
          "bounce 0.5s alternate cubic-bezier(0.95, 0.05, 0.795, 0.035) infinite"
      },
      keyframes: {
        from: { transform : "translateY(10px)" },
        to: { transform : "translateY(0)" },
      }
    },
  },
  plugins: [],
}
