const { colors } = require('tailwindcss/defaultTheme')

module.exports = {
  theme: {
    container: {
      padding: '1.25rem', // Alternatively set p-5 on the div container itself
    },
    screens: {
      tablet: '640px',
      laptop: '1024px',
      desktop: '1280px',
    },
    extend: {
      colors: {
        green: {
          ...colors.green,
          '900': '#1A4818',
          '1000': '#102B0E'
        },
        red: {
          light: '#FEB2B2',
          dark: '#C53030'
        },
        yellow: '#F6E05E'
      }
    }
  },
  variants: {
    extend: {
      tableLayout: ['hover'],
      backgroundColor: ['even']
    }
  },
  mode: 'jit',
  purge: {
    content: [
      './src/**/*.{html,ts}',
    ]
  },
  plugins: [
    require('tailwindcss-children'),
  ],
};
