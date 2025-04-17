/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{ts,tsx,js,jsx}"],
  theme: {
    extend: {
      colors: {
        background: 'hsl(0, 0%, 99%)', 
        topBackground: 'hsl(0, 0%, 11%)',
        surfaceBackground: 'hsl(0, 0%, 16%)',
        appBlue: "hsl(11, 80%, 60%)",
        textHoverColor: 'hsl(0, 0%, 33%)',
        textColor: 'hsl(0, 0%, 11%)',
        subtitleColor: 'hsl(225, 3%, 46%)',
        disabledTextColor: 'hsl(0, 0%, 41%)'
      },
      fontFamily: {
        inter: ['Rubik', 'sans-serif'],
      },
    },
  },
  plugins: [],
}



