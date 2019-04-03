'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _es_ES = require('rc-calendar/lib/locale/es_ES');

var _es_ES2 = _interopRequireDefault(_es_ES);

var _es_ES3 = require('../../time-picker/locale/es_ES');

var _es_ES4 = _interopRequireDefault(_es_ES3);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// Merge into a locale object
var locale = {
  lang: _extends({
    placeholder: 'Seleccionar fecha',
    rangePlaceholder: ['Fecha inicial', 'Fecha final']
  }, _es_ES2.default),
  timePickerLocale: _extends({}, _es_ES4.default)
};

// All settings at:
// https://github.com/ant-design/ant-design/blob/master/components/date-picker/locale/example.json

exports.default = locale;
//# sourceMappingURL=es_ES.js.map