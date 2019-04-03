'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _is_IS = require('rc-calendar/lib/locale/is_IS');

var _is_IS2 = _interopRequireDefault(_is_IS);

var _is_IS3 = require('../../time-picker/locale/is_IS');

var _is_IS4 = _interopRequireDefault(_is_IS3);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// Merge into a locale object
var locale = {
  lang: _extends({
    placeholder: 'Veldu dag',
    rangePlaceholder: ['Upphafsdagur', 'Lokadagur']
  }, _is_IS2.default),
  timePickerLocale: _extends({}, _is_IS4.default)
};

// All settings at:
// https://github.com/ant-design/ant-design/blob/master/components/date-picker/locale/example.json

exports.default = locale;
//# sourceMappingURL=is_IS.js.map