var path = require('path');
var fs = require('fs');
var webpack = require('webpack');
var HtmlWebpackPlugin = require("html-webpack-plugin");
var DirectoryNamedWebpackPlugin = require("directory-named-webpack-plugin");
var merge = require('webpack-merge')
var base = require('./webpack.base.config.js')

const PORT = process.env.npm_config_port || 8080
/*
* Ludic-Demos dev config
*/

module.exports = merge(base, {
  devServer: {
    historyApiFallback: true,
    noInfo: true,
    port: PORT
  },
  performance: {
    hints: false
  },
  // devtool: 'inline-source-map',
  devtool: 'source-map',
  plugins: [
    new HtmlWebpackPlugin({
        template: 'index.ejs',
    }),
    new webpack.NamedModulesPlugin(),
  ],
})
