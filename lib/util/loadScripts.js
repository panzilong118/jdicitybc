'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.loadScripts = exports.compareExistFiles = undefined;

var _lodash = require('lodash');

var compareExistFiles = exports.compareExistFiles = function compareExistFiles(tag, urls) {
  var files = document.getElementsByTagName(tag);
  var type = tag === 'script' ? 'src' : 'href';
  var paths = [];
  for (var i = 0, len = files.length; i < len; i++) {
    paths.push(files[i].getAttribute(type));
  }
  return (0, _lodash.difference)(urls, paths);
};

var loadScripts = exports.loadScripts = function loadScripts(scriptsArr, callback) {
  var parentArg = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 'head';

  var scripts = compareExistFiles('script', scriptsArr);
  if (scripts.length === 0) {
    // 如果script都已经存在 则直接执行callback
    callback && callback();
    return;
  }
  var parent = document.getElementsByTagName(parentArg)[0] || document.documentElement;
  var loaded = 0;
  for (var i = 0, len = scripts.length; i < len; i++) {
    var node = document.createElement('script');
    // eslint-disable-next-line
    node.onload = node.onreadystatechange = function () {
      var rs = this.readyState;
      if (typeof rs === 'undefined' || rs === 'loaded' || rs === 'complete') {
        loaded++;
        // eslint-disable-next-line
        this.onload = this.onreadystatechange = null;
        node = null;
        if (loaded === scripts.length) {
          callback && callback();
        }
      }
    };
    node.src = scripts[i];
    parent.appendChild(node);
  }
};
//# sourceMappingURL=loadScripts.js.map