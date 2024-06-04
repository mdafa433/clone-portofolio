/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: ['./**/*.{html,js}'],
  theme: {
    extend: {
      colors: {
        gelap: '#121212',
      },
      transitionDuration: {
        '2000': '2000ms', 
      },
      animation: {
        spin: 'spin 0.5s ease-in-out infinite',
        scale: 'scaleAnimation 1s linear infinite',
      },
      keyframes: {
        spin: {
          '0%': { transform: 'rotate(0deg)' },
          '100%': { transform: 'rotate(360deg)' },
        },
        scaleAnimation: {
          '0%, 100%': {
            transform: 'scale(0.8)',
          },
          '50%': {
            transform: 'scale(0.5)',
          },
        },
      },
    },
    fontFamily: {
      body: [
        'Inter', 
        'ui-sans-serif', 
        'system-ui', 
        '-apple-system', 
        'system-ui', 
        'Segoe UI', 
        'Roboto', 
        'Helvetica Neue', 
        'Arial', 
        'Noto Sans', 
        'sans-serif', 
        'Apple Color Emoji', 
        'Segoe UI Emoji', 
        'Segoe UI Symbol', 
        'Noto Color Emoji'
      ],
      sans: [
        'Inter', 
        'ui-sans-serif', 
        'system-ui', 
        '-apple-system', 
        'system-ui', 
        'Segoe UI', 
        'Roboto', 
        'Helvetica Neue', 
        'Arial', 
        'Noto Sans', 
        'sans-serif', 
        'Apple Color Emoji', 
        'Segoe UI Emoji', 
        'Segoe UI Symbol', 
        'Noto Color Emoji'
      ],
    },
  },
  plugins: [],
}
