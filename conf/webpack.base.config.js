const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const SpriteLoaderPlugin = require('svg-sprite-loader/plugin');
const glob = require('glob');
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

  optimization: {
    splitChunks: {
      chunks: 'all',
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
              outputPath: `${PATHS.assets}/img/`,
              name: '[name].[hash].[ext]',
              esModule: false,
            },
          },
        ],
      },
      {
        test: /\.svg$/,
        include: glob.sync(`${PATHS.source}/**/[^icon-]*.svg`).map(item => {
          return path.resolve(item);
        }),
        use: [
          {
            loader: 'file-loader',
            options: {
              outputPath: `${PATHS.assets}/img/`,
              name: '[name].[ext]',
            },
          },
        ],
      },
      {
        test: /\.svg$/,
        include: glob.sync(`${PATHS.source}/**/icon-*.svg`).map(item => {
          return path.resolve(item);
        }),
        use: [
          {
            loader: 'svg-sprite-loader',
            options: {
              extract: true,
              outputPath: `${PATHS.assets}/sprite/`,
            },
          },
        ],
      },
    ],
  },

  plugins: [
    new CleanWebpackPlugin(),
    new MiniCssExtractPlugin({
      filename: `${PATHS.assets}/css/[name].css`,
    }),
    ...htmlPlugins,
    new SpriteLoaderPlugin({
      plainSprite: true,
    }),
  ],
};
