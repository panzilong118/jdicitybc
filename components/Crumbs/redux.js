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
    case CRUMBS_BUYER_SUCCESS:
      return (0, _extends3.default)({}, state, {
        loading: false,
        loaded: true,
        buyer: action.result
      });

    case CRUMBS_SHOP_SUCCESS:
      return (0, _extends3.default)({}, state, {
        loading: false,
        loaded: true,
        shop: action.result
      });

    case CRUMBS_OPERATING_SUCCESS:
      return (0, _extends3.default)({}, state, {
        loading: false,
        loaded: true,
        operating: action.result
      });

    case CRUMBS_FAIL:
      return (0, _extends3.default)({}, state, {
        loading: false,
        loaded: true,
        error: action.msg
      });
    case CRUMBS_LOADING:
      return (0, _extends3.default)({}, state, {
        loading: true,
        loaded: false
      });
    default:
      return state;
  }
};

exports.queryResourceMenuByBuyId = queryResourceMenuByBuyId;
exports.queryResourceMenuBySellerId = queryResourceMenuBySellerId;
exports.queryResourceMenuByOwnerType = queryResourceMenuByOwnerType;
exports.queryResourceMenuByCompanyId = queryResourceMenuByCompanyId;
exports.queryResourceMenuByPuserId = queryResourceMenuByPuserId;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var CRUMBS_LOADING = 'CRUMBS_LOADING';
var CRUMBS_FAIL = 'CRUMBS_FAIL';
var CRUMBS_BUYER_SUCCESS = 'CRUMBS_SUCCESS';
var CRUMBS_SHOP_SUCCESS = 'CRUMBS_SUCCESS';
var CRUMBS_OPERATING_SUCCESS = 'CRUMBS_SUCCESS';

function queryResourceMenuByBuyId(values) {
  return {
    types: [CRUMBS_LOADING, CRUMBS_BUYER_SUCCESS, CRUMBS_FAIL],
    promise: function promise(client) {
      return client.get('/authority-service/mall/resource/queryResourceMenuByBuyId', { params: values });
    }
  };
}

function queryResourceMenuBySellerId(values) {
  return {
    types: [CRUMBS_LOADING, CRUMBS_SHOP_SUCCESS, CRUMBS_FAIL],
    promise: function promise(client) {
      return client.get('/authority-service/mall/resource/queryResourceMenuBySellerId', { params: values });
    }
  };
}

function queryResourceMenuByOwnerType(values) {
  return {
    types: [CRUMBS_LOADING, CRUMBS_SHOP_SUCCESS, CRUMBS_FAIL],
    promise: function promise(client) {
      return client.get('/authority-service/mall/resource/queryResourceMenuByOwnerType', { params: values });
    }
  };
}

function queryResourceMenuByCompanyId(values) {
  return {
    types: [CRUMBS_LOADING, CRUMBS_BUYER_SUCCESS, CRUMBS_FAIL],
    promise: function promise(client) {
      return client.get('/authority-service/mall/resource/queryResourceMenuByCompanyId', { params: values });
    }
  };
}

function queryResourceMenuByPuserId(values) {
  return {
    types: [CRUMBS_LOADING, CRUMBS_OPERATING_SUCCESS, CRUMBS_FAIL],
    promise: function promise(client) {
      return client.get('/authority-service/platform/resource/queryResourceMenuByPuserId', { params: values });
    }
  };
}
//# sourceMappingURL=redux.js.map