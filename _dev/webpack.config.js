const webpack = require('webpack');
const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
var DelayPlugin = require("webpack-delay-plugin");

module.exports = {
  entry: {
    app: [
      './js/theme.js',
      './css/theme.scss'
    ]
  },
  output: {
    path: path.resolve(__dirname, '../'),
    filename: 'theme.js'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader'
      },
      {
        test: /\.scss$/,
        exclude: /node_modules/,
        use: [
          MiniCssExtractPlugin.loader,
          {
            loader: 'css-loader',
            options: {
              url: false
            }
          },
          'sass-loader',
          'postcss-loader'
        ]
      }
    ]
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: 'theme.css'
    }),
    new DelayPlugin({
      delay: 1000,
      lifecycleEvents: ['run', 'watch-run'],
      verbose: false
    })
  ]
};
