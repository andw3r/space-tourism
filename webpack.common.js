const webpack = require("webpack");
const path = require("path");
const ReactRefreshWebpackPlugin = require("@pmmmwh/react-refresh-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const HtmlMinimizerPlugin = require("html-minimizer-webpack-plugin");

module.exports = {
  entry: "./src/index.jsx",

  output: {
    path: path.resolve(__dirname, "build"),
    filename: "js/bundle.[contenthash].js",
    clean: true,
    assetModuleFilename: "assets/img/[hash].[ext]",
  },

  module: {
    rules: [
      {
        test: /\.(css|scss|sass)$/,
        use: ["style-loader", "css-loader", "sass-loader"],
      },
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env"],
          },
        },
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif|ico|webp)$/i,
        type: "asset/resource",
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/i,
        type: "asset/resource",
        use: {
          options: {
            name: "./fonts/[name].[ext]",
            publicPath: "../fonts",
            outputPath: "/fonts",
          },
        },
      },
    ],
  },

  resolve: {
    extensions: [".js", ".jsx", ".png", ".jpg", ".jpeg", ".svg"],
    alias: {
      "@": path.resolve(__dirname, "src"),
      "@assets": path.resolve(__dirname, "src/assets"),
      "@styles": path.resolve(__dirname, "src/styles"),
    },
  },

  plugins: [
    new ReactRefreshWebpackPlugin(),
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      filename: "index.html",
      template: "public/index.html",
    }),
    new MiniCssExtractPlugin({ filename: "./css/style.[hash].css" }),
    new HtmlMinimizerPlugin(),
  ],
};
