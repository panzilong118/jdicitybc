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
    case IS_LOGIN_LOADING:
      return (0, _extends3.default)({}, state, {
        loading: true
      });
    case IS_LOGIN_SUCCESS:
      return (0, _extends3.default)({}, state, {
        loading: false,
        loaded: true,
        data: action.result
      });
    case IS_LOGIN_FAIL:
      return (0, _extends3.default)({}, state, {
        loading: false,
        loaded: false
      });
    default:
      return state;
  }
};

exports.getLoginAction = getLoginAction;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/* *************************
 * @author: FengYan
 * @update: 20170601
 * @description:获取登录信息
 * ************************/
var IS_LOGIN_LOADING = 'TOP_TOOLS/IS_LOGIN/LOADING';
var IS_LOGIN_FAIL = 'TOP_TOOLS/IS_LOGIN/FAIL';
var IS_LOGIN_SUCCESS = 'TOP_TOOLS/IS_LOGIN/SUCCESS';
function getLoginAction() {
  return {
    types: [IS_LOGIN_LOADING, IS_LOGIN_SUCCESS, IS_LOGIN_FAIL],
    promise: function promise(client) {
      return client.get('/passport/mall/account/queryUserById');
    }
  };
}
//# sourceMappingURL=getLogin_redux.js.map