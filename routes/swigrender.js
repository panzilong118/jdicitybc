"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends2 = require("babel-runtime/helpers/extends");

var _extends3 = _interopRequireDefault(_extends2);

var _keys = require("babel-runtime/core-js/object/keys");

var _keys2 = _interopRequireDefault(_keys);

var _assign = require("babel-runtime/core-js/object/assign");

var _assign2 = _interopRequireDefault(_assign);

exports.default = function (req, res, template) {
  var data = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : {};
  var config = arguments[4];
  var envData = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : {};

  var micro_service_name = config.micro_service_name.replace("b2b-", "");
  (0, _assign2.default)(envData, { _b2b_static_server_: config._b2b_static_server_ + "/" + micro_service_name + "/" });
  if (__DEVELOPMENT__) {
    webpackIsomorphicTools.refresh();
  }
  try {
    var assets = webpackIsomorphicTools.assets();
    var style = (0, _keys2.default)(assets.styles).map(function (style, key) {
      return '<link href="' + assets.styles[style] + '" media="screen, projection" rel="stylesheet" type="text/css" charSet="UTF-8"/>';
    });
    var serverData = "window.__data=" + (0, _serializeJavascript2.default)(envData);
    res.render(template, (0, _extends3.default)({ css: assets.styles, style: style.join(" "), serverData: serverData, js: assets.javascript, mode: __DEVELOPMENT__, micro_service_name: micro_service_name }, data));
  } catch (err) {
    console.log(err.stack);
  }
};

var _serializeJavascript = require("serialize-javascript");

var _serializeJavascript2 = _interopRequireDefault(_serializeJavascript);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

module.exports = exports["default"];
//# sourceMappingURL=swigrender.js.map