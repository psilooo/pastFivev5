/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'bebas': ['Bebas Neue', 'sans-serif'],
        'courier': ['Courier Prime', 'monospace'],
      },
      animation: {
        'glitch': 'glitch 2s infinite',
        'glitch-2': 'glitch-2 3s infinite',
        'noise': 'noise 0.2s infinite',
        'flicker': 'flicker 4s infinite',
        'distort': 'distort 8s infinite',
      },
      keyframes: {
        glitch: {
          '0%, 100%': { transform: 'translate(0)' },
          '20%': { transform: 'translate(-2px, 2px)' },
          '40%': { transform: 'translate(-2px, -2px)' },
          '60%': { transform: 'translate(2px, 2px)' },
          '80%': { transform: 'translate(2px, -2px)' },
        },
        'glitch-2': {
          '0%, 100%': { transform: 'translate(0) skew(0deg)' },
          '20%': { transform: 'translate(-3px, 0) skew(-2deg)' },
          '40%': { transform: 'translate(3px, 0) skew(2deg)' },
          '60%': { transform: 'translate(0, -2px) skew(-1deg)' },
          '80%': { transform: 'translate(0, 2px) skew(1deg)' },
        },
        noise: {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0.95' },
        },
        flicker: {
          '0%, 100%': { opacity: '1' },
          '92%': { opacity: '1' },
          '93%': { opacity: '0.4' },
          '94%': { opacity: '1' },
          '95%': { opacity: '0.2' },
          '96%': { opacity: '1' },
        },
        distort: {
          '0%, 100%': { filter: 'blur(0px) contrast(100%)' },
          '25%': { filter: 'blur(0.5px) contrast(110%)' },
          '50%': { filter: 'blur(0px) contrast(105%)' },
          '75%': { filter: 'blur(0.3px) contrast(115%)' },
        },
      },
    },
  },
  plugins: [],
}
