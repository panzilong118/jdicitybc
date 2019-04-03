/**************************
 * @author: FengYan
 * @update: 20170523
 * @description:获取一级地市接口
 *************************/
const GET_CITYS_LOADING = 'TOP_TOOLS/GET_CITYS/LOADING';
const GET_CITYS_FAIL = 'TOP_TOOLS/GET_CITYS/FAIL';
const GET_CITYS_SUCCESS = 'TOP_TOOLS/GET_CITYS/SUCCESS';
export default function (state = {loading:false}, action = {}) {
  switch (action.type) {
   case GET_CITYS_LOADING:
     return {
       ...state,
       loading:true
     };
    case GET_CITYS_SUCCESS:
      return {
        ...state,
        loading: false,
        loaded: true,
        data: action.result
      };
    case GET_CITYS_FAIL:
      return {
        ...state,
        loading: false,
        loaded: false,
      };
    default:
      return state
  }
}
const VALUES = {platformId:2,addressCode:0};
export function getCitysAction () {
  return {
    types: [GET_CITYS_LOADING, GET_CITYS_SUCCESS, GET_CITYS_FAIL],
    promise: (client) => client.get('/base/address/queryAddressListByCode',{params:VALUES})
  }
}
