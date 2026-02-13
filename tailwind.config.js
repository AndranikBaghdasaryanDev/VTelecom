/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        // Հիմա արդեն կարող ես օգտագործել bg-lexa-dark class-ը
        'lexa-dark': '#2a3142', 
        'lexa-purple': '#6c5fb1',
      },
    },
  },
  plugins: [],
};