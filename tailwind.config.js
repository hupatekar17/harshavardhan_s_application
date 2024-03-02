module.exports = {
  mode: "jit",
  content: ["./src/**/**/*.{js,ts,jsx,tsx,html,mdx}", "./src/**/*.{js,ts,jsx,tsx,html,mdx}"],
  darkMode: "class",
  theme: {
    screens: { md: { max: "1050px" }, sm: { max: "550px" } },
    extend: {
      colors: {
        gray: {
          200: "#ededed",
          400: "#bdbdbd",
          900: "#161c28",
          "900_01": "#1c2230",
          "900_02": "#171c28",
          "100_cc": "#f2f5fbcc",
        },
        blue_gray: { 800: "#303b54", 900: "#333333", "800_01": "#323c52", "600_66": "#515d7966", "900_01": "#242d40" },
        white: { A700: "#ffffff" },
        blue: { 50: "#e3f1fd" },
        teal: { 300: "#5ca4a9" },
        pink: { 500: "#e83363" },
      },
      boxShadow: { bs: "inset -4px -4px  4px 0px #0000003f" },
      fontFamily: { proximanova: "Proxima Nova", roboto: "Roboto" },
      opacity: { 0.4: 0.4 },
    },
  },
  plugins: [require("@tailwindcss/forms")],
};
