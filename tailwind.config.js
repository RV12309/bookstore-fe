/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {
      colors: {
        'primary-blue': '#6C5DD4',
        'gray': '#F0F0F0'
      },
      width: {
        md: '728px', //'768px'
        lg: '984px', //'1024px',
        xl: '1240px', //'1280px'
        '2xl': '1496px' //1536px
      },
      aspectRatio: {
        '4/3': '4 / 3',
        '3/4': '3 / 4'
      },

    },
  },
  plugins: [],
  corePlugins: { preflight: false }
}

