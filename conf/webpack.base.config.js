const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const htmlPlugins = require('./utils/htmlPlugins');

const PATHS = {
  source: path.resolve(__dirname, '../source'),
  dist: path.resolve(__dirname, '../dist'),
};

module.exports = {
  externals: {
    paths: PATHS,
  },

  entry: `${PATHS.source}/index.js`,

  output: {
    path: PATHS.dist,
    filename: '[name].js',
  },

  plugins: [...htmlPlugins],

  module: {
    rules: [
      {
        test: /\.js$/,
        loader: 'babel-loader',
      },
      {
        test: /\.pug$/,
        use: ['pug-loader'],
      },
    ],
  },
};
