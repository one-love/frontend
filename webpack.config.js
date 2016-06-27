const path = require('path');
const webpack = require('webpack');
const identName = '[path]___[name]__[local]___[hash:base64:5]';


module.exports = {
  devtool: 'eval',
  entry: ['./src/index'],
  output: {
    publicPath: '/static/',
  },
  plugins: [
    new webpack.DefinePlugin({ 'process.env.NODE_ENV': "'dev'" }),
  ],
  module: {
    preLoaders: [
      {
        test: /\.js$/,
        loader: 'eslint-loader',
        exclude: /node_modules/,
      },
    ],
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
          `css?sourceMap&modules&importLoaders=1&localIdentName=${identName}`,
          'resolve-url',
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
  sassResources: [
    './src/sass/vars.scss',
  ],
};
