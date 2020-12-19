const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CommonWebpack = require('./common.config')
// If you have an assets folder you must set this const to true
// Path: assets/*/**
// FIXME: Remove this from a const as this serves as a template now

module.exports = CommonWebpack({
    // Mode, not minifed in development
  mode: 'production',
  entry: './src/index.tsx',
  // Output path
  output: {
    path: path.resolve(process.cwd(), "build"),
    filename: "index.js",
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: 'public/index.html',
      inject: "body",
      minify: {
        removeComments: true,
        collapseWhitespace: true,
        removeRedundantAttributes: true,
        useShortDoctype: true,
        removeEmptyAttributes: true,
        removeStyleLinkTypeAttributes: true,
        keepClosingSlash: true,
        minifyJS: true,
        minifyCSS: true,
        minifyURLs: true,
      }
    })
  ],
  // Will warn for assets
  performance: {
    assetFilter: (assetFilename) => !/(\.map$)|(^(main\.|favicon\.))/.test(assetFilename),
  },
})