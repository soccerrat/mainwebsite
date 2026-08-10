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
        sans: ['Manrope', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        display: ['Sora', 'Manrope', 'ui-sans-serif', 'sans-serif'],
        mono: ['IBM Plex Mono', 'ui-monospace', 'SFMono-Regular', 'monospace']
      },
      boxShadow: {
        soft: '0 18px 60px rgba(7, 17, 31, 0.12)',
        electric: '0 22px 70px rgba(31, 143, 255, 0.22)'
      }
    }
  },
  plugins: []
}
