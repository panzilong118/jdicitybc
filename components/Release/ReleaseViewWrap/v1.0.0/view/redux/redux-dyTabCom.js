'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends2 = require('babel-runtime/helpers/extends');

var _extends3 = _interopRequireDefault(_extends2);

exports.default = function () {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : { loaded: false };
  var action = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

  switch (action.type) {
    case LOAD:
      return (0, _extends3.default)({}, state, {
        loading: true
      });
    case LOAD_SUCCESS:
      return (0, _extends3.default)({}, state, {
        components: (0, _extends3.default)({}, action.result.data),
        loading: false,
        loaded: true
      });
    case LOAD_FAIL:
      return (0, _extends3.default)({}, state, {
        loading: false,
        loaded: false,
        error: action.error
      });
    default:
      return state;
  }
};

exports.loadTabComponents = loadTabComponents;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var LOAD = 'RELEASE/TABS-DYCOMPONENTS/LOAD';
var LOAD_SUCCESS = 'RELEASE/TABS-DYCOMPONENTS/LOAD_SUCCESS';
var LOAD_FAIL = 'RELEASE/TABS-DYCOMPONENTS/LOAD_FAIL';

function loadTabComponents(values) {
  var url = '';
  url = '/module-manage-service/operating/component/hookComponentListByPageUrl';
  // url = 'http://shop.eureka3.com/proxy1/findTabsCom.json'; //模拟json
  var params = {
    pageUrl: "/operating-item-view/product-release?template=" + values.templateId
  };
  return {
    types: [LOAD, LOAD_SUCCESS, LOAD_FAIL],
    promise: function promise(client) {
      return client.get(url, { params: params });
    }
  };
}
//# sourceMappingURL=redux-dyTabCom.js.map