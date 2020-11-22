const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const getFilePathArr = require('./getFilePathArr');

const pagesDir = path.resolve(__dirname, '../../source/pages');

let pugPages = [];
let htmlPlugins = [];

let pugPaths = getFilePathArr(pagesDir, '.pug');

pugPaths.map(item => {
  let page = {
    path: item,
    name: path.basename(item, path.extname(item)),
  };
  pugPages.push(page);
});

pugPages.map(item => {
  htmlPlugins.push(
    new HtmlWebpackPlugin({
      template: item.path,
      filename: `${item.name}.html`,
    })
  );
});

module.exports = htmlPlugins;
