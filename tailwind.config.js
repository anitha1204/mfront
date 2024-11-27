/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        primary: '#F4B24F', 
        secondary: '#00BC06',
        color:'#FD9A08',
        colors:'#4D2719',
        black:"#3D3D3D",
        color1:"#E75656" ,
        color2:'#813030' ,
        color3: "#2F53C7" , 
       color4:" #172861 ",
       color5:" #96D172"
      },
    },
  },
  plugins: [],
}