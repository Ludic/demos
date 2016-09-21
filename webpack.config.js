var path = require('path');
var fs = require('fs');


module.exports = {
    entry: ["babel-polyfill","./src/app.js"],
    output: {
        path: __dirname,
        filename: "bundle.js"
    },
    module: {
        loaders: [
            {
              test: /\.js$/,
              // exclude: /node_modules/,
              include: [
                // "/src",
                // "/node_modules/Ludic"
                // path.resolve(__dirname,"src"),
                // path.resolve(__dirname,"node_modules/Ludic"),
                fs.realpathSync(__dirname + '/src'),
                fs.realpathSync(__dirname + '/node_modules/Ludic'),
              ],
              loader: "babel-loader"
            },
            {
              test: /\.css$/,
              loader: "style!css"
            },
        ]
    },
    resolve: {
      alias: {
        // src: srcPath,
        // common: commonPath
      },
      extensions: ['', '.js', '.scss', '.json'],
      // modulesDirectories: [path.resolve('./node_modules')]
      fallback: [path.join(__dirname, 'node_modules')]
    },
    resolveLoader: {
      fallback: [path.join(__dirname, 'node_modules')]
    },
    babel: {
      presets: [require('babel-preset-es2015')]
    },
    devtool: '#source-map'
};
