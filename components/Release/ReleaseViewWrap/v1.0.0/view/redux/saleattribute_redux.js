'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _extends2 = require('babel-runtime/helpers/extends');

var _extends3 = _interopRequireDefault(_extends2);

exports.default = function () {
    var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    var action = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

    switch (action.type) {
        case SALE_ATTRIBUTE_LOADING:
            return (0, _extends3.default)({}, state, {
                loading: true,
                loaded: false
            });
        case SALE_ATTRIBUTE_SUCCESS:
            return (0, _extends3.default)({}, state, {
                loading: false,
                loaded: true,
                data: action.result
            });
        case SALE_ATTRIBUTE_FAIL:
            return (0, _extends3.default)({}, state, {
                loading: false,
                loaded: true
            });
        default:
            return state;

    }
};

exports.getSaleAttributeAction = getSaleAttributeAction;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * 销售规格接口redux
 * 发布、编辑不同接口
 * 各个页面不同接口
 */

var SALE_ATTRIBUTE_LOADING = 'SALE_ATTRIBUTE_LOADING';
var SALE_ATTRIBUTE_SUCCESS = 'SALE_ATTRIBUTE_SUCCESS';
var SALE_ATTRIBUTE_FAIL = 'SALE_ATTRIBUTE_FAIL';

/**
 * type :
 * "0": (运营平台：平台商品库管理 发布、编辑),
 * "1": (运营平台：商品库管理/商品发布、编辑),
 * "2": (供应商),
 * "3": (店铺)
 */

function getSaleAttributeAction(type, edit, params, editStatus) {
    //(0,true,{cid:'',itemId:''})
    var url = null;
    if (edit && !editStatus) {
        //编辑状态
        if (type == 0 || type == 1) {
            url = '/item-service/platform/categoryAttribute/querySaleAttribute';
        } else {
            url = '/item/seller/categoryAttribute/querySaleAttribute';
        }
    } else {
        //发布状态
        if (type == 0 || type == 1) {
            url = '/item/platform/categoryAttribute/querySaleAttr';
        } else {
            url = '/item/seller/categoryAttribute/querySaleAttr';
        }
    }
    // // 不再区分编辑和发布
    // if(type == 0 || type == 1){
    //     url = '/item-service/platform/categoryAttribute/querySaleAttribute';
    // } else {
    //     url = '/item/seller/categoryAttribute/querySaleAttribute';
    // }
    return {
        types: [SALE_ATTRIBUTE_LOADING, SALE_ATTRIBUTE_SUCCESS, SALE_ATTRIBUTE_FAIL],
        promise: function promise(client) {
            return client.get(url, {
                params: params
            });
        }
    };
}
//# sourceMappingURL=saleattribute_redux.js.map