/*
 * author: 冯炎
 * update: 20181011
 * description: 获取buyer,shop头部我的商城下菜单
 */
const LOAD = 'TOP_TOOLS_BUSINESS_MENU/LOAD';
const LOAD_SUCCESS = 'TOP_TOOLS_BUSINESS_MENU/LOAD_SUCCESS';
const LOAD_FAIL = 'TOP_TOOLS_BUSINESS_MENU/LOAD_FAIL';

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
                data: action.data,
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

export function getBusinessMenuAction() {
    return {
        types: [LOAD, LOAD_SUCCESS, LOAD_FAIL],
        promise: ( client ) => client.get('/authority-service/mall/business/queryBusinessMenuList').then((ret)=>{return ret.data})
    };
}