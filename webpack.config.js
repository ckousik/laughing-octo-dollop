var path = require('path');
var SOURCE = path.join(__dirname,"src");
var BUILD = path.join(__dirname,"build");

module.exports = {
  entry: SOURCE+'/App.jsx',
  output: {
    filename: 'bundle.js',
    path: BUILD
  },
  module: {
    loaders: [
      {
        test: /\.css/,
        loader: 'css'
      },
      {
        test: /jsx?$/,
        loader: 'babel-loader',
        query: {
          presets: ['es2015','react']
        },
        include: SOURCE
      }
    ]
  }
}
