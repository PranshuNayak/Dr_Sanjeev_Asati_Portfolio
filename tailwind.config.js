/** @type {import('tailwindcss').Config} */
const withMT = require("@material-tailwind/react/utils/withMT");
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}","node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      backgroundImage: theme => ({
        'about-background-image': "url('./src/components/About/images/about.webp')",
    }),
    },
  },
  plugins: [require('flowbite/plugin')],
};
