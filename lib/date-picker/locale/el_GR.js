'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _el_GR = require('rc-calendar/lib/locale/el_GR');

var _el_GR2 = _interopRequireDefault(_el_GR);

var _el_GR3 = require('../../time-picker/locale/el_GR');

var _el_GR4 = _interopRequireDefault(_el_GR3);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// Merge into a locale object
var locale = {
  lang: _extends({
    placeholder: 'Επιλέξτε ημερομηνία',
    rangePlaceholder: ['Αρχική ημερομηνία', 'Τελική ημερομηνία']
  }, _el_GR2.default),
  timePickerLocale: _extends({}, _el_GR4.default)
};

// All settings at:
// https://github.com/ant-design/ant-design/issues/424

exports.default = locale;
//# sourceMappingURL=el_GR.js.map