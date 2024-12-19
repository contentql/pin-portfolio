import type { Config } from 'tailwindcss'

/** @type {import('tailwindcss').Config} */

const config: Config = {
  darkMode: 'class',
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    './src/blocks/**/*.{js,ts,jsx,tsx,mdx}',
    './src/payload/**/*.{js,ts,jsx,tsx,mdx}',
    './src/providers/**/*.{js,ts,jsx,tsx,mdx}',
    './src/animation/**/*.{js,ts,jsx,tsx,mdx}',
    './src/utils/**/*.{js,ts,jsx,tsx,mdx}',
    './src/lib/**/*.{js,ts,jsx,tsx,mdx}',
    './src/constants/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    container: {
      center: true,
      padding: '1rem',
      screens: {
        '2xl': '1280px',
      },
    },
    extend: {
      colors: {
        primary: 'hsl(var(--primary))',
        secondary: 'hsl(var(--secondary))',
        bg: {
          light: 'hsl(var(--bg-light))',
          lighter: 'hsl(var(--bg-lighter))',
          dark: 'hsl(var(--bg-dark))',
          darker: 'hsl(var(--bg-darker))',
        },
        text: {
          white: 'hsl(var(--text-white))',
          black: 'hsl(var(--text-black))',
        },
      },
      borderRadius: {
        DEFAULT: '0.5rem',
      },
      fontSize: {
        xs: '0.8rem',
      },
      fontFamily: {
        sans: ['var(--font-geist-sans)'],
        mono: ['var(--font-geist-mono)'],
      },
      transitionTimingFunction: {
        'custom-ease': 'cubic-bezier(0.33, 1, 0.68, 1)',
      },
      keyframes: {
        text: {
          '0%, 100%': {
            'background-size': '200% 200%',
            'background-position': 'left center',
          },
          '50%': {
            'background-size': '200% 200%',
            'background-position': 'right center',
          },
        },
      },
      animation: {
        text: 'text 4s ease infinite',
      },
      boxShadow: {
        button: `4px 4px 6px hsl(var(--primary))`,
      },
      maxWidth: {
        portfolio: '50rem',
      },
    },
  },
  plugins: [require('@tailwindcss/typography'), require('tailwindcss-animate')],
}

export default config
