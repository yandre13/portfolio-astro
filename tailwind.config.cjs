/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        primary: '#242124',
      },
    },
    screens: {
      tablet: '720px',
      // => @media (min-width: 720px) { ... }

      laptop: '1024px',
      // => @media (min-width: 1024px) { ... }

      desktop: '1280px',
      // => @media (min-width: 1280px) { ... }

      desktopLarge: '1536px',
      // => @media (min-width: 1536px) { ... }
    },
    container: {
      center: true,
      padding: {
        DEFAULT: '1rem',
      },
    },
    fontFamily: {
      sans: ['Poppins', 'sans-serif'],
    },
    fontSize: {
      // Title specs
      'title-20': [
        '20px',
        {
          lineHeight: '30px',
          fontWeight: '600',
        },
      ],
      'title-30': [
        '30px',
        {
          lineHeight: '44px',
          fontWeight: '600',
        },
      ],
      'title-40': [
        '40px',
        {
          lineHeight: '60px',
          fontWeight: '600',
        },
      ],
      // Subtitle specs
      'subtitle-18': [
        '18px',
        {
          lineHeight: '28px',
          fontWeight: '600',
        },
      ],
      // Body specs
      'body-10': [
        '10px',
        {
          lineHeight: '16px',
          fontWeight: '400',
        },
      ],
      'body-12-300': [
        '12px',
        {
          lineHeight: '18px',
          fontWeight: '300',
        },
      ],
      'body-12-400': [
        '12px',
        {
          lineHeight: '18px',
          fontWeight: '400',
        },
      ],
      'body-12-600': [
        '12px',
        {
          lineHeight: '18px',
          fontWeight: '600',
        },
      ],
      'body-13': [
        '13px',
        {
          lineHeight: '20px',
          fontWeight: '400',
        },
      ],
      'body-13-600': [
        '13px',
        {
          lineHeight: '20px',
          fontWeight: '600',
        },
      ],
      'body-14': [
        '14px',
        {
          lineHeight: '20px',
          fontWeight: '300',
        },
      ],
      'body-16-300': [
        '16px',
        {
          lineHeight: '24px',
          fontWeight: '300',
        },
      ],
      'body-16-400': [
        '16px',
        {
          lineHeight: '24px',
          fontWeight: '400',
        },
      ],
      'body-16-600': [
        '16px',
        {
          lineHeight: '24px',
          fontWeight: '600',
        },
      ],
    },
  },
  plugins: [],
};
