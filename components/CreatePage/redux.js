'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends2 = require('babel-runtime/helpers/extends');

var _extends3 = _interopRequireDefault(_extends2);

exports.default = function () {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : { loading: false };
  var action = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

  switch (action.type) {
    case CREATE_TABLE_SUCCESS:
      return (0, _extends3.default)({}, state, {
        loading: false,
        loaded: true,
        data: action.result
      });

    case QUERY_COL_SUCCESS:
      return (0, _extends3.default)({}, state, {
        loading: false,
        loaded: true,
        col: action.result
      });

    case CREATE_TABLE_FAIL:
      return (0, _extends3.default)({}, state, {
        loading: false,
        loaded: true,
        error: action.msg
      });
    case CREATE_TABLE_LOADING:
      return (0, _extends3.default)({}, state, {
        loading: true,
        loaded: false
      });
    default:
      return state;
  }
};

exports.query = query;
exports.queryCol = queryCol;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var CREATE_TABLE_LOADING = 'CREATE_TABLE_LOADING';
var CREATE_TABLE_FAIL = 'CREATE_TABLE_FAIL';
var CREATE_TABLE_SUCCESS = 'CREATE_TABLE_SUCCESS';

var QUERY_COL_SUCCESS = 'QUERY_COL_SUCCESS';

function query(url, values) {
  return {
    types: [CREATE_TABLE_LOADING, CREATE_TABLE_SUCCESS, CREATE_TABLE_FAIL],
    promise: function promise(client) {
      return client.get(url, { params: values });
    }
  };
}

function queryCol(url, values) {
  return {
    types: [CREATE_TABLE_LOADING, QUERY_COL_SUCCESS, CREATE_TABLE_FAIL],
    promise: function promise(client) {
      return client.get(url, { params: values });
    }
  };
}
//# sourceMappingURL=redux.js.map