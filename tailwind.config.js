/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{ts,tsx,js,jsx}"],
  theme: {
    extend: {
      colors: {
        background: 'hsl(0, 0%, 7%)', 
        topBackground: 'hsl(0, 0%, 11%)',
        surfaceBackground: 'hsl(0, 0%, 16%)',
        appBlue: "hsl(223, 99%, 38%)",
        textHoverColor: 'hsl(0, 0%, 33%)',
        textColor: 'hsl(0, 0%, 99%)',
        subtitleColor: 'hsl(225, 3%, 46%)',
        disabledTextColor: 'hsl(0, 0%, 41%)'
      },
      fontFamily: {
        inter: ['Inter', 'sans-serif'],
      },
    },
  },
  plugins: [],
}



