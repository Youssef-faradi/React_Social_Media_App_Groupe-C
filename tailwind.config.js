/** @type {import(tailwindcss).Config} */
module.exports = {
    content: [
        "./src/**/*.{js,jsx,ts,tsx}",
    ],
    theme: {
        extend: {
            "primary-color": "var(--primary-color)",
            "secondary-color": "var(--secondary-color)"
        },
    },
    plugins: [],
}
