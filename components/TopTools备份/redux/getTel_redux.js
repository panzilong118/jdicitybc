'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends2 = require('babel-runtime/helpers/extends');

var _extends3 = _interopRequireDefault(_extends2);

exports.default = function () {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : { loading: false };
  var action = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

  switch (action.type) {
    case GET_TEL_LOADING:
      return (0, _extends3.default)({}, state, {
        loading: true
      });
    case GET_TEL_SUCCESS:
      return (0, _extends3.default)({}, state, {
        loading: false,
        loaded: true,
        data: action.result
      });
    case GET_TEL_FAIL:
      return (0, _extends3.default)({}, state, {
        loading: false,
        loaded: false
      });
    default:
      return state;
  }
};

exports.getTelAction = getTelAction;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/* *************************
 * @author: FengYan
 * @update: 20170601
 * @description:获取登录信息
 * ************************/
var GET_TEL_LOADING = 'TOP_TOOLS/GET_TEL/LOADING';
var GET_TEL_FAIL = 'TOP_TOOLS/GET_TEL/FAIL';
var GET_TEL_SUCCESS = 'TOP_TOOLS/GET_TEL/SUCCESS';
function getTelAction() {
  return {
    types: [GET_TEL_LOADING, GET_TEL_SUCCESS, GET_TEL_FAIL],
    promise: function promise(client) {
      return client.get('/platform-service/mall/customer/queryHotlineList');
    }
  };
}
//# sourceMappingURL=getTel_redux.js.map