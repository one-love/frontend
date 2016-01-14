const path = require('path');
const webpack = require('webpack');

module.exports = {
  entry: [
    path.resolve(__dirname, './client/src/entry.js')
  ],
  output: {
    path: path.resolve(__dirname, "./client/build/"),
    publicPath: "/static/",
    filename: "bundle.js"
  },
  module: {
    loaders: [{
      test: /\.js$/,
      loaders: ['react-hot', 'babel'],
      include: path.join(__dirname, 'client/src')
    }]
  }
};
