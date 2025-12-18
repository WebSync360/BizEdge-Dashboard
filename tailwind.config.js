/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.html", "./src/**/*.{js,html}"],
  theme: {
    extend: {
      colors: {
        brand: {
          50:  '#eef2ff', // soft indigo background
          100: '#e0e7ff', // hover / subtle fills
          500: '#4f46e5', // PRIMARY (buttons, active states)
          600: '#4338ca', // hover / emphasis
          700: '#3730a3', // strong emphasis (rare)
        },

        surface: {
          DEFAULT: '#ffffff', // cards
          subtle: '#f9fafb',  // light sections
        },

        neutralbg: '#f3f4f6', // app background

        text: {
          primary: '#111827', // near-black
          secondary: '#6b7280', // muted text
          muted: '#9ca3af',
        },
      },

      fontFamily: {
        inter: ['Inter', 'ui-sans-serif', 'system-ui', 'sans-serif'],
      },

      borderRadius: {
        lg: '0.75rem',
        xl: '1rem',
      },
    },
  },
  plugins: [],
}