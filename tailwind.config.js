module.exports = {
  content: ['./src/pages/**/*.{js,ts,jsx,tsx}', './src/components/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      keyframes: {
        wiggle: {
          '0%, 100%': { transform: 'rotate(10deg)' },
          '50%': { transform: 'rotate(90deg)' }
        },
        rotate: {
          '0%': { transform: 'translate(-50%,-50%) rotate(0deg)' },
          '100%': { transform: 'translate(-50%,-50%) rotate(360deg)' }
        },
        'planet-rotate': {
          '0%': { backgroundPosition: '100% center', objectPosition: '100% center' },
          '100%': { backgroundPosition: '0% center', objectPosition: '0% center' }
        },
        floating: {
          '0%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' },
          '100%': { transform: 'translateY(0px)' }
        }
      },
      animation: {
        wiggle: 'wiggle 5s ease-in-out infinite',
        rotate: 'rotate 10s linear infinite',
        'planet-rotate': 'planet-rotate 30s linear infinite',
        floating: 'floating 3s linear infinite'
      }
    }
  },
  plugins: []
};
