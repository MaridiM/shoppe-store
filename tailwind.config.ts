import type { Config } from 'tailwindcss';

const config = {
  darkMode: ['class'],
  content: ['./src/**/*.{ts,tsx}'],
  prefix: '',
  theme: {
    screens: {
      sm: '576px',
      md: '768px',
      lg: '960px',
      xl: '1280px',
      '2xl': '1536px',
    },
    extend: {
      fontSize: {
        sm: '14px',
        base: '16px',
        lg: '18px',
        xl: '20px',
      },
      colors: {
        background: 'var(--background)',
        white: 'var(--white)',
        black: 'var(--black)',
        errors: 'var(--errors)',
        gray: 'var(--gray)',
        'light-gray': 'var(--light-gray)',
        'dark-gray': 'var(--dark-gray)',

        
        border: 'var(--border)',
        input: 'var(--input)',
        ring: 'var(--ring)',
        foreground: 'var(--foreground)',
        primary: {
            DEFAULT: 'var(--primary)',
            foreground: 'var(--primary-foreground)',
        },
        secondary: {
            DEFAULT: 'var(--secondary)',
            foreground: 'var(--secondary-foreground)',
        },
        destructive: {
            DEFAULT: 'var(--destructive)',
            foreground: 'var(--destructive-foreground)',
        },
        muted: {
            DEFAULT: 'var(--muted)',
            foreground: 'var(--muted-foreground)',
        },
        accent: {
            DEFAULT: 'var(--accent)',
            foreground: 'hsl(var(--accent-foreground)',
        },
        popover: {
            DEFAULT: 'var(--popover)',
            foreground: 'var(--popover-foreground)',
        },
        card: {
            DEFAULT: 'var(--card)',
            foreground: 'var(--card-foreground)',
        },
      },
      keyframes: {
        'accordion-down': {
          from: { height: '0' },
          to: { height: 'var(--radix-accordion-content-height)' },
        },
        'accordion-up': {
          from: { height: 'var(--radix-accordion-content-height)' },
          to: { height: '0' },
        },
      },
      animation: {
        'accordion-down': 'accordion-down 0.2s ease-out',
        'accordion-up': 'accordion-up 0.2s ease-out',
      },
    },
  },
  plugins: [require('tailwindcss-animate')],
} satisfies Config;

export default config;
