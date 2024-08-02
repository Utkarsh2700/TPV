/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        inter: ["Inter", "sans-serif"],
        oswald: ["Oswald", "sans-serif"],
        montserrat: ["Montserrat", "sans-serif"],
      },
      colors: {
        "gradient-start": "#E798FF",
        "gradient-end": "#A86DC2",
        "custom-start": "color(display-p3 0.859 0.608 1.000)",
        "custom-end": "color(display-p3 0.627 0.435 0.741)",
      },
      backgroundImage: {
        "custom-gradient": "linear-gradient(180deg, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [],
};
