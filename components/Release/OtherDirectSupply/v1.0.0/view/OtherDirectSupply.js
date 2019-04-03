'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _stringify = require('babel-runtime/core-js/json/stringify');

var _stringify2 = _interopRequireDefault(_stringify);

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

var _radio = require('jdcloudui/lib/radio');

var _radio2 = _interopRequireDefault(_radio);

require('jdcloudui/lib/radio/style');

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

require('./style/index.css');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * @file 其他设置--餐厅直供
 */
var RadioGroup = _radio2.default.Group;

var OtherDirectSupply = function (_Component) {
  (0, _inherits3.default)(OtherDirectSupply, _Component);

  function OtherDirectSupply(props) {
    (0, _classCallCheck3.default)(this, OtherDirectSupply);

    var _this = (0, _possibleConstructorReturn3.default)(this, (OtherDirectSupply.__proto__ || (0, _getPrototypeOf2.default)(OtherDirectSupply)).call(this, props));

    _this.handleSupplyChange = function (e) {
      console.log('direct supply', e.target.value);
      var itemTmplPublishVo = JSON.parse((0, _stringify2.default)(_this.props.itemTmplPublishVo));
      itemTmplPublishVo.couponSupportVo.directSupplySupport = e.target.value;
      _this.props.updateItemTmplAction(itemTmplPublishVo);
    };

    return _this;
  }

  (0, _createClass3.default)(OtherDirectSupply, [{
    key: 'componentWillReceiveProps',
    value: function componentWillReceiveProps(nextProps) {
      console.log(nextProps);
    }
  }, {
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'div',
        null,
        _react2.default.createElement(
          'h3',
          { className: 'h3-title' },
          '\u9910\u5385\u76F4\u4F9B'
        ),
        _react2.default.createElement(
          'div',
          null,
          _react2.default.createElement(
            'div',
            { className: 'otherMt202 mlgroup' },
            _react2.default.createElement(
              'span',
              { className: 'smallColor smaillest' },
              '\u662F\u5426\u652F\u6301\u76F4\u4F9B:'
            ),
            _react2.default.createElement(
              RadioGroup,
              {
                value: this.props.itemTmplPublishVo.couponSupportVo ? this.props.itemTmplPublishVo.couponSupportVo.directSupplySupport : null,
                onChange: this.handleSupplyChange },
              _react2.default.createElement(
                _radio2.default,
                { value: 1 },
                '\u652F\u6301'
              ),
              _react2.default.createElement(
                _radio2.default,
                { value: 0 },
                '\u4E0D\u652F\u6301'
              )
            )
          )
        )
      );
    }
  }]);
  return OtherDirectSupply;
}(_react.Component);

exports.default = OtherDirectSupply;
module.exports = exports['default'];
//# sourceMappingURL=OtherDirectSupply.js.map