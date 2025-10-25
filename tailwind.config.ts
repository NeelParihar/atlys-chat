/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        background: "#F6F7FB",
      },
      boxShadow: {
        soft: "0 1px 2px rgba(16, 24, 40, 0.05), 0 1px 3px rgba(16, 24, 40, 0.1)",
      },
      borderRadius: {
        xl: "16px",
      },
    },
  },
  plugins: [],
};
