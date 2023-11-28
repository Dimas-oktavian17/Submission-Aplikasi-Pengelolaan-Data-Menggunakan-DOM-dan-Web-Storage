/** @type {import('tailwindcss').Config} */
export default {
    darkMode: 'class',
    content: ['./*.{html,js}', './src/module/*.{,js}', './src/module/component/*.{html,js}'],
    theme: {
        fontFamily: {
            display: ['Nunito', 'sans-serif'],
            main: ['DM Sans', 'sans-serif'],
        },
        extend: {
            colors: {
                primary: '#312EB5',
                'main-bg': '#181818',
                'secondary-bg': '#1C1C1C',
                'secondary-child': 'rgba(255, 255, 255, 0.03)',
                'secondary-active': 'rgba(255, 255, 255, 0.10)',
                'main-text': '#FFF'  // if secondary add /60


                // primary2: "#e9eeff",
                // primarySponsor: "#ebefff",
                // primary2hover: "#dae0f7",
                // secondary: "#0C1B4D",
                // secondary2: "#F4F7FF",
                // secondary3: "#657094",
                // Theme: "#eef2ff",
                // btnDark: "rgba(51, 65, 85, 0.3)",
                // donwlod: "rgba(74, 114, 255, 0.25)",
                // "bg-icon": "rgba(12, 27, 77, 0.1)",
                // dark: "rgba(12, 27, 77, 1)",
                // accordion: "rgba(12, 27, 77, 0.6)",
                // footer: "rgba(74, 114, 255, 0.05)",
                // darkFooter: "rgba(30, 41, 59, .3)",
            },
        },
    },
    plugins: [],
}

