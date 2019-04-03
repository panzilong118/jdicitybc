'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends2 = require('babel-runtime/helpers/extends');

var _extends3 = _interopRequireDefault(_extends2);

exports.getDomain = getDomain;
exports.getAllDoamins = getAllDoamins;
exports.getDomainByType = getDomainByType;
exports.getMainDomain = getMainDomain;
exports.getPassportDomain = getPassportDomain;
exports.getPlatformPassportDomain = getPlatformPassportDomain;
exports.getMPassportDomain = getMPassportDomain;
exports.getShopDomain = getShopDomain;
exports.getBuyerDomain = getBuyerDomain;
exports.getMBuyerDomain = getMBuyerDomain;
exports.getPlatformDomain = getPlatformDomain;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

(function () {
  var enterModule = require('react-hot-loader').enterModule;

  enterModule && enterModule(module);
})();

var DOMAIN_LOADING = 'global/domain/loading';
var DOMAIN_LOAD_SUCCESS = 'global/domain/success';;
var DOMAIN_LOAD_FAIL = 'global/domain/fail';

var _default = function _default() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : { domains: [] };
  var action = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

  switch (action.type) {
    case DOMAIN_LOADING:
      return (0, _extends3.default)({}, state, {
        loading: true
      });
    case DOMAIN_LOAD_SUCCESS:
      return (0, _extends3.default)({}, state, {
        loading: false,
        loaded: true,
        domains: action.result.data
      });
    case DOMAIN_LOAD_FAIL:
      return (0, _extends3.default)({}, state, {
        loading: false,
        loaded: false,
        error: action.msg
      });
    default:
      return state;
  }
};

exports.default = _default;
function getDomain() {
  return {
    types: [DOMAIN_LOADING, DOMAIN_LOAD_SUCCESS, DOMAIN_LOAD_FAIL],
    promise: function promise(client) {
      return client.get('/passport/logout');
    }
  };
}
function getAllDoamins() {
  return function (dispatch, getState) {
    var domain = getState().domain;
    return domain.domains || [];
  };
}
function getDomainByType(type) {
  return function (dispatch, getState) {
    var domain = getState().domain;
    var domains = domain.domains || [];
    for (var i = 0; i < domains.length; i++) {
      if (domains[i].domainType == type) return domains[i].domain;
    }
    return "";
  };
}

function getMainDomain() {
  return function (dispatch, getState) {
    var domain = getState().domain;
    var domains = domain.domains || [];
    for (var i = 0; i < domains.length; i++) {
      if (domains[i].domainType == "1") return domains[i].domain;
    }
    return "";
  };
}
function getPassportDomain() {
  return function (dispatch, getState) {
    var domain = getState().domain;
    var domains = domain.domains || [];
    for (var i = 0; i < domains.length; i++) {
      if (domains[i].domainType == "5") return domains[i].domain;
    }
    return "";
  };
}
function getPlatformPassportDomain() {
  return function (dispatch, getState) {
    var domain = getState().domain;
    var domains = domain.domains || [];
    for (var i = 0; i < domains.length; i++) {
      if (domains[i].domainType == "9") return domains[i].domain;
    }
    return "";
  };
}
function getMPassportDomain() {
  return function (dispatch, getState) {
    var domain = getState().domain;
    var domains = domain.domains || [];
    for (var i = 0; i < domains.length; i++) {
      if (domains[i].domainType == "8") return domains[i].domain;
    }
    return "";
  };
}
function getShopDomain() {
  return function (dispatch, getState) {
    var domain = getState().domain;
    var domains = domain.domains || [];
    for (var i = 0; i < domains.length; i++) {
      if (domains[i].domainType == "3") return domains[i].domain;
    }
    return "";
  };
}
function getBuyerDomain() {
  return function (dispatch, getState) {
    var domain = getState().domain;
    var domains = domain.domains || [];
    for (var i = 0; i < domains.length; i++) {
      if (domains[i].domainType == "2") return domains[i].domain;
    }
    return "";
  };
}
function getMBuyerDomain() {
  return function (dispatch, getState) {
    var domain = getState().domain;
    var domains = domain.domains || [];
    for (var i = 0; i < domains.length; i++) {
      if (domains[i].domainType == "6") return domains[i].domain;
    }
    return "";
  };
}

function getPlatformDomain() {
  return function (dispatch, getState) {
    var domain = getState().domain;
    var domains = domain.domains || [];
    for (var i = 0; i < domains.length; i++) {
      if (domains[i].domainType == "4") return domains[i].domain;
    }
    return "";
  };
}
;

(function () {
  var reactHotLoader = require('react-hot-loader').default;

  var leaveModule = require('react-hot-loader').leaveModule;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(DOMAIN_LOADING, 'DOMAIN_LOADING', '../../src/reducer/domain.js');
  reactHotLoader.register(DOMAIN_LOAD_SUCCESS, 'DOMAIN_LOAD_SUCCESS', '../../src/reducer/domain.js');
  reactHotLoader.register(DOMAIN_LOAD_FAIL, 'DOMAIN_LOAD_FAIL', '../../src/reducer/domain.js');
  reactHotLoader.register(getDomain, 'getDomain', '../../src/reducer/domain.js');
  reactHotLoader.register(getAllDoamins, 'getAllDoamins', '../../src/reducer/domain.js');
  reactHotLoader.register(getDomainByType, 'getDomainByType', '../../src/reducer/domain.js');
  reactHotLoader.register(getMainDomain, 'getMainDomain', '../../src/reducer/domain.js');
  reactHotLoader.register(getPassportDomain, 'getPassportDomain', '../../src/reducer/domain.js');
  reactHotLoader.register(getPlatformPassportDomain, 'getPlatformPassportDomain', '../../src/reducer/domain.js');
  reactHotLoader.register(getMPassportDomain, 'getMPassportDomain', '../../src/reducer/domain.js');
  reactHotLoader.register(getShopDomain, 'getShopDomain', '../../src/reducer/domain.js');
  reactHotLoader.register(getBuyerDomain, 'getBuyerDomain', '../../src/reducer/domain.js');
  reactHotLoader.register(getMBuyerDomain, 'getMBuyerDomain', '../../src/reducer/domain.js');
  reactHotLoader.register(getPlatformDomain, 'getPlatformDomain', '../../src/reducer/domain.js');
  reactHotLoader.register(_default, 'default', '../../src/reducer/domain.js');
  leaveModule(module);
})();

;
//# sourceMappingURL=domain.js.map