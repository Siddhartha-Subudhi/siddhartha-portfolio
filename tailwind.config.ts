
import type { Config } from "tailwindcss";

export default {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: '2rem',
      screens: {
        '2xl': '1400px'
      }
    },
    extend: {
      fontFamily: {
        sans: ["Poppins", "ui-sans-serif", "system-ui", "sans-serif"],
      },
      colors: {
        primary: {
          DEFAULT: "#d90429", // Rich red
          dark: "#980017",   // Deep dark red
          light: "#ff6361",  // Light red/rose accent
          foreground: "#222", // For contrast on white
        },
        accent: {
          DEFAULT: "#ff6361",  // Rose-orange accent
          foreground: "#fff"
        },
        background: "#fff",
        card: {
          DEFAULT: "#fff",
          foreground: "#222"
        },
        magenta: { DEFAULT: "#ef476f", light: "#ffa3b5" },
        secondary: {
          DEFAULT: "#fff0f3",
          foreground: "#aa002e"
        },
        muted: {
          DEFAULT: "#fff1f2",
          foreground: "#8e3b46"
        },
        border: '#fee2e2',
        input: '#f8d7da',
        ring: '#d90429',
        destructive: {
          DEFAULT: '#ef4444',
          foreground: '#fff'
        },
        popover: {
          DEFAULT: '#fff1f2',
          foreground: '#d90429'
        },
      },
      borderRadius: {
        lg: '1.2rem',
        md: '1rem',
        sm: '0.75rem'
      },
      keyframes: {
        'fade-in': {
          "0%": { opacity: "0", transform: "translateY(40px)" },
          "100%": { opacity: "1", transform: "translateY(0)" }
        },
      },
      animation: {
        'fade-in': "fade-in 0.72s cubic-bezier(0.4,0,0.2,1) both"
      }
    }
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;
