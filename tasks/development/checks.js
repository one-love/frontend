var jshint = require('gulp-jshint');
var jscs = require('gulp-jscs');
var stylish = require('jshint-stylish');
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
