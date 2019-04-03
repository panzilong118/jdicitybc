'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _fr_FR = require('rc-calendar/lib/locale/fr_FR');

var _fr_FR2 = _interopRequireDefault(_fr_FR);

var _fr_FR3 = require('../../time-picker/locale/fr_FR');

var _fr_FR4 = _interopRequireDefault(_fr_FR3);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// Merge into a locale object
var locale = {
  lang: _extends({
    placeholder: 'Sélectionner une date',
    rangePlaceholder: ['Date de début', 'Date de fin']
  }, _fr_FR2.default),
  timePickerLocale: _extends({}, _fr_FR4.default)
};

// All settings at:
// https://github.com/ant-design/ant-design/issues/424

exports.default = locale;
//# sourceMappingURL=fr_FR.js.map