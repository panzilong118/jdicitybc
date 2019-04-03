'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _ku_IQ = require('rc-calendar/lib/locale/ku_IQ');

var _ku_IQ2 = _interopRequireDefault(_ku_IQ);

var _ku_IQ3 = require('../../time-picker/locale/ku_IQ');

var _ku_IQ4 = _interopRequireDefault(_ku_IQ3);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// Merge into a locale object
var locale = {
  lang: _extends({
    placeholder: 'Dîrok hilbijêre',
    rangePlaceholder: ['Dîroka destpêkê', 'Dîroka dawîn']
  }, _ku_IQ2.default),
  timePickerLocale: _extends({}, _ku_IQ4.default)
};

// All settings at:
// https://github.com/ant-design/ant-design/blob/master/components/date-picker/locale/example.json
exports.default = locale;
//# sourceMappingURL=ku_IQ.js.map