'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getColumn = getColumn;
exports.jsonParse = jsonParse;
exports.getPath = getPath;
exports.reverseMap = reverseMap;
function getColumn(title, dataIndex, width) {
  return { title: title, dataIndex: dataIndex, width: width };
}

function jsonParse(str) {
  try {
    return JSON.parse(str);
  } catch (e) {
    return '';
  }
}

// 获取跳转链接
function getPath(hash) {
  var _window$location = window.location,
      origin = _window$location.origin,
      pathname = _window$location.pathname;

  return '' + origin + pathname + '#' + hash;
}

/**
 * 倒序输出array
 * @param {array} arr 待遍历的数组
 * @param {function} handler (item, idx) => { // todo }
 * */
function reverseMap(arr, handler) {
  var len = arr.length - 1;
  var result = [];
  for (var i = len; i >= 0; i--) {
    result.push(handler(arr[i], i));
  }
  return result;
}
//# sourceMappingURL=functions.js.map