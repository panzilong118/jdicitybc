'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _cs_CZ = require('rc-calendar/lib/locale/cs_CZ');

var _cs_CZ2 = _interopRequireDefault(_cs_CZ);

var _cs_CZ3 = require('../../time-picker/locale/cs_CZ');

var _cs_CZ4 = _interopRequireDefault(_cs_CZ3);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// Merge into a locale object
var locale = {
  lang: _extends({
    placeholder: 'Vybrat datum',
    rangePlaceholder: ['Od', 'Do']
  }, _cs_CZ2.default),
  timePickerLocale: _extends({}, _cs_CZ4.default)
};

// All settings at:
// https://github.com/ant-design/ant-design/blob/master/components/date-picker/locale/example.json

exports.default = locale;
//# sourceMappingURL=cs_CZ.js.map