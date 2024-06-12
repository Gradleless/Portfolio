/** @type {import('tailwindcss').Config} */
export default {
  content: [ 
    './src/**/*.svelte',
    './src/**/*.html',
    './src/**/*.css',
    './src/**/*.js',
  ],
  theme: {
    extend: {
      colors: {
        'primary': ' #43455F',
        'secondary': '#E5C3D1',
        'text': '#EFDFDF',
        'tertiary': '#9D9487',
        'card': '#474964',
      },
    },
  },
  plugins: [],
}

