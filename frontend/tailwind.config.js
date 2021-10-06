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
