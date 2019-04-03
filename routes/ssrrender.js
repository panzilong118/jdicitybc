'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _regenerator = require('babel-runtime/regenerator');

var _regenerator2 = _interopRequireDefault(_regenerator);

var _extends2 = require('babel-runtime/helpers/extends');

var _extends3 = _interopRequireDefault(_extends2);

var _assign = require('babel-runtime/core-js/object/assign');

var _assign2 = _interopRequireDefault(_assign);

var _asyncToGenerator2 = require('babel-runtime/helpers/asyncToGenerator');

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _server = require('react-dom/server');

var _server2 = _interopRequireDefault(_server);

var _path = require('path');

var _path2 = _interopRequireDefault(_path);

var _createMemoryHistory = require('history/createMemoryHistory');

var _createMemoryHistory2 = _interopRequireDefault(_createMemoryHistory);

var _reactRedux = require('react-redux');

var _reactLoadable = require('react-loadable');

var _reactLoadable2 = _interopRequireDefault(_reactLoadable);

var _webpack = require('react-loadable/webpack');

var _reactRouter = require('react-router');

var _reactRouterRedux = require('react-router-redux');

var _reactRouterConfig = require('react-router-config');

var _redial = require('redial');

var _serializeJavascript = require('serialize-javascript');

var _serializeJavascript2 = _interopRequireDefault(_serializeJavascript);

var _asyncMatchRoutes = require('./asyncMatchRoutes');

var _asyncMatchRoutes2 = _interopRequireDefault(_asyncMatchRoutes);

var _ReduxAsyncConnect = require('./ReduxAsyncConnect');

var _ReduxAsyncConnect2 = _interopRequireDefault(_ReduxAsyncConnect);

var _getChunks = require('../helpers/getChunks');

var _getChunks2 = _interopRequireDefault(_getChunks);

var _ApiClient = require('../apiClient/ApiClient');

var _ApiClient2 = _interopRequireDefault(_ApiClient);

var _create = require('../redux/create');

var _create2 = _interopRequireDefault(_create);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function () {
  var _ref = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee(req, res, template, routes) {
    var reducer = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : {};
    var data = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : {};
    var config = arguments[6];

    var micro_service_name, client, providers, history, store, render, _ref2, components, match, params, modules, context, component, content, locationState, bundles, assets, serverData;

    return _regenerator2.default.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            render = function render() {
              //const script = "window.__data="+serialize(store.getState()); //TODO
              var assets = webpackIsomorphicTools.assets();
              res.render(template, (0, _extends3.default)({ css: assets.styles, js: assets.javascript }, data));
            };

            micro_service_name = config.micro_service_name.replace("b2b-", "");

            (0, _assign2.default)(data, { _b2b_static_server_: config._b2b_static_server_ + "/" + micro_service_name + "/" });
            __DEVELOPMENT__ && webpackIsomorphicTools.refresh();
            client = new _ApiClient2.default(config, req, res);
            providers = (0, _extends3.default)({}, client);
            //const client = new ApiClient(req,res); //TODO

            history = (0, _createMemoryHistory2.default)({ initialEntries: [req.originalUrl] });
            store = (0, _create2.default)({ history: history, data: data, helpers: providers, reducer: reducer });

            if (!__DISABLE_SSR__) {
              _context.next = 10;
              break;
            }

            return _context.abrupt('return', render());

          case 10:
            _context.prev = 10;
            _context.next = 13;
            return (0, _asyncMatchRoutes2.default)(routes, req.baseUrl + req.path);

          case 13:
            _ref2 = _context.sent;
            components = _ref2.components;
            match = _ref2.match;
            params = _ref2.params;
            _context.next = 19;
            return (0, _redial.trigger)('fetch', components, (0, _extends3.default)({}, providers, {
              store: store,
              match: match,
              params: params,
              history: history,
              location: history.location
            }));

          case 19:
            modules = [];
            context = {};
            component = _react2.default.createElement(
              _reactLoadable2.default.Capture,
              { report: function report(moduleName) {
                  return modules.push(moduleName);
                } },
              _react2.default.createElement(
                _reactRedux.Provider,
                (0, _extends3.default)({ store: store }, providers),
                _react2.default.createElement(
                  _reactRouterRedux.ConnectedRouter,
                  { history: history },
                  _react2.default.createElement(
                    _reactRouter.StaticRouter,
                    { location: req.originalUrl, context: context },
                    _react2.default.createElement(
                      _ReduxAsyncConnect2.default,
                      { routes: routes, store: store, helpers: providers },
                      (0, _reactRouterConfig.renderRoutes)(routes)
                    )
                  )
                )
              )
            );
            content = _server2.default.renderToString(component);

            if (!context.url) {
              _context.next = 25;
              break;
            }

            return _context.abrupt('return', res.redirect(301, context.url));

          case 25:
            locationState = store.getState().router.location;

            if (!(req.originalUrl !== locationState.pathname + locationState.search)) {
              _context.next = 28;
              break;
            }

            return _context.abrupt('return', res.redirect(301, locationState.pathname));

          case 28:
            bundles = (0, _webpack.getBundles)((0, _getChunks2.default)(), modules);

            console.log("------------", modules, bundles);
            assets = webpackIsomorphicTools.assets();
            serverData = "window.__data=" + (0, _serializeJavascript2.default)(store.getState());

            console.log('&&&&&&&&&&&&&&&&&&&&&&', { micro_service_name: micro_service_name });
            res.render(template, (0, _extends3.default)({ css: assets.styles, js: assets.javascript, content: content, serverData: serverData, mode: __DEVELOPMENT__, micro_service_name: micro_service_name }, data));

            _context.next = 41;
            break;

          case 36:
            _context.prev = 36;
            _context.t0 = _context['catch'](10);

            console.error('MOUNT ERROR:', _context.t0);
            res.status(500);
            render();

          case 41:
          case 'end':
            return _context.stop();
        }
      }
    }, _callee, this, [[10, 36]]);
  }));

  return function (_x, _x2, _x3, _x4) {
    return _ref.apply(this, arguments);
  };
}();

module.exports = exports['default'];
//# sourceMappingURL=ssrrender.js.map