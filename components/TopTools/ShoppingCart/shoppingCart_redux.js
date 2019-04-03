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
    case SHOPPING_CART_LOADING:
      return (0, _extends3.default)({}, state, {
        loading: true
      });
    case SHOPPING_CART_SUCCESS:
      return (0, _extends3.default)({}, state, {
        loading: false,
        loaded: true,
        data: action.result
      });
    case SHOPPING_CART_FAIL:
      return (0, _extends3.default)({}, state, {
        loading: false,
        loaded: false
      });
    default:
      return state;
  }
};

exports.getShoppingCartCountAction = getShoppingCartCountAction;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/* *************************
 * @author:       冯炎
 * @update:       20171201
 * @description:  获取购物车数量
 * ************************/
var SHOPPING_CART_LOADING = 'SHOPPING_CART/LOADING';
var SHOPPING_CART_FAIL = 'SHOPPING_CART/FAIL';
var SHOPPING_CART_SUCCESS = 'SHOPPING_CART/SUCCESS';
function getShoppingCartCountAction() {
  return {
    types: [SHOPPING_CART_LOADING, SHOPPING_CART_SUCCESS, SHOPPING_CART_FAIL],
    promise: function promise(client) {
      return client.get('cart/mall/cart/queryCartItemNum');
    }
  };
}
//# sourceMappingURL=shoppingCart_redux.js.map