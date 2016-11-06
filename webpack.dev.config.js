var path = require('path');
var fs = require('fs');

console.log("Webpack Dev Config");

module.exports = {
    entry: ["babel-polyfill","./src/main.js"],
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
                fs.realpathSync(__dirname + '/node_modules/Ludic/node_modules/mixwith/src'),
                fs.realpathSync(__dirname + '/node_modules/ein'),
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
      root: path.resolve(__dirname),
      alias: {
        src: 'src',
        demos: 'src/demos',
        mixwith: 'node_modules/Ludic/node_modules/mixwith/src/mixwith.js'
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
