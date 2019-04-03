'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _extends2 = require('babel-runtime/helpers/extends');

var _extends3 = _interopRequireDefault(_extends2);

exports.default = function () {
    var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : { loaded: false };
    var action = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

    switch (action.type) {
        case ITEM_SUBMIT_LOAD:
            return (0, _extends3.default)({}, state, {
                loading: true
            });
        case ITEM_SUBMIT_LOAD_SUCCESS:
            return (0, _extends3.default)({}, state, {
                data: action.result,
                loading: false,
                loaded: true
            });
        case ITEM_SUBMIT_LOAD_FAIL:
            return (0, _extends3.default)({}, state, {
                loading: false,
                loaded: false,
                error: action.error
            });
        default:
            return state;
    }
};

exports.querySubmitItem = querySubmitItem;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * 商品发布调用redux 
 * 
 * 发布和编辑发布用两个接口
 * 都要根据不同的页面进行判断
 * */

var ITEM_SUBMIT_LOAD = 'ITEM_SUBMIT_LOAD';
var ITEM_SUBMIT_LOAD_SUCCESS = 'ITEM_SUBMIT_LOAD_SUCCESS';
var ITEM_SUBMIT_LOAD_FAIL = 'ITEM_SUBMIT_LOAD_FAIL';

function querySubmitItem(params, type, edit) {
    var url = null;
    if (type == 1) {
        //运营平台
        if (edit) {
            url = '/item/platform/itemTmplPublish/publishItemByEdit';
        } else {
            url = '/item/platform/itemTmplPublish/publishItem';
        }
    } else if (type == 2) {
        //供应商
        if (edit) {
            url = '/item/seller/itemTmplPublish/publishItemByEdit';
        } else {
            url = '/item/seller/itemTmplPublish/publishItem';
        }
    } else if (type == 3) {
        //店铺
        if (edit) {
            url = '/item/shop/itemTmplPublish/publishItemByEdit';
        } else {
            url = '/item/shop/itemTmplPublish/publishItem';
        }
    } else {
        //从供货申请审核页编辑发布的接口
        url = '/item/platform/itemTmplPublish/publishItemByAudit';
    }
    return {
        types: [ITEM_SUBMIT_LOAD, ITEM_SUBMIT_LOAD_SUCCESS, ITEM_SUBMIT_LOAD_FAIL],
        promise: function promise(client) {
            return client.post(url, { data: params });
        }
    };
}
//# sourceMappingURL=itemsubmit_redux.js.map