'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _sk_SK = require('rc-calendar/lib/locale/sk_SK');

var _sk_SK2 = _interopRequireDefault(_sk_SK);

var _sk_SK3 = require('../../time-picker/locale/sk_SK');

var _sk_SK4 = _interopRequireDefault(_sk_SK3);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// 统一合并为完整的 Locale
var locale = {
  lang: _extends({
    placeholder: 'Vybrať dátum',
    rangePlaceholder: ['Od', 'Do']
  }, _sk_SK2.default),
  timePickerLocale: _extends({}, _sk_SK4.default)
};

// All settings at:
// https://github.com/ant-design/ant-design/blob/master/components/date-picker/locale/example.json

exports.default = locale;
//# sourceMappingURL=sk_SK.js.map