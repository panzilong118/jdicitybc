'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _datePicker = require('jdcloudui/lib/date-picker');

var _datePicker2 = _interopRequireDefault(_datePicker);

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

require('jdcloudui/lib/date-picker/style');

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _moment = require('moment');

var _moment2 = _interopRequireDefault(_moment);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
* @author RongXiaowei
* @param value             传入的value值         type:[object Object] ({startTime，endTime})  默认为null
* @param space             间隔符                type:[object String] 默认 "至"
* @param className         className            type:[object String] 默认为不加
* @param format            格式化时间            type:[object String] 默认 "YYYY-MM-DD"
* @date 2017-12-13
* @description RangePicker 开始结束时间组件
*/

/**********引入系统组件***********/
var JcRangePicker = function (_Component) {
  (0, _inherits3.default)(JcRangePicker, _Component);

  function JcRangePicker(props, context) {
    (0, _classCallCheck3.default)(this, JcRangePicker);

    var _this = (0, _possibleConstructorReturn3.default)(this, (JcRangePicker.__proto__ || (0, _getPrototypeOf2.default)(JcRangePicker)).call(this, props, context));

    _this.disabledStartDate = function (startValue) {
      var endValue = _this.state.endTime ? (0, _moment2.default)(_this.state.endTime) : null;
      if (!startValue || !endValue) {
        return false;
      }
      return startValue.valueOf() > endValue.valueOf();
    };

    _this.disabledEndDate = function (endValue) {
      var startValue = _this.state.startTime ? (0, _moment2.default)(_this.state.startTime) : null;
      if (!endValue || !startValue) {
        return false;
      }
      return endValue.valueOf() <= startValue.valueOf();
    };

    _this.onStartChange = function (value) {
      _this.setState({ "startTime": value });
      _this.StateTime['startTime'] = value ? (0, _moment2.default)(value).format(_this.props.format || "YYYY-MM-DD") : null;
      _this.props.onChange(_this.StateTime);
    };

    _this.onEndChange = function (value) {
      _this.setState({ "endTime": value });
      _this.StateTime['endTime'] = value ? (0, _moment2.default)(value).format(_this.props.format || "YYYY-MM-DD") : null;
      _this.props.onChange(_this.StateTime);
    };

    _this.handleStartOpenChange = function (open) {
      if (!open) {
        _this.setState({ endOpen: true });
      }
    };

    _this.handleEndOpenChange = function (open) {
      _this.setState({ endOpen: open });
    };

    _this.state = {
      startTime: _this.props.value && _this.props.value.startTime || null,
      endTime: _this.props.value && _this.props.value.endTime || null,
      endOpen: false
      //初始值
    };_this.initValue = JSON.parse((0, _stringify2.default)(_this.props.value));
    _this.StateTime = JSON.parse((0, _stringify2.default)(_this.props.value)) || {};
    return _this;
  }

  (0, _createClass3.default)(JcRangePicker, [{
    key: 'componentWillReceiveProps',
    value: function componentWillReceiveProps(nexProps) {
      if (!nexProps.value && (this.state.startTime || this.state.endTime) || nexProps.value && (0, _stringify2.default)(nexProps.value) === (0, _stringify2.default)(this.initValue)) {
        //传入的值为空时清空数据
        if (!nexProps.value) {
          this.setState({ "startTime": null, "endTime": null });
        } else {
          this.setState({ "startTime": this.initValue.startTime, "endTime": this.initValue.endTime });
        }
      }
    }
    /**
     * @description 判断起始时间是否大于结束时间
     */

    /**
     * @description 判断结束时间是否大于起始时间
     */

    /**
    * @description 起始时间赋值
    */

    /**
    * @description 结束时间赋值
    */

    /**
    * @description 开启禁止标志
    */

    /**
    * @description 关闭禁止标志
    */

  }, {
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'div',
        { className: this.props.className || "" },
        _react2.default.createElement(_datePicker2.default, {
          size: 'large',
          disabledDate: this.disabledStartDate,
          format: this.props.format || "YYYY-MM-DD",
          placeholder: '\u5F00\u59CB\u65F6\u95F4',
          onChange: this.onStartChange,
          onOpenChange: this.handleStartOpenChange,
          value: this.state.startTime ? (0, _moment2.default)(this.state.startTime, this.props.format || "YYYY-MM-DD") : null
        }),
        '\xA0\xA0',
        _react2.default.createElement(
          'span',
          { className: 'date-picker-space' },
          this.props.space || "至"
        ),
        '\xA0\xA0',
        _react2.default.createElement(_datePicker2.default, {
          size: 'large',
          disabledDate: this.disabledEndDate,
          format: this.props.format || "YYYY-MM-DD",
          placeholder: '\u7ED3\u675F\u65F6\u95F4',
          onChange: this.onEndChange,
          open: this.state.endOpen,
          onOpenChange: this.handleEndOpenChange,
          value: this.state.endTime ? (0, _moment2.default)(this.state.endTime, this.props.format || "YYYY-MM-DD") : null
        })
      );
    }
  }]);
  return JcRangePicker;
}(_react.Component);

exports.default = JcRangePicker;
module.exports = exports['default'];
//# sourceMappingURL=JcRangePicker.js.map