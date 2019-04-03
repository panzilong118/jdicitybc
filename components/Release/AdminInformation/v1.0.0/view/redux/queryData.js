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
        case QUERY_LEFT_ATTR_LOADING:
            return (0, _extends3.default)({}, state);
        case QUERY_LEFT_ATTR_SUCCESS:
            return (0, _extends3.default)({}, state, {
                dataA: action.result
            });
        case QUERY_LEFT_ATTR_FAIL:
            return (0, _extends3.default)({}, state, {
                error: action.msg
            });
        case QUERY_LEFT_ATTR_LIST_SUCCESS:
            return (0, _extends3.default)({}, state, {
                dataB: action.result
            });
        case QUERY_LEFT_ATTR_LIST_FAIL:
            return (0, _extends3.default)({}, state, {
                error: action.msg
            });
        default:
            return state;
    }
};

exports.queryLoginInfo = queryLoginInfo;
exports.queryAllAdminUser = queryAllAdminUser;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var QUERY_LEFT_ATTR_LOADING = 'QUERY_LEFT_ATTR_LOADING';
var QUERY_LEFT_ATTR_FAIL = 'QUERY_LEFT_ATTR_FAIL';
var QUERY_LEFT_ATTR_SUCCESS = 'QUERY_LEFT_ATTR_SUCCESS';

var QUERY_LEFT_ATTR_LIST_SUCCESS = 'QUERY_LEFT_ATTR_LIST_SUCCESS';
var QUERY_LEFT_ATTR_LIST_FAIL = 'QUERY_LEFT_ATTR_LIST_FAIL';

function queryLoginInfo(values, type) {

    // shop
    var url = "/passport/mall/account/queryLoginInfo";
    // Platform
    if (type == '1') {
        url = "/platform-passport/platform/Login/queryLoginInfo";
    }
    return {
        types: [QUERY_LEFT_ATTR_LOADING, QUERY_LEFT_ATTR_SUCCESS, QUERY_LEFT_ATTR_FAIL],
        promise: function promise(client) {
            return client.get(url, { params: values });
        }
    };
}

function queryAllAdminUser(values) {
    return {
        types: [QUERY_LEFT_ATTR_LOADING, QUERY_LEFT_ATTR_LIST_SUCCESS, QUERY_LEFT_ATTR_LIST_FAIL],
        promise: function promise(client) {
            return client.get('/platform-passport/user/queryAllAdminUser', { params: values });
        }
    };
}
//# sourceMappingURL=queryData.js.map