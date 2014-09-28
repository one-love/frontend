var gulp = require('gulp');
var webserver = require('gulp-webserver');

/**
 * Core development server task.
 * Initializes connect webserver as gulp task, with livereload and SSL enabled.
 */
gulp.task('webserver', function() {
  gulp.src('app')
    .pipe(webserver({
      livereload: true,
      https: true,
      open: true,
      fallback: 'index.html'
    }));
});

gulp.task('default', ['webserver']);
