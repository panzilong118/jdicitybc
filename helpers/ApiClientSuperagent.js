'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _promise = require('babel-runtime/core-js/promise');

var _promise2 = _interopRequireDefault(_promise);

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require('babel-runtime/helpers/createClass');

var _createClass3 = _interopRequireDefault(_createClass2);

var _superagent = require('superagent');

var _superagent2 = _interopRequireDefault(_superagent);

var _config = require('../config');

var _config2 = _interopRequireDefault(_config);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

(function () {
  var enterModule = require('react-hot-loader').enterModule;

  enterModule && enterModule(module);
})();

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
    if (config.apiPort != "" && config.apiPort != "80") {
      return protocol + '//' + config.apiHost + ':' + config.apiPort + adjustedPath;
    } else {
      return protocol + '//' + config.apiHost + adjustedPath;
    }
  }
  return '/proxy' + adjustedPath;
}

var ApiClient = function () {
  function ApiClient(req) {
    var _this = this;

    (0, _classCallCheck3.default)(this, ApiClient);

    methods.forEach(function (method) {
      return _this[method] = function (path) {
        var _ref = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {},
            params = _ref.params,
            data = _ref.data;

        return new _promise2.default(function (resolve, reject) {
          var request = _superagent2.default[method](formatUrl(path));

          params = params || {};
          params._ = +new Date();
          request.query(params);

          if (__SERVER__ && req.get('cookie')) {
            request.set('cookie', req.get('cookie'));
          }

          if (data) {
            request.send(data);
          }

          request.end(function (err) {
            var _ref2 = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {},
                body = _ref2.body;

            return err ? reject(body || err) : resolve(body);
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

  reactHotLoader.register(methods, 'methods', '../../src/helpers/ApiClientSuperagent.js');
  reactHotLoader.register(getProtocol, 'getProtocol', '../../src/helpers/ApiClientSuperagent.js');
  reactHotLoader.register(formatUrl, 'formatUrl', '../../src/helpers/ApiClientSuperagent.js');
  reactHotLoader.register(ApiClient, 'ApiClient', '../../src/helpers/ApiClientSuperagent.js');
  leaveModule(module);
})();

;
module.exports = exports['default'];
//# sourceMappingURL=ApiClientSuperagent.js.map