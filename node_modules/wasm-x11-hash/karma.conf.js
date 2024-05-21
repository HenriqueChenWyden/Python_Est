module.exports = function(config) {
  config.set({
    basePath: '',
    frameworks: ['mocha', 'browserify'],
    files: [
      { pattern: 'test/**/*.spec.js' },
    ],
    exclude: [],
    preprocessors: {
      'test/**/*.spec.js': ['browserify']
    },
    reporters: ['progress'],
    port: 9876,
    colors: true,
    logLevel: config.LOG_INFO,
    autoWatch: true,
    browsers: ['ChromeHeadless'],
    concurrency: Infinity,
  })
}
