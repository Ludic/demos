var path = require('path')
var fs = require('fs')
var utils = require('./utils')
var config = require('../config')
var vueLoaderConfig = require('./vue-loader.conf')
var DirectoryNamedWebpackPlugin = require("directory-named-webpack-plugin")
var CaseSensitivePathsPlugin = require('case-sensitive-paths-webpack-plugin')

function resolve (dir) {
  return path.join(__dirname, '..', dir)
}
function nodeModule(name) {
  return fs.realpathSync(__dirname + '/../node_modules/' + name)
}

module.exports = {
  entry: {
    app: './src/main.js'
  },
  output: {
    path: config.build.assetsRoot,
    filename: '[name].js',
    publicPath: process.env.NODE_ENV === 'production'
      ? config.build.assetsPublicPath
      : config.dev.assetsPublicPath
  },
  resolve: {
    extensions: ['.js', '.vue', '.json'],
    alias: {
      'vue$': 'vue/dist/vue.esm.js',
      '@': resolve('src'),
      components: resolve('src/components/'),
      demos: resolve('src/demos/'),
      games: resolve('src/games/'),
    },
    plugins: [
      new DirectoryNamedWebpackPlugin()
    ],
    // this is to help npm linked packages use project node_modules first
    modules: [resolve("node_modules"), "node_modules"],
  },
  module: {
    noParse: [
      /Box2D_v2/, // needed for ludic-box2d
    ],
    rules: [
      // {
      //   test: /\.(js|vue)$/,
      //   loader: 'eslint-loader',
      //   enforce: 'pre',
      //   include: [
      //     nodeModule('ludic/src'),
      //     nodeModule('ludic-box2d/src'),
      //     nodeModule('ludic-vue/src'),
      //     resolve('src'),
      //     resolve('test')
      //   ],
      //   options: {
      //     formatter: require('eslint-friendly-formatter')
      //   }
      // },
      {
        test: /\.vue$/,
        loader: 'vue-loader',
        options: vueLoaderConfig
      },
      {
        test: /\.js$/,
        loader: 'babel-loader',
        include: [
          resolve('src'),
          resolve('test')
        ],

      },
      {
        test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
        loader: 'url-loader',
        options: {
          limit: 10000,
          name: utils.assetsPath('img/[name].[hash:7].[ext]')
        }
      },
      {
        test: /\.(mp4|webm|ogg|mp3|wav|flac|aac)(\?.*)?$/,
        loader: 'url-loader',
        options: {
          limit: 10000,
          name: utils.assetsPath('media/[name].[hash:7].[ext]')
        }
      },
      {
        test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/,
        loader: 'url-loader',
        options: {
          limit: 10000,
          name: utils.assetsPath('fonts/[name].[hash:7].[ext]')
        }
      }
    ]
  },
  plugins: [
    new CaseSensitivePathsPlugin()
  ],
}
