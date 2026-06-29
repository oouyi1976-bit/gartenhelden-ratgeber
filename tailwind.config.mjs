/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      colors: {
        sage: {
          50: "#f4f7ef",
          100: "#e5ecd8",
          200: "#ccd9b6",
          300: "#aebf8f",
          400: "#8ea166",
          500: "#72854d",
          600: "#58683d",
          700: "#444f31",
          800: "#343d28",
          900: "#2a3222",
        },
        cream: "#fbf7ed",
        linen: "#efe5d2",
        bark: "#7a5637",
        walnut: "#4b3324",
        charcoal: "#242824",
      },
      fontFamily: {
        sans: ["Inter", "ui-sans-serif", "system-ui", "sans-serif"],
        serif: ["Georgia", "Cambria", "Times New Roman", "serif"],
      },
      boxShadow: {
        soft: "0 18px 50px rgba(36, 40, 36, 0.10)",
        card: "0 12px 32px rgba(36, 40, 36, 0.08)",
      },
    },
  },
  plugins: [],
};
