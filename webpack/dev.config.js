const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CommonWebpack = require('./common.config')

module.exports = CommonWebpack({
  mode: 'development',
  entry: ['react-devtools', './src/index.tsx'],
  // Output path
  output: {
    path: path.resolve(process.cwd(), "build"),
    filename: "index.js",
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: 'public/index.html',
      inject: "body"
    })
  ]

})