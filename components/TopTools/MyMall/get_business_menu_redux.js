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
        case LOAD:
            return (0, _extends3.default)({}, state, {
                loaded: false,
                loading: true
            });
        case LOAD_SUCCESS:
            return (0, _extends3.default)({}, state, {
                data: action.data,
                loading: false,
                loaded: true
            });
        case LOAD_FAIL:
            return (0, _extends3.default)({}, state, {
                loading: false,
                loaded: false,
                error: action.error
            });
        default:
            return state;
    }
};

exports.getBusinessMenuAction = getBusinessMenuAction;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/*
 * author: 冯炎
 * update: 20181011
 * description: 获取buyer,shop头部我的商城下菜单
 */
var LOAD = 'TOP_TOOLS_BUSINESS_MENU/LOAD';
var LOAD_SUCCESS = 'TOP_TOOLS_BUSINESS_MENU/LOAD_SUCCESS';
var LOAD_FAIL = 'TOP_TOOLS_BUSINESS_MENU/LOAD_FAIL';

function getBusinessMenuAction() {
    return {
        types: [LOAD, LOAD_SUCCESS, LOAD_FAIL],
        promise: function promise(client) {
            return client.get('/authority-service/mall/business/queryBusinessMenuList').then(function (ret) {
                return ret.data;
            });
        }
    };
}
//# sourceMappingURL=get_business_menu_redux.js.map