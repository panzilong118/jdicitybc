const CRUMBS_LOADING = 'CRUMBS_LOADING';
const CRUMBS_FAIL = 'CRUMBS_FAIL';
const CRUMBS_BUYER_SUCCESS = 'CRUMBS_SUCCESS';
const CRUMBS_SHOP_SUCCESS = 'CRUMBS_SUCCESS';
const CRUMBS_OPERATING_SUCCESS = 'CRUMBS_SUCCESS';

export default function (state = {loading:false}, action = {}) {
  switch (action.type) {
    case CRUMBS_BUYER_SUCCESS:
      return {
        ...state,
        loading: false,
        loaded: true,
        buyer: action.result,
      };

    case CRUMBS_SHOP_SUCCESS:
      return {
        ...state,
        loading: false,
        loaded: true,
        shop: action.result,
      };

    case CRUMBS_OPERATING_SUCCESS:
      return {
        ...state,
        loading: false,
        loaded: true,
        operating: action.result,
      };

    case CRUMBS_FAIL:
      return {
        ...state,
        loading: false,
        loaded: true,
        error: action.msg,
      };
    case CRUMBS_LOADING:
      return{
        ...state,
        loading: true,
        loaded: false,
      };
    default:
      return state
  }
}

export function queryResourceMenuByBuyId (values) {
  return {
    types: [CRUMBS_LOADING, CRUMBS_BUYER_SUCCESS, CRUMBS_FAIL],
    promise: (client) => client.get('/authority-service/mall/resource/queryResourceMenuByBuyId',{params:values})
  }
}


export function queryResourceMenuBySellerId (values) {
    return {
        types: [CRUMBS_LOADING, CRUMBS_SHOP_SUCCESS, CRUMBS_FAIL],
        promise: (client) => client.get('/authority-service/mall/resource/queryResourceMenuBySellerId',{params:values})
    }
}

export function queryResourceMenuByOwnerType (values) {
  return {
      types: [CRUMBS_LOADING, CRUMBS_SHOP_SUCCESS, CRUMBS_FAIL],
      promise: (client) => client.get('/authority-service/mall/resource/queryResourceMenuByOwnerType',{params:values})
  }
}

export function queryResourceMenuByCompanyId (values) {
  return {
      types: [CRUMBS_LOADING, CRUMBS_BUYER_SUCCESS, CRUMBS_FAIL],
      promise: (client) => client.get('/authority-service/mall/resource/queryResourceMenuByCompanyId',{params:values})
  }
}

export function queryResourceMenuByPuserId (values) {
    return {
        types: [CRUMBS_LOADING, CRUMBS_OPERATING_SUCCESS, CRUMBS_FAIL],
        promise: (client) => client.get('/authority-service/platform/resource/queryResourceMenuByPuserId',{params:values})
    }
}