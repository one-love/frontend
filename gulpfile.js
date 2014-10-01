global.paths = require('./tasks/paths.js');
global.gulp = require('gulp');

require('./tasks/development');

gulp.task('default', ['webserver']);
