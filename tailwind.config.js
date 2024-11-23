/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        primary: "var(--primary)",
        customBlack: "var(--custom-black)",
        customLightBlack: "var(--custom-light-black)",
        customGray: "var(--custom-gray)",
        customLightGray: "var(--custom-light-gray)",
        customLightGray2: "var(--custom-light-gray-2)",
        customDarkGray: "var(--custom-dark-gray)",
      },
    },
  },
  plugins: [],
};
