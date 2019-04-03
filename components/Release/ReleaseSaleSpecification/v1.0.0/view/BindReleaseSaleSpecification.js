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

var _ReleaseSaleSpecification = require('./ReleaseSaleSpecification');

var _ReleaseSaleSpecification2 = _interopRequireDefault(_ReleaseSaleSpecification);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var BindReleaseSpecification = (_dec = (0, _inject2.default)({ attributeData: _redux2.default }), _dec2 = (0, _reactRedux.connect)(function (store) {
  return { attributeData: store.attributeData };
}, { getAttributeByCategoryIdForShop: _redux.getAttributeByCategoryIdForShop, getAttributeByCategoryIdForPlatform: _redux.getAttributeByCategoryIdForPlatform }), _dec(_class = _dec2(_class = function (_K) {
  (0, _inherits3.default)(BindReleaseSpecification, _K);

  function BindReleaseSpecification() {
    (0, _classCallCheck3.default)(this, BindReleaseSpecification);
    return (0, _possibleConstructorReturn3.default)(this, (BindReleaseSpecification.__proto__ || (0, _getPrototypeOf2.default)(BindReleaseSpecification)).apply(this, arguments));
  }

  return BindReleaseSpecification;
}(_ReleaseSaleSpecification2.default)) || _class) || _class);
exports.default = BindReleaseSpecification;
module.exports = exports['default'];
//# sourceMappingURL=BindReleaseSaleSpecification.js.map