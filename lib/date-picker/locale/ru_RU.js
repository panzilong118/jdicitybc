'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; /**
                                                                                                                                                                                                                                                                   * Created by Andrey Gayvoronsky on 13/04/16.
                                                                                                                                                                                                                                                                   */

var _ru_RU = require('rc-calendar/lib/locale/ru_RU');

var _ru_RU2 = _interopRequireDefault(_ru_RU);

var _ru_RU3 = require('../../time-picker/locale/ru_RU');

var _ru_RU4 = _interopRequireDefault(_ru_RU3);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var locale = {
  lang: _extends({
    placeholder: 'Выберите дату',
    rangePlaceholder: ['Начальная дата', 'Конечная дата']
  }, _ru_RU2.default),
  timePickerLocale: _extends({}, _ru_RU4.default)
};

// All settings at:
// https://github.com/ant-design/ant-design/blob/master/components/date-picker/locale/example.json

exports.default = locale;
//# sourceMappingURL=ru_RU.js.map