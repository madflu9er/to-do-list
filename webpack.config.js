const webpack = require("webpack");
const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const proxyMiddleware = require("http-proxy-middleware");
const BrowserSyncPlugin = require("browser-sync-webpack-plugin");

module.exports = {
  devtool: "eval-source-map",
  entry: [
    `${__dirname}/src/index.js`
  ],
  output: {
    path: path.resolve("dist"),
    filename: "bundle.js"
  },
  devServer: {
    clientLogLevel: "none",
    historyApiFallback: true,
    quiet: false,
    noInfo: false,
    disableHostCheck: true,
    stats: {
      assets: false,
      colors: true,
      version: false,
      hash: false,
      timings: false,
      chunks: true,
      chunkModules: false
    },
    port: 3002
  },
  plugins: [
    new webpack.LoaderOptionsPlugin({
      errorDetails: true,
      debug: true
    }),
    new BrowserSyncPlugin({
      open: "local",
      host: "0.0.0.0",
      port: process.env.PORT || 3000,
      proxy: {
        target: "localhost:3002",
        middleware: [proxyMiddleware("/api", { target: "localhost:3000" })]
      }
    }),
    new HtmlWebpackPlugin({
      template: "./public/index.html",
      filename: "index.html",
      inject: "body"
    }),
    new webpack.ProvidePlugin({
      React: "react"
    })
  ],
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        loader: [
          "babel-loader",
          {
            loader: "eslint-loader",
            options: { failOnWarning: false, failOnError: false, fix: false, quiet: false }
          }
        ]
      },
      {
        test: /\.scss$/,
        loaders: ["style-loader", "css-loader", "sass-loader"]
      },
      {
        test: /\.css$/,
        loaders: [
          "style-loader",
          "css-loader"
        ]
      },
      {
        test: /\.(ttf|otf|eot|svg|woff(2)?)(\?[a-z0-9]+)?$/,
        loader: "file-loader?name=fonts/[name].[ext]"
      },
      {
        test: /\.(jpg|png|svg)$/,
        exclude: /(node_modules)/,
        loader: "file-loader"
      }
    ]
  }
};
