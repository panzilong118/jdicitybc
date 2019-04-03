'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _extends2 = require('babel-runtime/helpers/extends');

var _extends3 = _interopRequireDefault(_extends2);

exports.default = function () {
    var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : { skuUnit_loaded: false };
    var action = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

    switch (action.type) {
        case SKUUNIT_LOAD:
            return (0, _extends3.default)({}, state, {
                skuUnit_loading: true
            });
        case SKUUNIT_LOAD_SUCCESS:
            return (0, _extends3.default)({}, state, {
                data: action.result.data || [],
                skuUnit_loading: false,
                skuUnit_loaded: true
            });
        case SKUUNIT_LOAD_FAIL:
            return (0, _extends3.default)({}, state, {
                skuUnit_loading: false,
                skuUnit_loaded: false,
                skuUnit_error: action.error
            });
        default:
            return state;
    }
};

exports.querySkuUnit = querySkuUnit;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// 查询单位
var SKUUNIT_LOAD = 'SKUUNIT_LOAD';
var SKUUNIT_LOAD_SUCCESS = 'SKUUNIT_LOAD_SUCCESS';
var SKUUNIT_LOAD_FAIL = 'SKUUNIT_LOAD_FAIL';

function querySkuUnit(params, type) {
    var url = '/item/seller/category/queryUnitByCategoryId'; // shop
    if (type == '0' || type == '1') {
        url = '/item/platform/category/queryUnitByCategoryId'; // 运营平台
    }
    return {
        types: [SKUUNIT_LOAD, SKUUNIT_LOAD_SUCCESS, SKUUNIT_LOAD_FAIL],
        promise: function promise(client) {
            return client.get(url, { params: params });
        }
    };
}
//# sourceMappingURL=redux-SkuUnit.js.map