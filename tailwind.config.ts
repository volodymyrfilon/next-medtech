import type { Config } from 'tailwindcss';
const config: Config = {
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    container: {
      center: true,
      padding: '32px',
    },
    screens: {
      xs: '360px',
      sm: '480px',
      md: '768px',
      lg: '1000px',
      xl: '1280px',
      '2xl': '1440px',
    },
    extend: {
      container: {
        center: true,
        padding: {
          DEFAULT: '1.25rem',
          sm: '1.25rem',
          md: '1.25rem',
          xl: '2.5rem',
        },
      },
      colors: {
        accent: {
          primary: '#C3B1A4',
          dark: '#070A11',
        },
      },
      fontFamily: {
        eUkraine: ['var(--font-eUkraine)'],
        eUkraineHead: ['var(--font-eUkraineHead)'],
      },
      animation: {
        text: 'text 2s ease infinite',
      },
      keyframes: {
        text: {
          '0%, 50%, 100%': {
            'background-size': '200% 200%',
            'background-position': 'left top',
          },
          '25%, 75%': {
            'background-size': '200% 200%',
            'background-position': 'right bottom',
          },
        },
      },
    },
  },
  plugins: [],
};
export default config;
