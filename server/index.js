/**
 * Create app
 */
import express from 'express';

let app = express();
/**
 * Add middleware so we don't have to reload manually
 * all the time
 */
app.use(require('connect-livereload')({
  port: 15000,
  excludeList: ['client/sass', 'client/src']
}));

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


/**
 * Setup livereload server to lift with the app
 * TODO: Scope this to development env
 */
let lrserver = livereload.createServer({
  port: 15000
});

lrserver.watch(`${__dirname}/../client/`);
