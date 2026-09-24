/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        brand: {
          50: '#F8FBEA',
          100: '#F0F7CD',
          200: '#DFEE9C',
          300: '#CBE366',
          400: '#B5D632',
          DEFAULT: '#88AA00',
          500: '#88AA00',
          600: '#739000',
          700: '#556B2F',
          800: '#3E4D1D',
          900: '#263012',
          950: '#141A0A',
        },
        surface: {
          dark: '#0C0F0A',
          panel: '#131810',
          elevated: '#1A2216',
          border: '#242F1E',
          'border-light': '#36472D',
          muted: '#8B9B82',
        },
        app: {
          bg: '#F7F7F0',
          header: '#556B2F',
          badge: '#88AA00',
        }
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'sans-serif'],
        mono: ['JetBrains Mono', 'Fira Code', 'ui-monospace', 'SFMono-Regular', 'Menlo', 'Monaco', 'Consolas', 'monospace'],
      },
      boxShadow: {
        'brand-glow': '0 0 35px -5px rgba(136, 170, 0, 0.3)',
        'brand-glow-lg': '0 0 60px -10px rgba(136, 170, 0, 0.4)',
      },
    },
  },
  plugins: [
    import('@tailwindcss/typography'),
  ],
};

