'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _fr_BE = require('rc-calendar/lib/locale/fr_BE');

var _fr_BE2 = _interopRequireDefault(_fr_BE);

var _fr_BE3 = require('../../time-picker/locale/fr_BE');

var _fr_BE4 = _interopRequireDefault(_fr_BE3);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// Merge into a locale object
var locale = {
  lang: _extends({
    placeholder: 'Sélectionner une date',
    rangePlaceholder: ['Date de début', 'Date de fin']
  }, _fr_BE2.default),
  timePickerLocale: _extends({}, _fr_BE4.default)
};

// All settings at:
// https://github.com/ant-design/ant-design/issues/424

exports.default = locale;
//# sourceMappingURL=fr_BE.js.map