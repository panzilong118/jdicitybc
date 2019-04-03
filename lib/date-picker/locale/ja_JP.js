'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _ja_JP = require('rc-calendar/lib/locale/ja_JP');

var _ja_JP2 = _interopRequireDefault(_ja_JP);

var _ja_JP3 = require('../../time-picker/locale/ja_JP');

var _ja_JP4 = _interopRequireDefault(_ja_JP3);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var locale = {
  lang: _extends({
    placeholder: '日付を選択',
    rangePlaceholder: ['開始日付', '終了日付']
  }, _ja_JP2.default),
  timePickerLocale: _extends({}, _ja_JP4.default)
};

// All settings at:
// https://github.com/ant-design/ant-design/blob/master/components/date-picker/locale/example.json

exports.default = locale;
//# sourceMappingURL=ja_JP.js.map