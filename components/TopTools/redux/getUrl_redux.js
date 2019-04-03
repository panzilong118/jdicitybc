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
    case GET_URL_LOADING:
      return (0, _extends3.default)({}, state, {
        loading: true
      });
    case GET_URL_SUCCESS:
      return (0, _extends3.default)({}, state, {
        loading: false,
        loaded: true,
        data: action.result
      });
    case GET_URL_FAIL:
      return (0, _extends3.default)({}, state, {
        loading: false,
        loaded: false
      });
    default:
      return state;
  }
};

exports.getUrlAction = getUrlAction;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**************************
 * @author: FengYan
 * @update: 20170616
 * @description:获取地址
 *************************/
var GET_URL_LOADING = 'TOP_TOOLS/GET_URL/LOADING';
var GET_URL_FAIL = 'TOP_TOOLS/GET_URL/FAIL';
var GET_URL_SUCCESS = 'TOP_TOOLS/GET_URL/SUCCESS';
function getUrlAction() {
  return {
    types: [GET_URL_LOADING, GET_URL_SUCCESS, GET_URL_FAIL],
    promise: function promise(client) {
      return client.get('passport/logout');
    }
  };
}
//# sourceMappingURL=getUrl_redux.js.map