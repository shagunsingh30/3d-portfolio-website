/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,jsx}"],
  mode: "jit",
  theme: {
    extend: {
      colors: {
        primary: "#050816",
        secondary: "#aaa6c3",
        tertiary: "#151030",
        "black-100": "#100d25",
        "black-200": "#090325",
        "white-100": "#f3f3f3",
      },
      fontFamily: {
        cursive: ["Dancing Script", "cursive"], // Custom font family
      },
      textShadow: {
        glow: "0 0 5px rgba(255, 255, 255, 0.5)",
      },
      boxShadow: {
        card: "0px 35px 120px -15px #211e35",
      },
      screens: {
        xs: "450px",
      },
      backgroundImage: {
        "hero-pattern": "url('/src/assets/herobg.png')",
        "soft-purple-glow": "linear-gradient(135deg, #2C003E, #000000)",
        "muted-purple-sheen": "linear-gradient(120deg, #3F065E, #1C1C1C)",
        "ethereal-purple-night": "linear-gradient(90deg, #4A148C, #1A1A1A)",
        "dark-violet-shadow": "linear-gradient(180deg, #240046, #000000)",
        "twilight-hue": "linear-gradient(45deg, #5C007A, #0D0D0D)",
      },
    },
  },
  plugins: [],
};
