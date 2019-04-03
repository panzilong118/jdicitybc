'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _promise = require('babel-runtime/core-js/promise');

var _promise2 = _interopRequireDefault(_promise);

exports.default = apiClient;

var _axios = require('axios');

var _axios2 = _interopRequireDefault(_axios);

var _config = require('../config');

var _config2 = _interopRequireDefault(_config);

var _qs = require('qs');

var _qs2 = _interopRequireDefault(_qs);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

(function () {
  var enterModule = require('react-hot-loader').enterModule;

  enterModule && enterModule(module);
})();

function apiClient(req) {
  // const instance = axios.create({
  //   baseURL: __SERVER__ ? `http://${config.apiHost}:${config.apiPort}` : '/proxy'
  // });
  var instance = _axios2.default.create({
    baseURL: __SERVER__ ? 'http://' + _config2.default.apiHost + '/proxy' : '/proxy',
    transformRequest: [function (data) {
      return _qs2.default.stringify(data || {});
    }]
  });
  var token = void 0;

  instance.setJwtToken = function (newToken) {
    token = newToken;
  };

  instance.interceptors.request.use(function (conf) {
    if (__SERVER__) {
      if (req.header('cookie')) {
        conf.headers.Cookie = req.header('cookie');
      }
      if (req.header('authorization')) {
        conf.headers.authorization = req.header('authorization');
      }
    }

    if (token) {
      conf.headers.authorization = token;
    }

    return conf;
  }, function (error) {
    return _promise2.default.reject(error);
  });

  instance.interceptors.response.use(function (response) {
    return response.data;
  }, function (error) {
    return _promise2.default.reject(error.response ? error.response.data : error);
  });

  return instance;
}
;

(function () {
  var reactHotLoader = require('react-hot-loader').default;

  var leaveModule = require('react-hot-loader').leaveModule;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(apiClient, 'apiClient', '../../src/helpers/ApiClient.js');
  leaveModule(module);
})();

;
module.exports = exports['default'];
//# sourceMappingURL=ApiClient.js.map