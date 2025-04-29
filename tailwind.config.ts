
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
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        playfair: ['Bricolage Grotesque', 'serif'],
        migra: ['Migra', 'serif']
      },
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(250 47% 56%)",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        fadeIn: {
          from: { opacity: '0', transform: 'translateY(10px)' },
          to: { opacity: '1', transform: 'translateY(0)' },
        },
          slideInUp: {
            '0%':   { transform: 'translateY(50px)', opacity: '0' },
            '100%': { transform: 'translateY(0)',     opacity: '1' },
          },
          wiggle: {
            '0%, 100%': { transform: 'rotate(-3deg)' },
            '50%':      { transform: 'rotate(3deg)'  },
          },
          shimmer: {
            '0%':   { backgroundPosition: '-200% 0' },
            '100%': { backgroundPosition: '200% 0'  },
          },
          flip: {
            '0%':   { transform: 'perspective(400px) rotateY(0deg)' },
            '100%': { transform: 'perspective(400px) rotateY(180deg)' },
          },
      },
      animation: {
        fadeIn: 'fadeIn 0.5s ease-out forwards',
        fadeInSlow: "fadeIn 1.2s ease-out forwards",
        fadeInFast: "fadeIn 0.3s ease-out forwards",
        slideInUp: 'slideInUp 0.5s ease-out forwards',
        wiggle: 'wiggle 1s ease-in-out infinite',
        shimmer:'shimmer 2s linear infinite',
        flip:'flip 0.6s ease-in-out forwards',
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;
