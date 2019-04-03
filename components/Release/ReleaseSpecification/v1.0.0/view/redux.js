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
        case QUERY_ATTRIBUTE_BY_CATEGORY_LOADING:
            return (0, _extends3.default)({}, state, {
                loading: true
            });
        case QUERY_ATTRIBUTE_BY_CATEGORY_SUCCESS:
            return (0, _extends3.default)({}, state, {
                loading: false,
                loaded: true,
                data: action.result
            });
        case QUERY_ATTRIBUTE_BY_CATEGORY_FAIL:
            return (0, _extends3.default)({}, state, {
                loading: false,
                loaded: true,
                error: action.msg
            });
        default:
            return state;
    }
};

exports.getAttributeByCategoryIdForShop = getAttributeByCategoryIdForShop;
exports.getAttributeByCategoryIdForPlatform = getAttributeByCategoryIdForPlatform;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Created by huangxiao3 on 2018/8/3.
 */
//http://shop.b2b-v2-pre2.jcloudec.com/proxy/item/seller/categoryAttribute/queryPlatfromAttributeList?_=1533280858348
var QUERY_ATTRIBUTE_BY_CATEGORY_LOADING = 'QUERY_ATTRIBUTE_BY_CATEGORY_LOADING';
var QUERY_ATTRIBUTE_BY_CATEGORY_SUCCESS = 'QUERY_ATTRIBUTE_BY_CATEGORY_SUCCESS';
var QUERY_ATTRIBUTE_BY_CATEGORY_FAIL = 'QUERY_ATTRIBUTE_BY_CATEGORY_FAIL';

function getAttributeByCategoryIdForShop(param) {
    return {
        types: [QUERY_ATTRIBUTE_BY_CATEGORY_LOADING, QUERY_ATTRIBUTE_BY_CATEGORY_SUCCESS, QUERY_ATTRIBUTE_BY_CATEGORY_FAIL],
        promise: function promise(client) {
            return client.get('/item/seller/categoryAttribute/queryPlatfromAttributeList', { params: { cid: param } });
        }
    };
}
function getAttributeByCategoryIdForPlatform(param) {
    return {
        types: [QUERY_ATTRIBUTE_BY_CATEGORY_LOADING, QUERY_ATTRIBUTE_BY_CATEGORY_SUCCESS, QUERY_ATTRIBUTE_BY_CATEGORY_FAIL],
        promise: function promise(client) {
            return client.get('/item/platform/categoryAttribute/queryAttributeList', { params: { cid: param } });
        }
    };
}
//# sourceMappingURL=redux.js.map