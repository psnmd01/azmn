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
          DEFAULT: '#101214',
          muted: '#4a5563',
          soft: '#5f6871',
        },
        surface: {
          DEFAULT: '#f5f3ee',
          raised: '#ffffff',
          muted: '#e7e9e2',
        },
        border: {
          DEFAULT: '#d5d8cf',
          strong: '#b8beb2',
        },
        accent: {
          DEFAULT: '#bc2a64',
          text: '#861347',
          soft: '#fce7ef',
          on: '#ffffff',
        },
        success: '#177245',
        warning: '#8a5a12',
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
        h3: ['1.625rem', { lineHeight: '2.125rem', fontWeight: '760' }],
        h2: ['2.75rem', { lineHeight: '3.125rem', fontWeight: '790' }],
        h1: ['4rem', { lineHeight: '4.25rem', fontWeight: '820' }],
        display: ['5.5rem', { lineHeight: '5.625rem', fontWeight: '840' }],
      },
      spacing: {
        gutter: '1.25rem',
        'gutter-md': '2rem',
        'gutter-lg': '3rem',
        container: '76.25rem',
        section: '5rem',
        'section-tight': '3.5rem',
        'section-lg': '8rem',
        'section-xl': '10rem',
        'hero-gap': '9rem',
        rail: '5.5rem',
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
