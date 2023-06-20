/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        darker: "#9ca3af",
        light: "#d1d5db",
        borderGray: " #030712",
        btnGrayLight: "#9ca3af",
        btnGrayDark: "#6b7280",
      },
    },
  },
  plugins: [],
};
