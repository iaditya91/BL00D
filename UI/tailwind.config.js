module.exports = {
  mode: "jit",
  content: [
    "./src/**/**/*.{js,ts,jsx,tsx,html,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,html,mdx}",
  ],
  darkMode: "class",
  theme: {
    screens: { md: { max: "1050px" }, sm: { max: "550px" } },
    extend: {
      colors: {
        red: {
          800: "#c12121",
          900: "#c51a1a",
          "900_05": "#b40b0b",
          "900_04": "#b60808",
          "900_07": "#b31111",
          "900_06": "#bd1313",
          "900_01": "#cd1414",
          "900_03": "#a61313",
          "900_02": "#bd0f0f",
          "800_01": "#c82424",
        },
        blue_gray: { 100: "#d9d9d9" },
        gray: { 900: "#161313" },
        black: { 900: "#000000", "900_3f": "#0000003f" },
        green: { 600: "#27ae60" },
        indigo: { A100_33: "#7a7cff33", A700_33: "#304ffe33" },
        white: { A700: "#ffffff" },
      },
      fontFamily: { opensans: "Open Sans" },
      boxShadow: {
        bs: "0px 4px  5px 0px #7a7cff33",
        bs2: "0px 4px  5px 0px #304ffe33",
        bs1: "0px 4px  4px 0px #0000003f",
      },
    },
  },
  plugins: [require("@tailwindcss/forms")],
};
