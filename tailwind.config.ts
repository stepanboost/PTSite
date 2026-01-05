import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        // Новая цветовая палитра
        primary: {
          50: '#fee2e2',
          100: '#fecaca',
          200: '#fca5a5',
          300: '#f87171',
          400: '#ef4444',
          500: '#ad1a20', // Deep Energy Red - основной акцент
          600: '#99151a',
          700: '#851015',
          800: '#700b10',
          900: '#5c080b',
        },
        neutral: {
          50: '#f5f5f5',
          100: '#ebebeb', // Pure White - основной фон
          200: '#e0e0e0',
          300: '#d4d4d4',
          400: '#a3a3a3',
          500: '#737373',
          600: '#525252',
          700: '#404040',
          800: '#262626',
          900: '#0b0b0b', // Graphite Black - чёрный акцент
        },
        graphite: {
          DEFAULT: '#0b0b0b', // Graphite Black
          50: '#f5f5f5',
          100: '#ebebeb',
          200: '#e0e0e0',
          300: '#d4d4d4',
          400: '#a3a3a3',
          500: '#737373',
          600: '#525252',
          700: '#404040',
          800: '#262626',
          900: '#0b0b0b',
        },
        accent: {
          red: '#ad1a20', // Deep Energy Red
          black: '#0b0b0b', // Graphite Black
          white: '#ebebeb', // Pure White
        },
      },
      borderRadius: {
        'xl': '24px',
        '2xl': '32px',
        '3xl': '48px',
      },
      backdropBlur: {
        xs: '2px',
        'glass': '20px',
        'glass-strong': '40px',
      },
      boxShadow: {
        'soft': '0 2px 8px rgba(11, 11, 11, 0.04)',
        'medium': '0 4px 16px rgba(11, 11, 11, 0.08)',
        'strong': '0 8px 32px rgba(11, 11, 11, 0.12)',
        'glass': '0 8px 32px rgba(11, 11, 11, 0.1), inset 0 1px 0 rgba(255, 255, 255, 0.6)',
        'glass-strong': '0 16px 64px rgba(11, 11, 11, 0.15), inset 0 1px 0 rgba(255, 255, 255, 0.7)',
        'red-glow': '0 0 20px rgba(173, 26, 32, 0.3)',
        'black-glow': '0 0 20px rgba(11, 11, 11, 0.2)',
      },
      spacing: {
        '18': '4.5rem',
        '22': '5.5rem',
        '26': '6.5rem',
        '30': '7.5rem',
      },
      fontFamily: {
        sans: ['-apple-system', 'BlinkMacSystemFont', 'SF Pro Display', 'Segoe UI', 'Roboto', 'sans-serif'],
      },
      fontSize: {
        'display': ['2.5rem', { lineHeight: '1.1', letterSpacing: '-0.02em' }],
        'display-sm': ['1.75rem', { lineHeight: '1.1', letterSpacing: '-0.02em' }],
        'h1': ['1.5rem', { lineHeight: '1.2', letterSpacing: '-0.01em' }],
        'h2': ['1.25rem', { lineHeight: '1.3', letterSpacing: '-0.01em' }],
        'h3': ['1.125rem', { lineHeight: '1.4' }],
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'shimmer': 'shimmer 2s linear infinite',
        'pulse-soft': 'pulse-soft 3s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        shimmer: {
          '0%': { backgroundPosition: '-1000px 0' },
          '100%': { backgroundPosition: '1000px 0' },
        },
        'pulse-soft': {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0.8' },
        },
      },
    },
  },
  plugins: [],
}

export default config
