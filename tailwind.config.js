/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'main-grey': 'rgb(77, 77, 77)',
        'light-grey': 'rgb(128, 128, 128)',
        'light-blue': 'rgb(50, 170, 255)',
        'dark-blue': ' rgb(16, 52, 166)',
        'button-blue': 'rgba(0, 133, 255, 0.13);',
        'button-dark-blue': 'rgb(32, 110, 209)',
        'button-grey': 'rgb(235, 235, 235)',
      },
      fontFamily: {
        anuphan: ['Anuphan'],
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
      },
    },
  },
  plugins: [],
};
