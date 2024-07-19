/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    screens: {
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
    },
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      fontFamily: {
        Roboto: ["Roboto", "sans-serif"],
        Montserrat: ["Montserrat", "sans-serif"],
        Poppins: ["Poppins", "sans-serif"],
      },
      colors: {
        "coral-red": "#db4a3a",
        "coral-blue": "#253152",
        "coral-white": "#fffffa",
        criBlue: "#03A9F4",
        lightcriBlue: "#03A9F41A",
        softTextColor: "#626262",
        softBg: "#f0f0f0",
      },
      flex: {
        2: "2 2 0%",
        3: "2 3 0%",
        4: "4 4 0%",
        5: "5 5 0%",
      },

      borderWidth: {
        3: "3px",
      },
      boxShadow: {
        custom: "0 2px 6px  rgba(0, 0, 0, 0.1), 0 2px 4px  rgba(0, 0, 0, 0.1)",
      },
    },
  },
  plugins: [require("@tailwindcss/aspect-ratio"), require("flowbite/plugin")],
};
