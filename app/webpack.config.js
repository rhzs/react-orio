module.exports = {
  entry: './js/main.js',
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
