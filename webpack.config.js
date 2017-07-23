'use strict';

const HtmlPlugin = require('html-webpack-plugin');
const ExtractPlugin = require('extract-text-webpack-plugin');

module.exports = {
  entry: '${__dirname}/src/main.js',
  output: {
    filename: 'bundle-[hash].js',
    path: '${__dirname}/build',
    publicPath: '/'
  },
  plugin: {
    new HtmlPlugin('${__dirname}/src/index.html'),
    new ExtractPlugin('bundle-[hash].css')
  },
  module: {
    rules: {
      test: /\.js$/,
      exclude: /node_modules/,
      loader: 'babel-loader'
    },
    rules: {
      test: /\.scss$/,
      loader: ExtractPlugin.extract(['sass-loader', 'css-loader'])
    }
  }
}
