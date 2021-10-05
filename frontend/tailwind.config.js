module.exports = {
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
