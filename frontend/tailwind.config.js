module.exports = {
  theme: {
    container: {
      padding: '1.25rem', // Alternatively set p-5 on the div container itself
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
