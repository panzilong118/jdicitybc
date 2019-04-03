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
    case SELECT_GOODS_SEARCH_LOADING:
      return (0, _extends3.default)({}, state, {
        loading: true,
        loaded: false
      });
    case SELECT_GOODS_SEARCH_SUCCESS:
      debugger;
      return (0, _extends3.default)({}, state, {
        loading: false,
        loaded: true,
        data: action.result
      });
    case SELECT_GOODS_SEARCH_FAIL:
      debugger;
      return (0, _extends3.default)({}, state, {
        loading: false,
        loaded: false,
        error: action.msg
      });
    case SELECT_GOODS_SEARCH_DATA:
      debugger;
      return (0, _extends3.default)({}, state, {
        searchdata: action
      });
    default:
      return state;
  }
};

exports.selectGoodsSearch = selectGoodsSearch;
exports.saveFormData = saveFormData;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Created by huangxiao3 on 2017/2/21.
 */
var SELECT_GOODS_SEARCH_LOADING = 'SELECT_GOODS/SELECT_GOODS_SEARCH/SELECT_GOODS_SEARCH_LOADING';
var SELECT_GOODS_SEARCH_FAIL = 'SELECT_GOODS/SELECT_GOODS_SEARCH/SELECT_GOODS_SEARCH_FAIL';
var SELECT_GOODS_SEARCH_SUCCESS = 'SELECT_GOODS/SELECT_GOODS_SEARCH/SELECT_GOODS_SEARCH_SUCCESS';

var SELECT_GOODS_SEARCH_DATA = 'SELECT_GOODS/SELECT_GOODS_SEARCH/SELECT_GOODS_SEARCH_DATA';

function selectGoodsSearch(values) {
  return {
    types: [SELECT_GOODS_SEARCH_LOADING, SELECT_GOODS_SEARCH_SUCCESS, SELECT_GOODS_SEARCH_FAIL],
    promise: function promise(client) {
      return client.get('/item/seller/supplier/querySellSupplyItems', { params: values });
    }
    /*promise: (client) => client.get('/supplyTestData.json',{params:values})*/
  };
}

function saveFormData(values) {
  debugger;
  return {
    type: SELECT_GOODS_SEARCH_DATA,
    searchdata: values
  };
}
//# sourceMappingURL=redux.js.map