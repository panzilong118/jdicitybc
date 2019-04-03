'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = undefined;

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

var _class;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactRouter = require('react-router');

var _reactRouterConfig = require('react-router-config');

var _App = require('jdcloudecc/components/AppConfig/App');

var _App2 = _interopRequireDefault(_App);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var App1 = (0, _reactRouter.withRouter)(_class = function (_Component) {
    (0, _inherits3.default)(App1, _Component);

    function App1(props, context) {
        (0, _classCallCheck3.default)(this, App1);
        return (0, _possibleConstructorReturn3.default)(this, (App1.__proto__ || (0, _getPrototypeOf2.default)(App1)).call(this, props, context));
    }

    (0, _createClass3.default)(App1, [{
        key: 'render',
        value: function render() {
            var route = this.props.route;

            return _react2.default.createElement(_App2.default, { route: route });
        }
    }]);
    return App1;
}(_react.Component)) || _class;

exports.default = App1;
module.exports = exports['default'];
//# sourceMappingURL=App.js.map