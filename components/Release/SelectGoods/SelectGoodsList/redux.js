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
    /*    case INSERT_SUPPLY_ITEM_LOADING:
     return {
     ...state,
     };*/
    case INSERT_SUPPLY_ITEM_SUCCESS:
      // debugger;
      return (0, _extends3.default)({}, state, {
        loading: false,
        loaded: true,
        data: action.result
      });
    case INSERT_SUPPLY_ITEM_FAIL:
      // debugger;
      return (0, _extends3.default)({}, state, {
        loading: false,
        loaded: false,
        error: action.msg
      });
    default:
      return state;
  }
};

exports.insertShopSupplyItemInfo = insertShopSupplyItemInfo;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Created by huangxiao3 on 2017/2/21.
 */
var INSERT_SUPPLY_ITEM_LOADING = 'SELECT_GOODS/INSERT_SUPPLY_ITEM/INSERT_SUPPLY_ITEM_LOADING';
var INSERT_SUPPLY_ITEM_FAIL = 'SELECT_GOODS/INSERT_SUPPLY_ITEM/INSERT_SUPPLY_ITEM_FAIL';
var INSERT_SUPPLY_ITEM_SUCCESS = 'SELECT_GOODS/INSERT_SUPPLY_ITEM/INSERT_SUPPLY_ITEM_SUCCESS';

function insertShopSupplyItemInfo(values) {
  // debugger;
  return {
    types: [INSERT_SUPPLY_ITEM_LOADING, INSERT_SUPPLY_ITEM_SUCCESS, INSERT_SUPPLY_ITEM_FAIL],
    promise: function promise(client) {
      return client.post('/item/seller/supplier/insertShopSupplyItemInfo', { data: values });
    }
    /*promise: (client) => client.get('/supplyTestData.json',{params:values})*/
  };
}
//# sourceMappingURL=redux.js.map