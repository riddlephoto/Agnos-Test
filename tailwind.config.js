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
        'bar-yellow': 'rgb(244, 210, 133)',
      },
      fontFamily: {
        anuphan: ['Anuphan'],
      },
      boxShadow: {
        'main-shadow': '0px 2px 8px 0px rgba(0, 0, 0, 0.5)'
      }
    },
    keyframes: {
      fadeIn: {
        '0%': { opacity: '0' },
        '100%': { opacity: '1' },
      },
    },
    animation: {
      fadeIn: 'fadeIn 0.5s ease-in-out',
    },
  },
  plugins: [],
};
