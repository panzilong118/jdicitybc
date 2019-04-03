'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _defineProperty2 = require('babel-runtime/helpers/defineProperty');

var _defineProperty3 = _interopRequireDefault(_defineProperty2);

var _keys = require('babel-runtime/core-js/object/keys');

var _keys2 = _interopRequireDefault(_keys);

var _slicedToArray2 = require('babel-runtime/helpers/slicedToArray');

var _slicedToArray3 = _interopRequireDefault(_slicedToArray2);

var _entries = require('babel-runtime/core-js/object/entries');

var _entries2 = _interopRequireDefault(_entries);

var _extends3 = require('babel-runtime/helpers/extends');

var _extends4 = _interopRequireDefault(_extends3);

exports.inject = inject;
exports.attachReducers = attachReducers;
exports.getStore = getStore;
exports.default = createStore;

var _lodash = require('lodash');

var _lodash2 = _interopRequireDefault(_lodash);

var _redux = require('redux');

var _reactRouterRedux = require('react-router-redux');

var _reduxPersist = require('redux-persist');

var _clientMiddleware = require('./middleware/clientMiddleware');

var _clientMiddleware2 = _interopRequireDefault(_clientMiddleware);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

(function () {
  var enterModule = require('react-hot-loader').enterModule;

  enterModule && enterModule(module);
})();

var store;
function createReducers(asyncReducers) {
  return (0, _extends4.default)({
    router: _reactRouterRedux.routerReducer
  }, asyncReducers);
}
function combine(reducers, persistConfig) {
  if (persistConfig) {
    return (0, _reduxPersist.persistCombineReducers)(persistConfig, reducers);
  }
  return (0, _redux.combineReducers)(reducers);
}

function inject(store, reducers, persistConfig) {
  (0, _entries2.default)(reducers).forEach(function (_ref) {
    var _ref2 = (0, _slicedToArray3.default)(_ref, 2),
        name = _ref2[0],
        reducer = _ref2[1];

    if (store.asyncReducers[name]) return;
    store.asyncReducers[name] = reducer.__esModule ? reducer.default : reducer;
  });

  store.replaceReducer(combine(createReducers(store.asyncReducers), persistConfig));
}
function attachReducers(reducers) {}
function getStore() {
  return store;
}

function getNoopReducers(reducers, data) {
  if (!data) return {};
  return (0, _keys2.default)(data).reduce(function (prev, next) {
    return reducers[next] ? prev : (0, _extends4.default)({}, prev, (0, _defineProperty3.default)({}, next, function () {
      var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      return state;
    }));
  }, {});
}

function createStore(_ref3) {
  var history = _ref3.history,
      data = _ref3.data,
      helpers = _ref3.helpers,
      persistConfig = _ref3.persistConfig,
      reducer = _ref3.reducer;

  var middleware = [(0, _clientMiddleware2.default)(helpers), (0, _reactRouterRedux.routerMiddleware)(history)];

  if (__CLIENT__ && __DEVELOPMENT__) {
    var logger = require('redux-logger').createLogger({
      collapsed: true
    });
    middleware.push(logger.__esModule ? logger.default : logger);
  }

  var enhancers = [_redux.applyMiddleware.apply(undefined, middleware)];

  if (__CLIENT__ && __DEVTOOLS__) {
    var _require = require('redux-devtools'),
        persistState = _require.persistState;

    var DevTools = require('../helpers/DevTools/DevTools');

    Array.prototype.push.apply(enhancers, [window.devToolsExtension ? window.devToolsExtension() : DevTools.instrument(), persistState(window.location.href.match(/[?&]debug_session=([^&]+)\b/))]);
  }

  var finalCreateStore = _redux.compose.apply(undefined, enhancers)(_redux.createStore);
  var reducers = createReducers();

  var noopReducers = getNoopReducers(reducers, data);
  var asyncReducers = (0, _extends4.default)({}, noopReducers, reducers, reducer);
  store = finalCreateStore(combine(asyncReducers, persistConfig), data);
  store.asyncReducers = asyncReducers;
  store.inject = _lodash2.default.partial(inject, store, _lodash2.default, persistConfig);

  if (persistConfig) {
    var persistoid = (0, _reduxPersist.createPersistoid)(persistConfig);
    store.subscribe(function () {
      persistoid.update(store.getState());
    });
    store.dispatch({ type: _reduxPersist.REGISTER });
  }

  // if (__DEVELOPMENT__ && module.hot) {
  //   module.hot.accept('./reducer', () => {
  //     let reducer = require('./reducer');
  //     reducer = combine((reducer.__esModule ? reducer.default : reducer)(store.asyncReducers), persistConfig);
  //     store.replaceReducer(reducer);
  //   });
  // }

  return store;
}
;

(function () {
  var reactHotLoader = require('react-hot-loader').default;

  var leaveModule = require('react-hot-loader').leaveModule;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(store, 'store', '../../src/redux/create.js');
  reactHotLoader.register(createReducers, 'createReducers', '../../src/redux/create.js');
  reactHotLoader.register(combine, 'combine', '../../src/redux/create.js');
  reactHotLoader.register(inject, 'inject', '../../src/redux/create.js');
  reactHotLoader.register(attachReducers, 'attachReducers', '../../src/redux/create.js');
  reactHotLoader.register(getStore, 'getStore', '../../src/redux/create.js');
  reactHotLoader.register(getNoopReducers, 'getNoopReducers', '../../src/redux/create.js');
  reactHotLoader.register(createStore, 'createStore', '../../src/redux/create.js');
  leaveModule(module);
})();

;
//# sourceMappingURL=create.js.map