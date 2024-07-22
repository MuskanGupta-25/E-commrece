/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}", './public/index.html'],
  darkMode: false,
  theme: {
    extend: {
      maxWidth: {
        'custom': '100rem', // You can set this to any value you prefer
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [require('@tailwindcss/aspect-ratio'),
    require('@tailwindcss/forms'),  require('@headlessui/react'), require('@heroicons/react/24/outline'), require('@heroicons/react/20/solid')
  ],
}

