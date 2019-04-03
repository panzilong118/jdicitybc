'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends2 = require('babel-runtime/helpers/extends');

var _extends3 = _interopRequireDefault(_extends2);

exports.default = function () {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  var action = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

  switch (action.type) {
    case SALE_CUSTOMER_LABEL_LOAD:
      return (0, _extends3.default)({}, state, {
        loading: true
      });
    case SALE_CUSTOMER_LABEL_SUCCESS:
      return (0, _extends3.default)({}, state, {
        loading: false,
        loaded: true,
        data: action.result
      });
    case SALE_CUSTOMER_LABEL_FAIL:
      return (0, _extends3.default)({}, state, {
        loading: false,
        loaded: true,
        error: action.msg
      });
    case SALE_REGIONAL_PRICE_STOCK_LOAD:
      return (0, _extends3.default)({}, state, {
        loading: true
      });
    case SALE_REGIONAL_PRICE_STOCK_SUCCESS:
      return (0, _extends3.default)({}, state, {
        loading: false,
        loaded: true,
        data: action.result
      });
    case SALE_REGIONAL_PRICE_STOCK_FAIL:
      return (0, _extends3.default)({}, state, {
        loading: false,
        loaded: true,
        error: action.msg
      });
    case GETPERFECT_GOODSMSG:
      return (0, _extends3.default)({}, state);
    case GETPERFECT_GOODSMSG_SUCCESS:
      return (0, _extends3.default)({}, state, {
        shopInfoData: action.result.data
      });
    case GETPERFECT_GOODSMSG_FAIL:
      return (0, _extends3.default)({}, state, {
        error: action.msg
      });
    default:
      return state;
  }
};

exports.getRegionalPriceStock = getRegionalPriceStock;
exports.queryShopInfo = queryShopInfo;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var SALE_CUSTOMER_LABEL_LOAD = 'SALE_CUSTOMER_LABEL_LOAD';
var SALE_CUSTOMER_LABEL_SUCCESS = 'SALE_CUSTOMER_LABEL_SUCCESS';
var SALE_CUSTOMER_LABEL_FAIL = 'SALE_CUSTOMER_LABEL_FAIL';

var SALE_REGIONAL_PRICE_STOCK_LOAD = 'SALE_REGIONAL_PRICE_STOCK_LOAD';
var SALE_REGIONAL_PRICE_STOCK_SUCCESS = 'SALE_REGIONAL_PRICE_STOCK_SUCCESS';
var SALE_REGIONAL_PRICE_STOCK_FAIL = 'SALE_REGIONAL_PRICE_STOCK_FAIL';

var GETPERFECT_GOODSMSG = 'GETPERFECT_GOODSMSG',
    GETPERFECT_GOODSMSG_SUCCESS = 'GETPERFECT_GOODSMSG_SUCCESS',
    GETPERFECT_GOODSMSG_FAIL = 'GETPERFECT_GOODSMSG_FAIL';

// export function getCustomerLabel (param) {
//     return {
//       types: [SALE_CUSTOMER_LABEL_LOAD, SALE_CUSTOMER_LABEL_SUCCESS, SALE_CUSTOMER_LABEL_FAIL],
//       promise: (client) => client.get('/shop/seller/customerlabel/queryCustomerLabelListByShopId', {params: param})
//     };
//   }

function getRegionalPriceStock(param) {
  return {
    types: [SALE_REGIONAL_PRICE_STOCK_LOAD, SALE_REGIONAL_PRICE_STOCK_SUCCESS, SALE_REGIONAL_PRICE_STOCK_FAIL],
    promise: function promise(client) {
      return client.get('/shop/seller/addressRange/queryAllSellAreaForShop', { params: param });
    }
  };
}

//查询分组价
function queryShopInfo(param) {
  return {
    types: [GETPERFECT_GOODSMSG, GETPERFECT_GOODSMSG_SUCCESS, GETPERFECT_GOODSMSG_FAIL],
    promise: function promise(client) {
      return client.get('/shop/seller/customerlabel/queryCustomerLabelListByShopId', {
        params: param
      });
    }
  };
}
//# sourceMappingURL=redux.js.map