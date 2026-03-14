/** @type {import("tailwindcss").Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        base: {
          900: "#0b0f1a",
          800: "#121826",
          700: "#1b2336",
          600: "#9aa4b2",
          200: "#e6e9ef",
          100: "#f6f7fb"
        },
        brand: {
          400: "#6ee7ff",
          500: "#3aa3ff",
          600: "#2b6bff"
        },
        accent: {
          400: "#ff9f7f",
          500: "#ff7b54"
        }
      },
      boxShadow: {
        glass: "0 10px 30px rgba(15, 23, 42, 0.15)",
        glow: "0 0 40px rgba(58, 163, 255, 0.35)"
      },
      backgroundImage: {
        "hero-radial": "radial-gradient(circle at 20% 20%, rgba(58, 163, 255, 0.35), transparent 45%), radial-gradient(circle at 80% 10%, rgba(255, 159, 127, 0.35), transparent 40%), radial-gradient(circle at 70% 80%, rgba(110, 231, 255, 0.25), transparent 40%)"
      },
      fontFamily: {
        display: ["Sora", "system-ui", "sans-serif"],
        body: ["Manrope", "system-ui", "sans-serif"]
      },
      animation: {
        float: "float 6s ease-in-out infinite",
        shimmer: "shimmer 2.2s linear infinite"
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-10px)" }
        },
        shimmer: {
          "0%": { backgroundPosition: "-200% 0" },
          "100%": { backgroundPosition: "200% 0" }
        }
      }
    }
  },
  plugins: []
};
