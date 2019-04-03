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

var _dec, _dec2, _class;

var _reactRedux = require("react-redux");

var _inject = require("../../../../../../../src/redux/inject");

var _inject2 = _interopRequireDefault(_inject);

var _ShopCategory = require("./ShopCategory");

var _ShopCategory2 = _interopRequireDefault(_ShopCategory);

var _redux = require("./redux/redux");

var _redux2 = _interopRequireDefault(_redux);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var BindShopCategory = (_dec = (0, _inject2.default)({
    getShopCidRedux: _redux2.default
}), _dec2 = (0, _reactRedux.connect)(function (store) {
    return {
        getShopCidRedux: store.getShopCidRedux
    };
}, {
    getFirstCid: _redux.getFirstCid,
    getSecondCid: _redux.getSecondCid,
    clearData: _redux.clearData
}), _dec(_class = _dec2(_class = function (_K) {
    (0, _inherits3.default)(BindShopCategory, _K);

    function BindShopCategory() {
        (0, _classCallCheck3.default)(this, BindShopCategory);
        return (0, _possibleConstructorReturn3.default)(this, (BindShopCategory.__proto__ || (0, _getPrototypeOf2.default)(BindShopCategory)).apply(this, arguments));
    }

    return BindShopCategory;
}(_ShopCategory2.default)) || _class) || _class);
exports.default = BindShopCategory;
module.exports = exports["default"];
//# sourceMappingURL=BindShopCategory.js.map