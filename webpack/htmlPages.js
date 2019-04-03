const path = require('path');
const __rootPath = path.resolve(__dirname, "../");

module.exports = [{
    "title": "demo", //可变化
    "filename": "index.html", //webpack.dev.js 里entry 入口名称
    "template": path.resolve(__rootPath, 'src/template.html'), //可变化，一般不用变
    "chunks": ["index"] //webpack.dev.js 里entry 入口名称
}, {
    "title": "定制theme",
    "filename": "theme.html", 
    "template": path.resolve(__rootPath, 'src/template.html'),
    "chunks": ["theme"]
}];