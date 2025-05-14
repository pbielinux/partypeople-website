/** @type {import('postcss-load-config').Config} */
const config = {
  plugins: {
    tailwindcss: {},
  },
  images: {
    domains: ['storage.googleapis.com'],
  },
};

export default config;