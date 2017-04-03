module.exports = function(config) {
    config.set({

        basePath: '',
        frameworks: ['browserify', 'jasmine'],

        files: [
            'app/js/*.js',
            'app/js/*.test.js'
        ],

        exclude: [
        ],
        browsers: ['Chrome'], // You may use 'ChromeCanary' or 'Chromium' as well

        preprocessors: {
            'app/js/*.js': ['browserify'],
            'app/js/*.test.js': ['browserify']
        },
        browserify: {
            debug: true,
            transform: [ ['babelify', {presets: ["es2015"]}] ]
        },

        // define reporters, port, logLevel, browsers etc.
    });
};