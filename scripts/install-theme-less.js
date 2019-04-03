/**
 * Created by huangxiao3 on 2018/3/9.
 */
'use strict';

const fs = require('fs');
const path = require('path');

// 获取组件目录componentsPath
const componentsPath = path.join(process.cwd(), 'components');
let componentsLessContent = '';
let themeLessContent = '';
let allComponentsLessContent = '';
// Build components in one file: lib/style/components.less
fs.readdir(componentsPath, function (err, files) {
    files.forEach(function (file) {
        if (fs.existsSync(path.join(componentsPath, file, 'style', 'index.less'))) {
            // 找到每个组件的less文件
            componentsLessContent = fs.readFileSync(path.join(componentsPath, file, 'style', 'index.js'),'utf-8');
            // 为每个组件style中的index.js引入theme的样式
            themeLessContent = `import "../../style/themes/default.less";\n`;
            if(componentsLessContent && componentsLessContent.indexOf(themeLessContent)<0){
                fs.writeFileSync(path.join(componentsPath, file, 'style', 'index.js'), themeLessContent+componentsLessContent);
            }
            //生成统一less文件，import所有组件的less文件，用于开发者样式覆盖
            allComponentsLessContent += `@import "../${file}/style/index.less";\n`;
            fs.writeFileSync(path.join(process.cwd(), 'lib', 'style', 'components.less'), allComponentsLessContent);
        }
    });

});