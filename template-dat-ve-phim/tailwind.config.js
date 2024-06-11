/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./*.{html,js}"],
    theme: {
        extend: {
            backgroundImage: {
                'showing-now': "url('./image/showing-now.jpg')",
            }
        },
    },
    plugins: [],
}