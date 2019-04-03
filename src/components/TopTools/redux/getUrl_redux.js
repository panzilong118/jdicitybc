/**************************
 * @author: FengYan
 * @update: 20170616
 * @description:获取地址
 *************************/
const GET_URL_LOADING = 'TOP_TOOLS/GET_URL/LOADING';
const GET_URL_FAIL = 'TOP_TOOLS/GET_URL/FAIL';
const GET_URL_SUCCESS = 'TOP_TOOLS/GET_URL/SUCCESS';
export default function (state = {loading:false}, action = {}) {
  switch (action.type) {
   case GET_URL_LOADING:
     return {
       ...state,
       loading:true
     };
    case GET_URL_SUCCESS:
      return {
        ...state,
        loading: false,
        loaded: true,
        data: action.result
      };
    case GET_URL_FAIL:
      return {
        ...state,
        loading: false,
        loaded: false,
      };
    default:
      return state
  }
}
export function getUrlAction() {
  return {
    types: [GET_URL_LOADING, GET_URL_SUCCESS, GET_URL_FAIL],
    promise: (client) => client.get('passport/logout')
  };
}
