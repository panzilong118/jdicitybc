/*
 * author: 冯炎
 * update: 20170731
 * description: 获取页面中组件方法
 */
const LOAD = 'PERSONALCENTER/COMPONENTS/LOAD';
const LOAD_SUCCESS = 'PERSONALCENTER/COMPONENTS/LOAD_SUCCESS';
const LOAD_FAIL = 'PERSONALCENTER/COMPONENTS/LOAD_FAIL';

export default function (state = {loaded: false}, action = {}) {
  switch (action.type) {
    case LOAD:
      return {
        ...state,
        loaded: false,
        loading: true
      };
    case LOAD_SUCCESS:
      return {
        ...state,
        components: action.result,
        loading: false,
        loaded: true
      };
    case LOAD_FAIL:
      return {
        ...state,
        loading: false,
        loaded: false,
        error: action.error
      };
    default:
      return state;
  }
}
export function getTitleForHookAction() {
  return {
    types: [LOAD, LOAD_SUCCESS, LOAD_FAIL],
    promise: (client) => client.get('/module-manage-service/operating/component/queryComponentByHookName?hookName=HOOK_COMMON_FRAME_TITLE').then((ret) => {
      return ret.data
    })
  };
}
