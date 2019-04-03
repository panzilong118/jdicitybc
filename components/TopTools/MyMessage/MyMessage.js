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

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/* ***********  自定义组件  ************ */
var Message = function (_Component) {
  (0, _inherits3.default)(Message, _Component);

  function Message(props) {
    (0, _classCallCheck3.default)(this, Message);
    return (0, _possibleConstructorReturn3.default)(this, (Message.__proto__ || (0, _getPrototypeOf2.default)(Message)).call(this, props));
  }

  (0, _createClass3.default)(Message, [{
    key: 'render',
    value: function render() {
      var urlPath = '';
      if (this.props.domain) {
        urlPath = this.props.domain.indexOf('buyer.') !== -1 ? 'buyer' : 'shop';
      } else {
        urlPath = '';
      }
      return _react2.default.createElement(
        'a',
        {
          href: '//' + this.props.domain + '/' + urlPath + '-view/message/message-center',
          className: 'signName' },
        '\u6D88\u606F'
      );
    }
  }]);
  return Message;
}(_react.Component); /* *************************
                      * @author: FengYan
                      * @update: 20180206
                      * @description:消息
                      * ************************/

/* ***********  基础组件  ************ */


exports.default = Message;
module.exports = exports['default'];
//# sourceMappingURL=MyMessage.js.map