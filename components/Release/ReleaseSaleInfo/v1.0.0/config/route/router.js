'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _App = require('../../../../AppConfig/App');

var _App2 = _interopRequireDefault(_App);

var _ReleaseSaleInfoConfig = require('../Container/ReleaseSaleInfoConfig');

var _ReleaseSaleInfoConfig2 = _interopRequireDefault(_ReleaseSaleInfoConfig);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var routes = [{
  component: _App2.default,
  exact: false,
  routes: [{ path: '/item-shop-view/configs/components-react/ReleaseSaleInfo/v1.0.0', exact: false, component: _ReleaseSaleInfoConfig2.default }]
}];

exports.default = routes;
module.exports = exports['default'];
//# sourceMappingURL=router.js.map