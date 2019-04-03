"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends2 = require("babel-runtime/helpers/extends");

var _extends3 = _interopRequireDefault(_extends2);

exports.getMenuLinkPermission = getMenuLinkPermission;
exports.getPlatformMenuLinkPermission = getPlatformMenuLinkPermission;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

(function () {
  var enterModule = require('react-hot-loader').enterModule;

  enterModule && enterModule(module);
})();

var MENULINK_PERMISSIONS_LOADING = "menuLink/permissions/PERMISSIONS_LOADING";
var MENULINK_PERMISSIONS_SUCCESS = "menuLink/permissions/PERMISSIONS_SUCCESS";
var MENULINK_PERMISSIONS_FAIL = "menuLink/permissions/PERMISSIONS_FAIL";

var _default = function _default() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  var action = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

  switch (action.type) {
    case MENULINK_PERMISSIONS_LOADING:
      return (0, _extends3.default)({}, state, {
        loading: true
      });
    case MENULINK_PERMISSIONS_SUCCESS:
      console.log(action.result);
      return (0, _extends3.default)({}, state, {
        loading: false,
        loaded: true,
        data: action.result
      });
    case MENULINK_PERMISSIONS_FAIL:
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

/*
*  商城  菜单动作权限
*  @param {owner: 采购商 buyer , 供应商 seller  移动端 buyerMobile}
*/

function getMenuLinkPermission(params) {
  return {
    types: [MENULINK_PERMISSIONS_LOADING, MENULINK_PERMISSIONS_SUCCESS, MENULINK_PERMISSIONS_FAIL],
    promise: function promise(client) {
      return client.get('/authority/mall/resource/queryAllAuthByUserId', { params: params });
    }
  };
}

/*
*  平台 菜单动作权限
*  参数：无
*/
function getPlatformMenuLinkPermission(params) {
  return {
    types: [MENULINK_PERMISSIONS_LOADING, MENULINK_PERMISSIONS_SUCCESS, MENULINK_PERMISSIONS_FAIL],
    promise: function promise(client) {
      return client.get('/authority/platform/resource/queryAllAuthForPlatformByUserId', { params: params });
    }
  };
}
;

(function () {
  var reactHotLoader = require('react-hot-loader').default;

  var leaveModule = require('react-hot-loader').leaveModule;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(MENULINK_PERMISSIONS_LOADING, "MENULINK_PERMISSIONS_LOADING", "../../src/reducer/menuLinkPermission.js");
  reactHotLoader.register(MENULINK_PERMISSIONS_SUCCESS, "MENULINK_PERMISSIONS_SUCCESS", "../../src/reducer/menuLinkPermission.js");
  reactHotLoader.register(MENULINK_PERMISSIONS_FAIL, "MENULINK_PERMISSIONS_FAIL", "../../src/reducer/menuLinkPermission.js");
  reactHotLoader.register(getMenuLinkPermission, "getMenuLinkPermission", "../../src/reducer/menuLinkPermission.js");
  reactHotLoader.register(getPlatformMenuLinkPermission, "getPlatformMenuLinkPermission", "../../src/reducer/menuLinkPermission.js");
  reactHotLoader.register(_default, "default", "../../src/reducer/menuLinkPermission.js");
  leaveModule(module);
})();

;
//# sourceMappingURL=menuLinkPermission.js.map