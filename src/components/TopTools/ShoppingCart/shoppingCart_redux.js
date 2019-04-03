/* *************************
 * @author:       冯炎
 * @update:       20171201
 * @description:  获取购物车数量
 * ************************/
const SHOPPING_CART_LOADING = 'SHOPPING_CART/LOADING';
const SHOPPING_CART_FAIL = 'SHOPPING_CART/FAIL';
const SHOPPING_CART_SUCCESS = 'SHOPPING_CART/SUCCESS';
export default function (state = {loading: false}, action = {}) {
  switch (action.type) {
    case SHOPPING_CART_LOADING:
      return {
        ...state,
        loading: true
      };
    case SHOPPING_CART_SUCCESS:
      return {
        ...state,
        loading: false,
        loaded: true,
        data: action.result
      };
    case SHOPPING_CART_FAIL:
      return {
        ...state,
        loading: false,
        loaded: false,
      };
    default:
      return state
  }
}
export function getShoppingCartCountAction() {
  return {
    types: [SHOPPING_CART_LOADING, SHOPPING_CART_SUCCESS, SHOPPING_CART_FAIL],
    promise: (client) => client.get('cart/mall/cart/queryCartItemNum')
  };
}
