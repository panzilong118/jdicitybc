'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _extends2 = require('babel-runtime/helpers/extends');

var _extends3 = _interopRequireDefault(_extends2);

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

var _components = require('jdcloudecc/components');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/* *********************************************
* @author: liupeng
* @creatdDate: 20171207
* @update: 20171207
* @description: 价格组件
* *********************************************/
/* *********************************************
* 组件说明：
* @param  value    {Number}  传入要展示的数字                               默认 0.00
* @param  warning  {Boolean} 字体颜色是否为警告色                           默认 false
* @param  through  {Boolean} 数字是否划横线                                 默认 false
* @param  size     {String } 字体大小   middle 中等   large 偏大            默认 12px
* @param  signType {String } 判断正负号方式 coupon { > 0 为 - ; < 0 为 + }
                                            adjust { < 0 为 - ; > 0 为 + }  默认 绝对值
*
* *********************************************/
var Price = function (_Component) {
  (0, _inherits3.default)(Price, _Component);

  function Price(props, context) {
    (0, _classCallCheck3.default)(this, Price);
    return (0, _possibleConstructorReturn3.default)(this, (Price.__proto__ || (0, _getPrototypeOf2.default)(Price)).call(this, props, context));
  }

  (0, _createClass3.default)(Price, [{
    key: 'render',
    value: function render() {

      var styles = {
        color: this.props.warning ? '#e4393c' : '#333'
      };
      var styles2 = {
        textDecoration: this.props.through ? 'line-through' : 'none'
      };
      return _react2.default.createElement(
        'span',
        { style: (0, _extends3.default)({}, styles) },
        this.props.signType == 'coupon' && this.props.value ? _react2.default.createElement(
          'span',
          null,
          this.props.value > 0 ? '-' : '+'
        ) : '',
        this.props.signType == 'adjust' && this.props.value ? _react2.default.createElement(
          'span',
          null,
          this.props.value < 0 ? '-' : '+'
        ) : '',
        !this.props.signType && this.props.value ? _react2.default.createElement(
          'span',
          null,
          this.props.value < 0 ? '-' : ''
        ) : '',
        _react2.default.createElement(
          'span',
          null,
          '\uFFE5'
        ),
        this.props.value ? _react2.default.createElement(
          'span',
          { style: (0, _extends3.default)({}, styles2) },
          _react2.default.createElement(_components.MoneyConvert, { value: Math.abs(this.props.value) })
        ) : _react2.default.createElement(
          'span',
          { style: (0, _extends3.default)({}, styles2) },
          '0.00'
        )
      );
    }
  }]);
  return Price;
}(_react.Component);
//价格保留小数点后两位组件


exports.default = Price;
module.exports = exports['default'];
//# sourceMappingURL=Price.js.map