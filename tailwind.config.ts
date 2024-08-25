import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: [
    './pages/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './app/**/*.{ts,tsx}',
    './src/**/*.{ts,tsx}',
  ],
  prefix: "", // No prefix applied to utility classes
  theme: {
    container: {
      center: true, // Centers the container
      padding: "2rem", // Adds padding inside the container
      screens: {
        "2xl": "1400px", // Sets the max width for 2XL screens
      },
    },
    extend: {
      colors: {
        border: "hsl(var(--border))", // Custom border color
        input: "hsl(var(--input))", // Custom input color
        ring: "hsl(var(--ring))", // Custom ring color
        background: "hsl(var(--background))", // Custom background color
        foreground: "hsl(var(--foreground))", // Custom text color
        primary: {
          DEFAULT: "hsl(var(--primary))", // Primary color
          foreground: "hsl(var(--primary-foreground))", // Text color on primary background
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))", // Secondary color
          foreground: "hsl(var(--secondary-foreground))", // Text color on secondary background
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))", // Destructive action color (e.g., delete)
          foreground: "hsl(var(--destructive-foreground))", // Text color on destructive background
        },
        muted: {
          DEFAULT: "hsl(var(--muted))", // Muted color for less important elements
          foreground: "hsl(var(--muted-foreground))", // Text color on muted background
        },
        accent: {
          DEFAULT: "hsl(var(--accent))", // Accent color for highlights
          foreground: "hsl(var(--accent-foreground))", // Text color on accent background
        },
        popover: {
          DEFAULT: "hsl(var(--popover))", // Background color for popovers
          foreground: "hsl(var(--popover-foreground))", // Text color on popover background
        },
        card: {
          DEFAULT: "hsl(var(--card))", // Card background color
          foreground: "hsl(var(--card-foreground))", // Text color on card background
        },
      },
      borderRadius: {
        lg: "var(--radius)", // Large border radius
        md: "calc(var(--radius) - 2px)", // Medium border radius
        sm: "calc(var(--radius) - 4px)", // Small border radius
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" }, // Accordion opening animation
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" }, // Accordion closing animation
          to: { height: "0" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out", // Smooth opening animation
        "accordion-up": "accordion-up 0.2s ease-out", // Smooth closing animation
      },
    },
  },
  plugins: [require("tailwindcss-animate")], // Adds animation utilities from the tailwindcss-animate plugin
};

export default config;
