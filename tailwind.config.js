/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["*.{html,js,css}", "./*.{html,js,css}"],
  theme: {
    extend: {
      spacing: {},
    },
    fontFamily: {
      "roboto-slab": [
        "Roboto Slab",
        {
          fontFeatureSettings: '"cv03", on',
        },
      ],
    },
  },
  corePlugins: {
    preflight: false,
  },
};
