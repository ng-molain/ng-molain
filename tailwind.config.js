const { colors } = require('tailwindcss/defaultTheme');
// import { darken, lighten } from 'polished';
const { darken, lighten } = require('polished');

// const primaryColor = '#3450A1';
// const primaryColor = '#245081';
const primaryColor = '#4169E1';

console.log("Custom tailwindcss....")

module.exports = {
  purge: {
    enabled: false,
    content: [
      './apps/**/src/**/*.html',
      './libs/**/src/**/*.html'
    ]
  },
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
  variants: {
    extend: {
      translate: ['group-hover'],
      display: ['group-hover'],
      scale: ['group-hover'],
    }
  },
  plugins: [],
}
