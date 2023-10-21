/** @type {import('tailwindcss').Config} */
export default {
    content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
    theme: {
        extend: {
            colors: {
                primaryColor: '#16255CFF',
                pinkColor: '#DE9BC9FF',
                yellowColor: '#8092ADFF',
                purpleColor: '#E6D3E0FF',
                irisBlueColor: '#A3D7FF',
                headingColor: '#181A1E',
                textColor: '#4E545F',
            },

            boxShadow: {
                panelShadow: 'rgba(17, 12, 46, 0.15) 0px 48px 100px 0px;',
            },
        },
    },
    plugins: [],
};
