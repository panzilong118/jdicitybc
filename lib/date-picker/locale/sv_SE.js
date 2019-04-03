'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _sv_SE = require('rc-calendar/lib/locale/sv_SE');

var _sv_SE2 = _interopRequireDefault(_sv_SE);

var _sv_SE3 = require('../../time-picker/locale/sv_SE');

var _sv_SE4 = _interopRequireDefault(_sv_SE3);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var locale = {
  lang: _extends({
    placeholder: 'Välj datum',
    rangePlaceholder: ['Startdatum', 'Slutdatum']
  }, _sv_SE2.default),
  timePickerLocale: _extends({}, _sv_SE4.default)
};

// All settings at:
// https://github.com/ant-design/ant-design/blob/master/components/date-picker/locale/example.json

exports.default = locale;
//# sourceMappingURL=sv_SE.js.map