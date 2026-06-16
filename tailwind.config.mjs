/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}',
    './public/**/*.html',
    './index.html',
  ],
  theme: {
    extend: {
      colors: {
        ink: {
          DEFAULT: '#111315',
          muted: '#4f565f',
          soft: '#737b86',
        },
        surface: {
          DEFAULT: '#f7f5ef',
          raised: '#ffffff',
          muted: '#ece8dd',
        },
        border: {
          DEFAULT: '#d8d2c4',
          strong: '#bdb5a4',
        },
        accent: {
          DEFAULT: '#2457ff',
          text: '#1737a6',
          soft: '#e8eeff',
          on: '#ffffff',
        },
        success: '#1f7a4d',
        warning: '#9a5b13',
      },
      fontFamily: {
        sans: [
          'Inter',
          'ui-sans-serif',
          'system-ui',
          '-apple-system',
          'BlinkMacSystemFont',
          '"Segoe UI"',
          'sans-serif',
        ],
      },
      fontSize: {
        eyebrow: ['0.75rem', { lineHeight: '1rem', fontWeight: '700' }],
        caption: ['0.75rem', { lineHeight: '1.125rem', fontWeight: '500' }],
        'body-sm': ['0.875rem', { lineHeight: '1.375rem', fontWeight: '500' }],
        body: ['1rem', { lineHeight: '1.625rem', fontWeight: '500' }],
        'body-lg': ['1.125rem', { lineHeight: '1.875rem', fontWeight: '500' }],
        h4: ['1.25rem', { lineHeight: '1.75rem', fontWeight: '700' }],
        h3: ['1.5rem', { lineHeight: '2rem', fontWeight: '750' }],
        h2: ['2.25rem', { lineHeight: '2.625rem', fontWeight: '780' }],
        h1: ['3.5rem', { lineHeight: '3.75rem', fontWeight: '800' }],
        display: ['4.5rem', { lineHeight: '4.75rem', fontWeight: '820' }],
      },
      spacing: {
        gutter: '1.25rem',
        'gutter-md': '2rem',
        'gutter-lg': '3rem',
        container: '73.75rem',
        section: '4.5rem',
        'section-lg': '7rem',
        'hero-gap': '8rem',
      },
      borderRadius: {
        card: '0.5rem',
        control: '999px',
      },
      boxShadow: {
        nav: '0 1px 0 rgba(17, 19, 21, 0.08), 0 16px 40px rgba(17, 19, 21, 0.08)',
        card: '0 1px 0 rgba(17, 19, 21, 0.06), 0 20px 48px rgba(17, 19, 21, 0.08)',
        lift: '0 1px 0 rgba(17, 19, 21, 0.08), 0 28px 70px rgba(17, 19, 21, 0.12)',
      },
      transitionTimingFunction: {
        expressive: 'cubic-bezier(0.2, 0.8, 0.2, 1)',
      },
    },
  },
  plugins: [],
};
