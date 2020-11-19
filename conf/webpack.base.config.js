const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

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

  plugins: [
    new HtmlWebpackPlugin({
      template: `${PATHS.source}/pages/UIkit/colors-&-tipe/colors-&-tipe.pug`,
    }),
  ],

  module: {
    rules: [
      {
        test: /\.pug$/,
        use: ['pug-loader'],
      },
    ],
  },
};
