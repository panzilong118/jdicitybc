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
    case FIRST_CATEGORY_LOADING:
      return (0, _extends3.default)({}, state, {
        first: (0, _extends3.default)({}, state.first, {
          firstloaded: false,
          loading: true
        })
      });
    case SECOND_CATEGORY_LOADING:
      return (0, _extends3.default)({}, state, {
        second: (0, _extends3.default)({}, state.second, {
          secondloaded: false,
          loading: true
        })
      });
    case THIRD_CATEGORY_LOADING:
      return (0, _extends3.default)({}, state, {
        third: (0, _extends3.default)({}, state.third, {
          thirdloaded: false,
          loading: true
        })
      });
    case FOUR_CATEGORY_LOADING:
      return (0, _extends3.default)({}, state, {
        four: (0, _extends3.default)({}, state.four, {
          fourloaded: false,
          loading: true
        })
      });
    case FIRST_CATEGORY_SUCCESS:
      return (0, _extends3.default)({}, state, {
        first: {
          loading: false,
          firstloaded: true,
          data: action.result
        }
      });
    case FIRST_CATEGORY_FAIL:
      return (0, _extends3.default)({}, state, {
        first: {
          loading: false,
          firstloaded: false,
          error: action.msg
        }
      });
    case SECOND_CATEGORY_SUCCESS:
      return (0, _extends3.default)({}, state, {
        second: {
          loading: false,
          secondloaded: true,
          data: action.result
        }
      });
    case SECOND_CATEGORY_FAIL:
      return (0, _extends3.default)({}, state, {
        second: {
          loading: false,
          secondloaded: false,
          error: action.msg
        }
      });
    case THIRD_CATEGORY_SUCCESS:
      return (0, _extends3.default)({}, state, {
        third: {
          loading: false,
          thirdloaded: true,
          data: action.result
        }
      });
    case THIRD_CATEGORY_FAIL:
      return (0, _extends3.default)({}, state, {
        third: {
          loading: false,
          thirdloaded: false,
          error: action.msg
        }
      });
    case FOUR_CATEGORY_SUCCESS:
      return (0, _extends3.default)({}, state, {
        four: {
          loading: false,
          fourloaded: true,
          data: action.result
        }
      });
    case FOUR_CATEGORY_FAIL:
      return (0, _extends3.default)({}, state, {
        four: {
          loading: false,
          fourloaded: false,
          error: action.msg
        }
      });
    case First_CATEGORY_CLEAR:
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
    case SECOND_CATEGORY_CLEAR:
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
    case THIRD_CATEGORY_CLEAR:
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

var FIRST_CATEGORY_SUCCESS = 'item/categoryCascade/FIRST_CATEGORY_SUCCESS';
var FIRST_CATEGORY_FAIL = 'item/categoryCascade/FIRST_CATEGORY_FAIL';
var SECOND_CATEGORY_SUCCESS = 'item/categoryCascade/SECOND_CATEGORY_SUCCESS';
var SECOND_CATEGORY_FAIL = 'item/categoryCascade/SECOND_CATEGORY_FAIL';
var THIRD_CATEGORY_SUCCESS = 'item/categoryCascade/THIRD_CATEGORY_SUCCESS';
var THIRD_CATEGORY_FAIL = 'item/categoryCascade/THIRD_CATEGORY_FAIL';
var FOUR_CATEGORY_SUCCESS = 'item/categoryCascade/FOUR_CATEGORY_SUCCESS';
var FOUR_CATEGORY_FAIL = 'item/categoryCascade/FOUR_CATEGORY_FAIL';
var FIRST_CATEGORY_LOADING = 'item/categoryCascade/FIRST_CATEGORY_LOADING';
var SECOND_CATEGORY_LOADING = 'item/categoryCascade/SECOND_CATEGORY_LOADING';
var THIRD_CATEGORY_LOADING = 'item/categoryCascade/THIRD_CATEGORY_LOADING';
var FOUR_CATEGORY_LOADING = 'item/categoryCascade/FOUR_CATEGORY_LOADING';
var First_CATEGORY_CLEAR = 'item/categoryCascade/First_CATEGORY_CLEAR';
var SECOND_CATEGORY_CLEAR = 'item/categoryCascade/SECOND_CATEGORY_CLEAR';
var THIRD_CATEGORY_CLEAR = 'item/categoryCascade/THIRD_CATEGORY_CLEAR';

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
    types: [FIRST_CATEGORY_LOADING, FIRST_CATEGORY_SUCCESS, FIRST_CATEGORY_FAIL],
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
    types: [SECOND_CATEGORY_LOADING, SECOND_CATEGORY_SUCCESS, SECOND_CATEGORY_FAIL],
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
    types: [THIRD_CATEGORY_LOADING, THIRD_CATEGORY_SUCCESS, THIRD_CATEGORY_FAIL],
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
    types: [FOUR_CATEGORY_LOADING, FOUR_CATEGORY_SUCCESS, FOUR_CATEGORY_FAIL],
    promise: function promise(client) {
      return client.get(url, { params: { parentCategoryId: cid } });
    }
  };
}
function clearData(level) {
  var type = void 0;
  if (level == 1) {
    type = First_CATEGORY_CLEAR;
  } else if (level == 2) {
    type = SECOND_CATEGORY_CLEAR;
  } else if (level == 3) {
    type = THIRD_CATEGORY_CLEAR;
  }
  return {
    type: type
  };
}
//# sourceMappingURL=redux.js.map