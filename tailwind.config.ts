import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        // DreamLife Now brand palette (extracted from dreamlifenow.de).
        // Primary accent is the sky blue of the current logo swoosh (#5AC8FA).
        // NOTE: the `lime` token name is kept for stability, but every shade now
        // maps to the brand's sky-blue scale so existing utility classes
        // (bg-lime / text-lime / ring-lime …) render in brand blue.
        lime: {
          DEFAULT: "#5AC8FA", // primary brand accent (logo swoosh)
          50: "#eef9ff",
          100: "#d9f1ff",
          200: "#b6e5ff",
          300: "#86d5fc",
          400: "#5ac8fa",
          500: "#2fb3f0",
          600: "#1f93cf",
          700: "#1668a3", // AA-contrast blue for text on white (eyebrows, links)
          800: "#164f7a",
          900: "#163f61",
        },
        sky: {
          DEFAULT: "#5AC8FA", // secondary accent (same brand blue)
          400: "#5ac8fa",
          500: "#2fb3f0",
          600: "#1f93cf",
        },
        ink: {
          DEFAULT: "#101d45", // deep navy (brand dark)
          900: "#0b1534",
          800: "#101d45",
          700: "#1c2a5a",
          600: "#2a3a6e",
        },
        indigo: {
          brand: "#3B3664", // secondary brand (deep indigo)
        },
        cloud: {
          DEFAULT: "#f4f9ff",
          100: "#eceff1",
          200: "#dfe4ea",
        },
        slate: {
          body: "#4b5563",
          muted: "#6f7d91",
        },
      },
      fontFamily: {
        sans: ["var(--font-inter)", "ui-sans-serif", "system-ui", "sans-serif"],
        display: ["var(--font-nunito)", "var(--font-inter)", "sans-serif"],
      },
      fontSize: {
        "display-xl": ["clamp(2.75rem, 6vw, 5rem)", { lineHeight: "1.02", letterSpacing: "-0.02em", fontWeight: "900" }],
        "display-lg": ["clamp(2.25rem, 4.5vw, 3.75rem)", { lineHeight: "1.06", letterSpacing: "-0.02em", fontWeight: "800" }],
        "display-md": ["clamp(1.75rem, 3vw, 2.75rem)", { lineHeight: "1.1", letterSpacing: "-0.01em", fontWeight: "800" }],
        "display-sm": ["clamp(1.375rem, 2vw, 1.875rem)", { lineHeight: "1.2", letterSpacing: "-0.01em", fontWeight: "800" }],
      },
      maxWidth: {
        content: "1200px",
        prose: "68ch",
      },
      borderRadius: {
        xl: "1rem",
        "2xl": "1.5rem",
        "3xl": "2rem",
      },
      boxShadow: {
        card: "0 1px 2px rgba(16,29,69,0.04), 0 12px 32px -12px rgba(16,29,69,0.12)",
        "card-hover": "0 2px 4px rgba(16,29,69,0.06), 0 24px 48px -16px rgba(16,29,69,0.22)",
        soft: "0 8px 30px -12px rgba(16,29,69,0.18)",
        glow: "0 18px 50px -20px rgba(90,200,250,0.6)",
      },
      backgroundImage: {
        "grid-ink":
          "linear-gradient(to right, rgba(16,29,69,0.04) 1px, transparent 1px), linear-gradient(to bottom, rgba(16,29,69,0.04) 1px, transparent 1px)",
      },
      transitionTimingFunction: {
        premium: "cubic-bezier(0.22, 1, 0.36, 1)",
      },
      keyframes: {
        "fade-up": {
          "0%": { opacity: "0", transform: "translateY(16px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        "float-slow": {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-10px)" },
        },
        marquee: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
      },
      animation: {
        "fade-up": "fade-up 0.7s cubic-bezier(0.22,1,0.36,1) both",
        "float-slow": "float-slow 7s ease-in-out infinite",
        marquee: "marquee 40s linear infinite",
      },
    },
  },
  plugins: [],
};

export default config;
