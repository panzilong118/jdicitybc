'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
 * 1. direct access to method [get|post|patch|put|delete]
 * 2. set baseURL
 */

var MethodRequest = function MethodRequest(baseURL) {
  var _this = this;

  _classCallCheck(this, MethodRequest);

  var requestFactory = function requestFactory(url, data, method) {
    return request(url, {
      baseURL: baseURL,
      method: method,
      data: data
    });
  };

  // map method request
  ['get', 'post', 'patch', 'put', 'delete'].forEach(function (method) {
    _this[method] = function (url, data) {
      return requestFactory(url, data, method);
    };
  });
};

exports.default = MethodRequest;
//# sourceMappingURL=MethodRequest.js.map