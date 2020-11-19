const { merge } = require("webpack-merge");
const baseWebpackConfig = require("./webpack.base.config");

const devWebpackConfig = {
  mode: "development",

  devServer: {
    overlay: {
      warnings: true,
      errors: true
    },
    port: 8081
  }
};

const config = merge(baseWebpackConfig, devWebpackConfig);

module.exports = () => {
  return config;
};
