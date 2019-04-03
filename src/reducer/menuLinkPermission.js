const MENULINK_PERMISSIONS_LOADING = "menuLink/permissions/PERMISSIONS_LOADING";
const MENULINK_PERMISSIONS_SUCCESS = "menuLink/permissions/PERMISSIONS_SUCCESS";
const MENULINK_PERMISSIONS_FAIL = "menuLink/permissions/PERMISSIONS_FAIL";

export default function (state={},action={}){
  switch(action.type){
    case MENULINK_PERMISSIONS_LOADING:
      return {
        ...state,
        loading:true
      };
    case MENULINK_PERMISSIONS_SUCCESS:
      console.log(action.result);
      return {
        ...state,
        loading:false,
        loaded:true,
        data:action.result
      };
    case MENULINK_PERMISSIONS_FAIL:
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

/*
*  商城  菜单动作权限
*  @param {owner: 采购商 buyer , 供应商 seller  移动端 buyerMobile}
*/
export function getMenuLinkPermission(params){
  return {
    types:[MENULINK_PERMISSIONS_LOADING,MENULINK_PERMISSIONS_SUCCESS,MENULINK_PERMISSIONS_FAIL],
    promise:client=>client.get('/authority/mall/resource/queryAllAuthByUserId', { params: params })
  }
}

/*
*  平台 菜单动作权限
*  参数：无
*/
export function getPlatformMenuLinkPermission(params){
  return {
    types:[MENULINK_PERMISSIONS_LOADING,MENULINK_PERMISSIONS_SUCCESS,MENULINK_PERMISSIONS_FAIL],
    promise:client=>client.get('/authority/platform/resource/queryAllAuthForPlatformByUserId', { params: params })
  }
}