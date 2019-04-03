const path = require('path');
const express = require('express');
const webpack = require('webpack');
const webpackDevMiddleware = require('webpack-dev-middleware');

const httpProxy = require('http-proxy');

const app = express();
const config = require('../webpack/webpack.dev.js');
const compiler = webpack(config);

// view engine setup
app.set('views', "./");
//注册ejs模板为html页
// app.engine('.html', require('ejs').__express);
app.engine('html', require('ejs').renderFile);
//设置视图模板的默认后缀名为.html,避免了每次res.Render("xx.html")的尴尬
app.set('view engine', 'html');

const routes = require("./routes");

// Tell express to use the webpack-dev-middleware and use the webpack.config.js
// configuration file as a base.
app.use(webpackDevMiddleware(compiler, {
    publicPath: config.output.publicPath
}));

app.use(require('webpack-hot-middleware')(compiler));

app.use('/', routes);

//引用静态--提供字体文件：字体最好放置在CDN上
app.use(express.static('../static'));
app.use('/static', express.static('static', {
    setHeaders: function(res, path, stat) {
        res.set('Access-Control-Allow-Origin', '*')
    }
}));

app.get('/views/:pagename?', function(req, res, next) {
    var pagename = req.params.pagename ? req.params.pagename + '.html' : 'index.html';
    var filepath = path.join(compiler.outputPath, pagename);

    // 使用webpack提供的outputFileSystem
    compiler.outputFileSystem.readFile(filepath, function(err, result) {
        if (err) {
            // something error
            return next('输入路径无效，请输入目录名作为路径，有效路径有：\n/' + Object.keys(entries).join('\n/'))
        }
        // 发送获取到的页面
        res.set('content-type', 'text/html');
        res.send(result);
        res.end();
    })
});

// Serve the files on port 3000.
app.listen(8080, function() {
    console.log('Example app listening on port 8080!\n');
});