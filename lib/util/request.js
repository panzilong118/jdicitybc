'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _axios = require('axios');

var _axios2 = _interopRequireDefault(_axios);

var _config = require('src/config');

var _router = require('src/router');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_axios2.default.defaults.withCredentials = true;

function request(url, options) {
  var method = (options.method || 'get').toLowerCase();
  var opts = {
    url: url,
    method: method,
    baseURL: options.baseURL || _config.BASE_API_PREFIX,
    headers: options.headers || {}
  };
  var optionData = options.data || {};
  if (method === 'get') opts.params = optionData;else opts.data = optionData;
  return (0, _axios2.default)(opts).then(function (res) {
    var response = res || {};
    var status = response.status;

    if (status === 200) {
      // http请求没问题
      var _response$data = response.data,
          data = _response$data.data,
          code = _response$data.code;

      if (code === 200) {
        // 如果接口请求没问题直接返回data，有问题则将错误信息全部返回
        return Promise.resolve(data);
      }
      // 登录超时，或用户没有群组 跳登录
      if (code === 101 || code === 515) {
        _router.history.push(_router.PATHS.LOGIN);
      }
      return Promise.reject(response.data || '服务器错误');
    }
    return Promise.reject(new Error(res.msg));
  }).catch(function (err) {
    if (!err.code) {// 如网络原因错误，打印信息
      // console.error(err.message);
    }
    return Promise.reject(err);
  });
}

// module.exports = request;
exports.default = request;
//# sourceMappingURL=request.js.map