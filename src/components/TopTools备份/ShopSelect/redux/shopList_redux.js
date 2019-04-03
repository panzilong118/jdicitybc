/* *************************
 * @author:       冯炎
 * @update:       20171201
 * @description:  获取店铺列表
 * ************************/
const GET_SHOP_LIST_LOADING = 'GET_SHOP_LIST/LOADING';
const GET_SHOP_LIST_FAIL = 'GET_SHOP_LIST/FAIL';
const GET_SHOP_LIST_SUCCESS = 'GET_SHOP_LIST/SUCCESS';
export default function (state = {loading: false}, action = {}) {
  switch (action.type) {
    case GET_SHOP_LIST_LOADING:
      return {
        ...state,
        loading: true
      };
    case GET_SHOP_LIST_SUCCESS:
      return {
        ...state,
        loading: false,
        loaded: true,
        data: action.result
      };
    case GET_SHOP_LIST_FAIL:
      return {
        ...state,
        loading: false,
        loaded: false,
      };
    default:
      return state
  }
}
export function getShopListAction() {
  return {
    types: [GET_SHOP_LIST_LOADING, GET_SHOP_LIST_SUCCESS, GET_SHOP_LIST_FAIL],
    promise: (client) => client.get('seller-assemble/mall/shopInfo/queryShopInfo')
  };
}
