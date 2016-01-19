var path = require('path');
var WebpackDevServer = require("webpack-dev-server");
var webpack = require("webpack");

var compiler = webpack({
  entry: {
      app: [
      'webpack-dev-server/client?http://testtt:3000',
      'webpack/hot/only-dev-server',
      './todo.js'
      ],
    },
    output: {
      filename: '[name].js',
      path: path.join(__dirname + 'public'),
      publicPath: '/public/',
  },

  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin(),
  ],

  module: {
    loaders: [
      {
        test: /\.jsx?$/,    
        exclude: /(node_modules)/,
        loaders: ['react-hot', 'babel?cacheDirectory,presets[]=react,presets[]=es2015'], // 'babel-loader' is also a legal name to reference
      }
    ]
  },

  devtool: 'source-map',
  debug: true,
});
var server = new WebpackDevServer(compiler, {
  // webpack-dev-server options

  contentBase: path.join(__dirname, 'public'),
  // or: contentBase: "http://localhost/",

  hot: true,
  // Enable special support for Hot Module Replacement
  // Page is no longer updated, but a "webpackHotUpdate" message is send to the content
  // Use "webpack/hot/dev-server" as additional module in your entry point
  // Note: this does _not_ add the `HotModuleReplacementPlugin` like the CLI option does. 


  // webpack-dev-middleware options
  quiet: false,
  noInfo: false,
  lazy: false,
  filename: "[name].js",
  watchOptions: {
    aggregateTimeout: 100
  },
  publicPath: "/public/",
  headers: { "X-Custom-Header": "yes" },
  stats: { colors: true },
});
server.listen(3000, "localhost", function() {});