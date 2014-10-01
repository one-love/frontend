var jshint = require('gulp-jshint');
var jscs = require('gulp-jscs');
var stylish = require('jshint-stylish');
/**
 * Checks javascripts from app/scripts directory against
 * Javascript Coding Style (JSCS) and jshint.
 */
gulp.task('check:javascript', function() {
  gulp.src(oneLovePaths.scripts)
    .pipe(jscs())
    .pipe(jshint())
    .pipe(jshint.reporter(stylish));
});

