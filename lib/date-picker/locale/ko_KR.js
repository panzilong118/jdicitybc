'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _ko_KR = require('rc-calendar/lib/locale/ko_KR');

var _ko_KR2 = _interopRequireDefault(_ko_KR);

var _ko_KR3 = require('../../time-picker/locale/ko_KR');

var _ko_KR4 = _interopRequireDefault(_ko_KR3);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// Merge into a locale object
var locale = {
  lang: _extends({
    placeholder: '날짜 선택',
    rangePlaceholder: ['시작일', '종료일']
  }, _ko_KR2.default),
  timePickerLocale: _extends({}, _ko_KR4.default)
};

// All settings at:
// https://github.com/ant-design/ant-design/blob/master/components/date-picker/locale/example.json

exports.default = locale;
//# sourceMappingURL=ko_KR.js.map