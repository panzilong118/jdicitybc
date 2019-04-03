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
        case QUERY_BASE_ATTR_LOADING:
            return (0, _extends3.default)({}, state);
        case QUERY_BASE_ATTR_SUCCESS:
            return (0, _extends3.default)({}, state, {
                data: action.result
            });
        case QUERY_BASE_ATTR_FAIL:
            return (0, _extends3.default)({}, state, {
                error: action.msg
            });
        default:
            return state;
    }
};

exports.getIndustryTagData = getIndustryTagData;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var QUERY_BASE_ATTR_LOADING = 'QUERY_BASE_ATTR_LOADING';
var QUERY_BASE_ATTR_SUCCESS = 'QUERY_BASE_ATTR_SUCCESS';
var QUERY_BASE_ATTR_FAIL = 'QUERY_BASE_ATTR_FAIL';

//店铺    添加时查询品牌
function getIndustryTagData(values, type) {
    // shop
    var url = '/item/seller/tags/getItemTagByCategory';
    // Platform
    if (type == '1') {
        url = '/item/platform/tags/getItemTagByCategory';
    }
    return {
        types: [QUERY_BASE_ATTR_LOADING, QUERY_BASE_ATTR_SUCCESS, QUERY_BASE_ATTR_FAIL],
        promise: function promise(client) {
            return client.get(url, { params: values });
        }
    };
}
//# sourceMappingURL=queryData.js.map