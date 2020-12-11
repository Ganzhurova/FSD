const path = require('path');
const { merge } = require('webpack-merge');
const ESLintPlugin = require('eslint-webpack-plugin');
const StylelintPlugin = require('stylelint-webpack-plugin');
const baseWebpackConfig = require('./webpack.base.config');

const devWebpackConfig = {
  mode: 'development',

  devServer: {
    contentBase: path.resolve(__dirname, '../dist'),
    publicPath: '/assets/',
    overlay: {
      warnings: true,
      errors: true,
    },
    port: 8081,
  },

  plugins: [
    new ESLintPlugin({
      context: path.resolve(__dirname, '../source'),
    }),
    new StylelintPlugin({
      context: path.resolve(__dirname, '../source'),
      fix: true,
    }),
  ],
};

const config = merge(baseWebpackConfig, devWebpackConfig);

module.exports = () => {
  return config;
};
