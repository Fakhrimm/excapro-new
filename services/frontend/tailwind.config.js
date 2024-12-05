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
        'fade-in': {
          '0%': { opacity: 0, transform: 'translateY(20px)', visibility: 'hidden' },
          '100%': { opacity: 1, transform: 'translateY(0)', visibility: 'block' },
        },
        'fade-out': {
          '0%': { opacity: 1, transform: 'translateY(0)', visibility: 'block' },
          '100%': { opacity: 0, transform: 'translateY(20px)', visibility: 'hidden' },
        },
      },
      animation: {
        'fade-in': 'fade-in 0.3s ease-out forwards',
        'fade-out': 'fade-out 0.3s forwards',
      }
    },
  },
  plugins: [],
}

