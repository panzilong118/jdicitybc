'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.flatRoutes = flatRoutes;

var _lodash = require('lodash');

var _lodash2 = _interopRequireDefault(_lodash);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function flatWrap(routesArr) {
  var result = [];
  function flat(routes) {
    routes.forEach(function (item) {
      if (item.routes) {
        result.push(item);
        flat(item.routes);
      } else {
        result.push(item);
      }
    });
  }
  flat(routesArr);
  return result;
} // 为了react-route渲染将所有的routes都放在最外层的routes属性下面
/* 例： [{
  component:f,
  path:undefined,
  label: "数据集成",
  routes:[
    {component: ƒ, path: "/itgr/overview", label: "数据集成概览"},
    {component: ƒ, path: "/itgr/origin/itgr-offline", label: "数据源", routes:Array(4)}
  ]
}] => [{
  component:f,
  path:undefined,
  label: "数据集成",
  routes:[
    {component: ƒ, path: "/itgr/overview", label: "数据集成概览"},
    {component: ƒ, path: "/itgr/origin/itgr-offline", label: "数据源"},
    {component: ƒ, path: "/itgr/origin/itgr-offline/add", label: "添加离线同步数据源"},
    ...
  ]
}] */
function flatRoutes(routes) {
  var Croutes = _lodash2.default.cloneDeep(routes);
  Croutes.forEach(function (item) {
    if (item.routes) {
      // eslint-disable-next-line
      item.routes = flatWrap(item.routes);
    }
  });
  return Croutes;
}
//# sourceMappingURL=flatRoutes.js.map