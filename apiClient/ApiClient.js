'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _stringify = require('babel-runtime/core-js/json/stringify');

var _stringify2 = _interopRequireDefault(_stringify);

var _typeof2 = require('babel-runtime/helpers/typeof');

var _typeof3 = _interopRequireDefault(_typeof2);

var _promise = require('babel-runtime/core-js/promise');

var _promise2 = _interopRequireDefault(_promise);

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require('babel-runtime/helpers/createClass');

var _createClass3 = _interopRequireDefault(_createClass2);

var _superagent = require('superagent');

var _superagent2 = _interopRequireDefault(_superagent);

var _Cookies = require('../common/Cookies');

var _Cookies2 = _interopRequireDefault(_Cookies);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

(function () {
  var enterModule = require('react-hot-loader').enterModule;

  enterModule && enterModule(module);
})();

var cookie = '';
if (!__SERVER__) {
  cookie = new _Cookies2.default();
}
var methods = ['get', 'post', 'put', 'patch', 'del'];
function getProtocol(req) {
  return "http:";
  //return req.headers["x-proto"]=="http"?"http:":"https:";
}
function formatUrl(path, config, req) {
  if (/^(https?:)|^(\/\/)/.test(path)) return path;
  var adjustedPath = path[0] !== '/' ? '/' + path : path;
  if (__SERVER__) {
    var protocol = getProtocol(req);
    //var protocol = req.headers["x-proto"]=="http"?"http":"https";
    if (config.apiPort != "" && config.apiPort != "80") {
      return protocol + '//' + config.apiHost + ':' + config.apiPort + adjustedPath;
    } else {
      return protocol + '//' + config.apiHost + adjustedPath;
    }
    // Prepend host and port of the API server to the path.
  }
  // Prepend `/api` to relative URL, to proxy to API server.
  return '/proxy' + adjustedPath;
}

