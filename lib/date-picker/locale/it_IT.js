'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _it_IT = require('rc-calendar/lib/locale/it_IT');

var _it_IT2 = _interopRequireDefault(_it_IT);

var _it_IT3 = require('../../time-picker/locale/it_IT');

var _it_IT4 = _interopRequireDefault(_it_IT3);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// Merge into a locale object
var locale = {
  lang: _extends({
    placeholder: 'Selezionare la data',
    rangePlaceholder: ['Data d\'inizio', 'Data di fine']
  }, _it_IT2.default),
  timePickerLocale: _extends({}, _it_IT4.default)
};

// All settings at:
// https://github.com/ant-design/ant-design/issues/424

exports.default = locale;
//# sourceMappingURL=it_IT.js.map