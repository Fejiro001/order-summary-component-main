/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["index.html"],
  theme: {
    extend: {
      colors: {
        "pale-blue": "hsl(225, 100%, 94%)",
        "bright-blue": "hsl(245, 75%, 52%)",
        "very-pale-blue": "hsl(225, 100%, 98%)",
        "desaturated-blue": "hsl(224, 23%, 35%)",
        "dark-blue": "hsl(223, 47%, 23%)",
      },

      fontFamily: {
        primary: ["Red Hat Display", "sans-serif"]
      },

      fontSize: {
        heading1: "clamp(1.4rem, 2vw, 3rem)",
        basetext: "clamp(1rem, 1.1vw, 2.5rem)",
        smalltext: "clamp(0.875rem, 1.1vw, 2rem)"
      }
    },
  },
  plugins: [],
};

