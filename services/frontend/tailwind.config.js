/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {
      colors: {
        "primary": "var(--color-primary)",
        "primary-accent": "var(--color-primary-accent)",
        "primary-text": "var(--color-primary-text)",
        "primary-text-accent": "var(--color-primary-text-accent)",
        
        "light": "var(--color-light)",
        "light-text": "var(--color-light-text)",
        "light-text-heavy": "var(--color-light-text-heavy)",
        
        "plain": "var(--color-plain)",
        "plain-accent": "var(--color-plain-accent)",
        "plain-text": "var(--color-plain-text)",
        "plain-text-heavy": "var(--color-plain-text-heavy)",
        "plain-text-accent": "var(--color-plain-text-accent)",
      },
      opacity: {
        'full': '1.00',
        'heavy': '0.80',
        'medium': '0.60',
        'light': '0.40',
        'non': '0.00',
      },
      keyframes: {
        'fade-in-u': {
          '0%': { opacity: 0, transform: 'translateY(-5px)', visibility: 'hidden' },
          '100%': { opacity: 1, transform: 'translateY(0)', visibility: 'block' },
        },
        'fade-out-u': {
          '0%': { opacity: 1, transform: 'translateY(0)', visibility: 'block' },
          '100%': { opacity: 0, transform: 'translateY(-5px)', visibility: 'hidden' },
        },
        'fade-in-l': {
          '0%': { opacity: 0, transform: 'translateX(-10px)', visibility: 'hidden' },
          '100%': { opacity: 1, transform: 'translateX(0)', visibility: 'block' },
        },
        'fade-out-l': {
          '0%': { opacity: 1, transform: 'translateX(0)', visibility: 'block' },
          '100%': { opacity: 0, transform: 'translateX(-10px)', visibility: 'hidden' },
        },
        'fade-in-r': {
          '0%': { opacity: 0, transform: 'translateX(10px)', visibility: 'hidden' },
          '100%': { opacity: 1, transform: 'translateX(0)', visibility: 'block' },
        },
        'fade-out-r': {
          '0%': { opacity: 1, transform: 'translateX(0)', visibility: 'block' },
          '100%': { opacity: 0, transform: 'translateX(10px)', visibility: 'hidden' },
        },
      },
      animation: {
        'fade-in-u': 'fade-in-u 0.5s ease-out forwards',
        'fade-out-u': 'fade-out-u 0.5s forwards',
        'fade-in-l': 'fade-in-l 0.5s ease-out forwards',
        'fade-out-l': 'fade-out-l 0.5s forwards',
        'fade-in-r': 'fade-in-r 0.5s ease-out forwards',
        'fade-out-r': 'fade-out-r 0.5s forwards',
      }
    },
  },
  plugins: [],
}