var ApiClient = function () {
  function ApiClient(config, req, res, operating) {
    var _this = this;

    (0, _classCallCheck3.default)(this, ApiClient);

    methods.forEach(function (method) {
      return _this[method] = function (path) {
        var _ref = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {},
            params = _ref.params,
            data = _ref.data;

        var noLogin = arguments[2];
        var jsonFlag = arguments[3];
        var shopFlag = arguments[4];
        var companyIdFlag = arguments[5];
        return new _promise2.default(function (resolve, reject) {
          var url = formatUrl(path, config, req);
          var request = _superagent2.default[method](url);
          console.log(__SERVER__ ? "Server" : "Client", "---ajax:", url);
          params = params || {};

          /*
           * node端判断companyId
           * */
          if (__SERVER__) {

            var userAgent = req.headers['user-agent'];
            request.set("user-agent", userAgent);

            // 判断params中是否存在companyId，如果不存在则添加
            if (!params.companyId) {
              // 如果cookie里不存在companyId，读取session里的companyId,否则从cookie读取
              if (!req.cookies['companyId']) {
                params.companyId = req.session && req.session.companyId || undefined;
              } else {
                params.companyId = req.cookies['companyId'];
              }
            }
          }
          if (!__SERVER__ && !data) {
            /*
             * 获取cookie中的shopId，通过为空判断，将shopId添加到params对象中
             * 实现为每个请求添加shopId参数
             * */
            if (!shopFlag && !params.shopId) {
              params.shopId = cookie.get('shopId');
            }
            /*
             * 获取cookie中的companyId，通过为空判断，将companyId添加到params对象中
             * 实现为每个请求添加companyId参数
             * */
            if (!companyIdFlag && !params.companyId) {
              params.companyId = cookie.get('companyId');
            }
          }

          params._ = +new Date();
          request.query(params);

          if (__SERVER__ && req.get('cookie')) {
            request.set('cookie', req.get('cookie'));
          }
          if (__SERVER__) {
            request.set('original-host', req.get("host"));
            console.log("host:---------------->", request.get("original-host"));

            // // 根据店铺用户权限，跳转到查询出的菜单第1个链接
            // const _params = {};
            // const menuUrl = '/proxy/authority-service/mall/resource/queryResourceMenuBySellerId';
            // const request1 = superagent[method](menuUrl);
            // request1.set('original-host', req.get('host'));
            // request1.set('cookie', req.get('cookie'));
            // _params.shopType = req.cookies['shopType'];
            // _params.shopId = req.cookies['shopId'];
            // _params.companyId = req.cookies['companyId'];
            // _params._ = +new Date();
            // request1.query(_params);
            // request1.end((err, response) => {
            //   if (response.body.code == 0) {
            //     // 从返回的数据中截取第1个有效url做为跳转路径
            //     const _data = JSON.stringify(response.body.data);
            //     const urlArr1 = _data.substr(_data.indexOf('"url":"/') + 7);
            //     const urlArr2 = urlArr1.substr(0, urlArr1.indexOf('"'));
            //     // 如果当前url中含有shop(即认为是在店铺页面下)，则重定向url到第1个有并向路径
            //     if (req.headers.host.indexOf('shop.') >= 0) {
            //       req.redirect(302, '//' + req.headers.host + urlArr2);
            //     }
            //   }
            // });
          }
          if (data) {
            /*
             * node端判断companyId
             * */
            if (__SERVER__) {
              // 判断params中是否存在companyId，如果不存在则添加
              if ((typeof data === 'undefined' ? 'undefined' : (0, _typeof3.default)(data)) === 'object') {
                if (!data.companyId) {
                  if (!req.cookies['companyId']) {
                    data.companyId = req.session && req.session.companyId || undefined;
                  } else {
                    data.companyId = req.cookies['companyId'];
                  }
                }
              }
            }
            if (!__SERVER__) {
              if ((typeof data === 'undefined' ? 'undefined' : (0, _typeof3.default)(data)) === 'object') {
                /*
                 * 获取cookie中的shopId，通过为空判断，将shopId添加到params对象中
                 * 实现为每个请求添加shopId参数
                 * */
                if (!shopFlag && !data.shopId) {
                  data.shopId = cookie.get('shopId');
                }
                /*
                 * 获取cookie中的companyId，通过为空判断，将companyId添加到params对象中
                 * 实现为每个请求添加companyId参数
                 * */
                if (!companyIdFlag && !data.companyId) {
                  data.companyId = cookie.get('companyId');
                }
              }
            }
            if (jsonFlag) {
              request.type("json").send(data);
            } else {
              request.type("form").send(data);
            }
          }
          function sso(body) {
            var ssoSystem = operating ? "passport-platform" : "passport";
            var service = operating ? "passport-operating-view" : "service-passport-view";
            var redirectUrl = '//@/' + service + '/determine/login?return_url=';
            if (noLogin) {
              resolve(body);
            } else {
              if (__SERVER__ && body.code == "0-0004") {
                var urls = req.get('host').replace("www.", "").split(".");
                if (urls.length > 2) {
                  if (urls[0] == "mall" || urls[0] == "shop" || urls[0] == "buyer" || urls[0] == "passport" || urls[0] == "platform" || urls[0] == "passport-platform" || urls[0] == "view-zone") {
                    urls.splice(0, 1, ssoSystem);
                  } else {
                    urls.unshift(ssoSystem);
                  }
                } else {
                  urls.unshift(ssoSystem);
                }
                var protocol = getProtocol(req);
                redirectUrl = protocol + redirectUrl.replace("@", urls.join("."));
                try {
                  var fullUrl = protocol + '//' + req.get('host') + req.originalUrl;
                  res && res.redirect(redirectUrl + encodeURIComponent(fullUrl));
                } catch (e) {}
              } else if (body.code == "0-0004") {
                var hostMatch = window.location.href.replace("www.", "").match(/.*?\/\/(.*?)\/|.*?\/\/(.*)/);
                var _urls = hostMatch[1] || hostMatch[2];
                _urls = _urls.split(".");
                if (_urls.length > 2) {
                  if (_urls[0] == "mall" || _urls[0] == "shop" || _urls[0] == "buyer" || _urls[0] == "passport" || _urls[0] == "platform" || _urls[0] == "passport-platform" || _urls[0] == "view-zone") {
                    _urls.splice(0, 1, ssoSystem);
                  } else {
                    _urls.unshift(ssoSystem);
                  }
                } else {
                  _urls.unshift(ssoSystem);
                }
                redirectUrl = redirectUrl.replace("@", _urls.join("."));
                window.location.href = redirectUrl + encodeURIComponent(window.location.href);
              } else if (!!!__SERVER__ && body.code == "000001020001") {
                var _hostMatch = window.location.href.match(/.*?\/\/(.*?)\/|.*?\/\/(.*)/);
                var _urls2 = _hostMatch[1] || _hostMatch[2];
                // console.log("hostMatch")
                //  console.log(hostMatch)
                // console.log("hostMatch")
                // console.log("2222222222")
                var redirectUrls = "/user-shop-view/sellerinfo/defaultsupplyhome";
                window.location.href = '//' + _urls2 + redirectUrls;
              } else {
                resolve(body);
              }
            }
          }

          function error(err) {
            reject(err);
          }

          //request.end((err, { body , text }) => err ? error(body||err) : sso(JSON.stringify(body)=="{}"?text:body));
          request.end(function (err, response) {
            try {
              if (response) {
                response = response || {};
                var body = response.body || {},
                    text = response.text || "";
                err ? error(body || err) : sso((0, _stringify2.default)(body) == "{}" ? text : body);
              } else {
                __SERVER__ && res.send("请求后端接口：" + url + "，请求参数:" + (0, _stringify2.default)(params) + ",返回异常" + err + ",response:" + response);
              }
            } catch (e) {
              __SERVER__ && res.send("请求后端接口：" + url + "，请求参数:" + (0, _stringify2.default)(params) + ",返回异常" + err + ",response:" + response);
            }
          });
        });
      };
    });
  }

  /*
   * There's a V8 bug where, when using Babel, exporting classes with only
   * constructors sometimes fails. Until it's patched, this is a solution to
   * "ApiClient is not defined" from issue #14.
   * https://github.com/erikras/react-redux-universal-hot-example/issues/14
   *
   * Relevant Babel bug (but they claim it's V8): https://phabricator.babeljs.io/T2455
   *
   * Remove it at your own risk.
   */


  (0, _createClass3.default)(ApiClient, [{
    key: 'empty',
    value: function empty() {}
  }, {
    key: '__reactstandin__regenerateByEval',
    value: function __reactstandin__regenerateByEval(key, code) {
      this[key] = eval(code);
    }
  }]);
  return ApiClient;
}();

exports.default = ApiClient;
;

(function () {
  var reactHotLoader = require('react-hot-loader').default;

  var leaveModule = require('react-hot-loader').leaveModule;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(cookie, 'cookie', '../../src/apiClient/ApiClient.js');
  reactHotLoader.register(methods, 'methods', '../../src/apiClient/ApiClient.js');
  reactHotLoader.register(getProtocol, 'getProtocol', '../../src/apiClient/ApiClient.js');
  reactHotLoader.register(formatUrl, 'formatUrl', '../../src/apiClient/ApiClient.js');
  reactHotLoader.register(ApiClient, 'ApiClient', '../../src/apiClient/ApiClient.js');
  leaveModule(module);
})();

;
module.exports = exports['default'];
//# sourceMappingURL=ApiClient.js.map