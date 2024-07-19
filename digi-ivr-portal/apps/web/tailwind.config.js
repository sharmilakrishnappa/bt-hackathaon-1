/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  
  theme: {
    extend: {
      width: {
        'custom-yellow-banner': '393px',
        'custom-yellow-banner-below': '390px',
        'custom-card-list': '361px',

      },
      height: {
        'custom-yellow-banner': '141px',
        'custom-card-list': '120px',
      },
      colors: {
        'custom-gray': '#D7D7D7',
        'custom-ee-blue':'#057382',
        'customYellow' : '#EBF304',
      },
    },
  },
  plugins: [],
}

