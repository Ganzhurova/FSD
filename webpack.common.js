const webpack = require('webpack');
const glob = require('glob');
const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const htmlPlugins = require('./utils/htmlPlugins');

module.exports = {
  entry: {
    main: {
      import: './source/entry',
      dependOn: 'lib',
    },
    lib: {
      import: [
        'inputmask',
        'air-datepicker',
        'ion-rangeslider',
        'paginationjs',
        'slick-slider',
      ],
      dependOn: 'vendor',
    },
    vendor: 'jquery',
  },
  output: {
    filename: 'js/[name].js',
    path: path.resolve(__dirname, 'dist'),
    clean: true,
  },
  optimization: {
    runtimeChunk: 'single',
    splitChunks: {
      name(module) {
        const isCSSModule = !module.context.match(/[\\/]node_modules[\\/]/);
        if (isCSSModule) return 'shared';
        return false;
      },
      chunks: 'all',
    },
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: ['babel-loader'],
      },
      {
        test: /\.css$/i,
        use: [MiniCssExtractPlugin.loader, 'css-loader', 'postcss-loader'],
      },
      {
        test: /\.scss$/i,
        use: [
          MiniCssExtractPlugin.loader,
          'css-loader',
          'postcss-loader',
          'sass-loader',
          {
            loader: 'sass-resources-loader',
            options: {
              resources: [
                './source/theme/variables.scss',
                './source/styles/mixins.scss',
              ],
            },
          },
        ],
      },
      {
        test: /\.pug$/i,
        loader: '@webdiscus/pug-loader',
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf|svg)$/i,
        type: 'asset/resource',
        generator: {
          filename: 'fonts/[name][ext]',
        },
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        exclude: glob
          .sync('./source/fonts/*.svg')
          .map((item) => path.resolve(item)),
        type: 'asset/resource',
        generator: {
          filename: 'img/[name][ext]',
        },
      },
    ],
  },
  plugins: [
    new webpack.ProvidePlugin({
      $: 'jquery',
      jQuery: 'jquery',
      'window.jQuery': 'jquery',
      'window.$': 'jquery',
    }),
    new MiniCssExtractPlugin({
      filename: 'style/[name].css',
    }),
    ...htmlPlugins,
  ],
};
