'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require('babel-runtime/helpers/createClass');

var _createClass3 = _interopRequireDefault(_createClass2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

(function () {
  var enterModule = require('react-hot-loader').enterModule;

  enterModule && enterModule(module);
})();

/*
 * @author:      冯炎
 * @update:      20171201
 * @description: 操作cookie,提供get和set、del方法
 * */
var Cookies = function () {
  function Cookies() {
    (0, _classCallCheck3.default)(this, Cookies);
  }

  (0, _createClass3.default)(Cookies, [{
    key: 'get',


    /*
     * 通过key值获取cookie
     * */
    value: function get(key) {
      if (typeof window === 'undefined') return;
      var getCookie = document.cookie.replace(/[ ]/g, ''); // 获取cookie，去空格
      var arrCookie = getCookie.split(';'); //  以;分号做分隔生成数组
      var cookie = ''; //  获取cookie
      arrCookie.map(function (_cookie) {
        // 遍历cookie，获取指定的cookie值，并返回
        var cookieArr = _cookie.split('=');
        if (cookieArr[0] === key) {
          cookie = cookieArr[1];
        }
      });
      return cookie;
    }
  }, {
    key: 'getFromServer',
    value: function getFromServer(key, req) {
      if (typeof window === 'undefined') return;
      var getCookie = req.get('cookie'); // 获取cookie，去空格
      var arrCookie = getCookie.split(';'); //  以;分号做分隔生成数组
      var cookie = ''; //  获取cookie
      arrCookie.map(function (_cookie) {
        // 遍历cookie，获取指定的cookie值，并返回
        var cookieArr = _cookie.split('=');
        if (cookieArr[0] === key) {
          cookie = cookieArr[1];
        }
      });
      return cookie;
    }

    /*
     * 设置cookie
     * time有效时间为选填项
     * domain归属域为选填项
     * */

  }, {
    key: 'set',
    value: function set(key, value, time, domain) {
      if (typeof window === 'undefined') return;
      var expires = '';
      var domains = '';
      var cookies = key + '=' + value + ';';
      if (time) {
        var date = new Date();
        date.setTime(date.getTime() + time * 24 * 3600 * 1000);
        expires = 'expires=' + date.toGMTString() + ';';
        cookies += expires;
      }
      if (domain) {
        domains = 'path=/;domain = ' + domain + ';';
        cookies += domains;
      }
      document.cookie = cookies;
    }

    /*
     * 通过设置cookie的有效时间小于当前，删除cookie
     * domain为先填项，如果设置了domain，则删除cookie时需要传入domain
     * */

  }, {
    key: 'del',
    value: function del(key, domain) {
      if (typeof window === 'undefined') return;
      var date = new Date();
      var domains = '';
      date.setTime(date.getTime() - 1000);
      if (domain) {
        domains = ';path=/;domain = ' + domain + ';';
      }
      document.cookie = key + '=del;expires =' + date.toGMTString() + domains;
    }
  }, {
    key: '__reactstandin__regenerateByEval',
    value: function __reactstandin__regenerateByEval(key, code) {
      this[key] = eval(code);
    }
  }]);
  return Cookies;
}();

exports.default = Cookies;
;

(function () {
  var reactHotLoader = require('react-hot-loader').default;

  var leaveModule = require('react-hot-loader').leaveModule;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(Cookies, 'Cookies', '../../src/common/Cookies.js');
  leaveModule(module);
})();

;
module.exports = exports['default'];
//# sourceMappingURL=Cookies.js.map