'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _fi_FI = require('rc-calendar/lib/locale/fi_FI');

var _fi_FI2 = _interopRequireDefault(_fi_FI);

var _fi_FI3 = require('../../time-picker/locale/fi_FI');

var _fi_FI4 = _interopRequireDefault(_fi_FI3);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// Merge into a locale object
var locale = {
  lang: _extends({
    placeholder: 'Valitse päivä',
    rangePlaceholder: ['Alku päivä', 'Loppu päivä']
  }, _fi_FI2.default),
  timePickerLocale: _extends({}, _fi_FI4.default)
};

// All settings at:
// https://github.com/ant-design/ant-design/blob/master/components/date-picker/locale/example.json

exports.default = locale;
//# sourceMappingURL=fi_FI.js.map