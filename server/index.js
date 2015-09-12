import isDevelopment from './utils';
/**
 * Create app
 */
import express from 'express';

let app = express();
/**
 * Add middleware so we don't have to reload manually
 * all the time
 */
if (isDevelopment) {
  app.use(require('connect-livereload')({
    port: 15000,
    excludeList: ['client/sass', 'client/src']
  }));
}
/**
 * Setup directory for serving static files
 */
app.use(express.static('./client'));

let server = app.listen(3000, function () {
  var host = server.address().address;
  var port = server.address().port;

  console.log('Example app listening at http://%s:%s', host, port);
});

import livereload from 'livereload';


if (isDevelopment) {
  /**
   * Setup livereload server to lift with the app
   */
  let lrserver = livereload.createServer({
    port: 15000
  });

  lrserver.watch(`${__dirname}/../client/`);
}
