'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _getPrototypeOf = require('babel-runtime/core-js/object/get-prototype-of');

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require('babel-runtime/helpers/createClass');

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = require('babel-runtime/helpers/possibleConstructorReturn');

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = require('babel-runtime/helpers/inherits');

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Created by songshuangwang on 2017/7/8.
 */

var MoneyConvert = function (_Component) {
  (0, _inherits3.default)(MoneyConvert, _Component);

  function MoneyConvert(props, context) {
    (0, _classCallCheck3.default)(this, MoneyConvert);
    return (0, _possibleConstructorReturn3.default)(this, (MoneyConvert.__proto__ || (0, _getPrototypeOf2.default)(MoneyConvert)).call(this, props, context));
  }

  (0, _createClass3.default)(MoneyConvert, [{
    key: 'render',
    value: function render() {
      var moneyValue = this.props.value;
      var result = moneyValue && moneyValue.toFixed(2);
      return _react2.default.createElement(
        'span',
        null,
        result
      );
    }
  }]);
  return MoneyConvert;
}(_react.Component);

exports.default = MoneyConvert;
module.exports = exports['default'];
//# sourceMappingURL=MoneyConvert.js.map