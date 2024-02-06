/** @type {import(tailwindcss).Config} */
const {nextui} = require("@nextui-org/react");

module.exports = {
    content: [
        "./src/**/*.{js,jsx,ts,tsx}",
<<<<<<< HEAD
        'node_modules/flowbite-react/lib/esm/**/*.js',
=======
        "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
>>>>>>> 2e007373d592a19b1577544ee7afac7870c32ad9
    ],
    theme: {
        extend: {
            "teal": "var(--teal)",
            "red": "var(--red)",
            "dark": "var(--dark)",
            "light": "var(--light)",
            "green": "var(--green)",
            "lightGreen": "var(--lightGreen)"

        },
    },
<<<<<<< HEAD
    plugins: [require('flowbite/plugin')],
=======
    darkMode: "class",
    plugins: [nextui()],
>>>>>>> 2e007373d592a19b1577544ee7afac7870c32ad9
}
