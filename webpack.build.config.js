var path = require('path');
var fs = require('fs');
var webpack = require('webpack');
var HtmlWebpackPlugin = require("html-webpack-plugin");
var CopyWebpackPlugin = require('copy-webpack-plugin');
var DirectoryNamedWebpackPlugin = require("directory-named-webpack-plugin");
var merge = require('webpack-merge')
var base = require('./webpack.base.config.js')

const PORT = process.env.npm_config_port || 8080
/*
* Ludic-Demos dev config
*/

module.exports = merge(base, {
  plugins: [
    new HtmlWebpackPlugin({
        template: 'index.ejs',
    }),
    new HtmlWebpackPlugin({
        template: 'gh-pages/404.ejs',
        filename: '404.html',
    }),
    new CopyWebpackPlugin([
      {from: 'gh-pages/CNAME'}
    ]),
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
  ],
  devtool: '#source-map'
});
