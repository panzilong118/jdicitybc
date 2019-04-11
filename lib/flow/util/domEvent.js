'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.saftyEventListener = exports.stopPropagation = undefined;

var _validate = require('./validate');

// stop event propagation
var stopPropagation = exports.stopPropagation = function stopPropagation(handler) {
  for (var _len = arguments.length, args = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
    args[_key - 1] = arguments[_key];
  }

  return function (e) {
    e.stopPropagation();
    return _validate.validFunc.apply(undefined, [handler].concat(args));
  };
}; /**
    * domcument event prehandler
    */
var saftyEventListener = exports.saftyEventListener = {
  handlers: {},
  add: function add(el, event, handler) {
    el && el.addEventListener(event, handler);
    this.handlers[handler] = el;
  },
  remove: function remove(event, handler) {
    var el = this.handlers[handler];
    if (!el) return;
    el.removeEventListener(event, handler);
    delete this.handlers[handler];
  }
};
//# sourceMappingURL=domEvent.js.map