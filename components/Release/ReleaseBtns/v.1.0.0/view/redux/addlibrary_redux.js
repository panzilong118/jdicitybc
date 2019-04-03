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
        case ITEM_ADDLIBRARY_LOAD:
            return (0, _extends3.default)({}, state, {
                loading: true
            });
        case ITEM_ADDLIBRARY_LOAD_SUCCESS:
            return (0, _extends3.default)({}, state, {
                data: action.result,
                loading: false,
                loaded: true
            });
        case ITEM_ADDLIBRARY_LOAD_FAIL:
            return (0, _extends3.default)({}, state, {
                loading: false,
                loaded: false,
                error: action.error
            });
        default:
            return state;
    }
};

exports.addLibraryItem = addLibraryItem;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * 商品发布后，加入平台标准库调用redux 
 * 
 * 发布和编辑发布用两个接口
 * 都要根据不同的页面进行判断
 * */

var ITEM_ADDLIBRARY_LOAD = 'ITEM_ADDLIBRARY_LOAD';
var ITEM_ADDLIBRARY_LOAD_SUCCESS = 'ITEM_ADDLIBRARY_LOAD_SUCCESS';
var ITEM_ADDLIBRARY_LOAD_FAIL = 'ITEM_ADDLIBRARY_LOAD_FAIL';

function addLibraryItem(params) {
    var url = '/item/platform/itemTmplPublish/addPlatformLibrary';
    return {
        types: [ITEM_ADDLIBRARY_LOAD, ITEM_ADDLIBRARY_LOAD_SUCCESS, ITEM_ADDLIBRARY_LOAD_FAIL],
        promise: function promise(client) {
            return client.post(url, { data: params });
        }
    };
}
//# sourceMappingURL=addlibrary_redux.js.map