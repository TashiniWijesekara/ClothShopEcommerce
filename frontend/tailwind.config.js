/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                primary: '#f5f5f5',
                secondary: '#b57b65',
                tertiary: '#222222',
                slate: {
                    10: '#f1f3f4',
                },
                green: {
                    50: '#101010',
                    90: '#69443c',
                },
                gray: {
                    10: '#EEEEEE',
                    20: '#A2A2A2',
                    30: '#7B7B7B',
                    50: '#585858',
                    90: '#575757',
                },
            },
            backgroundImage: {
                home: "url('/src/assets/background/gigiLogo1.png')",
                banneroffer: "url('/src/assets/background/banner.png')",
                banneroffer1: "url('/src/assets/background/banner1.png')",
                banneroffer2: "url('/src/assets/background/banner2.png')",
            },
            screens: {
                xs: '400px',
                '3xl': '1680px',
                '4xl': '2200px',
            },
            maxWidth: {
                '10xl': '1512px',
            },
            borderRadius: {
                '5xl': '40px',
            },
        },
    },
    plugins: [],
}