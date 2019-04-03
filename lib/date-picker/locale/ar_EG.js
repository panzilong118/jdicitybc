'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _ar_EG = require('rc-calendar/lib/locale/ar_EG');

var _ar_EG2 = _interopRequireDefault(_ar_EG);

var _ar_EG3 = require('../../time-picker/locale/ar_EG');

var _ar_EG4 = _interopRequireDefault(_ar_EG3);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// Merge into a locale object
var locale = {
  lang: _extends({
    placeholder: 'اختيار التاريخ',
    rangePlaceholder: ['البداية', 'النهاية']
  }, _ar_EG2.default),
  timePickerLocale: _extends({}, _ar_EG4.default)
};

// All settings at:
// https://github.com/ant-design/ant-design/blob/master/components/date-picker/locale/example.json

exports.default = locale;
//# sourceMappingURL=ar_EG.js.map