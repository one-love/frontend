var paths = {
  sass: 'app/sass/**/*.scss',
  css: 'app/css/**/*.css',
  cssFolder: 'app/css'
};
var gulp = require('gulp');
var webserver = require('gulp-webserver');
var sass = require('gulp-ruby-sass');

/**
 * Core development server task.
 * Initializes connect webserver as gulp task, with livereload and SSL enabled.
 */
gulp.task('webserver', ['compile:sass', 'watch'], function() {
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

gulp.task('watch', function() {
  gulp.watch(paths.sass, ['compile:sass'] )
});

gulp.task('default', ['webserver']);
