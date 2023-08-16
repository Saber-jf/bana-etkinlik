/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        /* --------------------- background ----------------------------------- */
        mainBg: "var(--main-background)",
        secondaryBg: "var(--secondary-background)",
        /* --------------------- typo ----------------------------------- */
        textPrimary: "var(--main-text-color)",
        textSecondary: "var(--secondary-text-color)",
        textTertiary: "var(--tertiary-text-color)",
        textBrand: "var(--brand-text-color)",
        textBrown: "var(--brown-text-color)",

        border: "var(--border)",
      },
    },
  },
  plugins: [],
};
