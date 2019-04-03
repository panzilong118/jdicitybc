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

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var RadioGroup = _radio2.default.Group; /**
                                         * @file 发布商品-供货信息Tab组件
                                         */

var ReleaseSupplyInfo = function (_Component) {
  (0, _inherits3.default)(ReleaseSupplyInfo, _Component);

  function ReleaseSupplyInfo(props) {
    (0, _classCallCheck3.default)(this, ReleaseSupplyInfo);

    var _this = (0, _possibleConstructorReturn3.default)(this, (ReleaseSupplyInfo.__proto__ || (0, _getPrototypeOf2.default)(ReleaseSupplyInfo)).call(this, props));

    _this.radioChange = function (e) {
      console.log(e.target.value);
      var itemTmplPublishVo = JSON.parse((0, _stringify2.default)(_this.props.itemTmplPublishVo));
      itemTmplPublishVo.itemPerfectVo.salePriceType = e.target.value;
      _this.props.updateItemTmplAction(itemTmplPublishVo);
    };

    return _this;
  }

  (0, _createClass3.default)(ReleaseSupplyInfo, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'div',
        null,
        _react2.default.createElement(
          'div',
          { className: 'rHeaderTtle' },
          _react2.default.createElement(
            'h2',
            null,
            '\u9500\u552E\u65B9\u5F0F'
          )
        ),
        _react2.default.createElement(
          'div',
          { className: 'priceLeft' },
          _react2.default.createElement(
            RadioGroup,
            {
              value: this.props.itemTmplPublishVo.itemPerfectVo.salePriceType || 1,
              onChange: this.radioChange },
            _react2.default.createElement(
              _radio2.default,
              { value: 1 },
              '\u6B63\u5E38\u9500\u552E'
            ),
            _react2.default.createElement(
              _radio2.default,
              { value: 2 },
              '\u8BE2\u4EF7\u6A21\u5F0F'
            )
          )
        )
      );
    }
  }]);
  return ReleaseSupplyInfo;
}(_react.Component);

exports.default = ReleaseSupplyInfo;
module.exports = exports['default'];
//# sourceMappingURL=PriceSaleMode.js.map