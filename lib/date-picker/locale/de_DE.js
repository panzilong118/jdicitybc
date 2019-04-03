'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _de_DE = require('rc-calendar/lib/locale/de_DE');

var _de_DE2 = _interopRequireDefault(_de_DE);

var _de_DE3 = require('../../time-picker/locale/de_DE');

var _de_DE4 = _interopRequireDefault(_de_DE3);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// Merge into a locale object
var locale = {
  lang: _extends({
    placeholder: 'Datum auswählen',
    rangePlaceholder: ['Startdatum', 'Enddatum']
  }, _de_DE2.default),
  timePickerLocale: _extends({}, _de_DE4.default)
};

// All settings at:
// https://github.com/ant-design/ant-design/issues/424

exports.default = locale;
//# sourceMappingURL=de_DE.js.map