/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      'Montserrat': ['Montserrat'],
      'mono': ['Courier'],
    },
    extend: {
      colors: {
        "accent-1": "#FAFAFA",
        "accent-2": "#EAEAEA",
        "accent-7": "#333",
        success: "#0070f3",
        cyan: "#79FFE1",
        dusk: "#5f8dB1",
        midnight: {
          50: "#eff8ff",
          100: "#dbeffe",
          200: "#bee5ff",
          300: "#92d5fe",
          400: "#5ebdfc",
          500: "#399ef8",
          600: "#576070",
          700: "#1b6ada",
          800: "#364e6d",
          900: "#1a2a4b",
          950: "#0f1f39",
        },
      },
      spacing: {
        28: "7rem",
      },
      letterSpacing: {
        tighter: "-.04em",
      },
      lineHeight: {
        tight: 1.2,
      },
      fontSize: {
        "5xl": "2.5rem",
        "6xl": "2.75rem",
        "7xl": "4.5rem",
        "8xl": "6.25rem",
      },
      boxShadow: {
        small: "0 5px 10px rgba(0, 0, 0, 0.12)",
        medium: "0 8px 30px rgba(0, 0, 0, 0.12)",
      },
      keyframes: {
        shine: {
          '20%, 100%': { transform: 'translate-x-[150%]' },
        }
      },
    },
  },
  plugins: [],
};
