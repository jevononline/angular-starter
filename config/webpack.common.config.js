const path = require('path');

const webpack = require('webpack');

const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

const {
  CheckerPlugin
} = require('awesome-typescript-loader');

let config = {
  entry: {
    polyfills: [path.join(__dirname, '../src/polyfills.ts')],
    main: [path.join(__dirname, '../src/main.ts')]
  },
  output: {
    filename: '[name].[chunkhash].js',
    chunkFilename: '[id].[chunkhash].js',
    path: path.join(__dirname, '../dist')
  },
  module: {
    rules: [{
        test: /\.ts$/,
        loader: 'tslint-loader',
        enforce: 'pre'
      },
      {
        test: /\.ts$/,
        use: [{
            loader: 'ng-router-loader'
          },
          {
            loader: 'awesome-typescript-loader',
            options: {
              configFileName: path.join(__dirname, '../tsconfig.webpack.json')
            }
          },
          {
            loader: 'angular2-template-loader'
          }
        ],
        exclude: [/node_modules/]
      },
      {
        test: /\.css$/,
        use: ['to-string-loader', 'css-loader'],
        exclude: [path.join(__dirname, '../src/assets')]
      },
      {
        test: /\.scss$/,
        use: ['to-string-loader', 'css-loader', 'sass-loader'],
        exclude: [path.join(__dirname, '../src/assets')]
      },
      {
        test: /\.css$/,
        use: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: 'css-loader'
        }),
        include: [path.join(__dirname, '../src/assets')]
      },
      {
        test: /\.scss$/,
        use: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: ['css-loader', 'sass-loader']
        }),
        include: [path.join(__dirname, '../src/assets')]
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
      template: path.join(__dirname, '../src/index.html')
    }),
    new ExtractTextPlugin('[name].[contenthash].css'),

    new webpack.optimize.CommonsChunkPlugin({
      name: 'vendor',
      chunks: ['main'],
      minChunks: module => /node_modules/.test(module.resource)
    }),
    new CheckerPlugin(),
    new webpack.ContextReplacementPlugin(
      /angular(\\|\/)core(\\|\/)@angular/,
      path.join(__dirname, '../src')
    )
  ],
  resolve: {
    modules: [
      path.join(__dirname, '../src'), path.join(__dirname, '../node_modules')
    ],
    extensions: ['.ts', '.js', '.json']
  }
};

module.exports = config;