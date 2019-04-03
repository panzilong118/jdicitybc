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
    case GET_CITYS_LOADING:
      return (0, _extends3.default)({}, state, {
        loading: true
      });
    case GET_CITYS_SUCCESS:
      return (0, _extends3.default)({}, state, {
        loading: false,
        loaded: true,
        data: action.result
      });
    case GET_CITYS_FAIL:
      return (0, _extends3.default)({}, state, {
        loading: false,
        loaded: false
      });
    default:
      return state;
  }
};

exports.getCitysAction = getCitysAction;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/* *************************
 * @author: FengYan
 * @update: 20170523
 * @description:获取一级地市接口
 * ************************/
var GET_CITYS_LOADING = 'TOP_TOOLS/GET_CITYS/LOADING';
var GET_CITYS_FAIL = 'TOP_TOOLS/GET_CITYS/FAIL';
var GET_CITYS_SUCCESS = 'TOP_TOOLS/GET_CITYS/SUCCESS';

var VALUES = { addressCode: 0 };
function getCitysAction() {
  return {
    types: [GET_CITYS_LOADING, GET_CITYS_SUCCESS, GET_CITYS_FAIL],
    promise: function promise(client) {
      return client.get('/base/address/queryAddressListByCode', { params: VALUES });
    }
  };
}
//# sourceMappingURL=citys_redux.js.map