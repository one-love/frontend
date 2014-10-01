var paths = require('./tasks/paths.js');
var gulp = require('gulp');
var webserver = require('gulp-webserver');
var sass = require('gulp-ruby-sass');
var browserify = require('gulp-browserify');
var autoprefixer = require('gulp-autoprefixer');
var jshint = require('gulp-jshint');
var jscs = require('gulp-jscs');
var stylish = require('jshint-stylish');

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
      lineNumbers: true,
      loadPath: './'
    }))
    .on('error', function(err) {
      console.log(err.message);
    })
    .pipe(autoprefixer(['last 2 versions', 'ie9']))
    .pipe(gulp.dest(paths.cssFolder));
});

/**
 * Browserify allows use of node.js tools in browser environment.
 */
gulp.task('compile:browserify', ['check:javascript'], function() {
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

/**
 * Checks javascripts from app/scripts directory against
 * Javascript Coding Style (JSCS) and jshint.
 */
gulp.task('check:javascript', function() {
  gulp.src('app/scripts/**/*.js')
    .pipe(jscs())
    .pipe(jshint())
    .pipe(jshint.reporter(stylish));
});

gulp.task('watch', function() {
  gulp.watch(paths.sass, ['compile:sass'] )
  gulp.watch(paths.scripts, ['compile:browserify'] )
});

gulp.task('default', ['webserver']);
