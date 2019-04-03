'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _pl_PL = require('rc-calendar/lib/locale/pl_PL');

var _pl_PL2 = _interopRequireDefault(_pl_PL);

var _pl_PL3 = require('../../time-picker/locale/pl_PL');

var _pl_PL4 = _interopRequireDefault(_pl_PL3);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// Merge into a locale object
var locale = {
  lang: _extends({
    placeholder: 'Wybierz datę',
    rangePlaceholder: ['Data początkowa', 'Data końcowa']
  }, _pl_PL2.default),
  timePickerLocale: _extends({}, _pl_PL4.default)
};

// All settings at:
// https://github.com/ant-design/ant-design/blob/master/components/date-picker/locale/example.json

exports.default = locale;
//# sourceMappingURL=pl_PL.js.map