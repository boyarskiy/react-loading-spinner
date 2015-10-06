var path = require('path');
var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: [
    'webpack-dev-server/client?http://localhost:3000',
    'webpack/hot/only-dev-server',
    './src/example/index'
  ],
  devtool: 'eval',
  output: {
    path: path.resolve('example'),
    filename: 'bundle.js'
  },
  plugins: [
    new HtmlWebpackPlugin(),
    new webpack.HotModuleReplacementPlugin()
  ],
  resolve: {
    extensions: ['', '.js']
  },
  module: {
    loaders: [{
      test: /\.js?$/,
      loaders: ['react-hot', 'babel'],
      include: [path.resolve('src')]
    }]
  }
};
