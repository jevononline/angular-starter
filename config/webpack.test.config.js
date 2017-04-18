const path = require('path');

const merge = require('webpack-merge');

let {
  tsLoader
} = require('./webpack.parts.config');
let config = require('./webpack.common.config');

module.exports = merge(config, {
  devtool: 'inline-source-map'
}, tsLoader);