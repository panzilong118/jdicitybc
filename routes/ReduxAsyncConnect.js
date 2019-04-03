'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _regenerator = require('babel-runtime/regenerator');

var _regenerator2 = _interopRequireDefault(_regenerator);

var _extends2 = require('babel-runtime/helpers/extends');

var _extends3 = _interopRequireDefault(_extends2);

var _asyncToGenerator2 = require('babel-runtime/helpers/asyncToGenerator');

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

var _getPrototypeOf = require('babel-runtime/core-js/object/get-prototype-of');

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require('babel-runtime/helpers/createClass');

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = require('babel-runtime/helpers/possibleConstructorReturn');

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = require('babel-runtime/helpers/inherits');

var _inherits3 = _interopRequireDefault(_inherits2);

var _class, _class2, _temp2;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _reactRouter = require('react-router');

var _redial = require('redial');

var _nprogress = require('nprogress');

var _nprogress2 = _interopRequireDefault(_nprogress);

var _asyncMatchRoutes = require('./asyncMatchRoutes');

var _asyncMatchRoutes2 = _interopRequireDefault(_asyncMatchRoutes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var ReduxAsyncConnect = (0, _reactRouter.withRouter)(_class = (_temp2 = _class2 = function (_Component) {
  (0, _inherits3.default)(ReduxAsyncConnect, _Component);

  function ReduxAsyncConnect() {
    var _ref;

    var _temp, _this, _ret;

    (0, _classCallCheck3.default)(this, ReduxAsyncConnect);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, (_ref = ReduxAsyncConnect.__proto__ || (0, _getPrototypeOf2.default)(ReduxAsyncConnect)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
      previousLocation: null
    }, _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
  }

  (0, _createClass3.default)(ReduxAsyncConnect, [{
    key: 'componentWillMount',
    value: function componentWillMount() {
      _nprogress2.default.configure({ trickleSpeed: 200 });
    }
  }, {
    key: 'componentWillReceiveProps',
    value: function () {
      var _ref2 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee(nextProps) {
        var _props, history, location, routes, store, helpers, navigated, _ref3, components, match, params;

        return _regenerator2.default.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _props = this.props, history = _props.history, location = _props.location, routes = _props.routes, store = _props.store, helpers = _props.helpers;
                navigated = nextProps.location !== location;

                if (!navigated) {
                  _context.next = 18;
                  break;
                }

                // save the location so we can render the old screen
                _nprogress2.default.start();
                this.setState({ previousLocation: location });

                // load data while the old screen remains
                _context.next = 7;
                return (0, _asyncMatchRoutes2.default)(routes, nextProps.location.pathname);

              case 7:
                _ref3 = _context.sent;
                components = _ref3.components;
                match = _ref3.match;
                params = _ref3.params;
                _context.next = 13;
                return (0, _redial.trigger)('fetch', components, (0, _extends3.default)({}, helpers, {
                  store: store,
                  match: match,
                  params: params,
                  history: history,
                  location: nextProps.location
                }));

              case 13:
                if (!__CLIENT__) {
                  _context.next = 16;
                  break;
                }

                _context.next = 16;
                return (0, _redial.trigger)('defer', components, (0, _extends3.default)({}, helpers, {
                  store: store,
                  match: match,
                  history: history,
                  location: nextProps.location
                }));

              case 16:

                // clear previousLocation so the next screen renders
                this.setState({ previousLocation: null });
                _nprogress2.default.done();

              case 18:
              case 'end':
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function componentWillReceiveProps(_x) {
        return _ref2.apply(this, arguments);
      }

      return componentWillReceiveProps;
    }()
  }, {
    key: 'render',
    value: function render() {
      var _props2 = this.props,
          children = _props2.children,
          location = _props2.location;
      var previousLocation = this.state.previousLocation;

      // use a controlled <Route> to trick all descendants into
      // rendering the old location

      return _react2.default.createElement(_reactRouter.Route, { location: previousLocation || location, render: function render() {
          return children;
        } });
    }
  }]);
  return ReduxAsyncConnect;
}(_react.Component), _class2.propTypes = {
  children: _propTypes2.default.node.isRequired,
  history: _propTypes2.default.objectOf(_propTypes2.default.any).isRequired,
  location: _propTypes2.default.objectOf(_propTypes2.default.any).isRequired
}, _temp2)) || _class;

exports.default = ReduxAsyncConnect;
module.exports = exports['default'];
//# sourceMappingURL=ReduxAsyncConnect.js.map