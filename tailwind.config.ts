import type { Config } from "tailwindcss"

const config = {
  darkMode: ["class"],
  content: [
    './src/**/*.{ts,tsx}',
	],
  prefix: "",
  theme: {
    screens: {
      'sm': '576px',
      'md': '768px',
      'lg': '960px',
      'xl': '1280px',
      '2xl': '1536px',
    },
    extend: {
      fontSize: {
        h1: '33px',
        h2: '26px',
        h3: '20px',
        h4: '20px',
        h5: '16px',
        body:'14px',
        'body-lg': '16px',
        'body-sm': '12px',
      },
      colors: {
        background: 'hsl(var(--background))',
        white: 'hsl(var(--white))',
        black: 'hsl(var(--black))',
        errors: 'hsl(var(--errors))',
        accent: 'hsl(var(--accent))',
        gray: 'hsl(var(--gray))',
        'light-gray': 'hsl(var(--light-gray))',
        'dark-gray': 'hsl(var(--dark-gray))',
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
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config

export default config