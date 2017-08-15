const path = require('path')
const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')

const srcDir = path.resolve(__dirname, '..', 'src')
const distDir = path.resolve(__dirname, '..', 'dist')

module.exports = {
  context: srcDir,

  devtool: 'source-map',

  entry: [
    './index.js'
  ],

  output: {
    filename: 'main.bundle.js',
    path: distDir,
    publicPath: '/',
    sourceMapFilename: 'main.map'
  },

  devServer: {
    contentBase: srcDir,
    // match the output path
    publicPath: '/',
    // match the output `publicPath`
    historyApiFallback: true,
    port: 1738
  },

  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: [{
          loader: 'babel-loader',
          options: { presets: ['es2015', 'react'] }
        }]
      },
      {
        test: /\.(s?)css$/,
        use: [
          'style-loader',
          'css-loader',
          'postcss-loader',
          'sass-loader'
        ]
      },
      {
        test: /\.(jpg|jpeg|png|gif|ico|svg)$/,
        loader: 'url-loader',
        query: {
          limit: 10000, // use data url for assets <= 10KB
          name: 'assets/[name].[hash].[ext]'
        }
      }
    ]
  },

  plugins: [
    new webpack.NamedModulesPlugin(),

    new HtmlWebpackPlugin({
      template: path.join(srcDir, 'index.html'),
      // where to find the html template

      path: distDir,
      // where to put the generated file

      filename: 'index.html'
      // the output file name
    })
  ]
}
