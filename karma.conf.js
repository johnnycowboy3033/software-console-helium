module.exports = function (config) {
  config.set({
    frameworks: ['jasmine'],
    preprocessors: {
      './src/**/*.js': 'coverage'
    },
    files: ['./src/**/*.js', './src/**/*.spec.js'],
    plugins: ['karma-jasmine', 'karma-chrome-launcher', 'karma-coverage'],
    reporters: ['dots', 'coverage'],
    colors: true,
    singleRun: true,
    browsers: ['ChromeHeadless'],
    coverageReporter: {
      type: 'html',
      dir: 'coverage/'
    }
  });
};
