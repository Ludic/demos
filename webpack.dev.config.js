var path = require('path');
var fs = require('fs');

/*
* Ludic-Demos dev config
*/

module.exports = {
  entry: ["./src/main.js"],
  output: {
    path: __dirname,
    filename: "bundle.js"
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: "babel-loader",
        options: {
          presets: [
            ["es2015",{modules: false}],
            "stage-1",
          ]
        },
      },
      {
        test: /\.css$/,
        loader: "style!css"
      },
    ]
  },
  resolve: {
    alias: {
      src: path.resolve(__dirname, 'src/'),
      demos: path.resolve(__dirname, 'src/demos/'),
    },
    extensions: ['.js', '.scss', '.json'],
  },
  devtool: '#source-map',
  performance: {
    hints: false, // disable warning about size of bundle
  },
};
