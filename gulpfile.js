global.oneLovePaths = require('./tasks/paths.js');
global.gulp = require('gulp');

/**
 * Development setup is located in files in ./tasks/development/
 */
require('./tasks/development');

/**
 * Watches for file change events and executes task specified for each event.
 */
gulp.task('watch', function() {
  gulp.watch(oneLovePaths.sass, ['compile:sass'] )
  gulp.watch(oneLovePaths.scripts, ['compile:browserify'] )
  gulp.watch(oneLovePaths.sass, ['check:scss'] )
});

gulp.task('default', ['webserver']);
