var webpack = require("webpack")
var path = require('path')

module.exports = {
  devtool: 'source-map',
  entry: {
    app: path.join(__dirname, 'src/js/client.js')
  },
  output: {
    path: path.join(__dirname, '/dist/'),
    filename: '[name].js',
    chunkFilename: '[name].js',
    publicPath: '/'
  },
  module: {
    rules: [{
      test: /\.js?$/,
      exclude: /node_modules/,
      use: {
        loader: 'babel-loader'
      }
    }]
  }
};