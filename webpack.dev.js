const path = require('path');
const { merge } = require('webpack-merge');
const StylelintPlugin = require('stylelint-webpack-plugin');
const ESLintPlugin = require('eslint-webpack-plugin');
const common = require('./webpack.common');

module.exports = merge(common, {
  mode: 'development',
  devtool: 'inline-source-map',
  devServer: {
    static: './dist',
    watchFiles: ['./source/**/*.pug'],
    port: 8080,
    client: {
      progress: true,
      overlay: {
        errors: true,
        warnings: false,
      },
    },
  },
  plugins: [
    new StylelintPlugin({
      context: path.resolve(__dirname, './source'),
      fix: true,
    }),
    new ESLintPlugin({
      context: path.resolve(__dirname, './source'),
      fix: true,
    }),
  ],
});
