import { type Config } from "tailwindcss";

export default {
  darkMode: 'class',
  content: ["./src/**/*.tsx"],
  theme: {
    extend: {
      colors: {
        slate: {
          800: "#141E33",
        },
      },
      screens: {
        "2xl": "1736px",
      },
    },
  },
  plugins: [],
} satisfies Config;
