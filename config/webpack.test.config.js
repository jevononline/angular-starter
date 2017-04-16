const path = require('path');

const merge = require('webpack-merge');
let config = require('./webpack.common.config.js');

delete config.entry;

module.exports = merge(config, {
  devtool: 'inline-source-map'
});