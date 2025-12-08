import type { Config } from "tailwindcss";
import tailwindcssAnimate from "tailwindcss-animate";

export default {
  darkMode: ["class", "html"],
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
        poppins: ["Poppins", "sans-serif"],
        luckiest: ['"Luckiest Guy"', "cursive"], // ✅ Fonte adicionada
      },
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
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
        sidebar: {
          DEFAULT: "hsl(var(--sidebar-background))",
          foreground: "hsl(var(--sidebar-foreground))",
          primary: "hsl(var(--sidebar-primary))",
          "primary-foreground": "hsl(var(--sidebar-primary-foreground))",
          accent: "hsl(var(--sidebar-accent))",
          "accent-foreground": "hsl(var(--sidebar-accent-foreground))",
          border: "hsl(var(--sidebar-border))",
          ring: "hsl(var(--sidebar-ring))",
        },
        earth: {
          50: "#faf8f5",
          100: "#f4f0e8",
          200: "#e8ddd0",
          300: "#d9c4ad",
          400: "#c7a584",
          500: "#b8926b",
          600: "#a67f5f",
          700: "#8a6950",
          800: "#715646",
          900: "#5c463a",
        },
        caramel: {
          100: "#f4e8d0",
          300: "#e6c5a0",
          500: "#d4a574",
          700: "#b8885a",
          800: "#9a6d3a",
          900: "#7d5225",
        },
        terracotta: {
          100: "#f2d7c9",
          300: "#e4a584",
          500: "#cd7f5a",
          700: "#a6634a",
          800: "#8b4a35",
          900: "#6f3425",
        },
        sand: {
          100: "#f8f3e8",
          300: "#f0e1c4",
          500: "#e6d0a0",
          700: "#d4b57a",
          800: "#b8985a",
          900: "#9c7d40",
        },
        moss: {
          100: "#e8f0e0",
          300: "#c4d4a8",
          500: "#9bb870",
          700: "#7a9248",
          800: "#5f7235",
          900: "#4a5928",
        },
        mustard: {
          100: "#fef7d9",
          300: "#fde68a",
          500: "#f59e0b",
          700: "#d97706",
          800: "#b45309",
          900: "#92400e",
        },
        brown: {
          100: "#f7f3f0",
          300: "#d6c2b0",
          500: "#8b5a2b",
          700: "#6b4423",
          800: "#5a3718",
          900: "#4a2c11",
        },
        sage: {
          100: "#f0f4e8",
          300: "#d4e4c1",
          500: "#8fbc8f",
          700: "#6b8e6b",
          800: "#556b55",
          900: "#3e4f3e",
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
        "fade-in": {
          "0%": {
            opacity: "0",
            transform: "translateY(20px)",
          },
          "100%": {
            opacity: "1",
            transform: "translateY(0)",
          },
        },
        "slide-up": {
          "0%": {
            opacity: "0",
            transform: "translateY(30px)",
          },
          "100%": {
            opacity: "1",
            transform: "translateY(0)",
          },
        },
        float: {
          "0%, 100%": {
            transform: "translateY(0px)",
          },
          "50%": {
            transform: "translateY(-10px)",
          },
        },
        "gradient-shift": {
          "0%": {
            backgroundPosition: "0% 50%",
          },
          "50%": {
            backgroundPosition: "100% 50%",
          },
          "100%": {
            backgroundPosition: "0% 50%",
          },
        },
        "gradient-earth": {
          "0%": {
            backgroundPosition: "0% 50%",
          },
          "25%": {
            backgroundPosition: "100% 0%",
          },
          "50%": {
            backgroundPosition: "100% 100%",
          },
          "75%": {
            backgroundPosition: "0% 100%",
          },
          "100%": {
            backgroundPosition: "0% 50%",
          },
        },
        "terminal-blink": {
          "0%, 50%": { opacity: "1" },
          "51%, 100%": { opacity: "0" },
        },
        "bounce-gentle": {
          "0%, 100%": {
            transform: "translateY(0)",
          },
          "50%": {
            transform: "translateY(-5px)",
          },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        "fade-in": "fade-in 0.6s ease-out",
        "slide-up": "slide-up 0.8s ease-out",
        float: "float 3s ease-in-out infinite",
        "gradient-shift": "gradient-shift 8s ease-in-out infinite",
        "gradient-earth": "gradient-earth 15s ease-in-out infinite",
        "terminal-blink": "terminal-blink 1s infinite",
        "bounce-gentle": "bounce-gentle 2s ease-in-out infinite",
      },
    },
  },
  plugins: [(tailwindcssAnimate)],
} satisfies Config;