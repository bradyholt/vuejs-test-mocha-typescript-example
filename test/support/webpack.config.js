const webpack = require("webpack");
const path = require("path");
const fs = require("fs");

var config = {
  /*
    mocha-webpack will set entry/output options at runtime so we don't need to set them here
  entry:
  output: */
  devtool: "cheap-module-eval-source-map",
  /*
    Use webpack-node-externals to prevent bundling anything referenced in node_modules.
    At runtime, these modules can be loaded by Node and therefore do not need to be bundled by Webpack. */
  resolve: {
    extensions: [".ts", ".js", ".vue"]
  },
  module: {
    rules: [
      {
        test: /\.ts$/,
        loader: "ts-loader",
        options: {
          appendTsSuffixTo: [/\.vue$/]
        }
      },
      {
        test: /\.vue$/,
        loader: "vue-loader"
      }
    ]
  }
};

module.exports = config;
