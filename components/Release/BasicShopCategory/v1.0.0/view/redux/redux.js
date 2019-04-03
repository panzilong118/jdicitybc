'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends2 = require('babel-runtime/helpers/extends');

var _extends3 = _interopRequireDefault(_extends2);

exports.default = function () {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : defaultData;
  var action = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

  switch (action.type) {
    case FIRST_SHOP_LOADING:
      return (0, _extends3.default)({}, state, {
        first: (0, _extends3.default)({}, state.first, {
          firstloaded: false,
          loading: true
        })
      });
    case SECOND_SHOP_LOADING:
      return (0, _extends3.default)({}, state, {
        second: (0, _extends3.default)({}, state.second, {
          secondloaded: false,
          loading: true
        })
      });
    case FIRST_SHOP_SUCCESS:
      return (0, _extends3.default)({}, state, {
        first: {
          loading: false,
          firstloaded: true,
          data: action.result
        }
      });
    case FIRST_SHOP_FAIL:
      return (0, _extends3.default)({}, state, {
        first: {
          loading: false,
          firstloaded: false,
          error: action.msg
        }
      });
    case SECOND_SHOP_SUCCESS:
      return (0, _extends3.default)({}, state, {
        second: {
          loading: false,
          secondloaded: true,
          data: action.result
        }
      });
    case SECOND_SHOP_FAIL:
      return (0, _extends3.default)({}, state, {
        second: {
          loading: false,
          secondloaded: false,
          error: action.msg
        }
      });

    case First_SHOP_CLEAR:
      return (0, _extends3.default)({}, state, {
        second: {
          loading: false,
          data: {
            data: []
          }
        }
      });
    default:
      return state;
  }
};

exports.getFirstCid = getFirstCid;
exports.getSecondCid = getSecondCid;
exports.clearData = clearData;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var FIRST_SHOP_SUCCESS = 'item/categoryCascade/FIRST_SHOP_SUCCESS';
var FIRST_SHOP_LOADING = 'item/categoryCascade/FIRST_SHOP_LOADING';
var FIRST_SHOP_FAIL = 'item/categoryCascade/FIRST_SHOP_FAIL';

var SECOND_SHOP_SUCCESS = 'item/categoryCascade/SECOND_SHOP_SUCCESS';
var SECOND_SHOP_LOADING = 'item/categoryCascade/SECOND_SHOP_LOADING';
var SECOND_SHOP_FAIL = 'item/categoryCascade/SECOND_SHOP_FAIL';

var First_SHOP_CLEAR = 'item/categoryCascade/First_SHOP_CLEAR';

var defaultData = {
  first: {
    loading: false,
    data: {
      data: []
    }
  },
  second: {
    loading: false,
    data: {
      data: []
    }
  }
};
function getFirstCid(cid) {
  var url = '/shop/shopinfo/shopinfoCategory/queryCategoryByParentCid';
  return {
    types: [FIRST_SHOP_LOADING, FIRST_SHOP_SUCCESS, FIRST_SHOP_FAIL],
    promise: function promise(client) {
      return client.get(url, { params: { parentCid: cid } });
    }
  };
}

function getSecondCid(cid) {
  var url = '/shop/shopinfo/shopinfoCategory/queryCategoryByParentCid';
  return {
    types: [SECOND_SHOP_LOADING, SECOND_SHOP_SUCCESS, SECOND_SHOP_FAIL],
    promise: function promise(client) {
      return client.get(url, { params: { parentCid: cid } });
    }
  };
}

function clearData(level) {
  var type = void 0;
  if (level == 1) {
    type = First_SHOP_CLEAR;
  }
  return {
    type: type
  };
}
//# sourceMappingURL=redux.js.map