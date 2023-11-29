/** @type {import('tailwindcss').Config} */
export default {
    darkMode: 'class',
    content: ['./*.{html,js}', './src/module/*.{,js}', './src/module/component/*.{html,js}'],
    theme: {
        fontFamily: {
            display: ['Nunito', 'sans-serif'],
        },
        extend: {
            colors: {
                primary: '#312EB5',
                'main-bg': '#181818',
                'secondary-bg': '#1C1C1C',
                'secondary-child': 'rgba(255, 255, 255, 0.03)',
                'secondary-active': 'rgba(255, 255, 255, 0.10)',
                'main-text': '#FFF'  // if secondary add /60
            },
        },
    },
    plugins: [],
}

