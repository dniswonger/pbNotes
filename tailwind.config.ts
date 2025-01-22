import colors from './colors.json';
import type { Config } from 'tailwindcss';
export default {
  content: ['index.html', './src/**/*.{js,jsx,ts,tsx,vue,html}'],
  theme: {
    colors: colors,
    fontFamily: {
      sans: ['inter', 'sans-serif'],
      serif: ['noto-serif', 'serif'],
      mono: ['source-code-pro', 'monospace'],
    },
    extend: {
      boxShadow: {
        small: '0px 4px 6px rgba(240, 240, 240, 0.6)',
        large: '0px 8px 12px rgba(240, 240, 240, 0.6)',
        menu: '0px -4px 6px rgba(240, 240, 240, 0.6)',
        menuDark: '0px -4px 6px rgba(0, 0, 0, 0.3)',
      },
    },
  },
  plugins: [],
} satisfies Config;
