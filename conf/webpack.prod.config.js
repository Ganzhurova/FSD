const { merge } = require('webpack-merge');
const TerserPlugin = require('terser-webpack-plugin');
const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const baseWebpackConfig = require('./webpack.base.config');

const productionWebpackConfig = {
  mode: 'production',

  optimization: {
    minimize: true,
    minimizer: [new TerserPlugin(), new OptimizeCssAssetsPlugin()],
  },

  plugins: [],
};

const config = merge(baseWebpackConfig, productionWebpackConfig);

module.exports = () => {
  return config;
};
