"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends2 = require("babel-runtime/helpers/extends");

var _extends3 = _interopRequireDefault(_extends2);

exports.getPermissionsInfo = getPermissionsInfo;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

(function () {
  var enterModule = require('react-hot-loader').enterModule;

  enterModule && enterModule(module);
})();

var PERMISSIONS_LOADING = "express/permissions/PERMISSIONS_LOADING";
var PERMISSIONS_SUCCESS = "express/permissions/PERMISSIONS_SUCCESS";
var PERMISSIONS_FAIL = "express/permissions/PERMISSIONS_FAIL";

var _default = function _default() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  var action = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

  switch (action.type) {
    case PERMISSIONS_LOADING:
      return (0, _extends3.default)({}, state, {
        loading: true
      });
    case PERMISSIONS_SUCCESS:
      console.log(action.result);
      return (0, _extends3.default)({}, state, {
        loading: false,
        loaded: true,
        data: action.result
      });
    case PERMISSIONS_FAIL:
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
function getPermissionsInfo(params) {
  return {
    types: [PERMISSIONS_LOADING, PERMISSIONS_SUCCESS, PERMISSIONS_FAIL],
    promise: function promise(client) {
      return client.get('/passport/register/getUuid', { params: params });
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

  reactHotLoader.register(PERMISSIONS_LOADING, "PERMISSIONS_LOADING", "../../src/reducer/permissions.js");
  reactHotLoader.register(PERMISSIONS_SUCCESS, "PERMISSIONS_SUCCESS", "../../src/reducer/permissions.js");
  reactHotLoader.register(PERMISSIONS_FAIL, "PERMISSIONS_FAIL", "../../src/reducer/permissions.js");
  reactHotLoader.register(getPermissionsInfo, "getPermissionsInfo", "../../src/reducer/permissions.js");
  reactHotLoader.register(_default, "default", "../../src/reducer/permissions.js");
  leaveModule(module);
})();

;
//# sourceMappingURL=permissions.js.map