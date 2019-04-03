'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _getPrototypeOf = require('babel-runtime/core-js/object/get-prototype-of');

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _possibleConstructorReturn2 = require('babel-runtime/helpers/possibleConstructorReturn');

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = require('babel-runtime/helpers/inherits');

var _inherits3 = _interopRequireDefault(_inherits2);

var _dec, _dec2, _class;

var _reactRedux = require('react-redux');

var _reduxSkuUnit = require('./redux-SkuUnit');

var _reduxSkuUnit2 = _interopRequireDefault(_reduxSkuUnit);

var _inject = require('../../../../../../../src/redux/inject');

var _inject2 = _interopRequireDefault(_inject);

var _ReleaseSaleInfo = require('./ReleaseSaleInfo');

var _ReleaseSaleInfo2 = _interopRequireDefault(_ReleaseSaleInfo);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var BindReleaseSaleInfo = (_dec = (0, _inject2.default)({ skuUnitDS: _reduxSkuUnit2.default }), _dec2 = (0, _reactRedux.connect)(function (store) {
  return { skuUnitDS: store.skuUnitDS };
}, { querySkuUnit: _reduxSkuUnit.querySkuUnit }), _dec(_class = _dec2(_class = function (_K) {
  (0, _inherits3.default)(BindReleaseSaleInfo, _K);

  function BindReleaseSaleInfo() {
    (0, _classCallCheck3.default)(this, BindReleaseSaleInfo);
    return (0, _possibleConstructorReturn3.default)(this, (BindReleaseSaleInfo.__proto__ || (0, _getPrototypeOf2.default)(BindReleaseSaleInfo)).apply(this, arguments));
  }

  return BindReleaseSaleInfo;
}(_ReleaseSaleInfo2.default)) || _class) || _class);
exports.default = BindReleaseSaleInfo;
module.exports = exports['default'];
//# sourceMappingURL=BindReleaseSaleInfo.js.map