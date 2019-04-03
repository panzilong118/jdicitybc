'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _pt_BR = require('rc-calendar/lib/locale/pt_BR');

var _pt_BR2 = _interopRequireDefault(_pt_BR);

var _pt_BR3 = require('../../time-picker/locale/pt_BR');

var _pt_BR4 = _interopRequireDefault(_pt_BR3);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// Merge into a locale object
var locale = {
  lang: _extends({
    placeholder: 'Selecionar data',
    rangePlaceholder: ['Data de início', 'Data de fim']
  }, _pt_BR2.default),
  timePickerLocale: _extends({}, _pt_BR4.default)
};

// All settings at:
// https://github.com/ant-design/ant-design/blob/master/components/date-picker/locale/example.json

exports.default = locale;
//# sourceMappingURL=pt_BR.js.map