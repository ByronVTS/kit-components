/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      gridTemplateColumns: {
        "3fr-5fr": "3fr 5fr",
      },
      flex: {
        2: "2 2 0%",
        3: "3 3 0%",
      },
      transitionDuration: {
        100: "100ms",
      },
      colors: {
        hc1: "#264653",
        hc2: "#2a9d8f",
        hc3: "#e9c46a",
        hc4: "#f4a261",
        hc5: "#e76f51",
        dark: "#0D1117",
        darkCard:"#383B41"
      },
      backgroundImage: {
        'footer': "url('https://images.pexels.com/photos/2246476/pexels-photo-2246476.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')",
        'logo': "url('./src/assets/img/murcielago.png')",
        'fondo': "url('https://images.pexels.com/photos/33545/sunrise-phu-quoc-island-ocean.jpg')",
      },
      spacing:{
        '97': '97%',
      },
    },
  },
  plugins: [],
};
