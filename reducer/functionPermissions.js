"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends2 = require("babel-runtime/helpers/extends");

var _extends3 = _interopRequireDefault(_extends2);

exports.getPlatformFuncPermission = getPlatformFuncPermission;
exports.getFuncPermission = getFuncPermission;
exports.getSubPageFuncPermission = getSubPageFuncPermission;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

(function () {
  var enterModule = require('react-hot-loader').enterModule;

  enterModule && enterModule(module);
})();

var FUNC_PERMISSIONS_LOADING = "func/permissions/PERMISSIONS_LOADING";
var FUNC_PERMISSIONS_SUCCESS = "func/permissions/PERMISSIONS_SUCCESS";
var FUNC_PERMISSIONS_FAIL = "func/permissions/PERMISSIONS_FAIL";

var _default = function _default() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  var action = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

  switch (action.type) {
    case FUNC_PERMISSIONS_LOADING:
      return (0, _extends3.default)({}, state, {
        loading: true
      });
    case FUNC_PERMISSIONS_SUCCESS:
      console.log(action.result);
      return (0, _extends3.default)({}, state, {
        loading: false,
        loaded: true,
        data: action.result
      });
    case FUNC_PERMISSIONS_FAIL:
      return (0, _extends3.default)({}, state, {
        loading: false,
        loaded: false,
        error: action.msg
      });
    default:
      return state;
  }
};

exports.default = _default;
// 根据name获取cookie值

function getCookieByArray(name) {
  if (typeof document !== 'undefined') {
    var cookies = document.cookie.split(';');
    var c;
    for (var i = 0; i < cookies.length; i++) {
      c = cookies[i].split('=');
      if (c[0].replace(' ', '') == name) {
        return c[1];
      }
    }
  } else {
    return null;
  }
}
function getPlatformFuncPermission() {
  return {
    types: [FUNC_PERMISSIONS_LOADING, FUNC_PERMISSIONS_SUCCESS, FUNC_PERMISSIONS_FAIL],
    promise: function promise(client) {
      return client.get('authority/platform/resource/queryResourceByCodeOrRefer');
    }
  };
}
function getFuncPermission() {
  return {
    types: [FUNC_PERMISSIONS_LOADING, FUNC_PERMISSIONS_SUCCESS, FUNC_PERMISSIONS_FAIL],
    promise: function promise(client) {
      return client.get('/authority/mall/resource/queryResourceByCodeOrRefer', { params: { shopType: getCookieByArray('shopType') } });
    }
  };
}
//获取子页面的动作权限
function getSubPageFuncPermission() {
  var codes = this.props.routing.locationBeforeTransitions.query.codes;
  var codesArray = codes && codes.split(",") || [];
}
;

(function () {
  var reactHotLoader = require('react-hot-loader').default;

  var leaveModule = require('react-hot-loader').leaveModule;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(FUNC_PERMISSIONS_LOADING, "FUNC_PERMISSIONS_LOADING", "../../src/reducer/functionPermissions.js");
  reactHotLoader.register(FUNC_PERMISSIONS_SUCCESS, "FUNC_PERMISSIONS_SUCCESS", "../../src/reducer/functionPermissions.js");
  reactHotLoader.register(FUNC_PERMISSIONS_FAIL, "FUNC_PERMISSIONS_FAIL", "../../src/reducer/functionPermissions.js");
  reactHotLoader.register(getCookieByArray, "getCookieByArray", "../../src/reducer/functionPermissions.js");
  reactHotLoader.register(getPlatformFuncPermission, "getPlatformFuncPermission", "../../src/reducer/functionPermissions.js");
  reactHotLoader.register(getFuncPermission, "getFuncPermission", "../../src/reducer/functionPermissions.js");
  reactHotLoader.register(getSubPageFuncPermission, "getSubPageFuncPermission", "../../src/reducer/functionPermissions.js");
  reactHotLoader.register(_default, "default", "../../src/reducer/functionPermissions.js");
  leaveModule(module);
})();

;
//# sourceMappingURL=functionPermissions.js.map