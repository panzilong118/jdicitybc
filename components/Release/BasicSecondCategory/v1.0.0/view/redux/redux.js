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
    case FIRST_SECOND_LOADING:
      return (0, _extends3.default)({}, state, {
        first: (0, _extends3.default)({}, state.first, {
          firstloaded: false,
          loading: true
        })
      });
    case SECOND_SECOND_LOADING:
      return (0, _extends3.default)({}, state, {
        second: (0, _extends3.default)({}, state.second, {
          secondloaded: false,
          loading: true
        })
      });
    case THIRD_SECOND_LOADING:
      return (0, _extends3.default)({}, state, {
        third: (0, _extends3.default)({}, state.third, {
          thirdloaded: false,
          loading: true
        })
      });
    case FOUR_SECOND_LOADING:
      return (0, _extends3.default)({}, state, {
        four: (0, _extends3.default)({}, state.four, {
          fourloaded: false,
          loading: true
        })
      });
    case FIRST_SECOND_SUCCESS:
      return (0, _extends3.default)({}, state, {
        first: {
          loading: false,
          firstloaded: true,
          data: action.result
        }
      });
    case FIRST_SECOND_FAIL:
      return (0, _extends3.default)({}, state, {
        first: {
          loading: false,
          firstloaded: false,
          error: action.msg
        }
      });
    case SECOND_SECOND_SUCCESS:
      return (0, _extends3.default)({}, state, {
        second: {
          loading: false,
          secondloaded: true,
          data: action.result
        }
      });
    case SECOND_SECOND_FAIL:
      return (0, _extends3.default)({}, state, {
        second: {
          loading: false,
          secondloaded: false,
          error: action.msg
        }
      });
    case THIRD_SECOND_SUCCESS:
      return (0, _extends3.default)({}, state, {
        third: {
          loading: false,
          thirdloaded: true,
          data: action.result
        }
      });
    case THIRD_SECOND_FAIL:
      return (0, _extends3.default)({}, state, {
        third: {
          loading: false,
          thirdloaded: false,
          error: action.msg
        }
      });
    case FOUR_SECOND_SUCCESS:
      return (0, _extends3.default)({}, state, {
        four: {
          loading: false,
          fourloaded: true,
          data: action.result
        }
      });
    case FOUR_SECOND_FAIL:
      return (0, _extends3.default)({}, state, {
        four: {
          loading: false,
          fourloaded: false,
          error: action.msg
        }
      });
    case First_SECOND_CLEAR:
      return (0, _extends3.default)({}, state, {
        second: {
          loading: false,
          data: {
            data: []
          }
        },
        third: {
          loading: false,
          data: {
            data: []
          }
        },
        four: {
          loading: false,
          data: {
            data: []
          }
        }
      });
    case SECOND_SECOND_CLEAR:
      return (0, _extends3.default)({}, state, {
        third: {
          loading: false,
          data: {
            data: []
          }
        },
        four: {
          loading: false,
          data: {
            data: []
          }
        }
      });
    case THIRD_SECOND_CLEAR:
      return (0, _extends3.default)({}, state, {
        four: {
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
exports.getThirdCid = getThirdCid;
exports.getFourCid = getFourCid;
exports.clearData = clearData;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var FIRST_SECOND_SUCCESS = 'item/categoryCascade/FIRST_SECOND_SUCCESS';
var FIRST_SECOND_FAIL = 'item/categoryCascade/FIRST_SECOND_FAIL';
var SECOND_SECOND_SUCCESS = 'item/categoryCascade/SECOND_SECOND_SUCCESS';
var SECOND_SECOND_FAIL = 'item/categoryCascade/SECOND_SECOND_FAIL';
var THIRD_SECOND_SUCCESS = 'item/categoryCascade/THIRD_SECOND_SUCCESS';
var THIRD_SECOND_FAIL = 'item/categoryCascade/THIRD_SECOND_FAIL';
var FOUR_SECOND_SUCCESS = 'item/categoryCascade/FOUR_SECOND_SUCCESS';
var FOUR_SECOND_FAIL = 'item/categoryCascade/FOUR_SECOND_FAIL';
var FIRST_SECOND_LOADING = 'item/categoryCascade/FIRST_SECOND_LOADING';
var SECOND_SECOND_LOADING = 'item/categoryCascade/SECOND_SECOND_LOADING';
var THIRD_SECOND_LOADING = 'item/categoryCascade/THIRD_SECOND_LOADING';
var FOUR_SECOND_LOADING = 'item/categoryCascade/FOUR_SECOND_LOADING';
var First_SECOND_CLEAR = 'item/categoryCascade/First_SECOND_CLEAR';
var SECOND_SECOND_CLEAR = 'item/categoryCascade/SECOND_SECOND_CLEAR';
var THIRD_SECOND_CLEAR = 'item/categoryCascade/THIRD_SECOND_CLEAR';

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
  },
  third: {
    loading: false,
    data: {
      data: []
    }
  },
  four: {
    loading: false,
    data: {
      data: []
    }
  }
};
function getFirstCid(cid, type) {
  var url = '';
  if (type == 1) {
    url = '/item/platform/category/getCategoriesByParentId';
  } else if (type == 2) {
    url = '/shop-service/seller/shopCategory/getShopCategoriesByParentId';
  } else {
    url = '/item/seller/category/getShopCategoriesByParentId';
  }
  return {
    types: [FIRST_SECOND_LOADING, FIRST_SECOND_SUCCESS, FIRST_SECOND_FAIL],
    promise: function promise(client) {
      return client.get(url, { params: { parentCategoryId: cid } });
    }
  };
}

function getSecondCid(cid, type) {
  var url = '';
  if (type == 1) {
    url = '/item/platform/category/getCategoriesByParentId';
  } else if (type == 2) {
    url = '/shop-service/seller/shopCategory/getShopCategoriesByParentId';
  } else {
    url = '/item/seller/category/getShopCategoriesByParentId';
  }
  return {
    types: [SECOND_SECOND_LOADING, SECOND_SECOND_SUCCESS, SECOND_SECOND_FAIL],
    promise: function promise(client) {
      return client.get(url, { params: { parentCategoryId: cid } });
    }
  };
}

function getThirdCid(cid, type) {
  var url = '';
  if (type == 1) {
    url = '/item/platform/category/getCategoriesByParentId';
  } else if (type == 2) {
    url = '/shop-service/seller/shopCategory/getShopCategoriesByParentId';
  } else {
    url = '/item/seller/category/getShopCategoriesByParentId';
  }
  return {
    types: [THIRD_SECOND_LOADING, THIRD_SECOND_SUCCESS, THIRD_SECOND_FAIL],
    promise: function promise(client) {
      return client.get(url, { params: { parentCategoryId: cid } });
    }
  };
}

function getFourCid(cid, type) {
  var url = '';
  if (type == 1) {
    url = '/item/platform/category/getCategoriesByParentId';
  } else if (type == 2) {
    url = '/shop-service/seller/shopCategory/getShopCategoriesByParentId';
  } else {
    url = '/item/seller/category/getShopCategoriesByParentId';
  }
  return {
    types: [FOUR_SECOND_LOADING, FOUR_SECOND_SUCCESS, FOUR_SECOND_FAIL],
    promise: function promise(client) {
      return client.get(url, { params: { parentCategoryId: cid } });
    }
  };
}
function clearData(level) {
  var type = void 0;
  if (level == 1) {
    type = First_SECOND_CLEAR;
  } else if (level == 2) {
    type = SECOND_SECOND_CLEAR;
  } else if (level == 3) {
    type = THIRD_SECOND_CLEAR;
  }
  return {
    type: type
  };
}
//# sourceMappingURL=redux.js.map