/* *************************
 * @author: FengYan
 * @update: 20170601
 * @description:获取登录信息
 * ************************/
const IS_LOGIN_LOADING = 'TOP_TOOLS/IS_LOGIN/LOADING';
const IS_LOGIN_FAIL = 'TOP_TOOLS/IS_LOGIN/FAIL';
const IS_LOGIN_SUCCESS = 'TOP_TOOLS/IS_LOGIN/SUCCESS';
export default function (state = {loading: false}, action = {}) {
  switch (action.type) {
    case IS_LOGIN_LOADING:
      return {
        ...state,
        loading: true
      };
    case IS_LOGIN_SUCCESS:
      return {
        ...state,
        loading: false,
        loaded: true,
        data: action.result
      };
    case IS_LOGIN_FAIL:
      return {
        ...state,
        loading: false,
        loaded: false,
      };
    default:
      return state
  }
}
export function getLoginAction() {
  return {
    types: [IS_LOGIN_LOADING, IS_LOGIN_SUCCESS, IS_LOGIN_FAIL],
    promise: (client) => client.get('/passport/mall/account/queryUserById')
  };
}
