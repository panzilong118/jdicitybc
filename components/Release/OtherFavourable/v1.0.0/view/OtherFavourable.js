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

var _checkbox = require('jdcloudui/lib/checkbox');

var _checkbox2 = _interopRequireDefault(_checkbox);

var _radio = require('jdcloudui/lib/radio');

var _radio2 = _interopRequireDefault(_radio);

require('jdcloudui/lib/checkbox/style');

require('jdcloudui/lib/radio/style');

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

require('./style/index.css');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * @file 其他设置--优惠支持
 */
var RadioGroup = _radio2.default.Group;
var CheckboxGroup = _checkbox2.default.Group;

var OtherFavourable = function (_Component) {
  (0, _inherits3.default)(OtherFavourable, _Component);

  function OtherFavourable(props) {
    (0, _classCallCheck3.default)(this, OtherFavourable);

    var _this = (0, _possibleConstructorReturn3.default)(this, (OtherFavourable.__proto__ || (0, _getPrototypeOf2.default)(OtherFavourable)).call(this, props));

    _this.cashChange = function (e) {
      console.log('checked = ', e.target.checked);
      var itemTmplPublishVo = JSON.parse((0, _stringify2.default)(_this.props.itemTmplPublishVo));
      if (e.target.checked) {
        itemTmplPublishVo.couponSupportVo.cashCouponSupport = 1;
      } else {
        itemTmplPublishVo.couponSupportVo.cashCouponSupport = 0;
      };

      _this.props.updateItemTmplAction(itemTmplPublishVo);
    };

    _this.meetChange = function (e) {
      console.log('checked = ', e.target.checked);
      var itemTmplPublishVo = JSON.parse((0, _stringify2.default)(_this.props.itemTmplPublishVo));
      if (e.target.checked) {
        itemTmplPublishVo.couponSupportVo.meetCouponSupport = 1;
      } else {
        itemTmplPublishVo.couponSupportVo.meetCouponSupport = 0;
      };

      _this.props.updateItemTmplAction(itemTmplPublishVo);
    };

    _this.vipChange = function (e) {
      console.log('radio checked', e.target.value);
      var itemTmplPublishVo = JSON.parse((0, _stringify2.default)(_this.props.itemTmplPublishVo));
      itemTmplPublishVo.couponSupportVo.vipDiscountSupport = e.target.value;
      _this.props.updateItemTmplAction(itemTmplPublishVo);
    };

    return _this;
  }

  (0, _createClass3.default)(OtherFavourable, [{
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
          '\u4F18\u60E0\u652F\u6301'
        ),
        _react2.default.createElement(
          'div',
          null,
          _react2.default.createElement(
            'div',
            { className: 'otherMt202' },
            _react2.default.createElement(
              'span',
              { className: 'smallColor smaillest' },
              '\u53EF\u7528\u4F18\u60E0\u5238:'
            ),
            _react2.default.createElement(
              _checkbox2.default,
              {
                defaultChecked: this.props.itemTmplPublishVo.couponSupportVo ? Boolean(this.props.itemTmplPublishVo.couponSupportVo.cashCouponSupport) : null,
                onChange: this.cashChange },
              '\u4EE3\u91D1\u5238'
            ),
            _react2.default.createElement(
              _checkbox2.default,
              {
                defaultChecked: this.props.itemTmplPublishVo.couponSupportVo ? Boolean(this.props.itemTmplPublishVo.couponSupportVo.meetCouponSupport) : null,
                onChange: this.meetChange },
              '\u6EE1\u51CF\u5238'
            )
          ),
          _react2.default.createElement(
            'div',
            { className: 'otherMt202 mlgroup' },
            _react2.default.createElement(
              'span',
              { className: 'smallColor smaillest' },
              '\u4F1A\u5458\u6298\u6263:'
            ),
            _react2.default.createElement(
              RadioGroup,
              {
                value: this.props.itemTmplPublishVo.couponSupportVo ? this.props.itemTmplPublishVo.couponSupportVo.vipDiscountSupport : null,
                onChange: this.vipChange },
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
  return OtherFavourable;
}(_react.Component);

exports.default = OtherFavourable;
module.exports = exports['default'];
//# sourceMappingURL=OtherFavourable.js.map