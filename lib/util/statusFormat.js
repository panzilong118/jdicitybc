'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _config = require('src/config');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function (text) {
  return _react2.default.createElement(
    'div',
    null,
    _react2.default.createElement('span', { className: 'circle ' + (_config.AZKABAN_STATUS[text] && _config.AZKABAN_STATUS[text].type) }),
    text ? _config.AZKABAN_STATUS[text] && _config.AZKABAN_STATUS[text].name : null
  );
};
//# sourceMappingURL=statusFormat.js.map