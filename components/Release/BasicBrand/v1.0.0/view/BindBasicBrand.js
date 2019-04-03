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

var _queryData = require('./redux/queryData');

var _queryData2 = _interopRequireDefault(_queryData);

var _inject = require('../../../../../../../src/redux/inject');

var _inject2 = _interopRequireDefault(_inject);

var _BasicBrand = require('./BasicBrand');

var _BasicBrand2 = _interopRequireDefault(_BasicBrand);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var BindBasicBrand = (_dec = (0, _inject2.default)({ brandData: _queryData2.default }), _dec2 = (0, _reactRedux.connect)(function (store) {
  return { brandData: store.brandData };
}, { getShopBrandData: _queryData.getShopBrandData }), _dec(_class = _dec2(_class = function (_K) {
  (0, _inherits3.default)(BindBasicBrand, _K);

  function BindBasicBrand() {
    (0, _classCallCheck3.default)(this, BindBasicBrand);
    return (0, _possibleConstructorReturn3.default)(this, (BindBasicBrand.__proto__ || (0, _getPrototypeOf2.default)(BindBasicBrand)).apply(this, arguments));
  }

  return BindBasicBrand;
}(_BasicBrand2.default)) || _class) || _class);
exports.default = BindBasicBrand;
module.exports = exports['default'];
//# sourceMappingURL=BindBasicBrand.js.map