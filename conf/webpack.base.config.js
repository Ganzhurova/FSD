const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const SpriteLoaderPlugin = require('svg-sprite-loader/plugin');
const glob = require('glob');
const htmlPlugins = require('./utils/htmlPlugins');

module.exports = {
  context: path.resolve(__dirname, '../source'),

  resolve: {
    alias: {
      Components: path.resolve(__dirname, '../source/components'),
      BaseDir: path.resolve(__dirname, '../source/pages/base'),
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
    path: path.resolve(__dirname, '../dist/assets'),
    filename: 'js/[name].js',
    publicPath: 'assets',
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
        test: /\.(gif|png|jpg|jpeg)$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              publicPath: '../',
              name: 'img/[name].[ext]',
              esModule: false,
            },
          },
        ],
      },
      {
        test: /\.(woff(2)?|eot|ttf|svg)$/,
        include: path.resolve(__dirname, '../source/fonts/'),
        use: [
          {
            loader: 'file-loader',
            options: {
              publicPath: '../',
              name: 'fonts/[name].[ext]',
              esModule: false,
            },
          },
        ],
      },
      {
        test: /\.svg$/,
        include: glob.sync('./**/img/[^icon-]*.svg').map(item => {
          return path.resolve(item);
        }),
        use: [
          {
            loader: 'file-loader',
            options: {
              publicPath: '../',
              name: 'img/[name].[ext]',
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
              extract: true,
              outputPath: 'sprite/',
              publicPath: '../',
            },
          },
        ],
      },
    ],
  },

  plugins: [
    new CleanWebpackPlugin(),
    new MiniCssExtractPlugin({
      filename: 'css/[name].css',
    }),
    ...htmlPlugins,
    new SpriteLoaderPlugin({
      plainSprite: true,
    }),
  ],
};
