/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            animation: {
                'typing': 'typing 1.5s infinite',
                'pulse-slow': 'pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite',
            },
            keyframes: {
                typing: {
                    '0%, 60%': { opacity: '1' },
                    '30%': { opacity: '0.5' },
                }
            }
        },
    },
    plugins: [],
} 