'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _moment = require('moment');

var _moment2 = _interopRequireDefault(_moment);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function (text) {
  var seconds = _moment2.default.duration(text).seconds();
  var minutes = _moment2.default.duration(text).minutes();
  var hours = _moment2.default.duration(text).hours();
  if (!text) {
    return null;
  }if (text < 1000) {
    return text + 'ms';
  }if (text < 60000) {
    return seconds + 's';
  }if (text < 3600000) {
    return minutes + 'm ' + seconds + 's';
  }if (text < 86400000) {
    return hours + 'h ' + minutes + 'm ' + seconds + 's';
  }
  return _moment2.default.duration(text).humanize();
};
//# sourceMappingURL=elapseFormat.js.map