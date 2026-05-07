/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        ink: '#07111f',
        navy: '#0b1b33',
        steel: '#52637a',
        cloud: '#f5f7fb',
        line: '#dbe3ef',
        electric: '#1f8fff'
      },
      fontFamily: {
        sans: ['Inter', 'ui-sans-serif', 'system-ui', 'sans-serif']
      },
      boxShadow: {
        soft: '0 18px 60px rgba(7, 17, 31, 0.12)'
      }
    }
  },
  plugins: []
}
