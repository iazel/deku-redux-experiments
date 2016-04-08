var webpack = require('webpack');

module.exports = {
  entry: __dirname + '/main.js',
  output: { 
    path: __dirname + '/demo/',
    filename: 'main.js'
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
        query: {
          presets: ['es2015']
        }
      }
    ]
  }
}
