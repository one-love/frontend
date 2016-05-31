var path = require('path');

module.exports = {
  module: {
    loaders: [
      {
        test: /\.scss$/,
        loaders: ['style', 'css?sourceMap', 'sass?sourceMap']
      }
    ]
  },
  sassLoader: {
    includePaths: [path.resolve(__dirname, "../src/sass")]
  }
};
