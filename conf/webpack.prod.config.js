const { merge } = require('webpack-merge');
const baseWebpackConfig = require('./webpack.base.config');

const productionWebpackConfig = {
  mode: 'production',

  plugins: [],
};

const config = merge(baseWebpackConfig, productionWebpackConfig);

module.exports = () => {
  return config;
};
