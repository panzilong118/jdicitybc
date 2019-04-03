const PERMISSIONS_LOADING = "express/permissions/PERMISSIONS_LOADING";
const PERMISSIONS_SUCCESS = "express/permissions/PERMISSIONS_SUCCESS";
const PERMISSIONS_FAIL = "express/permissions/PERMISSIONS_FAIL";

export default function (state={},action={}){
  switch(action.type){
    case PERMISSIONS_LOADING:
      return {
        ...state,
        loading:true
      };
    case PERMISSIONS_SUCCESS:
      console.log(action.result);
      return {
        ...state,
        loading:false,
        loaded:true,
        data:action.result
      };
    case PERMISSIONS_FAIL:
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

export function getPermissionsInfo (params){
  return {
    types:[PERMISSIONS_LOADING,PERMISSIONS_SUCCESS,PERMISSIONS_FAIL],
    promise:client=>client.get('/passport/register/getUuid',{params})
  }
}
