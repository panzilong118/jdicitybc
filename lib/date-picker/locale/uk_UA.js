'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _uk_UA = require('rc-calendar/lib/locale/uk_UA');

var _uk_UA2 = _interopRequireDefault(_uk_UA);

var _uk_UA3 = require('../../time-picker/locale/uk_UA');

var _uk_UA4 = _interopRequireDefault(_uk_UA3);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var locale = {
  lang: _extends({
    placeholder: 'Оберіть дату',
    rangePlaceholder: ['Початкова дата', 'Кінцева дата']
  }, _uk_UA2.default),
  timePickerLocale: _extends({}, _uk_UA4.default)
};

// All settings at:
// https://github.com/ant-design/ant-design/blob/master/components/date-picker/locale/example.json

exports.default = locale;
//# sourceMappingURL=uk_UA.js.map