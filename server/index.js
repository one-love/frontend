// DEPENDENCIES
import isDevelopment from './utils';
import hbs from 'hbs';
import express from 'express';
import livereload from 'livereload';
import router from './routes/main';



let app = express();

// CONGIFURE
app.set('view engine', 'handlebars');
app.set('views', `${__dirname}/views`);

// ADD MIDDLEWARE
app.use(router);
app.use(express.static('./client'));

if (isDevelopment) {
  // livereload only in development env
  app.use(require('connect-livereload')({
    port: 15000,
    excludeList: ['client/sass', 'client/src']
  }));
}

let port = process.env.PORT || 3000

let server = app.listen(port, function () {
  var host = server.address().address;
  var port = server.address().port;
  console.log('Example app listening at http://%s:%s', host, port);
});


if (isDevelopment) {
  /**
   * Setup livereload server to lift with the app
   */
  let lrserver = livereload.createServer({
    port: 15000
  });

  lrserver.watch(`${__dirname}/../client/`);
}
