/** @type {import('tailwindcss').Config} */

export default {
  important: true,
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    screens: {
      sm: '576px',
      // => @media (min-width: 576px) { ... }

      md: '768px',
      // => @media (min-width: 768px) { ... }

      lg: '992px',
      // => @media (min-width: 992px) { ... }

      xl: '1200px',
      // => @media (min-width: 1200px) { ... }

      '2xl': '1400px',
      // => @media (min-width: 1400px) { ... }
    },
    container: {
      center: true,
      padding: {
        DEFAULT: '1rem',
        sm: '2rem',
        lg: '4rem',
        xl: '5rem',
        '2xl': '6rem',
      },
    },

    extend: {
      fontFamily: {
        Roboto: ['Roboto', 'sans-serif'],
        arizonia: ['Arizonia'],
      },
      animation: {
        avatar_animate: 'avatar_animate 8s ease-in-out infinite 1s',
      },
      keyframes: {
        avatar_animate: {
          '0%': {
            borderRadius: '60% 40% 30% 70%/60% 30% 70% 40%',
          },
          '50%': {
            borderRadius: '30% 60% 70% 40%/50% 60% 30% 60%',
          },
          '100%': {
            borderRadius: '60% 40% 30% 70%/60% 30% 70% 40%',
          },
        },
      },
      boxShadow: {
        'top-outline': '0px -5px 3px 0px rgba(0,0,0,0.1), 0px 1px 0px -8px rgba(0,0,0,0.1)',
        avatar_profile: 'inset 0 0 0 9px rgb(255 255 255 / 30%)',
      },
      backgroundImage: {
        avatar: 'url("/assets/images/quanganh.jpg")',
      },
    },
  },
  plugins: [],
};
