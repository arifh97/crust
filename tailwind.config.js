/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./components/**/*.{js,vue,ts}",
        "./layouts/**/*.vue",
        "./pages/**/*.vue",
        "./plugins/**/*.{js,ts}",
        "./app.vue",
        "./error.vue",
    ],
    theme: {
        container: {
            center: true,
            padding: '15px',
            width: {
                default: '100%',
                'sm': '540px',
                'md': '720px',
                'lg': '960px',
                'xl': '1140px',
                'xxl': '1300px',
            },
        },
        screens: {
            'sm': '576px',
            'md': '768px',
            'lg': '992px',
            'xl': '1200px',
            'xxl': '1300px',
        },
        extend: {
            colors: {
                primary: {
                    50: '#EBFAEB',
                    '700': '#FA8C16',
                }
            },
        },
    },
    plugins: [],
}