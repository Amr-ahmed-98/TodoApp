/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    screens: {
      sm: '480px',
      md: '768px',
      lg: '976px',
      xl: '1440px',
    },
    extend: {
      backgroundImage: (theme) => ({
        'morning-bg': ` url('/assets/images/morning.jpg')`,
        'night-bg': `url('/assets/images/night.jpg')`,
        'gradient-circle':
          'linear-gradient(to right,rgb(254, 202, 202),rgb(252, 165, 165),rgb(254, 240, 138));',
      }),
    },
  },
  plugins: [],
};
