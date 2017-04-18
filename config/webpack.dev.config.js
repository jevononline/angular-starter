const merge = require('webpack-merge');

let config = require('./webpack.common.config');
let {
  entry,
  tsLoader
} = require('./webpack.parts.config');
module.exports = merge(config, {
  devtool: 'eval',
  devServer: {
    historyApiFallback: true,
    contentBase: './src',
    host: 'localhost',
    port: 3000,
    inline: true
  }
}, entry, tsLoader);