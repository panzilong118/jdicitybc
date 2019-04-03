/* *************************
 * @author: FengYan
 * @update: 20170601
 * @description:获取登录信息
 * ************************/
const GET_TEL_LOADING = 'TOP_TOOLS/GET_TEL/LOADING';
const GET_TEL_FAIL = 'TOP_TOOLS/GET_TEL/FAIL';
const GET_TEL_SUCCESS = 'TOP_TOOLS/GET_TEL/SUCCESS';
export default function (state = {loading: false}, action = {}) {
  switch (action.type) {
    case GET_TEL_LOADING:
      return {
        ...state,
        loading: true
      };
    case GET_TEL_SUCCESS:
      return {
        ...state,
        loading: false,
        loaded: true,
        data: action.result
      };
    case GET_TEL_FAIL:
      return {
        ...state,
        loading: false,
        loaded: false,
      };
    default:
      return state
  }
}
export function getTelAction() {
  return {
    types: [GET_TEL_LOADING, GET_TEL_SUCCESS, GET_TEL_FAIL],
    promise: (client) => client.get('/platform-service/mall/customer/queryHotlineList')
  };
}
