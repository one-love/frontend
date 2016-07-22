const path = require('path');
const precss = require('precss');
const autoprefixer = require('autoprefixer');

const localIdentName = '[path]___[name]__[local]___[hash:base64:5]';

module.exports = {
  devtool: 'cheap-module-source-map',
  entry: ['./src/index'],
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'bundle.js',
    publicPath: '/static/',
  },
  resolveLoader: {
    fallback: path.join(__dirname, 'node_modules'),
  },
  module: {
    preLoaders: [{
      test: /\.js$/,
      loader: 'eslint-loader',
      exclude: /node_modules/,
    }],
    loaders: [
      {
        test: /\.js$/,
        loaders: ['react-hot', 'babel'],
        exclude: /node_modules/,
        include: path.join(__dirname, 'src'),
      },
      {
        test: /\.scss$/,
        loaders: [
          'style?sourceMap',
          `css?sourceMap&modules&importLoaders=1&localIdentName=${localIdentName}`,
          'postcss',
          'sass?sourceMap',
          'sass-resources',
        ],
      },
      {
        test: /\.(jpe?g|png|gif|svg)$/i,
        loaders: [
          'file?hash=sha512&digest=hex&name=[hash].[ext]',
          'image-webpack?bypassOnDebug&optimizationLevel=7&interlaced=false',
        ],
      },
    ],
  },
  sassLoader: {
    includePaths: [path.resolve(__dirname, './src/sass')],
  },
  sassResources: [
    './src/sass/vars.scss',
  ],
  postcss() {
    return [precss, autoprefixer];
  },
};
