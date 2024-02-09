/** @type {import(tailwindcss).Config} */
const {nextui} = require("@nextui-org/react");

module.exports = {
    content: [
        "./src/**/*.{js,jsx,ts,tsx}",
        'node_modules/flowbite-react/lib/esm/**/*.js',
        "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
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
    plugins: [require('flowbite/plugin')],
    darkMode: "class",
    plugins: [nextui()],
}
