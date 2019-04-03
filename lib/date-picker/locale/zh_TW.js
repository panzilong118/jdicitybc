'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _zh_TW = require('rc-calendar/lib/locale/zh_TW');

var _zh_TW2 = _interopRequireDefault(_zh_TW);

var _zh_TW3 = require('../../time-picker/locale/zh_TW');

var _zh_TW4 = _interopRequireDefault(_zh_TW3);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var locale = {
  lang: _extends({
    placeholder: '請選擇日期',
    rangePlaceholder: ['開始日期', '結束日期']
  }, _zh_TW2.default),
  timePickerLocale: _extends({}, _zh_TW4.default)
};

locale.lang.ok = '確 定';

// All settings at:
// https://github.com/ant-design/ant-design/blob/master/components/date-picker/locale/example.json

exports.default = locale;
//# sourceMappingURL=zh_TW.js.map