var webpack = require("webpack")
var path = require('path')

module.exports = {
  devtool: 'source-map',                            // show code original code not in converted,
  mode: 'development',
  entry: {
    app: path.join(__dirname, 'src/js/client.js'),   //use babel for client.js
  },
  output: {
    path: path.join(__dirname, '/dist/'),        // babel output
    filename: '[name].js',
    chunkFilename: '[name].js',
    publicPath: '/'
  },
  module: {
    rules: [{
      test: /\.js?$/,                          // convert only js files
      exclude: /node_modules/,                 
      use: {
        loader: 'babel-loader'                 // added dependencies in package.json
      }
    }]                                         // babel config in babelrc
  }
};