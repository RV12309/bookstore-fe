/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {
      colors: {
        'primary-blue': '#6C5DD4',
        'purple': '#6C5DD4',
        'gray': '#F0F0F0',
        'purple-light': '#F1EEFF',
        'orange': '#ff764c',
        "brown": '#6C5F5B',
        'green': '#00b894',
        'info':'#3da9fc',
        'help': '#9656a1',
        'danger': '#ef4565',

      },
      width: {
        md: '728px', //'768px'
      lg: '984px', //'1024px
        xl: '1240px', //'1280px'
        '2xl': '1496px' //1536px
      },
      aspectRatio: {
        '4/3': '4 / 3',
        '3/4': '3 / 4'
      },
      boxShadow: {
        '#1': '#6C5DD470 0px 7px 29px 0px',
      },
      fontFamily: {
        'second': ['Grandstander'],
      }

    },
  },
  plugins: [],
  corePlugins: { preflight: false }
}

