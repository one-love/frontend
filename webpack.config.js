var path = require('path');
var webpack = require('webpack');

module.exports = {
  devtool: 'eval',
  entry: ['./src/index'],
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'bundle.js',
    publicPath: '/static/'
  },
  plugins: [
    new webpack.DefinePlugin({'process.env.NODE_ENV': "'dev'"})
  ],
  resolveLoader: {
    'fallback': path.join(__dirname, 'node_modules')
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
        include: path.join(__dirname, 'src')
      },
      {
        test: /\.scss$/,
        loaders: ['style', 'css?sourceMap', 'sass?sourceMap']
      },
      {
        test: /\.(jpe?g|png|gif|svg)$/i,
        loaders: [
          'file?hash=sha512&digest=hex&name=[hash].[ext]',
          'image-webpack?bypassOnDebug&optimizationLevel=7&interlaced=false'
        ]
      }
    ]
  },
  sassLoader: {
    includePaths: [path.resolve(__dirname, "./src/sass")]
  },
  sassResources: [
    './src/sass/vars',
    '~aleut.settings.defaults',
    '~aleut.settings.responsive',
    '~aleut.tools.functions',
    '~aleut.tools.mixins',
    '~aleut.tools.responsive',
    '~aleut.tools.widths',
    '~aleut.tools.clearfix',
    '~aleut.generic.normalize',
    '~aleut.generic.reset',
    '~aleut.generic.box-sizing',
    '~aleut.base.page',
    '~aleut.base.images',
    '~aleut.base.lists',
    '~aleut.base.headings',
    '~aleut.objects.layout',
    '~aleut.objects.list-inline',
    '~aleut.utilities.clearfix',
    '~aleut.utilities.headings',
    '~aleut.utilities.print',
    '~aleut.utilities.spacing',
    '~aleut.utilities.spacing-responsive',
    '~aleut.utilities.widths',
    '~aleut.utilities.widths-responsive',
  ]
};
