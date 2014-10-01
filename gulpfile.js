global.paths = require('./tasks/paths.js');
global.gulp = require('gulp');

/**
 * Development setup is located in files in ./tasks/development/
 */
require('./tasks/development');

/**
 * Watches for file change events and executes task specified for each event.
 */
gulp.task('watch', function() {
  gulp.watch(paths.sass, ['compile:sass'] )
  gulp.watch(paths.scripts, ['compile:browserify'] )
});

gulp.task('default', ['webserver']);
