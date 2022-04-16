module.exports = {
  content: [
      "./index.html",
      "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
        colors:{
            'primary': 'hsl(230, 35%, 7%)',
            'secondary' : 'hsl(25, 100%, 94%)',
        }
    },
  },
  plugins: [],
}
