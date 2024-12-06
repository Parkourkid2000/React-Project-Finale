/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
light: '#ffffff',
dark: '#000000',
color1: '#ffd600',
color2: '#5e84f1',
color3: '#05f903',
color4: '#0abefb',
    }, 
    

    extend: {
      // fontFamily: {
      //   'custom': ['Roboto', 'sans-serif'],
      //   'custom2': ['', '']
      //       },
    },
  },
  plugins: [],
}

