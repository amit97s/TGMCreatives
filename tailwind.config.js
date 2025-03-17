/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}", // Ensure Tailwind scans the correct files
  ],
  theme: {
    extend: {
      fontFamily: {
        cinzel: ['Cinzel', 'serif'], 
        bigShoulders: ['Big Shoulders Stencil', 'sans-serif'],
        Satisfy: ['Satisfy', 'sans-serif'],
        Tajawal: ['Tajawal', 'sans-serif'],
        Chakra: ["Chakra Petch", "sans-serif"],
      },
      animation: {
        shake: 'shake 10s ease-in-out infinite', 
        shuffle: 'shuffle 3s infinite',
      },
      keyframes: {
        shake: {
          '20%': { transform: 'rotate(0deg)' },
          '40%': { transform: 'rotate(90deg)' },
          '60%': { transform: 'rotate(180deg)' },
          '80%': { transform: 'rotate(270deg)' },
          '100%': { transform: 'rotate(360deg)' },
        },
        shuffle: {
          '0%': { transform: 'rotate(0deg)' },
          '50%': { transform: 'rotate(180deg)' },
          '100%': { transform: 'rotate(360deg)' },
        },
      },
    },
  },
  plugins: [],
};
