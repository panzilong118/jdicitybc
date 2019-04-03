/* *************************
 * @author: FengYan
 * @update: 20170601
 * @description:获取登录信息
 * ************************/
const GET_CODE_LOADING = 'TOP_TOOLS/GET_CODE/LOADING';
const GET_CODE_FAIL = 'TOP_TOOLS/GET_CODE/FAIL';
const GET_CODE_SUCCESS = 'TOP_TOOLS/GET_CODE/SUCCESS';
export default function (state = {loading: false}, action = {}) {
  switch (action.type) {
    case GET_CODE_LOADING:
      return {
        ...state,
        loading: true
      };
    case GET_CODE_SUCCESS:
      return {
        ...state,
        loading: false,
        loaded: true,
        data: action.result
      };
    case GET_CODE_FAIL:
      return {
        ...state,
        loading: false,
        loaded: false,
      };
    default:
      return state
  }
}
export function getCodeAction() {
  return {
    types: [GET_CODE_LOADING, GET_CODE_SUCCESS, GET_CODE_FAIL],
    promise: (client) => client.get('/platform-service/mall/mobileconfig/queryAppDownUrlById')
  };
}
