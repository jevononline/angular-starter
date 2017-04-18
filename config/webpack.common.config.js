const {
  join
} = require('path');

const webpack = require('webpack');

const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const {
  CheckerPlugin
} = require('awesome-typescript-loader');

let config = {
  output: {
    filename: '[name].[chunkhash].js',
    chunkFilename: '[id].[chunkhash].js',
    path: join(__dirname, '../dist')
  },
  module: {
    rules: [{
        test: /\.ts$/,
        loader: 'tslint-loader',
        enforce: 'pre'
      },
      {
        test: /\.css$/,
        use: ['to-string-loader', 'css-loader'],
        exclude: [join(__dirname, '../src/assets')]
      },
      {
        test: /\.scss$/,
        use: ['to-string-loader', 'css-loader', 'sass-loader'],
        exclude: [join(__dirname, '../src/assets')]
      },
      {
        test: /\.css$/,
        use: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: 'css-loader'
        }),
        include: [join(__dirname, '../src/assets')]
      },
      {
        test: /\.scss$/,
        use: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: ['css-loader', 'sass-loader']
        }),
        include: [join(__dirname, '../src/assets')]
      },
      {
        test: /\.(woff|woff2|ttf|eot|svg|png|jpg|gif|docx|pdf)$/,
        use: [{
          loader: 'file-loader',
          options: {
            name: '[name].[hash].[ext]'
          }
        }]
      },
      {
        test: /\.html$/,
        use: [{
          loader: 'html-loader',
          options: {
            interpolate: true
          }
        }]
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: join(__dirname, '../src/index.html')
    }),
    new ExtractTextPlugin('[name].[contenthash].css'),
    new webpack.optimize.CommonsChunkPlugin({
      name: 'vendor',
      chunks: ['main'],
      minChunks: module => /node_modules/.test(module.resource)
    }),
    new webpack.ContextReplacementPlugin(
      /angular(\\|\/)core(\\|\/)@angular/,
      join(__dirname, '../src')
    ),
    new CheckerPlugin()
  ],
  resolve: {
    modules: [
      join(__dirname, '../src'), join(__dirname, '../node_modules')
    ],
    extensions: ['.ts', '.js', '.json']
  }
};

module.exports = config;