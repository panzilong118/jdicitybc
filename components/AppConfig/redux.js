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
        /*    case LOAD:
         return {
         ...state,
         loading: true
         };*/
        case LOAD_SUCCESS:
            return (0, _extends3.default)({}, state, {
                components: (0, _extends3.default)({}, action.result.data),
                loading: false,
                loaded: true
            });
        case LOAD_FAIL:
            return (0, _extends3.default)({}, state, {
                loading: false,
                loaded: false,
                error: action.error
            });
        case SEARCH_SUCCESS:
            return (0, _extends3.default)({}, state, {
                searchData: (0, _extends3.default)({}, action.result.data),
                search_loading: false,
                search_loaded: true
            });
        case SEARCH_FAIL:
            return (0, _extends3.default)({}, state, {
                search_loading: false,
                search_loaded: false,
                search_error: action.error
            });
        default:
            return state;
    }
};

exports.saveConfigHoc = saveConfigHoc;
exports.searchConfigHoc = searchConfigHoc;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Created by huangxiao3 on 2018/5/31.
 */
var LOAD = 'hoc_dynamic-load-component/center/LOAD';
var LOAD_SUCCESS = 'hoc_dynamic-load-component/center/LOAD_SUCCESS';
var LOAD_FAIL = 'hoc_dynamic-load-component/center/LOAD_FAIL';

var SEARCH = 'hoc_dynamic-load-component/SEARCH/LOAD';
var SEARCH_SUCCESS = 'hoc_dynamic-load-component/SEARCH/LOAD_SUCCESS';
var SEARCH_FAIL = 'hoc_dynamic-load-component/SEARCH/LOAD_FAIL';

function saveConfigHoc(values) {
    return {
        types: [LOAD, LOAD_SUCCESS, LOAD_FAIL],
        promise: function promise(client) {
            return client.get('/module-manage-service/operating/modules/componentConf', { params: values }).then(function (ret) {
                return ret && ret.data;
            });
        }
    };
}

function searchConfigHoc(values) {
    return {
        types: [LOAD, LOAD_SUCCESS, LOAD_FAIL],
        promise: function promise(client) {
            return client.get('/module-manage-service/operating/modules/queryComponentConfig', { params: values }).then(function (ret) {
                return ret && ret.data && ret.data.config && JSON.parse(ret.data.config);
            });
        }
    };
}
//# sourceMappingURL=redux.js.map