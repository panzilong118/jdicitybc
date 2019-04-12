'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

exports.default = Axis;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function Axis(_ref) {
  var x = _ref.x,
      y = _ref.y;

  var getLine = function getLine(num, getProps) {
    return [].concat(_toConsumableArray(Array(num))).map(function (i, idx) {
      var temp = idx * 100 + '%';
      var rate = temp / num + '%';
      return _react2.default.createElement('line', _extends({ key: idx }, getProps(rate)));
    });
  };
  return _react2.default.createElement(
    'g',
    { stroke: 'rgba(255, 255, 255, .5)' },
    getLine(x, function (rate) {
      return {
        x1: 0, y1: rate, x2: '100%', y2: rate
      };
    }),
    getLine(y, function (rate) {
      return {
        y1: 0, x1: rate, y2: '100%', x2: rate
      };
    })
  );
}
//# sourceMappingURL=Axis.js.map