// Protractor configuration file, see link for more information
// https://github.com/angular/protractor/blob/master/lib/config.ts
require('ts-node/register');

const path = require('path');
exports.config = {
  allScriptsTimeout: 11000,
  specs: [path.join(__dirname, '../src/**/*.e2e.ts')],
  capabilities: {
    browserName: 'chrome'
  },
  directConnect: true,
  baseUrl: 'http://localhost:3000/',
  framework: 'jasmine',
  jasmineNodeOpts: {
    showColors: true,
    defaultTimeoutInterval: 30000,
    print: function () {}
  }
};