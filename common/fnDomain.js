"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

(function () {
  var enterModule = require('react-hot-loader').enterModule;

  enterModule && enterModule(module);
})();

/**
 * 为商城提供域名
 * @param {*域名数据源} domainArrDS
 */
function fnDomain(domainArrDS) {
  var domainlist = {};
  var domainArr = domainArrDS && domainArrDS instanceof Array ? domainArrDS : [];
  for (var i = 0; i < domainArr.length; i++) {
    if (domainArr[i].domainType == 1) {
      domainlist.main = domainArr[i].domain;
    }
    if (domainArr[i].domainType == 2) {
      domainlist.buyer = domainArr[i].domain;
    }
    if (domainArr[i].domainType == 3) {
      domainlist.shop = domainArr[i].domain;
    }
    if (domainArr[i].domainType == 4) {
      domainlist.platform = domainArr[i].domain;
    }
    if (domainArr[i].domainType == 5) {
      domainlist.passport = domainArr[i].domain;
    }
    if (domainArr[i].domainType == 6) {
      domainlist.mBuyer = domainArr[i].domain;
    }
    if (domainArr[i].domainType == 7) {
      domainlist.mShop = domainArr[i].domain;
    }
    if (domainArr[i].domainType == 8) {
      domainlist.mPassport = domainArr[i].domain;
    }
    if (domainArr[i].domainType == 13) {
      domainlist.mMain = domainArr[i].domain;
    }
  }
  return domainlist;
}

var _default = fnDomain;
exports.default = _default;
;

(function () {
  var reactHotLoader = require('react-hot-loader').default;

  var leaveModule = require('react-hot-loader').leaveModule;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(fnDomain, "fnDomain", "../../src/common/fnDomain.js");
  reactHotLoader.register(_default, "default", "../../src/common/fnDomain.js");
  leaveModule(module);
})();

;
module.exports = exports["default"];
//# sourceMappingURL=fnDomain.js.map