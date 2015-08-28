module.exports = {
  entry: './app/js/main.js',
  output: {
    filename: 'bundle.js',
    path: './public/',
    publicPath: 'public'
  },
  module: {
    loaders: [
      { test: /\.js$/, loader: 'babel-loader' }
    ]
  }
};
