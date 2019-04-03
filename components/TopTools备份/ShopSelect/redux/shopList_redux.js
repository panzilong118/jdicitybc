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
    case GET_SHOP_LIST_LOADING:
      return (0, _extends3.default)({}, state, {
        loading: true
      });
    case GET_SHOP_LIST_SUCCESS:
      return (0, _extends3.default)({}, state, {
        loading: false,
        loaded: true,
        data: action.result
      });
    case GET_SHOP_LIST_FAIL:
      return (0, _extends3.default)({}, state, {
        loading: false,
        loaded: false
      });
    default:
      return state;
  }
};

exports.getShopListAction = getShopListAction;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/* *************************
 * @author:       冯炎
 * @update:       20171201
 * @description:  获取店铺列表
 * ************************/
var GET_SHOP_LIST_LOADING = 'GET_SHOP_LIST/LOADING';
var GET_SHOP_LIST_FAIL = 'GET_SHOP_LIST/FAIL';
var GET_SHOP_LIST_SUCCESS = 'GET_SHOP_LIST/SUCCESS';
function getShopListAction() {
  return {
    types: [GET_SHOP_LIST_LOADING, GET_SHOP_LIST_SUCCESS, GET_SHOP_LIST_FAIL],
    promise: function promise(client) {
      return client.get('seller-assemble/mall/shopInfo/queryShopInfo');
    }
  };
}
//# sourceMappingURL=shopList_redux.js.map