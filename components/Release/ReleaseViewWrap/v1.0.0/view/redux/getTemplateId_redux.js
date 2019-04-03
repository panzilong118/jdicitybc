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
        case TEMPLATE_ID_LOADING:
            return (0, _extends3.default)({}, state, {
                loading: true
            });
        case TEMPLATE_ID_SUCCESS:
            return (0, _extends3.default)({}, state, {
                data: action.result,
                loading: false,
                loaded: true
            });
        case TEMPLATE_ID_FAIL:
            return (0, _extends3.default)({}, state, {
                loading: false,
                loaded: false,
                error: action.error
            });
        default:
            return state;
    }
};

exports.queryGetTemplateId = queryGetTemplateId;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * 根据cid查询TemplateId
 */

var TEMPLATE_ID_LOADING = 'TEMPLATE_ID_LOADING';
var TEMPLATE_ID_SUCCESS = 'TEMPLATE_ID_SUCCESS';
var TEMPLATE_ID_FAIL = 'TEMPLATE_ID_FAIL';

function queryGetTemplateId(params, type) {
    var url = '/item/platform/itemTmplPublish/queryUsingTmpl';
    if (type == 2) {
        url = '/item/seller/itemTmplPublish/queryUsingTmpl';
    } else if (type == 3) {
        url = '/item/shop/itemTmplPublish/queryUsingTmpl';
    }
    return {
        types: [TEMPLATE_ID_LOADING, TEMPLATE_ID_SUCCESS, TEMPLATE_ID_FAIL],
        promise: function promise(client) {
            return client.get(url, { params: params });
        }
    };
}
//# sourceMappingURL=getTemplateId_redux.js.map