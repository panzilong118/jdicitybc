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

var CustomerRenderHtml = function (_Component) {
  (0, _inherits3.default)(CustomerRenderHtml, _Component);

  function CustomerRenderHtml(props, context) {
    (0, _classCallCheck3.default)(this, CustomerRenderHtml);

    var _this = (0, _possibleConstructorReturn3.default)(this, (CustomerRenderHtml.__proto__ || (0, _getPrototypeOf2.default)(CustomerRenderHtml)).call(this, props, context));

    _this.randomId = 'customer_' + String(Math.random());
    return _this;
  }

  (0, _createClass3.default)(CustomerRenderHtml, [{
    key: 'componentWillMount',
    value: function componentWillMount() {}
  }, {
    key: 'componentDidMount',
    value: function componentDidMount() {
      // var dom = document.getElementById(this.randomId);
      // dom.innerHTML += this.props.customerHtmlStr;
      // var newScript = document.createElement('script');
      // newScript.type = 'text/javascript';
      // newScript.innerHTML = this.props.customerHtmlStr;
      // dom.appendChild(newScript);
    }
  }, {
    key: 'render',
    value: function render() {
      return _react2.default.createElement('div', { dangerouslySetInnerHTML: { __html: this.props.customerHtmlStr } });
    }
  }]);
  return CustomerRenderHtml;
}(_react.Component); /**
                      * Created by huangxiao3 on 2018/1/23.
                      */

exports.default = CustomerRenderHtml;
module.exports = exports['default'];
//# sourceMappingURL=CustomerRenderHtml.js.map