const path = require('path');

const webpack = require('webpack');
const merge = require('webpack-merge');
const AssetsPlugin = require('assets-webpack-plugin');

let config = require('./webpack.common.config.js');

module.exports = merge(config, {
  devtool: 'source-map',
  plugins: [
    new webpack.LoaderOptionsPlugin({
      minimize: true,
      options: {
        htmlLoader: {
          minimize: true,
          removeAttributeQuotes: false,
          caseSensitive: true,
          customAttrSurround: [
            [/#/, /(?:)/],
            [/\*/, /(?:)/],
            [/\[?\(?/, /(?:)/]
          ],
          customAttrAssign: [/\)?\]?=/]
        }
      }
    }),
    new webpack.optimize.UglifyJsPlugin({
      beautify: false,
      output: {
        comments: false
      },
      compress: {
        warnings: false
      }
    }),
    new AssetsPlugin({
      path: path.join(__dirname, '../dist'),
      filename: 'webpack-assets.json',
      prettyPrint: true
    })
  ]
});