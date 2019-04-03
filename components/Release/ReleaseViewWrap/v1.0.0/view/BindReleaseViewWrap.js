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

// 店铺 其他设置/配送设置/运费模板


var _reactRedux = require("react-redux");

var _inject = require("../../../../../../../src/redux/inject");

var _inject2 = _interopRequireDefault(_inject);

var _ReleaseViewWrap = require("./ReleaseViewWrap");

var _ReleaseViewWrap2 = _interopRequireDefault(_ReleaseViewWrap);

var _reduxDyTabCom = require("./redux/redux-dyTabCom");

var _reduxDyTabCom2 = _interopRequireDefault(_reduxDyTabCom);

var _saveparams_redux = require("./redux/saveparams_redux");

var _saveparams_redux2 = _interopRequireDefault(_saveparams_redux);

var _saveskulist_redux = require("./redux/saveskulist_redux");

var _saveskulist_redux2 = _interopRequireDefault(_saveskulist_redux);

var _iteminfo_redux = require("./redux/iteminfo_redux");

var _iteminfo_redux2 = _interopRequireDefault(_iteminfo_redux);

var _saleattribute_redux = require("./redux/saleattribute_redux");

var _saleattribute_redux2 = _interopRequireDefault(_saleattribute_redux);

var _getTemplateId_redux = require("./redux/getTemplateId_redux");

var _getTemplateId_redux2 = _interopRequireDefault(_getTemplateId_redux);

var _deliveryFareTemplate_redux = require("./redux/deliveryFareTemplate_redux");

var _deliveryFareTemplate_redux2 = _interopRequireDefault(_deliveryFareTemplate_redux);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var BindReleaseViewWrap = (_dec = (0, _inject2.default)({
    tabComponents: _reduxDyTabCom2.default,
    saveParamsRedux: _saveparams_redux2.default,
    saveSkuListRedux: _saveskulist_redux2.default,
    itemInfoRedux: _iteminfo_redux2.default,
    saleAttributeRedux: _saleattribute_redux2.default,
    tempRedux: _deliveryFareTemplate_redux2.default, // 运费模板
    getTemplateIdRedux: _getTemplateId_redux2.default //获取模板id
}), _dec2 = (0, _reactRedux.connect)(function (store) {
    return {
        tabComponents: store.tabComponents,
        saveParamsRedux: store.saveParamsRedux,
        saveSkuListRedux: store.saveSkuListRedux,
        itemInfoRedux: store.itemInfoRedux,
        saleAttributeRedux: store.saleAttributeRedux,
        tempRedux: store.tempRedux, // 运费模板
        getTemplateIdRedux: store.getTemplateIdRedux
    };
}, {
    loadTabComponents: _reduxDyTabCom.loadTabComponents,
    getSaleAttributeAction: _saleattribute_redux.getSaleAttributeAction,
    saveSkuListAction: _saveskulist_redux.saveSkuListAction,
    saveParamsAction: _saveparams_redux.saveParamsAction,
    getItemInfoAction: _iteminfo_redux.getItemInfoAction,
    queryDeliveryFareTemplate: _deliveryFareTemplate_redux.queryDeliveryFareTemplate,
    queryGetTemplateId: _getTemplateId_redux.queryGetTemplateId
}), _dec(_class = _dec2(_class = function (_K) {
    (0, _inherits3.default)(BindReleaseViewWrap, _K);

    function BindReleaseViewWrap() {
        (0, _classCallCheck3.default)(this, BindReleaseViewWrap);
        return (0, _possibleConstructorReturn3.default)(this, (BindReleaseViewWrap.__proto__ || (0, _getPrototypeOf2.default)(BindReleaseViewWrap)).apply(this, arguments));
    }

    return BindReleaseViewWrap;
}(_ReleaseViewWrap2.default)) || _class) || _class);
exports.default = BindReleaseViewWrap;
module.exports = exports["default"];
//# sourceMappingURL=BindReleaseViewWrap.js.map