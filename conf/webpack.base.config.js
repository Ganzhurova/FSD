const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
// const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const DelWebpackPlugin = require('del-webpack-plugin');
const SpriteLoaderPlugin = require('svg-sprite-loader/plugin');
const htmlPlugins = require('./utils/htmlPlugins');

const PATHS = {
  source: path.resolve(__dirname, '../source'),
  dist: path.resolve(__dirname, '../dist'),
  assets: 'assets',
};

module.exports = {
  externals: {
    paths: PATHS,
  },

  resolve: {
    alias: {
      Components: path.resolve(__dirname, '../source/components'),
    },
  },

  entry: {
    main: `${PATHS.source}/entry.js`,
  },

  output: {
    path: PATHS.dist,
    filename: `${PATHS.assets}/js/[name].js`,
    publicPath: '/',
  },

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
      {
        test: /\.(gif|png|jpg|jpeg)$/,
        use: ['file-loader'],
      },
      {
        test: /\.svg$/,
        use: [
          {
            loader: 'svg-sprite-loader',
            options: {
              extract: true,
            },
          },
        ],
      },
    ],
  },

  plugins: [
    // new CleanWebpackPlugin(),
    new DelWebpackPlugin(),
    new MiniCssExtractPlugin({
      filename: `${PATHS.assets}/css/[name].css`,
    }),
    ...htmlPlugins,
    new SpriteLoaderPlugin({
      plainSprite: true,
    }),
  ],
};
