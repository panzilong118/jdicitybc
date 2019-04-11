const webpack = require('webpack');
const path = require('path');

const __rootPath = path.resolve(__dirname, '../');
const theme = require(path.resolve(__dirname, '../webpack/theme.js'))();

const HtmlWebpackPlugin = require('html-webpack-plugin');

function resolve(dir) {
  return path.join(__dirname, '..', dir);
}

// html页面 pagesArray
function getPages() {
    const pagesArray = require('./htmlPages.js');
    let html_plugin = [];
    /* 遍历页面，添加配置*/
    pagesArray.forEach((page) => {
        const newPage = Object.assign(page, {
            hash: true,
            minify: {
                removeComments: true,
                collapseWhitespace: false // 删除空白符与换行符
            }
        });
        const htmlPlugin = new HtmlWebpackPlugin(newPage);
        html_plugin.push(htmlPlugin);
    });
    return html_plugin;
}

module.exports = {
    mode: 'production',
    devtool: 'inline-source-map',
    // 入口文件
    entry: {
        index: ['webpack-hot-middleware/client?noInfo=true&reload=true', path.resolve(__rootPath, 'src/index.js')]
        // theme: ['webpack-hot-middleware/client?noInfo=true&reload=true', path.resolve(__rootPath, 'src/theme/index.js')]
    },
    // 出口文件
    output: {
        path: path.resolve(__rootPath, 'devdist'),
        publicPath: '/'
    },
    performance: {
        hints: process.env.NODE_ENV === 'production' ? 'warning' : false
    },
    // loaders
    module: {
        rules: [{
            test: /\.(gif|jpg|png|woff|svg|eot|ttf)\??.*$/,
            loader: 'url-loader?name=[name].[ext]'
        }, {
            test: /\.jsx?$/,
            exclude: /node_modules/,
            use: ['babel-loader'],
        }, {
            test: /\.css$/,
            use: ['style-loader', 'css-loader']
        }, {
            test: /\.less$/,
            use: ['style-loader', 'css-loader',
                {
                    loader: 'postcss-loader',
                    options: {
                        plugins: loader => [
                            require('postcss-import')(),
                            require('postcss-cssnext')({ browsers: ['last 2 versions', 'Firefox < 20', 'not ie <= 8', 'ie 6-11'] })
                        ],
                        sourceMap: true
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
        }, {
          enforce: 'pre',
          test: /\.js$/,
          include: [resolve('components'), resolve('src')],
          loader: 'eslint-loader',
        }]
    },

    resolve: {
        modules: [
            path.resolve(__rootPath, 'components'),
            'node_modules'
        ],
        extensions: ['.js', '.json', '.jsx', '.less'],
        alias: {
            components: path.resolve(__rootPath, 'components'),
        }
    },
    plugins: [
        new webpack.DefinePlugin({
            'process.env.NODE_ENV': JSON.stringify('development')
        }),
        ...getPages(),
        new webpack.HotModuleReplacementPlugin(),
        new webpack.DefinePlugin({
            __CLIENT__: true,
            __SERVER__: false,
            __DEVELOPMENT__: true,
            __DEVTOOLS__: true // <-------- DISABLE redux-devtools HERE
        }),
    ],
    devServer: {
        contentBase: path.resolve(__rootPath, 'devdist'),
        publicPath: '/',
        port: 8080,
        historyApiFallback: true
    }
};
