var path = require('path');
var fs = require('fs');
var webpack = require('webpack');
var DirectoryNamedWebpackPlugin = require("directory-named-webpack-plugin");

const PORT = process.env.npm_config_port || 8080
/*
* Ludic-Demos dev config
*/

module.exports = {
  entry: './src/main.js',
  output: {
    path: path.resolve(__dirname, './dist'),
    publicPath: '/dist/',
    filename: 'build.js'
  },
  target: 'web',
  node: {
    fs: 'empty',
    net: 'empty',
  },
  module: {
    noParse: [
      /Box2D_v2/,
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
        exclude: /node_modules/,
        use: [
          {
            loader: "babel-loader",
            options: {
              presets: [
                ["es2015",{modules: false}],
                "stage-1",
              ]
            },
          },
        ],
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
      // 'ludic$': path.resolve(__dirname, 'node_modules/ludic/src/main.js'),
      // 'Ludic$': 'ludic',
    },
    extensions: ['.js', '.vue', '.scss', '.json'],
    plugins: [
      new DirectoryNamedWebpackPlugin()
    ],
    // this is to help npm linked packages use project node_modules first
    // modules: ["node_modules",path.resolve(__dirname, "node_modules")],
  },
  // devServer: {
  //   historyApiFallback: true,
  //   noInfo: true,
  //   port: PORT
  // },
  performance: {
    hints: false
  },
  // externals: {
  //   box2d: 'box2d'
  // },
  devtool: 'source-map'
};

if (process.env.NODE_ENV === 'production') {
  module.exports.devtool = '#source-map'
  // http://vue-loader.vuejs.org/en/workflow/production.html
  module.exports.plugins = (module.exports.plugins || []).concat([
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: '"production"'
      }
    }),
    new webpack.optimize.UglifyJsPlugin({
      sourceMap: true,
      compress: {
        warnings: false
      }
    }),
    new webpack.LoaderOptionsPlugin({
      minimize: true
    })
  ])
} else if(process.env.NODE_ENV === 'development'){
  module.exports.plugins = (module.exports.plugins || []).concat([
    new webpack.NamedModulesPlugin()
  ])
}
