/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./Pages/**/*.{razor,cshtml,html}",
        "./Shared/**/*.{razor,cshtml,html}",
        "./Components/**/*.{razor,cshtml,html}",
        "./Components/Layout/*.{razor,cshtml,html}",
        "./wwwroot/**/*.{html,js}",
        "./**/*.razor",
        "./**/*.cshtml",
    ],
    theme: {
        extend: {},
    },
    plugins: [],
}

