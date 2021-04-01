const webpack = require('webpack');
const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const SpriteLoaderPlugin = require('svg-sprite-loader/plugin');
const glob = require('glob');
const FaviconsWebpackPlugin = require('favicons-webpack-plugin');
const htmlPlugins = require('./utils/htmlPlugins');

module.exports = {
  context: path.resolve(__dirname, '../source'),

  resolve: {
    alias: {
      Components: path.resolve(__dirname, '../source/components'),
    },
  },

  optimization: {
    splitChunks: {
      chunks: 'all',
    },
  },

  entry: {
    main: './entry.js',
  },

  output: {
    path: path.resolve(__dirname, '../dist'),
    filename: '[name].js',
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
          {
            loader: 'sass-resources-loader',
            options: {
              resources: path.resolve(
                __dirname,
                '../source/resources/resources.scss'
              ),
            },
          },
        ],
      },
      {
        test: /\.pug$/,
        use: [
          {
            loader: 'pug-loader',
            options: {
              pretty: true,
            },
          },
        ],
      },
      {
        test: /\.(gif|png|jpg|jpeg|woff(2)?|eot|ttf|otf|svg)$/,
        exclude: glob.sync('./**/img/icon-*.svg').map(item => {
          return path.resolve(item);
        }),
        use: [
          {
            loader: 'file-loader',
            options: {
              name: '[path][name].[ext]',
              esModule: false,
            },
          },
        ],
      },
      {
        test: /\.svg$/,
        include: glob.sync('./**/img/icon-*.svg').map(item => {
          return path.resolve(item);
        }),
        use: [
          {
            loader: 'svg-sprite-loader',
            options: {
              runtimeCompat: true,
            },
          },
        ],
      },
    ],
  },

  plugins: [
    new CleanWebpackPlugin(),
    new webpack.ProvidePlugin({
      $: 'jquery',
      jQuery: 'jquery',
      'window.jQuery': 'jquery',
    }),
    new MiniCssExtractPlugin({
      filename: '[name].css',
    }),
    ...htmlPlugins,
    new SpriteLoaderPlugin({}),
    new FaviconsWebpackPlugin({
      logo: './logo.png',
      cache: true,
      publicPath: '',
      inject: true,
      favicons: {
        icons: {
          coast: false,
          yandex: false,
          appleStartup: false,
          android: false,
          appleIcon: false,
        },
      },
    }),
  ],
};
