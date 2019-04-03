'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _interface = require('./interface');

Object.keys(_interface).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _interface[key];
    }
  });
});

var _Table = require('./Table');

var _Table2 = _interopRequireDefault(_Table);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * @author chenyanhua
 * @version 3.4.1
 */
exports.default = _Table2.default;
//# sourceMappingURL=index.js.map