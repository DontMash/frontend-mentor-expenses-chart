/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{ts,svelte}",
  ],
  theme: {
    extend: {},
    colors: {
      'soft-red': '#ec775f',
      'cyan': '#76b5bc',
  
      'dark-brown': '#382314',
      'medium-brown': '#93867b',
      'cream': '#f8e9dd',
      'very-pale-orange': '#fffaf5',
    },
    fontFamily: {
      'dmsans': ['DM Sans', 'sans-serif'],
    },
  },
  plugins: [],
};
