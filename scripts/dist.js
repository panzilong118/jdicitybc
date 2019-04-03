'use strict';

const fs = require('fs');
const path = require('path');

//获取less文件
var glob = require('glob');

/*
 * Build components in one file: dist/jdcloudui.less
*/
var componentsLessFiles = glob.sync("components/*/**/style/index.less");

//所有样式
var allLessContent = `@import "../components/style/index.less";\n`;

componentsLessFiles.forEach(function(file) {
     allLessContent += `@import "../${file}";\n`;
}, this);

//如果dist目录不存在，则创建
let distPath = path.join(process.cwd(), 'dist');
if( !fs.existsSync(distPath) ) {
    fs.mkdirSync(distPath);
}

fs.writeFile(path.join(process.cwd(), 'dist',"jdcloudui.less"), allLessContent,(err)=>{
  if(err){
    console.log("创建jdcloudui.less文件失败----",err);
    throw err;
  }
  console.log("创建jdcloudui.less文件成功");
});