const FUNC_PERMISSIONS_LOADING = "func/permissions/PERMISSIONS_LOADING";
const FUNC_PERMISSIONS_SUCCESS = "func/permissions/PERMISSIONS_SUCCESS";
const FUNC_PERMISSIONS_FAIL = "func/permissions/PERMISSIONS_FAIL";

export default function (state={},action={}){
  switch(action.type){
    case FUNC_PERMISSIONS_LOADING:
      return {
        ...state,
        loading:true
      };
    case FUNC_PERMISSIONS_SUCCESS:
      console.log(action.result);
      return {
        ...state,
        loading:false,
        loaded:true,
        data:action.result
      };
    case FUNC_PERMISSIONS_FAIL:
      return {
        ...state,
        loading:false,
        loaded:false,
        error:action.msg
      };
    default:
      return state;
  }
}
// 根据name获取cookie值
function getCookieByArray(name){
  if(typeof document !== 'undefined'){
    var cookies = document.cookie.split(';');
    var c;
    for(var i=0; i<cookies.length ; i++){
      c = cookies[i].split('=');
      if (c[0].replace(' ', '') == name) {
        return c[1];
      }
    }
  }else{
    return null;
  }
}
export function getPlatformFuncPermission(){
  return {
    types:[FUNC_PERMISSIONS_LOADING,FUNC_PERMISSIONS_SUCCESS,FUNC_PERMISSIONS_FAIL],
    promise:client=>client.get('authority/platform/resource/queryResourceByCodeOrRefer')
  }
}
export function getFuncPermission(){
  return {
    types:[FUNC_PERMISSIONS_LOADING,FUNC_PERMISSIONS_SUCCESS,FUNC_PERMISSIONS_FAIL],
    promise:client=>client.get('/authority/mall/resource/queryResourceByCodeOrRefer',{ params: {shopType:getCookieByArray('shopType')} })
  }
}
//获取子页面的动作权限
export function getSubPageFuncPermission(){
    let codes = this.props.routing.locationBeforeTransitions.query.codes;
    var codesArray = codes &&  codes.split(",") || [];

}
