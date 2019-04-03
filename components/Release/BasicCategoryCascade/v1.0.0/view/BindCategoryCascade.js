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

var _CategoryCascade = require("./CategoryCascade");

var _CategoryCascade2 = _interopRequireDefault(_CategoryCascade);

var _redux = require("./redux/redux");

var _redux2 = _interopRequireDefault(_redux);

var _resetparams_redux = require("./redux/resetparams_redux");

var _resetparams_redux2 = _interopRequireDefault(_resetparams_redux);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var BindCategoryCascade = (_dec = (0, _inject2.default)({
    getCidRedux: _redux2.default,
    resetParamsRedux: _resetparams_redux2.default
}), _dec2 = (0, _reactRedux.connect)(function (store) {
    return {
        getCidRedux: store.getCidRedux,
        resetParamsRedux: store.resetParamsRedux
    };
}, {
    getFirstCid: _redux.getFirstCid,
    getSecondCid: _redux.getSecondCid,
    getThirdCid: _redux.getThirdCid,
    getFourCid: _redux.getFourCid,
    clearData: _redux.clearData
}), _dec(_class = _dec2(_class = function (_K) {
    (0, _inherits3.default)(BindCategoryCascade, _K);

    function BindCategoryCascade() {
        (0, _classCallCheck3.default)(this, BindCategoryCascade);
        return (0, _possibleConstructorReturn3.default)(this, (BindCategoryCascade.__proto__ || (0, _getPrototypeOf2.default)(BindCategoryCascade)).apply(this, arguments));
    }

    return BindCategoryCascade;
}(_CategoryCascade2.default)) || _class) || _class);
exports.default = BindCategoryCascade;
module.exports = exports["default"];
//# sourceMappingURL=BindCategoryCascade.js.map