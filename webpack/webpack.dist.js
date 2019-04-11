//生成dist文件夹
const webpack = require('webpack');
var fs = require("fs");
const path = require('path');
const __rootPath = path.resolve(__dirname, "../");
const theme = require(path.resolve(__dirname, '../webpack/theme.js'))();

//分离打包css文件
const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
  entry: {
      "jdcloudui.js": path.resolve(__rootPath, 'components/index.js'),
      "jdcloudui.css": path.resolve(__rootPath, 'dist/jdcloudui.less'),
  },
  output: {
    path: path.resolve(__rootPath, 'dist'),
    filename:"[name]"
  },
  // loaders
  module: {
    rules: [
      {
        test: /\.(gif|jpg|png|woff|svg|eot|ttf)\??.*$/,
        loader: 'url-loader?name=[name].[ext]'
      }, {
      test: /\.jsx?$/,
      exclude: /node_modules/,
      use: ['babel-loader'],
    }, {
      test: /\.css$/,
      use: ["style-loader", "css-loader"]
    }, {
      test: /\.less$/,
      exclude: /node_modules/,
      use: ExtractTextPlugin.extract({
        use: [
          "css-loader",
          {
            loader: 'postcss-loader',
            options: {
              plugins: (loader) => [
                require('postcss-import')(),
                require('postcss-cssnext')({browsers:["last 2 versions","Firefox < 20","not ie <= 8","ie 6-11"]})
              ]
            }
          }, {
                loader: 'less-loader',
                options: {
                    modifyVars: theme,
                    javascriptEnabled: true,
                    sourceMap: true
                }
            }
        ]
      })
    }]
  },
  resolve: {
    modules: [
      path.resolve(__rootPath, "components"),
      'node_modules'
    ],
    extensions: ['.js','.less'],
  },
  plugins: [
    new ExtractTextPlugin('[name]'),
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify('production')
    })
  ]
}
