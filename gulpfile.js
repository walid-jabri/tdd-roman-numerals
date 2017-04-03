var gulp = require('gulp'),
    print = require('gulp-print')
    babel = require('gulp-babel')
    babelify = require('babelify')
    Server = require('karma').Server

    webserver = require('gulp-webserver');

gulp.task('puny-human', function() {
    console.log('Puny humaaaan');
});

gulp.task('js', function() {
    return gulp.src('app/**/*.js')
        .pipe(print())
        .pipe(babel({
            presets: ['es2015']
        }))
        .pipe(gulp.dest('build'));
});

gulp.task('libs', function(){
    return gulp.src([
        'node_modules/systemjs/dist/system.js',
        'node_modules/babel-polyfill/dist/polyfill.js'])
        .pipe(print())
        .pipe(gulp.dest('build/libs'));

});

gulp.task('build', ['js', 'libs'], function(){
    return gulp.src(['app/**/*.html', 'app/**/*.css'])
            .pipe(print())
            .pipe(gulp.dest('build'));
});

gulp.task('serve', ['build'], function() {
    gulp.src('build')
        .pipe(webserver({open: true}));
});


gulp.task('watch', function(){
    gulp.watch('app/**/*.*', ['build']);
});

gulp.task('tdd', function (done) {
    new Server({
        configFile: __dirname + '/karma.conf.js'
    }, done).start();
});

gulp.task('test', function (done) {
    new Server({
        configFile: __dirname + '/karma.conf.js',
        singleRun: true
    }, done).start();
});

gulp.task('default', ['build']);
