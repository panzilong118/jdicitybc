"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends2 = require("babel-runtime/helpers/extends");

var _extends3 = _interopRequireDefault(_extends2);

exports.injectSession = injectSession;

var _reactRouterRedux = require("react-router-redux");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

(function () {
  var enterModule = require('react-hot-loader').enterModule;

  enterModule && enterModule(module);
})();

var INJECT_SESSION = 'express/session/INIT';

var _default = function _default() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : { session: null };
  var action = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

  switch (action.type) {
    case INJECT_SESSION:
      return (0, _extends3.default)({}, state, action.session);
    default:
      return state;
  }
};

exports.default = _default;
function injectSession(session) {
  return {
    type: INJECT_SESSION,
    session: session
  };
}
;

(function () {
  var reactHotLoader = require('react-hot-loader').default;

  var leaveModule = require('react-hot-loader').leaveModule;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(INJECT_SESSION, "INJECT_SESSION", "../../src/reducer/session.js");
  reactHotLoader.register(injectSession, "injectSession", "../../src/reducer/session.js");
  reactHotLoader.register(_default, "default", "../../src/reducer/session.js");
  leaveModule(module);
})();

;
//# sourceMappingURL=session.js.map