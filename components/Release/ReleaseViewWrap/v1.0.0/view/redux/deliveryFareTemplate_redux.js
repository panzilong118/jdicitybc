'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _extends2 = require('babel-runtime/helpers/extends');

var _extends3 = _interopRequireDefault(_extends2);

exports.default = function () {
    var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : { temp_loaded: false };
    var action = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

    switch (action.type) {
        case TEMP_LOAD:
            return (0, _extends3.default)({}, state, {
                temp_loading: true
            });
        case TEMP_LOAD_SUCCESS:
            return (0, _extends3.default)({}, state, {
                data: action.result && action.result.data && action.result.data.shopFareTemplateForItemVo || [],
                temp_loading: false,
                temp_loaded: true
            });
        case TEMP_LOAD_FAIL:
            return (0, _extends3.default)({}, state, {
                temp_loading: false,
                temp_loaded: false,
                temp_error: action.error
            });
        default:
            return state;
    }
};

exports.queryDeliveryFareTemplate = queryDeliveryFareTemplate;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * 其他设置/配送设置/商品运费模板 redux
 * 只有店铺有这个需求，供应商和运营平台不需要
 * 
 * 编辑状态下，销售信息表格组件的列根据哪个模板进行校验
 * 对比总数据源中 运费模板 是哪个类型
 * "calcRule":3 -- 按体积校验
 * "calcRule":2 -- 按件数校验
 * "calcRule":1 -- 按重量校验
 */

// 查询单位
var TEMP_LOAD = 'TEMP_LOAD';
var TEMP_LOAD_SUCCESS = 'TEMP_LOAD_SUCCESS';
var TEMP_LOAD_FAIL = 'TEMP_LOAD_FAIL';

function queryDeliveryFareTemplate(params) {
    return {
        types: [TEMP_LOAD, TEMP_LOAD_SUCCESS, TEMP_LOAD_FAIL],
        promise: function promise(client) {
            return client.get('/shop-service/delivery/queryDeliveryFareTemplate', { params: params });
        }
    };
}
//# sourceMappingURL=deliveryFareTemplate_redux.js.map