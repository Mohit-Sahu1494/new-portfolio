/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      keyframes: {
        pulse: {
          '0%, 100%': { boxShadow: '0 0 40px rgba(139, 92, 246, 0.5)' },
          '50%': { boxShadow: '0 0 60px rgba(139, 92, 246, 0.9)' },
        },
        pulse2: {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0.4' },
        },
        blink: {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0' },
        },
        morphShape: {
          '0%, 100%': { borderRadius: '30% 70% 70% 30% / 30% 30% 70% 70%' },
          '50%': { borderRadius: '70% 30% 30% 70% / 70% 70% 30% 30%' },
        },
      },
      animation: {
        pulse: 'pulse 2s infinite',
        pulse2: 'pulse2 2s infinite',
        blink: 'blink 1s infinite',
        morphShape: 'morphShape 8s ease-in-out infinite',
      },
    },
  },
  plugins: [],
}
