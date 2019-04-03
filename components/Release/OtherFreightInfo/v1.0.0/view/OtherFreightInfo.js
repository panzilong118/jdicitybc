'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _checkbox = require('jdcloudui/lib/checkbox');

var _checkbox2 = _interopRequireDefault(_checkbox);

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

require('jdcloudui/lib/checkbox/style');

require('jdcloudui/lib/radio/style');

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

require('./style/index.css');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * @file 其他设置--运费信息
 */
var RadioGroup = _radio2.default.Group;

var OtherFreightInfo = function (_Component) {
  (0, _inherits3.default)(OtherFreightInfo, _Component);

  function OtherFreightInfo(props) {
    (0, _classCallCheck3.default)(this, OtherFreightInfo);

    var _this = (0, _possibleConstructorReturn3.default)(this, (OtherFreightInfo.__proto__ || (0, _getPrototypeOf2.default)(OtherFreightInfo)).call(this, props));

    _this.radioChange = function (e) {
      console.log(e.target.value);
      var itemTmplPublishVo = JSON.parse((0, _stringify2.default)(_this.props.itemTmplPublishVo));
      itemTmplPublishVo.deliveryInfoVo.deliveryType = e.target.value;
      _this.props.updateItemTmplAction(itemTmplPublishVo);
    };

    _this.onChange = function (e) {
      console.log(e.target.checked);
      var itemTmplPublishVo = JSON.parse((0, _stringify2.default)(_this.props.itemTmplPublishVo));
      if (!e.target.checked) {
        itemTmplPublishVo.deliveryInfoVo.homeDelivery = 0;
      } else {
        itemTmplPublishVo.deliveryInfoVo.homeDelivery = 1;
      }

      _this.props.updateItemTmplAction(itemTmplPublishVo);
    };

    return _this;
  }

  (0, _createClass3.default)(OtherFreightInfo, [{
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
          '\u8FD0\u8D39\u4FE1\u606F'
        ),
        _react2.default.createElement(
          'div',
          null,
          _react2.default.createElement(
            RadioGroup,
            {
              value: this.props.itemTmplPublishVo.deliveryInfoVo.deliveryType || 1,
              onChange: this.radioChange },
            _react2.default.createElement(
              _radio2.default,
              { className: 'otherMt202', value: 1 },
              '\u5546\u54C1\u4EF7\u683C\u5DF2\u5305\u542B\u8FD0\u8D39',
              _react2.default.createElement(
                'span',
                { className: 'smallColor' },
                '\uFF08\u9009\u62E9\u6B64\u9879\u65F6\u8BF7\u8BB0\u5F97\u5C06\u8FD0\u8D39\u5206\u644A\u81F3\u5546\u54C1\u5355\u4EF7\u91CC)'
              )
            ),
            _react2.default.createElement('br', null),
            _react2.default.createElement(
              _radio2.default,
              { className: 'otherMt202', value: 2 },
              '\u9009\u62E9\u5408\u9002\u7684\u7269\u6D41\u516C\u53F8\u8FD0\u8F93\uFF0C\u8FD0\u8D39\u5230\u4ED8',
              _react2.default.createElement(
                'span',
                { className: 'smallColor' },
                '\uFF08\u4E0D\u9700\u8981\u5728\u4EA7\u54C1\u5355\u4EF7\u91CC\u52A0\u8FD0\u8D39\uFF0C\u4E70\u5BB6\u6839\u636E\u5B9E\u9645\u8D39\u7528\u652F\u4ED8\uFF09'
              )
            ),
            _react2.default.createElement('br', null)
          ),
          _react2.default.createElement('br', null),
          _react2.default.createElement(
            _checkbox2.default,
            {
              defaultChecked: Boolean(this.props.itemTmplPublishVo.deliveryInfoVo.homeDelivery),
              className: 'otherMt202', onChange: this.onChange },
            '\u540C\u57CE\u53EF\u9001\u8D27\u4E0A\u95E8'
          )
        )
      );
    }
  }]);
  return OtherFreightInfo;
}(_react.Component);

exports.default = OtherFreightInfo;
module.exports = exports['default'];
//# sourceMappingURL=OtherFreightInfo.js.map