const { colors } = require('tailwindcss/defaultTheme');
// import { darken, lighten } from 'polished';
const { darken, lighten } = require('polished');

const primaryColor = '#3450A1';

module.exports = {
  theme: {
    // colors: {
    //   ...colors,
    //   primary: '#1890ff'
    // },
    extend: {
      colors: {
        primary: primaryColor,
        primarys: {
          900: lighten(0.4, primaryColor)
        }
      }
    }
  },
  variants: {},
  plugins: [],
}
