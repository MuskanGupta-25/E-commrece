/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {},
  },
  plugins: [require('@tailwindcss/aspect-ratio'),
    require('@tailwindcss/forms'),  require('@headlessui/react'), require('@heroicons/react/24/outline'), require('@heroicons/react/20/solid')
  ],
}

