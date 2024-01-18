const { default: merge } = require("webpack-merge");
const webpackCommon = require("./webpack.common");

module.exports = merge(webpackCommon, {
  mode: "development",

  devServer: {
    static: "./build",
    port: 3000,
    open: true,
    compress: true,
    historyApiFallback: true,
  },

  devtool: "inline-source-map",
});
