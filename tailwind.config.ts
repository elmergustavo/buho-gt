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
        'nav-border': '#EBEAEA',
        'light-white': '#FAFAFB',
        'light-white-100': '#F1F4F5',
        'light-white-200': '#d7d7d7',
        'light-white-300': '#F3F3F4',
        'light-white-400': '#E2E5F1',
        'light-white-500': '#E4E4E4',
        primary: {
          DEFAULT: "#252A61",
          '50': '#f1f4fd',
          '100': '#dfe7fa',
          '200': '#c6d5f7',
          '300': '#9ebaf2',
          '400': '#7195e9',
          '500': '#4f72e2',
          '600': '#3a54d6',
          '700': '#3143c4',
          '800': '#2e379f',
          '900': '#2a347e',
          '950': '#252a61',
          // orange: "#D48D3B",
          // green: "#3E9242",
        },
        secondary: "#282828",
        "gray-200": "#EAECF0",
        "gray-300": "D0D5DD",
        "gray-500": "#667085",
        "gray-600": "#475467",
        "gray-700": "#344054",
        "gray-900": "#101828",
        "white-100": "#F4F4F4",
        "white-200": "#EDF0F8",
        "black-100": "#3D4258",
        "neutral-black": "#23263B",
      },
      boxShadow: {
        xs: "0px 1px 2px 0px rgba(16, 24, 40, 0.05)",
      },
      maxWidth: {
        "10xl": "1440px",
      },
      fontFamily: {
        inter: ["Nunito", "sans-serif"],
        spaceGrotesk: ["Space Grotesk", "sans-serif"],
      },
      borderRadius: {
        10: "10px",
      },
    },
  },
  plugins: [],
};
