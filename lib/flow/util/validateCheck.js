'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.valideIdxCheck = exports.INVALID_IDX = undefined;

var _isBigger = require('uc-fun/isBigger');

var _isBigger2 = _interopRequireDefault(_isBigger);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var INVALID_IDX = exports.INVALID_IDX = -1;
var valideIdxCheck = exports.valideIdxCheck = function valideIdxCheck(num) {
  if (!num && num !== 0) {
    return false;
  }
  return (0, _isBigger2.default)(num, INVALID_IDX);
};
//# sourceMappingURL=validateCheck.js.map