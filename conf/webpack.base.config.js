const path = require('path');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const htmlPlugins = require('./utils/htmlPlugins');

const PATHS = {
  source: path.resolve(__dirname, '../source'),
  dist: path.resolve(__dirname, '../dist'),
};

module.exports = {
  externals: {
    paths: PATHS,
  },

  entry: {
    main: `${PATHS.source}/entry.js`,
  },

  output: {
    path: PATHS.dist,
    filename: '[name].js',
  },

  plugins: [
    new MiniCssExtractPlugin({
      filename: '[name].css',
    }),
    ...htmlPlugins,
    new CleanWebpackPlugin(),
  ],

  module: {
    rules: [
      {
        test: /\.js$/,
        use: ['babel-loader'],
      },
      {
        test: /\.css$/,
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
          },
          'css-loader',
          {
            loader: 'postcss-loader',
            options: {
              postcssOptions: {
                config: path.resolve(__dirname, './utils/postcss.config.js'),
              },
            },
          },
        ],
      },
      {
        test: /\.scss$/,
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
          },
          'css-loader',
          {
            loader: 'postcss-loader',
            options: {
              postcssOptions: {
                config: path.resolve(__dirname, './utils/postcss.config.js'),
              },
            },
          },
          'sass-loader',
        ],
      },
      {
        test: /\.pug$/,
        use: ['pug-loader'],
      },
    ],
  },
};
