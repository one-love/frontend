var webserver = require('gulp-webserver');
var changed = require('gulp-changed');
var browserify = require('gulp-browserify');
var sass = require('gulp-ruby-sass');
var autoprefixer = require('gulp-autoprefixer');

require('./checks.js');

/**
 * Core development server task.
 * Initializes connect webserver as gulp task, with livereload and SSL enabled.
 */
var webserverDeps = [
  'compile:sass',
  'compile:browserify',
  'watch',
  'check:scss'
];
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
  return gulp.src(oneLovePaths.sass)
    .pipe(changed(oneLovePaths.cssFolder))
    .pipe(sass({
      style: 'compact',
      lineNumbers: true,
      loadPath: './'
    }))
    .on('error', function(err) {
      console.log(err.message);
    })
    .pipe(autoprefixer(['last 2 versions', 'ie9']))
    .pipe(gulp.dest(oneLovePaths.cssFolder));
});

/**
 * Browserify allows use of node.js tools in browser environment.
 */
gulp.task('compile:browserify', ['check:javascript'], function() {
  gulp.src(oneLovePaths.jsEntry)
    .pipe(changed('app/js'))
    .pipe(browserify({
      debug: true
    }))
    .on('error', function(error) {
      console.log(error);
    })
    .pipe(gulp.dest('app/js'));
});
