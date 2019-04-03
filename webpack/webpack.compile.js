let webpack = require('webpack');
var fs = require("fs");
const path = require('path');
const __rootPath = path.resolve(__dirname, "../");
var theme = require(path.resolve(__dirname, "../webpack/theme.js"))();

//获取less文件
var glob = require('glob');

//分离打包css文件
const ExtractTextPlugin = require('extract-text-webpack-plugin');

//清除文件
var CleanPlugin = require('clean-webpack-plugin');

/*
 * 将style下index.js，编译成index.css
 * components/style文件夹下只编译style/index.less，其他文件不编译
*/
function getEntry() {
  var entry = {};

  // 获取所有的less文件
  var getLessFiles = glob.sync("components/**/style/index.js");
  getLessFiles.forEach((item)=>{
      var filePath = item.replace(".js", "");
      entry[filePath.replace("components/", "")] = item;
  });

  // // 获取所有的less文件
  // var getLessFiles = glob.sync("components/**/*.less");

  // var filesList = [];
  // getLessFiles.forEach((item)=>{
  //    // 去除components/style下文件
  //    if(item.indexOf("components/style")<0){
  //       filesList.push(item);
  //     }
  // });
  // // 添加文件
  // filesList.push("components/style/index.less");

  // filesList.forEach((item, index) => {
  //   var filePath = item.replace(".less", "");
  //   entry[filePath.replace("components/", "")] = filePath;
  // });
  return entry;
}

module.exports = {
  entry: getEntry(),
  output: {
    path: path.resolve(__rootPath, 'lib'),
    filename: '[name].css'
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
                loader:"less-loader",
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
    extensions: ['.less'],
    alias: {
      "components": path.resolve(__rootPath, "components"),
    }
  },
  plugins: [
    new CleanPlugin([path.resolve(__rootPath, 'lib')], { root: __rootPath }),
    new ExtractTextPlugin('[name].css'),
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify('production')
    })
  ]
}