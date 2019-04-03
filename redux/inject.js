"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _create = require("./create");

(function () {
  var enterModule = require('react-hot-loader').enterModule;

  enterModule && enterModule(module);
})();

var _default = function _default(reducers) {
  return function (ComposedComponent) {
    var _getStore = (0, _create.getStore)(),
        inject = _getStore.inject;

    inject(reducers);
    return ComposedComponent;
  };
};

exports.default = _default;
;

(function () {
  var reactHotLoader = require('react-hot-loader').default;

  var leaveModule = require('react-hot-loader').leaveModule;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(_default, "default", "../../src/redux/inject.js");
  leaveModule(module);
})();

;
module.exports = exports["default"];
//# sourceMappingURL=inject.js.map