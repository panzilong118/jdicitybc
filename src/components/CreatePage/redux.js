const CREATE_TABLE_LOADING = 'CREATE_TABLE_LOADING';
const CREATE_TABLE_FAIL = 'CREATE_TABLE_FAIL';
const CREATE_TABLE_SUCCESS = 'CREATE_TABLE_SUCCESS';

const QUERY_COL_SUCCESS = 'QUERY_COL_SUCCESS';

export default function (state = {loading:false}, action = {}) {
  switch (action.type) {
    case CREATE_TABLE_SUCCESS:
      return {
        ...state,
        loading: false,
        loaded: true,
        data: action.result,
      };

    case QUERY_COL_SUCCESS:
      return {
        ...state,
        loading: false,
        loaded: true,
        col: action.result,
      };

    case CREATE_TABLE_FAIL:
      return {
        ...state,
        loading: false,
        loaded: true,
        error: action.msg,
      };
    case CREATE_TABLE_LOADING:
      return{
        ...state,
        loading: true,
        loaded: false,
      };
    default:
      return state
  }
}

export function query (url, values) {
  return {
    types: [CREATE_TABLE_LOADING, CREATE_TABLE_SUCCESS, CREATE_TABLE_FAIL],
    promise: (client) => client.get(url, {params:values})
  }
}

export function queryCol (url, values) {
  return {
    types: [CREATE_TABLE_LOADING, QUERY_COL_SUCCESS, CREATE_TABLE_FAIL],
    promise: (client) => client.get(url, {params:values})
  }
}
