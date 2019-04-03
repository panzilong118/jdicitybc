'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _App = require('../../../../AppConfig/App');

var _App2 = _interopRequireDefault(_App);

var _ReleasePriceAndStockConfig = require('../Container/ReleasePriceAndStockConfig');

var _ReleasePriceAndStockConfig2 = _interopRequireDefault(_ReleasePriceAndStockConfig);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var routes = [{
  component: _App2.default,
  exact: false,
  routes: [{ path: '/item-shop-view/configs/components-react/ReleasePriceAndStock/v1.0.1', exact: false, component: _ReleasePriceAndStockConfig2.default }]
}];

exports.default = routes;
module.exports = exports['default'];
//# sourceMappingURL=router.js.map