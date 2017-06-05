var path = require('path');
var fs = require('fs');
var webpack = require('webpack');
var HtmlWebpackPlugin = require("html-webpack-plugin");
var CopyWebpackPlugin = require('copy-webpack-plugin');
var DirectoryNamedWebpackPlugin = require("directory-named-webpack-plugin");
var CaseSensitivePathsPlugin = require('case-sensitive-paths-webpack-plugin');

function resolve (dir) {
  return path.join(__dirname, dir)
}

function nodeModule(name) {
  return fs.realpathSync(__dirname + '/node_modules/' + name)
}

module.exports = {
  entry: './src/main.js',
  output: {
    path: resolve('dist'),
    publicPath: '/',
    filename: 'build.js'
  },
  target: 'web',
  node: {
    fs: 'empty',
    net: 'empty',
  },
  module: {
    noParse: [
      /Box2D_v2/, // needed for ludic-box2d
    ],
    rules: [
      {
        test: /\.vue$/,
        loader: 'vue-loader',
        options: {
          loaders: {
            // Since sass-loader (weirdly) has SCSS as its default parse mode, we map
            // the "scss" and "sass" values for the lang attribute to the right configs here.
            // other preprocessors should work out of the box, no loader config like this nessessary.
            'scss': 'vue-style-loader!css-loader!sass-loader',
            'sass': 'vue-style-loader!css-loader!sass-loader?indentedSyntax'
          }
          // other vue-loader options go here
        }
      },
      {
        test: /\.js$/,
        loader: 'babel-loader',
        // exclude: excludeBut('ludic', 'ludic-box2d', 'ludic-vue'),
        // exclude: /node_modules\/(?![ludic|ludic-box2d|ludic-vue])/,
        include: [
          nodeModule('ludic/src'),
          nodeModule('ludic-box2d/src'),
          nodeModule('ludic-vue/src'),
          resolve('src'),
          resolve('test'),

          // /\/node_modules\/ludic\//,
          // /\/node_modules\/ludic-box2d\//,
          // /\/node_modules\/ludic-vue\//,
        ]
      },
      {
        test: /\.js$/,
        use: ["source-map-loader"],
      },
      {
        test: /\.(png|jpg|gif|svg)$/,
        loader: 'file-loader',
        options: {
          name: '[name].[ext]?[hash]'
        }
      }
    ]
  },
  resolve: {
    alias: {
      'vue$': 'vue/dist/vue.common.js',
      src: path.resolve(__dirname, 'src/'),
      components: path.resolve(__dirname, 'src/components/'),
      demos: path.resolve(__dirname, 'src/demos/'),
      games: path.resolve(__dirname, 'src/games/'),
      // 'ludic$': path.resolve(__dirname, 'node_modules/ludic/src/main.js'),
      // 'Ludic$': 'ludic',
    },
    extensions: ['.js', '.vue', '.scss', '.json'],
    plugins: [
      new DirectoryNamedWebpackPlugin()
    ],
    // this is to help npm linked packages use project node_modules first
    modules: [path.resolve(__dirname, "node_modules"), "node_modules"],
  },
  resolveLoader: {
    // this is to help npm linked packages use project node_modules first
    modules: [path.resolve(__dirname, "node_modules"), "node_modules"],
  },
  performance: {
    hints: false
  },
  plugins: [
    new CaseSensitivePathsPlugin()
  ],
  devtool: '#source-map'
}
