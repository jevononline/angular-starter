const {
  join
} = require('path');

const {
  NgcWebpackPlugin
} = require('ngc-webpack');

module.exports.entry = {
  entry: {
    polyfills: join(__dirname, '../src/polyfills.ts'),
    main: join(__dirname, '../src/main.ts')
  }
};

module.exports.aotEntry = {
  entry: {
    polyfills: join(__dirname, '../src/polyfills.ts'),
    main: join(__dirname, '../src/main.aot.ts')
  }
};

module.exports.tsLoader = {
  module: {
    rules: [{
      test: /\.ts$/,
      use: [
        'ng-router-loader',
        'awesome-typescript-loader',
        'angular2-template-loader'
      ],
      exclude: [/node_modules/]
    }]
  }
};

module.exports.aotTsLoader = {
  module: {
    rules: [{
      test: /\.ts$/,
      use: [{
          loader: 'ng-router-loader',
          options: {
            loader: 'async-import',
            genDir: 'aot',
            aot: true
          }
        },
        'awesome-typescript-loader',
        'angular2-template-loader'
      ],
      exclude: [/node_modules/]
    }]
  }
};

module.exports.ngcWebpackPlugin = {
  plugins: [
    new NgcWebpackPlugin({
      tsConfig: join(__dirname, '../tsconfig.aot.json')
    })
  ]
}