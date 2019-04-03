'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _inputNumber = require('jdcloudui/lib/input-number');

var _inputNumber2 = _interopRequireDefault(_inputNumber);

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

require('jdcloudui/lib/input-number/style');

require('jdcloudui/lib/radio/style');

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

require('./style/index.css');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * @file 其他设置--销售方式
 */
var RadioGroup = _radio2.default.Group;

var OtherSaleMode = function (_Component) {
  (0, _inherits3.default)(OtherSaleMode, _Component);

  function OtherSaleMode(props) {
    (0, _classCallCheck3.default)(this, OtherSaleMode);

    var _this = (0, _possibleConstructorReturn3.default)(this, (OtherSaleMode.__proto__ || (0, _getPrototypeOf2.default)(OtherSaleMode)).call(this, props));

    _this.radioChange = function (e) {
      var itemTmplPublishVo = JSON.parse((0, _stringify2.default)(_this.props.itemTmplPublishVo));
      console.log('radio checked', e.target.value);
      itemTmplPublishVo.saleInfoVo.saleType = e.target.value;
      _this.props.updateItemTmplAction(itemTmplPublishVo);
    };

    _this.numberChange = function (value) {
      console.log('changed', value);
      var itemTmplPublishVo = JSON.parse((0, _stringify2.default)(_this.props.itemTmplPublishVo));
      var num = 0;
      if (value) {
        num = value;
      }
      num = parseInt(num);
      if (!num) {
        num = 1;
      }
      itemTmplPublishVo.saleInfoVo.initialMount = num;
      _this.setState({
        initialTime: itemTmplPublishVo.saleInfoVo.initialMount
      });
      _this.props.updateItemTmplAction(itemTmplPublishVo);
    };

    _this.dayChange = function (value) {
      console.log('changed', value);
      var itemTmplPublishVo = JSON.parse((0, _stringify2.default)(_this.props.itemTmplPublishVo));
      var num = 0;
      if (value) {
        num = value;
      }
      num = parseInt(num);
      if (!num) {
        num = 1;
      }
      itemTmplPublishVo.saleInfoVo.deliveryCycle = num;
      _this.setState({
        initialDay: itemTmplPublishVo.saleInfoVo.deliveryCycle
      });
      _this.props.updateItemTmplAction(itemTmplPublishVo);
    };

    _this.state = {
      initialTime: 1,
      initialDay: _this.props.itemTmplPublishVo.saleInfoVo.deliveryCycle
    };
    return _this;
  }

  (0, _createClass3.default)(OtherSaleMode, [{
    key: 'componentWillReceiveProps',
    value: function componentWillReceiveProps(nextProps) {
      console.log(nextProps);
    }

    // 最小起订量


    // 预计出货日

  }, {
    key: 'render',
    value: function render() {

      return _react2.default.createElement(
        'div',
        null,
        _react2.default.createElement(
          'h3',
          { className: 'h3-title' },
          '\u9500\u552E\u65B9\u5F0F'
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
              '\u6700\u5C0F\u8D77\u8BA2\u91CF:'
            ),
            this.props.type == 1 ? _react2.default.createElement(
              'span',
              { className: 'marginL5' },
              '\u6309\u5355\u54C1'
            ) : this.props.type == 2 ? _react2.default.createElement(
              _radio2.default,
              { defaultChecked: true },
              '\u6309\u5355\u54C1'
            ) : _react2.default.createElement(
              RadioGroup,
              {
                value: this.props.itemTmplPublishVo.saleInfoVo.saleType || 1,
                onChange: this.radioChange },
              _react2.default.createElement(
                _radio2.default,
                { value: 1 },
                '\u6309\u5355\u54C1'
              ),
              _react2.default.createElement(
                _radio2.default,
                { value: 2 },
                '\u6309\u603B\u91CF'
              )
            ),
            _react2.default.createElement(
              'span',
              { className: 'line32' },
              '\u8BA2\u8D2D\u5927\u4E8E\u7B49\u4E8E',
              _react2.default.createElement(_inputNumber2.default, { min: 1, className: 'ml10',
                value: this.props.itemTmplPublishVo.saleInfoVo.initialMount || 1,
                onChange: this.numberChange
                //value={this.state.initialTime}
              }),
              '\uFF08\u8BA1\u91CF\u5355\u4F4D\uFF09\u65B9\u53EF\u8BA2\u8D2D'
            )
          ),
          _react2.default.createElement(
            'div',
            null,
            _react2.default.createElement(
              'span',
              { className: 'smallColor smaillest' },
              '\u9884\u8BA1\u51FA\u8D27\u65E5:'
            ),
            _react2.default.createElement(
              'span',
              null,
              this.props.type == 1 ? _react2.default.createElement(_inputNumber2.default, { className: 'ml10',
                value: this.props.itemTmplPublishVo.saleInfoVo.deliveryCycle || 3,
                onChange: this.dayChange
                //value={this.state.initialDay}
              }) : this.props.type == 2 ? _react2.default.createElement(_inputNumber2.default, { className: 'ml10',
                value: this.props.itemTmplPublishVo.saleInfoVo.deliveryCycle || 3,
                onChange: this.dayChange
                //value={this.state.initialDay}
              }) : _react2.default.createElement(_inputNumber2.default, { className: 'ml10',
                value: this.props.itemTmplPublishVo.saleInfoVo.deliveryCycle || 1,
                onChange: this.dayChange
                //value={this.state.initialDay}
              }),
              '\u5929'
            )
          )
        )
      );
    }
  }]);
  return OtherSaleMode;
}(_react.Component);

exports.default = OtherSaleMode;
module.exports = exports['default'];
//# sourceMappingURL=OtherSaleMode.js.map