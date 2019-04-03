'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.BreadcrumbItemProps = exports.BreadcrumbProps = undefined;

var _Breadcrumb = require('./Breadcrumb');

Object.defineProperty(exports, 'BreadcrumbProps', {
  enumerable: true,
  get: function get() {
    return _Breadcrumb.BreadcrumbProps;
  }
});

var _BreadcrumbItem = require('./BreadcrumbItem');

Object.defineProperty(exports, 'BreadcrumbItemProps', {
  enumerable: true,
  get: function get() {
    return _BreadcrumbItem.BreadcrumbItemProps;
  }
});

var _Breadcrumb2 = _interopRequireDefault(_Breadcrumb);

var _BreadcrumbItem2 = _interopRequireDefault(_BreadcrumbItem);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_Breadcrumb2.default.Item = _BreadcrumbItem2.default;
exports.default = _Breadcrumb2.default;
//# sourceMappingURL=index.js.map