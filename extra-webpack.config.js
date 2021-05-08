const appName = require('./package.json').name;

module.exports = {
  module: {
    rules: [
      {
        test: /\.css$/,
        loader: "css-loader"
      },
      {
        // test: /(\.scss|\.css)$/,
        test: /\.scss$/,
        use: [
          {
            loader: "postcss-loader",
            options: {
              postcssOptions: {
                plugins: [require("tailwindcss")("./tailwind.config.js")]
              }
            }
          },
          {
            loader: "sass-loader"
          }
        ]
      },
      {
        test: /\.less$/,
        loader: 'less-loader',
        options: {
          lessOptions: {
            modifyVars: { // 修改主题变量
              'primary-color': '#3450A1',
            },
            javascriptEnabled: true
          }
        }
      }
    ]
  },

  devServer: {
    headers: {
      'Access-Control-Allow-Origin': '*',
    },
  },

  // TODO 要改为支持 Sub Project
  output: {
    library: `${appName}-[name]`,
    libraryTarget: 'umd',
    jsonpFunction: `webpackJsonp_${appName}`,
  },
};
