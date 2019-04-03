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

var _PriceStockTable = require('./PriceStockTable');

var _PriceStockTable2 = _interopRequireDefault(_PriceStockTable);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var BindPriceStockTable = (_dec = (0, _inject2.default)({ priceStockData: _redux2.default }), _dec2 = (0, _reactRedux.connect)(function (store) {
  return { priceStockData: store.priceStockData };
}, { getCustomerLabel: _redux.getCustomerLabel, getRegionalPriceStock: _redux.getRegionalPriceStock, queryShopInfo: _redux.queryShopInfo }), _dec(_class = _dec2(_class = function (_K) {
  (0, _inherits3.default)(BindPriceStockTable, _K);

  function BindPriceStockTable() {
    (0, _classCallCheck3.default)(this, BindPriceStockTable);
    return (0, _possibleConstructorReturn3.default)(this, (BindPriceStockTable.__proto__ || (0, _getPrototypeOf2.default)(BindPriceStockTable)).apply(this, arguments));
  }

  return BindPriceStockTable;
}(_PriceStockTable2.default)) || _class) || _class);
exports.default = BindPriceStockTable;
module.exports = exports['default'];
//# sourceMappingURL=BindPriceStockTable.js.map