const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const getFilePathArr = require('./getFilePathArr');

const pagesDir = path.resolve(__dirname, '../source/pages');

const pugPages = [];
const htmlPlugins = [];

const pugPaths = getFilePathArr(pagesDir, '.pug');

pugPaths.map((item) => {
  const page = {
    path: item,
    name: path.basename(item, path.extname(item)),
  };
  pugPages.push(page);
  return pugPages;
});

pugPages.map((item) => {
  htmlPlugins.push(
    new HtmlWebpackPlugin({
      template: item.path,
      filename: `${item.name}.html`,
      favicon: './source/logo.ico',
    })
  );
  return htmlPlugins;
});

module.exports = htmlPlugins;
