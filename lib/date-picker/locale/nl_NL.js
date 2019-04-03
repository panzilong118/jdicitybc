'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _nl_NL = require('rc-calendar/lib/locale/nl_NL');

var _nl_NL2 = _interopRequireDefault(_nl_NL);

var _nl_NL3 = require('../../time-picker/locale/nl_NL');

var _nl_NL4 = _interopRequireDefault(_nl_NL3);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// Merge into a locale object
var locale = {
  lang: _extends({
    placeholder: 'Selecteer datum',
    rangePlaceholder: ['Begin datum', 'Eind datum']
  }, _nl_NL2.default),
  timePickerLocale: _extends({}, _nl_NL4.default)
};

// All settings at:
// https://github.com/ant-design/ant-design/issues/424

exports.default = locale;
//# sourceMappingURL=nl_NL.js.map