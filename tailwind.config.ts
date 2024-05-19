import type { Config } from 'tailwindcss';
const config: Config = {
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    screens: {
      xs: '360px',
      sm: '480px',
      md: '768px',
      lg: '1000px',
      xl: '1280px',
      '2xl': '1440px',
      '3xl': '1920px',
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
      backgroundImage: {
        'matrix-layer': 'url("/images/hero/matrix.webp")',
        matrix: 'url("/images/hero/matrix-bg.webp")',
        cards: 'url("/images/hero/cards-bg.webp")',
        sadhu: 'url("/images/hero/sadhu-bg.webp")',
      },
      colors: {
        accent: {
          primary: '#6B131E',
          dark: '#070A11',
          gray: '#F0F1F3',
        },
      },
      fontFamily: {
        eUkraine: ['var(--font-eUkraine)'],
        eUkraineHead: ['var(--font-eUkraineHead)'],
        didactGothic: ['var(--font-didactGothic)'],
      },
      animation: {
        text: 'text 3s ease infinite',
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
