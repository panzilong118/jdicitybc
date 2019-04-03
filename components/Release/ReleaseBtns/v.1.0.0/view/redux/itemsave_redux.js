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
        case ITEM_SAVE_LOAD:
            return (0, _extends3.default)({}, state, {
                loading: true
            });
        case ITEM_SAVE_LOAD_SUCCESS:
            return (0, _extends3.default)({}, state, {
                data: action.result,
                loading: false,
                loaded: true
            });
        case ITEM_SAVE_LOAD_FAIL:
            return (0, _extends3.default)({}, state, {
                loading: false,
                loaded: false,
                error: action.error
            });
        default:
            return state;
    }
};

exports.querySaveItem = querySaveItem;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * 商品保存调用redux 
 * 
 * 保存和编辑保存用两个接口
 * 都要根据不同的页面进行判断
 * */

var ITEM_SAVE_LOAD = 'ITEM_SAVE_LOAD';
var ITEM_SAVE_LOAD_SUCCESS = 'ITEM_SAVE_LOAD_SUCCESS';
var ITEM_SAVE_LOAD_FAIL = 'ITEM_SAVE_LOAD_FAIL';

function querySaveItem(params, type, edit) {
    var url = null;
    if (type == 1) {
        //运营平台
        if (edit) {
            url = '/item/platform/itemTmplPublish/saveItemByEdit';
        } else {
            url = '/item/platform/itemTmplPublish/saveItemPublish';
        }
    } else if (type == 3) {
        //店铺
        if (edit) {
            url = '/item/shop/itemTmplPublish/saveItemByEdit';
        } else {
            url = '/item/shop/itemTmplPublish/saveItemPublish';
        }
    }
    return {
        types: [ITEM_SAVE_LOAD, ITEM_SAVE_LOAD_SUCCESS, ITEM_SAVE_LOAD_FAIL],
        promise: function promise(client) {
            return client.post(url, { data: params });
        }
    };
}
//# sourceMappingURL=itemsave_redux.js.map