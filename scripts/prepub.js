/**
 * Created by huangxiao3 on 2018/3/9.
 */
'use strict';
const fs = require('fs');
const path = require('path');
const shell = require('shelljs');
var exec = require('child_process').exec;
const componentsPath = path.join(process.cwd(), 'node_modules','.bin');
console.log('123',componentsPath);

const babelStr = 'babel ../../components --out-dir ../../newcomponents --source-maps --extensions .es6,.es,.jsx,.js --copy-files';
process.chdir('./node_modules/.bin');
console.log('1231:',process.cwd());
exec(babelStr,function(err,stdout,stderr){
    console.log('err:',err);
    console.log('stdout:',stdout);
    console.log('stderr:',stderr);
    if(err) {
        console.log('get weather api error:'+stderr);
    } else {
        console.log('error',err);
    }
});
