const { merge } = require('webpack-merge');
const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const baseWebpackConfig = require('./webpack.base.config');

const productionWebpackConfig = {
  mode: 'production',

  optimization: {
    minimize: true,
    minimizer: [new OptimizeCssAssetsPlugin()],
  },

  plugins: [],
};

const config = merge(baseWebpackConfig, productionWebpackConfig);

module.exports = () => {
  return config;
};
