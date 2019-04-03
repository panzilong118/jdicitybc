"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _getPrototypeOf = require("babel-runtime/core-js/object/get-prototype-of");

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = require("babel-runtime/helpers/classCallCheck");

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _possibleConstructorReturn2 = require("babel-runtime/helpers/possibleConstructorReturn");

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = require("babel-runtime/helpers/inherits");

var _inherits3 = _interopRequireDefault(_inherits2);

var _ReleaseSupplyInfo = require("./ReleaseSupplyInfo");

var _ReleaseSupplyInfo2 = _interopRequireDefault(_ReleaseSupplyInfo);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

//  @inject({ addressData  })
//  @connect(store => ({ addressData: store.addressData }), { getAddressInfo })
var BindReleaseSupplyInfo = function (_K) {
  (0, _inherits3.default)(BindReleaseSupplyInfo, _K);

  function BindReleaseSupplyInfo() {
    (0, _classCallCheck3.default)(this, BindReleaseSupplyInfo);
    return (0, _possibleConstructorReturn3.default)(this, (BindReleaseSupplyInfo.__proto__ || (0, _getPrototypeOf2.default)(BindReleaseSupplyInfo)).apply(this, arguments));
  }

  return BindReleaseSupplyInfo;
}(_ReleaseSupplyInfo2.default); // import { connect } from 'react-redux';
// import addressData, { getAddressInfo } from './redux';
// import inject from "../../../../../../../src/redux/inject";


exports.default = BindReleaseSupplyInfo;
module.exports = exports["default"];
//# sourceMappingURL=BindReleaseSupplyInfo.js.map