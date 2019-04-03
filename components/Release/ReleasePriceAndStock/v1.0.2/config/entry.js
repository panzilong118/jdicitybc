'use strict';

var _regenerator = require('babel-runtime/regenerator');

var _regenerator2 = _interopRequireDefault(_regenerator);

var _asyncToGenerator2 = require('babel-runtime/helpers/asyncToGenerator');

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

var _extends2 = require('babel-runtime/helpers/extends');

var _extends3 = _interopRequireDefault(_extends2);

require('babel-polyfill');

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactDom = require('react-dom');

var _reactDom2 = _interopRequireDefault(_reactDom);

var _reactRouterRedux = require('react-router-redux');

var _reactRouterConfig = require('react-router-config');

var _redial = require('redial');

var _createBrowserHistory = require('history/createBrowserHistory');

var _createBrowserHistory2 = _interopRequireDefault(_createBrowserHistory);

var _reactLoadable = require('react-loadable');

var _reactLoadable2 = _interopRequireDefault(_reactLoadable);

var _reactHotLoader = require('react-hot-loader');

var _reduxPersist = require('redux-persist');

var _reactRedux = require('react-redux');

var _localforage = require('localforage');

var _localforage2 = _interopRequireDefault(_localforage);

var _create = require('redux/create');

var _ApiClient = require('../../../../../../../src/helpers/ApiClient');

var _ApiClient2 = _interopRequireDefault(_ApiClient);

var _asyncMatchRoutes = require('../../../../../../../src/routes/asyncMatchRoutes');

var _asyncMatchRoutes2 = _interopRequireDefault(_asyncMatchRoutes);

var _ReduxAsyncConnect = require('../../../../../../../src/routes/ReduxAsyncConnect');

var _ReduxAsyncConnect2 = _interopRequireDefault(_ReduxAsyncConnect);

var _router = require('./route/router');

var _router2 = _interopRequireDefault(_router);

var _reducer = require('./Container/reducer');

var _reducer2 = _interopRequireDefault(_reducer);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var persistConfig = {
    key: 'primary',
    storage: _localforage2.default,
    whitelist: ['test']
};

var dest = document.getElementById('content');

var client = new _ApiClient2.default();
var providers = (0, _extends3.default)({}, client);

(0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee2() {
    var storedData, history, data, store, hydrate, devToolsDest, DevTools;
    return _regenerator2.default.wrap(function _callee2$(_context2) {
        while (1) {
            switch (_context2.prev = _context2.next) {
                case 0:
                    _context2.next = 2;
                    return (0, _reduxPersist.getStoredState)(persistConfig);

                case 2:
                    storedData = _context2.sent;
                    history = (0, _createBrowserHistory2.default)();
                    data = (0, _extends3.default)({}, storedData, window.__data);
                    store = (0, _create.createStore)({
                        history: history,
                        data: data,
                        helpers: providers,
                        persistConfig: persistConfig,
                        reducer: _reducer2.default
                    });

                    hydrate = function () {
                        var _ref2 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee(_routes) {
                            var _ref3, components, match, params, triggerLocals;

                            return _regenerator2.default.wrap(function _callee$(_context) {
                                while (1) {
                                    switch (_context.prev = _context.next) {
                                        case 0:
                                            _context.next = 2;
                                            return (0, _asyncMatchRoutes2.default)(_routes, history.location.pathname);

                                        case 2:
                                            _ref3 = _context.sent;
                                            components = _ref3.components;
                                            match = _ref3.match;
                                            params = _ref3.params;
                                            triggerLocals = (0, _extends3.default)({}, providers, {
                                                store: store,
                                                match: match,
                                                params: params,
                                                history: history,
                                                location: history.location
                                            });
                                            _context.next = 9;
                                            return (0, _redial.trigger)('fetch', components, triggerLocals);

                                        case 9:
                                            _context.next = 11;
                                            return (0, _redial.trigger)('defer', components, triggerLocals);

                                        case 11:
                                            _reactDom2.default.hydrate(_react2.default.createElement(
                                                _reactHotLoader.AppContainer,
                                                null,
                                                _react2.default.createElement(
                                                    _reactRedux.Provider,
                                                    (0, _extends3.default)({ store: store }, providers),
                                                    _react2.default.createElement(
                                                        _reactRouterRedux.ConnectedRouter,
                                                        { history: history },
                                                        _react2.default.createElement(
                                                            _ReduxAsyncConnect2.default,
                                                            { routes: _routes, store: store, helpers: providers },
                                                            (0, _reactRouterConfig.renderRoutes)(_routes)
                                                        )
                                                    )
                                                )
                                            ), dest);

                                        case 12:
                                        case 'end':
                                            return _context.stop();
                                    }
                                }
                            }, _callee, undefined);
                        }));

                        return function hydrate(_x) {
                            return _ref2.apply(this, arguments);
                        };
                    }();

                    _context2.next = 9;
                    return _reactLoadable2.default.preloadReady();

                case 9:
                    _context2.next = 11;
                    return hydrate(_router2.default);

                case 11:

                    if (module.hot) {
                        //TODO
                        module.hot.accept('./route/router', function () {
                            var nextRoutes = require('./route/router');
                            hydrate(nextRoutes).catch(function (err) {
                                console.error('Error on routes reload:', err);
                            });
                        });
                    }

                    if (process.env.NODE_ENV !== 'production') {
                        window.React = _react2.default; // enable debugger

                        if (!dest || !dest.firstChild || !dest.firstChild.attributes || !dest.firstChild.attributes['data-reactroot']) {
                            console.error('Server-side React render was discarded.\n' + 'Make sure that your initial render does not contain any client-side code.');
                        }
                    }
                    if (process.env.NODE_ENV == 'production') {
                        __webpack_public_path__ = window.__data._b2b_static_server_;
                    }

                    if (__DEVTOOLS__ && !window.devToolsExtension) {
                        devToolsDest = document.createElement('div');

                        window.document.body.insertBefore(devToolsDest, null);
                        DevTools = require('../../../../../../../src/helpers/DevTools/DevTools');
                        //const renderMethod = !!module.hot ? ReactDOM.render : ReactDOM.hydrate

                        _reactDom2.default.hydrate(_react2.default.createElement(
                            _reactRedux.Provider,
                            { store: store },
                            _react2.default.createElement(DevTools, null)
                        ), devToolsDest);
                    }

                case 15:
                case 'end':
                    return _context2.stop();
            }
        }
    }, _callee2, undefined);
}))();
//# sourceMappingURL=entry.js.map