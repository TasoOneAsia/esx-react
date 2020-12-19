// HAS_ASSETS needs to be set to true, if you wish to copy the assets folder
const HAS_ASSETS = false
const path = require('path')
const CopyPlugin = require('copy-webpack-plugin');
// FIXME: Remove this from a const as this serves as a template now

// Common webpack used for both configurations
module.exports = (options) => ({
  mode: options.mode,
  entry: options.entry,
  target: 'web',
  output: {
    path: options.output.path,
    filename: options.output.filename
  },
  module: {
    rules: [
      // TypeScript JSX Transpiling
      {
        test: /\.tsx?$/,
        use: [
          {
            loader: "ts-loader",
            options: {
              transpileOnly: true,
            },
          },
        ],
        exclude: /node_modules/,
      },
      {
        //
        test: /\.css$/,
        use: ["style-loader", "css-loader"],
      },
      {
        // Preprocess 3rd party .css files located in node_modules if you have them
        test: /\.css$/,
        include: /node_modules/,
        use: ["style-loader", "css-loader"],
      },
      // Allows for SVG Use
      {
        test: /\.svg$/,
        use: [
          {
            loader: "svg-url-loader",
            options: {
              // Inline files smaller than 10 kB
              limit: 10 * 1024,
              noquotes: true,
            },
          },
        ],
      },
    ]
  },
  plugins: HAS_ASSETS ? options.plugins.concat(
    new CopyPlugin({
      patterns: [
        {
          from: path.resolve(__dirname, 'assets'),
          to: path.resolve(__dirname, 'dist', 'assets')
        }
      ]
    })
  ) : options.plugins,
  resolve: {
    modules: ['src', 'node_modules'],
    extensions: ['.js', '.jsx', '.ts', '.tsx', '.react.js']
  }
})