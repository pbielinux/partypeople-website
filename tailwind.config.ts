import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/sections/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    screens: {
      xxs: '320px',   // Very small phones (old iPhones, Androids)
      xs: '480px',   // Small phones
      sm: '640px',   // Regular phones
      md: '768px',   // Tablets (portrait)
      lg: '1024px',  // Tablets (landscape) or small laptops
      xl: '1280px',  // Desktops
      xxl: '1440px',  // Wide desktops
    },
    extend: {
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        display: ['"Space Grotesk"', 'sans-serif']
      },
      container: {
        center: true,
        padding: {
          DEFAULT: "0.5rem",
          md: "1rem",
          lg: "2rem",
        },
      },
      colors: {
        white: '#ffffff',
        black: '#000000'
      },
      animation: {
        marquee: 'marquee 30s linear infinite',
        spinslow: 'spin 30s linear infinite',
      },
      keyframes: {
        marquee: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-100%)' },
        },
      },
      transitionTimingFunction: {
        'in-out-smooth': 'cubic-bezier(0.4, 0, 0.2, 1)',
      },
      transitionDuration: {
        '500': '500ms',
      },
      blur: {
        xs: '2px',   // custom minimal blur
        xxs: '1px' // even more subtle
      }
    },
  },
  plugins: [],
};
export default config;