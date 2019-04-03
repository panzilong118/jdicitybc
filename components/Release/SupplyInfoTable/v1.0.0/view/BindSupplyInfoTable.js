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

var _SupplyInfoTable = require('./SupplyInfoTable');

var _SupplyInfoTable2 = _interopRequireDefault(_SupplyInfoTable);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var BindSupplyInfoTable = (_dec = (0, _inject2.default)({ regionalData: _redux2.default }), _dec2 = (0, _reactRedux.connect)(function (store) {
  return { regionalData: store.regionalData };
}, { getRegionalPrice: _redux.getRegionalPrice }), _dec(_class = _dec2(_class = function (_K) {
  (0, _inherits3.default)(BindSupplyInfoTable, _K);

  function BindSupplyInfoTable() {
    (0, _classCallCheck3.default)(this, BindSupplyInfoTable);
    return (0, _possibleConstructorReturn3.default)(this, (BindSupplyInfoTable.__proto__ || (0, _getPrototypeOf2.default)(BindSupplyInfoTable)).apply(this, arguments));
  }

  return BindSupplyInfoTable;
}(_SupplyInfoTable2.default)) || _class) || _class);
exports.default = BindSupplyInfoTable;
module.exports = exports['default'];
//# sourceMappingURL=BindSupplyInfoTable.js.map