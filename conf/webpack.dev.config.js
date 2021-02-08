const path = require('path');
const { merge } = require('webpack-merge');
const ESLintPlugin = require('eslint-webpack-plugin');
const StylelintPlugin = require('stylelint-webpack-plugin');
const WebpackDevServer = require('webpack-dev-server');
const webpack = require('webpack');
const baseWebpackConfig = require('./webpack.base.config');

const devWebpackConfig = {
  mode: 'development',

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
const devServerOptions = {
  hot: true,
  contentBase: path.resolve(__dirname, '../dist'),
  overlay: {
    warnings: true,
    errors: true,
  },
  port: 8081,
};

WebpackDevServer.addDevServerEntrypoints(config, devServerOptions);
const compiler = webpack(config);
const server = new WebpackDevServer(compiler, devServerOptions);

server.listen(8081, 'localhost', err => {
  if (err) {
    console.log(err);
  }
});

module.exports = () => {
  return config;
};
