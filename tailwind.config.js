module.exports = {
  purge: [],
  theme: {
    fontFamily: {
      gotham: ['Gotham Pro', 'sans-serif']
    },
    colors: {
      white: '#FFFFFF',

      orange: {
        100: '#FEEDD3',
        200: '#FE7865',
        300: '#E6604D',
        400: '#F55646'
      },
      blue: {
        100: '#F5F8FC',
        200: '#EFEDFE',
        300: '#5BD5E6'
      },
      green: {
        100: '#FFFBF8',
        200: '#E8FBF7',
        300: '#5BE6B0'
      },
      gray: {
        100: '#ECECEE',
        200: '#DFDAFE',
        300: '83838B'
      },
      pink: {
        100: '#FEDAE8'
      },
      black: {
        100: '#2C2E3F',
        200: '#141517',
        300: '#2C2E3F',
        400: '#1D2539'
      },
      yellow: {
        100: '#FEC365'
      }
    },
    extend: {
      fontSize: {
        '8xl': '6rem'
      },
      /* For width and padding we use spacing from tailwindcss */
      spacing: {
        '144':'36rem'
      }
    },
  },
  variants: {},
  plugins: [],
}
