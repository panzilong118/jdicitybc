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

var _redux = require('./redux');

var _redux2 = _interopRequireDefault(_redux);

var _inject = require('../../../../../../../src/redux/inject');

var _inject2 = _interopRequireDefault(_inject);

var _SupplyInfoAddress = require('./SupplyInfoAddress');

var _SupplyInfoAddress2 = _interopRequireDefault(_SupplyInfoAddress);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var BindSupplyInfoAddress = (_dec = (0, _inject2.default)({ addressData: _redux2.default }), _dec2 = (0, _reactRedux.connect)(function (store) {
  return { addressData: store.addressData };
}, { getAddressInfo: _redux.getAddressInfo }), _dec(_class = _dec2(_class = function (_K) {
  (0, _inherits3.default)(BindSupplyInfoAddress, _K);

  function BindSupplyInfoAddress() {
    (0, _classCallCheck3.default)(this, BindSupplyInfoAddress);
    return (0, _possibleConstructorReturn3.default)(this, (BindSupplyInfoAddress.__proto__ || (0, _getPrototypeOf2.default)(BindSupplyInfoAddress)).apply(this, arguments));
  }

  return BindSupplyInfoAddress;
}(_SupplyInfoAddress2.default)) || _class) || _class);
exports.default = BindSupplyInfoAddress;
module.exports = exports['default'];
//# sourceMappingURL=BindSupplyInfoAddress.js.map