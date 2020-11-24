const { merge } = require('webpack-merge');
const ESLintPlugin = require('eslint-webpack-plugin');
const baseWebpackConfig = require('./webpack.base.config');

const devWebpackConfig = {
  mode: 'development',

  devServer: {
    contentBase: baseWebpackConfig.externals.paths.dist,
    overlay: {
      warnings: true,
      errors: true,
    },
    port: 8081,
  },

  plugins: [
    new ESLintPlugin({
      context: baseWebpackConfig.externals.paths.source,
    }),
  ],
};

const config = merge(baseWebpackConfig, devWebpackConfig);

module.exports = () => {
  return config;
};
