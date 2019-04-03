'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _et_EE = require('rc-calendar/lib/locale/et_EE');

var _et_EE2 = _interopRequireDefault(_et_EE);

var _et_EE3 = require('../../time-picker/locale/et_EE');

var _et_EE4 = _interopRequireDefault(_et_EE3);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// 统一合并为完整的 Locale
var locale = {
  lang: _extends({
    placeholder: 'Vali kuupäev',
    rangePlaceholder: ['Algus kuupäev', 'Lõpu kuupäev']
  }, _et_EE2.default),
  timePickerLocale: _extends({}, _et_EE4.default)
};

// All settings at:
// https://github.com/ant-design/ant-design/blob/master/components/date-picker/locale/example.json

exports.default = locale;
//# sourceMappingURL=et_EE.js.map