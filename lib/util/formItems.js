'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _input = require('antd/lib/input');

var _input2 = _interopRequireDefault(_input);

var _form = require('antd/lib/form');

var _form2 = _interopRequireDefault(_form);

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

exports.getInputFormItem = getInputFormItem;
exports.getFormItemWraper = getFormItemWraper;

require('antd/lib/input/style');

require('antd/lib/form/style');

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var FormItem = _form2.default.Item;
/**
 * usage: getInputFormItem.bind(this, ...)
 * @param {*} label
 * @param {*} name
 * @param {*} message
 * @param {*} placehoder
 * @param {*} rule
 */
function getInputFormItem(_ref) {
  var label = _ref.label,
      name = _ref.name,
      _ref$messageInfo = _ref.messageInfo,
      messageInfo = _ref$messageInfo === undefined ? '请输入' : _ref$messageInfo,
      placehoder = _ref.placehoder,
      rule = _ref.rule,
      formItemLayout = _ref.formItemLayout,
      initialValue = _ref.initialValue,
      className = _ref.className;
  var getFieldDecorator = this.props.form.getFieldDecorator;

  var options = {
    rules: [{
      required: true,
      message: messageInfo + ' ' + label
    }]
  };
  if (rule) options.rules.push(rule);
  if (initialValue) options.initialValue = initialValue;

  return _react2.default.createElement(
    FormItem,
    _extends({
      hasFeedback: true,
      className: className,
      label: label
    }, formItemLayout),
    getFieldDecorator(name, options)(_react2.default.createElement(_input2.default, { placeholder: placehoder }))
  );
}

function getFormItemWraper() {
  var opt = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  var decorator = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  var getFieldDecorator = this.props.form.getFieldDecorator;

  return function (label, name, render) {
    return _react2.default.createElement(
      FormItem,
      _extends({
        hasFeedback: true,
        label: label
      }, opt),
      getFieldDecorator(name, _extends({
        rules: [{
          required: true,
          message: label + '\u662F\u5FC5\u586B\u9879'
        }]
      }, decorator))(render())
    );
  };
}
//# sourceMappingURL=formItems.js.map