'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _bg_BG = require('rc-calendar/lib/locale/bg_BG');

var _bg_BG2 = _interopRequireDefault(_bg_BG);

var _bg_BG3 = require('../../time-picker/locale/bg_BG');

var _bg_BG4 = _interopRequireDefault(_bg_BG3);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// Merge into a locale object
var locale = {
  lang: _extends({
    placeholder: 'Избор на дата',
    rangePlaceholder: ['Начална', 'Крайна']
  }, _bg_BG2.default),
  timePickerLocale: _extends({}, _bg_BG4.default)
};

// All settings at:
// https://github.com/ant-design/ant-design/blob/master/components/date-picker/locale/example.json

exports.default = locale;
//# sourceMappingURL=bg_BG.js.map