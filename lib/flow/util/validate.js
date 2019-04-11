'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.isEmptyArr = exports.valideFromValues = exports.validFunc = undefined;

var _getType = require('uc-fun/getType');

var _getType2 = _interopRequireDefault(_getType);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 *  call function is function is valide
 */
var validFunc = exports.validFunc = function validFunc(func) {
  for (var _len = arguments.length, args = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
    args[_key - 1] = arguments[_key];
  }

  return (0, _getType2.default)(func) === 'Function' && func.apply(undefined, args);
};

var valideFromValues = exports.valideFromValues = function valideFromValues(_ref) {
  var validateFields = _ref.from.validateFields;

  var result = null;
  validateFields(function (err, values) {
    if (!err) {
      result = values;
    }
  });
  return result;
};

var isEmptyArr = exports.isEmptyArr = function isEmptyArr(arr) {
  return !((0, _getType2.default)(arr) === 'Array' && arr.length > 0);
};
//# sourceMappingURL=validate.js.map