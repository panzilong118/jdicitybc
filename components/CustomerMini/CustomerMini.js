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

require('./styles/styles.css');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Created by huangxiao3 on 2017/6/12.
 */
var customer = require('./hnc_online3.png');

var CustomerMini = function (_Component) {
  (0, _inherits3.default)(CustomerMini, _Component);

  function CustomerMini(props, context) {
    (0, _classCallCheck3.default)(this, CustomerMini);
    return (0, _possibleConstructorReturn3.default)(this, (CustomerMini.__proto__ || (0, _getPrototypeOf2.default)(CustomerMini)).call(this, props, context));
  }

  (0, _createClass3.default)(CustomerMini, [{
    key: 'handleCreateShangQiao',
    value: function handleCreateShangQiao() {
      var defaultUrl = 'http://p.qiao.baidu.com/cps/chat?siteId=10819178&userId=23978973';
      var iWidth = 580;
      var iHeight = 510;
      var iTop = (window.screen.availHeight - 30 - iHeight) / 2;
      var iLeft = (window.screen.availWidth - 10 - iWidth) / 2;
      var sqUrl = this.props.SqCode ? this.props.SqCode : defaultUrl;
      window.open(defaultUrl, "shangqiao", 'height=510, width=580, toolbar =no, menubar=no, scrollbars=no, resizable=no, location=no, status=no, top=' + iTop + ',left=' + iLeft);
    }
  }, {
    key: 'render',
    value: function render() {
      var _this2 = this;

      return _react2.default.createElement(
        'div',
        { className: 'main', onClick: function onClick() {
            return _this2.handleCreateShangQiao();
          } },
        _react2.default.createElement('img', { src: customer, className: 'img' }),
        _react2.default.createElement(
          'div',
          { className: 'custext' },
          '\u5728\u7EBF\u5BA2\u670D'
        )
      );
    }
  }]);
  return CustomerMini;
}(_react.Component);

exports.default = CustomerMini;
module.exports = exports['default'];
//# sourceMappingURL=CustomerMini.js.map