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
        components: action.result,
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

exports.getTitleForHookAction = getTitleForHookAction;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/*
 * author: 冯炎
 * update: 20170731
 * description: 获取页面中组件方法
 */
var LOAD = 'PERSONALCENTER/COMPONENTS/LOAD';
var LOAD_SUCCESS = 'PERSONALCENTER/COMPONENTS/LOAD_SUCCESS';
var LOAD_FAIL = 'PERSONALCENTER/COMPONENTS/LOAD_FAIL';

function getTitleForHookAction() {
  return {
    types: [LOAD, LOAD_SUCCESS, LOAD_FAIL],
    promise: function promise(client) {
      return client.get('/module-manage-service/operating/component/queryComponentByHookName?hookName=HOOK_COMMON_FRAME_TITLE').then(function (ret) {
        return ret.data;
      });
    }
  };
}
//# sourceMappingURL=get_components_redux.js.map