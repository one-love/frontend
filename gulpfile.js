var paths = {
  sass: 'app/sass/**/*.scss',
  css: 'app/css/**/*.css',
  cssFolder: 'app/css',
  jsEntry: 'app/scripts/index.js',
  scripts: 'app/scripts/**/*.js'
};
var gulp = require('gulp');
var webserver = require('gulp-webserver');
var sass = require('gulp-ruby-sass');
var browserify = require('gulp-browserify');

/**
 * Core development server task.
 * Initializes connect webserver as gulp task, with livereload and SSL enabled.
 */
var webserverDeps = ['compile:sass', 'compile:browserify', 'watch'];
gulp.task('webserver', webserverDeps, function() {
  return gulp.src('app')
    .pipe(webserver({
      port: 8000,
      livereload: true,
      https: true,
      open: true,
      fallback: 'index.html'
    }));
});

/**
 * Compiles sass files into css.
 */
gulp.task('compile:sass', function() {
  return gulp.src(paths.sass)
    .pipe(sass({
      style: 'compact',
      lineNumbers: true
    }))
    .on('error', function(err) {
      console.log(err.message);
    })
    .pipe(gulp.dest(paths.cssFolder));
});

/**
 * Browserify allows use of node.js tools in browser environment.
 */
gulp.task('compile:browserify', function() {
  gulp.src(paths.jsEntry)
    .pipe(browserify({
      transform: ['browserify-ngannotate'],
      debug: true
    }))
    .on('error', function(error) {
      console.log(error);
    })
    .pipe(gulp.dest('app/js'));
});

gulp.task('watch', function() {
  gulp.watch(paths.sass, ['compile:sass'] )
  gulp.watch(paths.scripts, ['compile:browserify'] )
});

gulp.task('default', ['webserver']);
