require('core-js/es6/reflect');
require('core-js/es7/reflect');
require('zone.js/dist/zone');

require('zone.js/dist/long-stack-trace-zone');
require('zone.js/dist/proxy');
require('zone.js/dist/sync-test');
require('zone.js/dist/jasmine-patch');
require('zone.js/dist/async-test');
require('zone.js/dist/fake-async-test');

const {
  TestBed
} = require('@angular/core/testing');
const {
  BrowserDynamicTestingModule,
  platformBrowserDynamicTesting
} = require('@angular/platform-browser-dynamic/testing');

TestBed.initTestEnvironment(
  BrowserDynamicTestingModule,
  platformBrowserDynamicTesting()
);

const context = require.context('../src', true, /\.spec\.ts$/);
context.keys().map(context);