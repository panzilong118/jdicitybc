var fs = require("fs");
//获取style/index.js文件
var glob = require('glob');

var entry = {};

// 生成lib/**/style/css.js
var getLessFiles = glob.sync("lib/**/style/index.js");
getLessFiles.forEach((file)=>{
    let newFile = file.replace("index","css");
    console.log(newFile);
    var text = fs.readFileSync(file, 'utf8');
    console.log(text);
    let newText = text.replace(/less/g, "css").replace(/style\'/g,"style/css'");
    fs.open(newFile, 'w', (err, fd) => {
        fs.writeFile(newFile, newText, (err) => {
            if (err) throw err;
            console.log(newFile+': It\'s saved!');
        });
    });
});
