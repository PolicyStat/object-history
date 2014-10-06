/* eslint-env node */
// Karma configuration
module.exports = function(config) {
  "use strict";
  config.set({
    basePath: "",
    frameworks: ["mocha", "browserify"],
    files: [
        "test/*.js"
    ],
    preprocessors: {
        "test/*.js": ["browserify"]
    },
    browserify: {
        debug: true
    },
    reporters: ["progress"],
    port: 9876,
    colors: true,
    logLevel: config.LOG_INFO,
    autoWatch: true,
    browsers: ["Chrome", "Firefox", "PhantomJS"],
    singleRun: false
  });
};
